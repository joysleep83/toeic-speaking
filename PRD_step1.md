# PRD Step 1 — 토익 스피킹 문제 출제

## 개요

OpenRouter API를 활용하여 실제 토익 스피킹 시험 형식(Part 1~6)에 맞는 문제를 자동 생성하는 기능을 구현한다.

---

## 목표

- 사용자가 앱에 접속하면 토익 스피킹 파트별 문제를 즉시 제공한다.
- AI 모델이 문제 지문, 지시문, 준비 시간/답변 시간을 함께 생성한다.
- 메인 모델 장애 시 서브 모델로 자동 전환(Fallback)하여 서비스 연속성을 보장한다.

---

## 사용 모델

| 구분 | 모델 ID |
|------|---------|
| 메인 | `google/gemma-4-31b-it:free` |
| 서브 (Fallback) | `google/gemma-4-26b-a4b-it:free` |

**Fallback 조건:** 메인 모델이 5초 이내 응답하지 않거나 에러(4xx/5xx)를 반환할 경우 자동으로 서브 모델로 전환한다.

---

## 토익 스피킹 파트 구성

| Part | 유형 | 준비 시간 | 답변 시간 |
|------|------|-----------|-----------|
| Part 1 | 사진 묘사 | 30초 | 45초 |
| Part 2 | 질문에 답하기 | 3초 | 15초/30초 |
| Part 3 | 정보를 사용하여 질문에 답하기 | 30초 | 15초/30초 |
| Part 4 | 제안/의견 제시 | 45초 | 60초 |
| Part 5 | 정보 제공 | 45초 | 60초 |
| Part 6 | 의견 제시 | 45초 | 60초 |

---

## 기능 요구사항

### 1. 파트 선택
- 사용자는 풀고 싶은 파트(Part 1~6)를 선택할 수 있다.
- 랜덤 출제 모드를 지원한다(전체 파트 중 임의 선택).

### 2. 문제 생성 (AI)
- OpenRouter API를 통해 선택된 파트에 맞는 문제를 생성한다.
- 생성 프롬프트에는 다음 정보를 포함한다:
  - 파트 번호 및 유형 설명
  - 실제 시험과 유사한 난이도 및 주제 요청
  - 출력 형식(JSON): `{ "part": 1, "instruction": "...", "question": "...", "prep_time": 30, "answer_time": 45 }`

### 3. 타이머
- 준비 시간과 답변 시간을 화면에 카운트다운으로 표시한다.
- 준비 시간 종료 시 자동으로 녹음 단계(Step 2)로 전환한다.

### 4. Fallback 처리
```
1. 메인 모델(gemma-4-31b-it)로 API 요청
2. 응답 성공 → 문제 표시
3. 응답 실패(timeout / 에러) → 서브 모델(gemma-4-26b-a4b-it)로 재요청
4. 서브 모델도 실패 → 사용자에게 오류 메시지 표시 후 재시도 안내
```

---

## API 요청 예시

```javascript
const MODELS = {
  main: "google/gemma-4-31b-it:free",
  fallback: "google/gemma-4-26b-a4b-it:free"
};

async function generateQuestion(part, modelKey = "main") {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: MODELS[modelKey],
      messages: [
        {
          role: "user",
          content: `토익 스피킹 Part ${part} 문제를 1개 생성해줘. 
          JSON 형식으로만 응답해: 
          { "part": ${part}, "instruction": "지시문", "question": "문제 내용", "prep_time": 준비시간(초), "answer_time": 답변시간(초) }`
        }
      ]
    })
  });

  if (!response.ok && modelKey === "main") {
    return generateQuestion(part, "fallback"); // Fallback 전환
  }

  return response.json();
}
```

---

## UI 요구사항

- 파트 선택 화면: 카드 형태로 Part 1~6 표시, 각 파트 설명 포함
- 문제 표시 화면:
  - 상단: 파트 번호 및 유형
  - 중앙: 문제 지문 / 지시문
  - 하단: 준비 타이머 (카운트다운)
- 로딩 중 스피너 표시 (AI 생성 대기 시)
- 모델 전환 시 사용자에게 조용히 처리 (UI 변화 없음)

---

## 비기능 요구사항

- 문제 생성 응답 시간 목표: 5초 이내
- Fallback 전환은 사용자에게 노출되지 않아야 한다
- 모바일 반응형 UI 지원

---

## 다음 단계 연결

Step 1 완료(준비 타이머 종료) 시 자동으로 **Step 2 (답변 녹음 및 분석)** 화면으로 전환하며, 생성된 문제 데이터(JSON)를 Step 2로 전달한다.

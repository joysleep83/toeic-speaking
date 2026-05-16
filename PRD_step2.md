# PRD Step 2 — 답변 녹음 및 AI 분석/피드백

## 개요

사용자가 마이크로 녹음한 토익 스피킹 답변을 Web Speech API로 텍스트 변환하고, OpenRouter API를 통해 발음·억양·문법·내용 기준으로 점수를 예측하며 모범 답안과 개선 피드백을 생성한다.

---

## 목표

- 사용자 음성을 실시간으로 텍스트 변환(STT)한다.
- AI가 토익 스피킹 채점 기준에 맞게 점수를 예측하고 상세 피드백을 제공한다.
- 메인 모델 장애 시 서브 모델로 자동 전환(Fallback)하여 서비스 연속성을 보장한다.

---

## 사용 모델

| 구분 | 모델 ID |
|------|---------|
| 메인 | `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free` |
| 서브 (Fallback) | `nvidia/nemotron-nano-12b-v2-vl:free` |

**Fallback 조건:** 메인 모델이 8초 이내 응답하지 않거나 에러(4xx/5xx)를 반환할 경우 자동으로 서브 모델로 전환한다.

---

## 기능 요구사항

### 1. 음성 녹음 (Web Speech API)
- 브라우저 내장 `Web Speech API (SpeechRecognition)`를 사용하여 실시간 STT 수행
- 지원 언어: 영어(`en-US`)
- 답변 시간 타이머와 녹음이 동시에 진행
- 타이머 종료 시 자동으로 녹음 중단 및 분석 단계로 전환
- 사용자가 수동으로 녹음 중단 가능(Stop 버튼)

```javascript
const recognition = new window.SpeechRecognition();
recognition.lang = "en-US";
recognition.continuous = true;
recognition.interimResults = true;

recognition.onresult = (event) => {
  const transcript = Array.from(event.results)
    .map(r => r[0].transcript)
    .join(" ");
  setTranscript(transcript); // 실시간 화면 표시
};
```

### 2. AI 채점 및 피드백 생성
Step 1에서 전달받은 문제 데이터와 STT로 변환된 사용자 답변 텍스트를 함께 AI에 전달하여 채점한다.

**채점 기준 (토익 스피킹 공식 기준 반영):**

| 항목 | 설명 | 배점 |
|------|------|------|
| 발음 (Pronunciation) | 개별 단어 발음 정확도 | 0~3점 |
| 억양·강세 (Intonation) | 자연스러운 억양 및 강세 | 0~3점 |
| 문법 (Grammar) | 문장 구조 및 시제 정확도 | 0~3점 |
| 내용 (Content) | 질문 적합성, 내용 완성도 | 0~3점 |
| 유창성 (Fluency) | 말의 흐름, 속도, 일시정지 | 0~3점 |

**예측 점수:** 합산 후 토익 스피킹 공식 등급(120~200점)으로 환산

### 3. 모범 답안 제공
- AI가 같은 문제에 대한 고득점 모범 답안을 함께 생성
- 사용자 답변과 모범 답안을 나란히 비교 표시

### 4. Fallback 처리
```
1. 메인 모델(nemotron-3-nano-omni-30b)로 분석 요청
2. 응답 성공 → 피드백 화면 표시
3. 응답 실패(timeout / 에러) → 서브 모델(nemotron-nano-12b-v2-vl)로 재요청
4. 서브 모델도 실패 → 오류 메시지 표시 및 재분석 버튼 제공
```

---

## API 요청 예시

```javascript
const MODELS = {
  main: "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
  fallback: "nvidia/nemotron-nano-12b-v2-vl:free"
};

async function analyzeAnswer(question, userAnswer, modelKey = "main") {
  const prompt = `
    [토익 스피킹 채점 요청]
    파트: ${question.part}
    문제 지시문: ${question.instruction}
    문제 내용: ${question.question}
    사용자 답변: "${userAnswer}"

    아래 JSON 형식으로만 응답해:
    {
      "scores": {
        "pronunciation": 0~3,
        "intonation": 0~3,
        "grammar": 0~3,
        "content": 0~3,
        "fluency": 0~3
      },
      "total_score": 120~200,
      "grade": "AL/IH/IM/IL/NH",
      "feedback": {
        "pronunciation": "피드백 내용",
        "intonation": "피드백 내용",
        "grammar": "피드백 내용",
        "content": "피드백 내용",
        "fluency": "피드백 내용"
      },
      "sample_answer": "모범 답안 텍스트",
      "overall_comment": "종합 코멘트"
    }
  `;

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: MODELS[modelKey],
      messages: [{ role: "user", content: prompt }]
    })
  });

  if (!response.ok && modelKey === "main") {
    return analyzeAnswer(question, userAnswer, "fallback"); // Fallback 전환
  }

  return response.json();
}
```

---

## UI 요구사항

### 녹음 화면
- 마이크 아이콘 + 녹음 중 애니메이션(파형 시각화)
- 실시간 STT 텍스트 표시 (중간 결과 포함)
- 답변 시간 카운트다운 타이머
- Stop 버튼 (수동 종료)

### 피드백 화면
- **점수 카드:** 항목별 레이더 차트 + 환산 점수/등급 표시
- **사용자 답변:** STT 변환된 텍스트
- **모범 답안:** AI 생성 고득점 답안
- **항목별 피드백:** 아코디언 형태로 펼쳐서 확인
- **종합 코멘트:** 상단에 요약 표시
- **저장 버튼:** Step 3(히스토리)으로 결과 저장

---

## 비기능 요구사항

- STT 정확도: Web Speech API 기준 (인터넷 연결 필요)
- AI 분석 응답 시간 목표: 8초 이내
- Fallback 전환은 사용자에게 노출되지 않아야 한다
- Web Speech API 미지원 브라우저에서는 텍스트 직접 입력 폴백 UI 제공

---

## 브라우저 지원

| 브라우저 | Web Speech API 지원 |
|----------|-------------------|
| Chrome | ✅ 완전 지원 |
| Edge | ✅ 지원 |
| Safari | ⚠️ 부분 지원 |
| Firefox | ❌ 미지원 → 텍스트 입력 폴백 |

---

## 다음 단계 연결

피드백 확인 후 "저장" 버튼 클릭 시 다음 데이터를 **Step 3 (학습 히스토리)**에 저장한다:

```json
{
  "date": "2025-01-01T12:00:00Z",
  "part": 1,
  "question": "문제 내용",
  "user_answer": "사용자 답변",
  "scores": { ... },
  "total_score": 160,
  "grade": "IH",
  "sample_answer": "모범 답안",
  "feedback": { ... }
}
```

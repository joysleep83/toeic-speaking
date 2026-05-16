# PRD Step 3 — 학습 히스토리 및 결과 관리

## 개요

로그인 없이 브라우저 로컬 스토리지(localStorage)를 활용하여 사용자의 학습 기록(문제, 점수, 피드백)을 저장하고, 점수 변화 및 취약 파트를 시각화하여 학습 히스토리를 관리한다.

---

## 목표

- 별도 회원가입/로그인 없이 즉시 사용 가능한 로컬 히스토리 관리
- 학습 기록을 누적하여 점수 변화 추이와 취약 영역을 한눈에 파악
- 오답/저점 문제를 다시 풀 수 있는 복습 기능 제공

---

## 저장 방식

| 항목 | 내용 |
|------|------|
| 저장소 | 브라우저 `localStorage` |
| 로그인 | 불필요 |
| 데이터 유지 | 브라우저 데이터 삭제 전까지 영구 보존 |
| 최대 저장 용량 | 약 5MB (localStorage 기본 제한) |
| 저장 키 | `toeic_speaking_history` |

---

## 데이터 구조

```json
{
  "toeic_speaking_history": [
    {
      "id": "uuid-v4",
      "date": "2025-01-01T12:00:00Z",
      "part": 1,
      "question": {
        "instruction": "지시문",
        "content": "문제 내용"
      },
      "user_answer": "사용자 답변 텍스트",
      "scores": {
        "pronunciation": 2,
        "intonation": 2,
        "grammar": 3,
        "content": 2,
        "fluency": 1
      },
      "total_score": 150,
      "grade": "IM",
      "sample_answer": "모범 답안 텍스트",
      "feedback": {
        "pronunciation": "피드백",
        "intonation": "피드백",
        "grammar": "피드백",
        "content": "피드백",
        "fluency": "피드백"
      },
      "overall_comment": "종합 코멘트"
    }
  ]
}
```

---

## 기능 요구사항

### 1. 자동 저장
- Step 2 피드백 화면에서 "저장" 버튼 클릭 시 localStorage에 기록 추가
- 저장 성공 시 토스트 메시지로 확인 ("학습 기록이 저장되었습니다")
- 저장 데이터는 `id(uuid)`, `date`, `part`, `question`, `scores`, `total_score`, `grade`, `feedback`, `sample_answer`를 포함

### 2. 히스토리 목록
- 날짜 최신순으로 학습 기록 리스트 표시
- 각 항목에 파트, 날짜, 환산 점수, 등급 표시
- 항목 클릭 시 해당 피드백 상세 보기로 이동
- 파트별 필터링 기능 (Part 1~6 또는 전체)

### 3. 점수 변화 시각화
- **전체 점수 추이:** 날짜별 환산 점수(120~200) 선형 그래프
- **파트별 평균 점수:** 막대 그래프로 파트별 평균 환산 점수 비교
- **항목별 역량 차트:** 발음·억양·문법·내용·유창성 레이더 차트 (전체 평균 기준)

### 4. 취약 파트 / 취약 영역 분석
- 파트별 평균 점수 계산 후 가장 낮은 파트를 "취약 파트"로 강조 표시
- 항목별 평균 점수 중 최저 항목을 "집중 개선 영역"으로 표시
- 취약 파트 문제를 바로 풀 수 있는 "다시 도전" 버튼 제공

### 5. 복습 기능
- 히스토리 목록에서 특정 기록 선택 후 "다시 풀기" 버튼 클릭 시 동일 파트 문제 출제(Step 1로 이동)
- 저점(환산 점수 140 이하) 기록에 ⚠️ 아이콘 표시

### 6. 데이터 관리
- **전체 삭제:** 확인 모달 후 localStorage 전체 초기화
- **개별 삭제:** 각 기록 우측 삭제 버튼
- **내보내기(Export):** 전체 히스토리를 JSON 파일로 다운로드

---

## localStorage 핵심 로직

```javascript
const STORAGE_KEY = "toeic_speaking_history";

// 저장
function saveRecord(record) {
  const history = getHistory();
  history.unshift({ id: crypto.randomUUID(), ...record });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

// 불러오기
function getHistory() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

// 개별 삭제
function deleteRecord(id) {
  const history = getHistory().filter(r => r.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

// 전체 삭제
function clearHistory() {
  localStorage.removeItem(STORAGE_KEY);
}

// JSON 내보내기
function exportHistory() {
  const data = JSON.stringify(getHistory(), null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `toeic_history_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
}
```

---

## UI 요구사항

### 대시보드 (메인 히스토리 화면)
- **상단 요약 카드 3개:**
  - 총 학습 횟수
  - 최근 환산 점수
  - 전체 평균 점수
- **점수 추이 그래프:** 날짜-점수 선형 차트
- **역량 레이더 차트:** 5개 항목 평균
- **취약 파트 배너:** 가장 낮은 파트 강조 + "다시 도전" CTA 버튼

### 히스토리 목록
- 카드 형태 리스트 (날짜, 파트, 점수, 등급)
- 파트 필터 탭 (전체 / Part 1~6)
- 저점 기록 ⚠️ 아이콘 표시
- 각 카드: 상세 보기 / 다시 풀기 / 삭제 버튼

### 상세 보기
- Step 2 피드백 화면과 동일한 레이아웃으로 재표시
- 상단에 학습 날짜 표시

---

## 비기능 요구사항

- localStorage 용량 초과(5MB) 시 가장 오래된 기록부터 자동 삭제 후 경고 표시
- 데이터는 암호화하지 않음 (민감 정보 없음)
- 모바일 반응형 UI 지원
- 차트 라이브러리: Chart.js 또는 Recharts 사용

---

## 등급 기준 (참고)

| 등급 | 환산 점수 범위 |
|------|--------------|
| AL (Advanced Low) | 190~200 |
| IH (Intermediate High) | 160~180 |
| IM (Intermediate Mid) | 130~150 |
| IL (Intermediate Low) | 110~120 |
| NH (Novice High) | ~100 |

---

## 전체 플로우 요약

```
[Step 1] 문제 출제 (AI 생성)
    ↓ 준비 타이머 종료
[Step 2] 답변 녹음 → STT 변환 → AI 채점/피드백
    ↓ "저장" 클릭
[Step 3] localStorage 저장 → 히스토리/통계 시각화
    ↓ "다시 도전" 클릭
[Step 1] 취약 파트 문제 재출제
```

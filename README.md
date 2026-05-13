# 토익 스피킹 연습 앱

OpenRouter AI를 활용한 TOEIC Speaking 연습 웹 앱입니다.

## 기능

- **Part 1~6** 파트별 또는 랜덤 문제 출제 (AI 생성)
- **준비 타이머** + **답변 타이머** 자동 전환
- **실시간 STT** (Web Speech API) 음성 인식
- **AI 채점** — 발음·억양·문법·내용·유창성 5개 영역
- **학습 히스토리** — 점수 추이, 역량 레이더, 취약 파트 분석
- **학습 과정** — 8개 모듈 21개 레슨

## 빠른 시작

```bash
npm install
cp .env.example .env
# .env에 OPENROUTER_API_KEY 입력
npm run dev
```

브라우저에서 `http://localhost:3000` 접속

## 환경 변수

| 변수명 | 설명 |
|--------|------|
| `OPENROUTER_API_KEY` | [OpenRouter](https://openrouter.ai) API 키 |

## 기술 스택

- **백엔드**: Node.js + Express
- **프론트엔드**: Vanilla JS + CSS Custom Properties
- **AI**: OpenRouter API (무료 모델)
- **차트**: Chart.js

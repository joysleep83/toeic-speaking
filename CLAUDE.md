# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TOEIC Speaking practice application (3-step flow). Step 1 generates questions via OpenRouter API; Step 2 records answers; Step 3 evaluates them. Currently Step 1 is implemented.

## Commands

```bash
npm install       # first-time setup
npm run dev       # development (auto-restarts on file change, Node 18+)
npm start         # production
```

Server runs at `http://localhost:3000`. Static files are served from `public/`.

## Architecture

```
server.js          Express server — API proxy for OpenRouter, serves public/
public/
  index.html       8 screens (select → loading → question → record → analyzing → feedback → history → history-detail)
  style.css        CSS custom properties, no framework
  app.js           Screen manager, timers, STT, AI calls, Chart.js, localStorage
```

**Full flow:**
1. Part 선택 → `/api/generate-question` → 준비 타이머 (Step 1)
2. 준비 타이머 종료 → 녹음 화면 + STT + 답변 타이머 → `/api/analyze-answer` (Step 2)
3. 피드백 화면 → 저장 버튼 → `localStorage[toeic_speaking_history]` (Step 3)
4. 히스토리 → 점수 추이(line) + 역량 레이더 + 취약 파트/영역 분석 + 목록 + 상세 보기

## OpenRouter / Model config

| 용도 | Main | Fallback | Timeout |
|------|------|----------|---------|
| 문제 생성 (Step 1) | `google/gemma-4-31b-it:free` | `google/gemma-4-26b-a4b-it:free` | 5s |
| AI 채점 (Step 2) | `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free` | `nvidia/nemotron-nano-12b-v2-vl:free` | 8s |
| 이미지 생성 (Part 1) | `black-forest-labs/flux-schnell:free` | 텍스트 설명으로 폴백 | 30s |

- 429 Rate Limit은 클라이언트에 직접 반환 — 무료 티어에서 빠른 연속 호출 시 발생
- 무료 모델 한도 초과 시 약 1분 대기 후 재시도

## localStorage

- Key: `toeic_speaking_history`
- 구조: `{ id(uuid), date, part, question:{instruction,content}, user_answer, scores, total_score, grade, sample_answer, feedback, overall_comment }`
- Step 3 히스토리 화면에서 조회/삭제/JSON 내보내기 가능

## Environment

- API key in `.env` as `OPENROUTER_API_KEY` (git-ignored)
- `.env.example` shows the required variable name
- Platform: Windows 11 / PowerShell; Bash tool also available

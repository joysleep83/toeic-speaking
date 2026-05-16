// ── TOEIC Speaking 문법 강의 데이터 ─────────────────────────────
// 8개 모듈 · 24개 레슨

const GRAMMAR_MODULES = [

  // ══════════════════════════════════════════════════════════
  // Module G1 — 현재시제 완전 정복
  // ══════════════════════════════════════════════════════════
  {
    id: 'g1', icon: '⏱️',
    title: '현재시제 완전 정복',
    subtitle: '단순현재 · 현재진행 · 현재완료',
    color: '#4F46E5',
    lessons: [
      {
        id: 'g1l1', title: '현재 단순 vs 현재 진행 — 언제 쓸까?', duration: '8분',
        content: [
          { type: 'text', text: '현재 단순과 현재 진행은 가장 흔히 혼용되는 시제입니다. TOEIC Speaking Part 1~2에서 특히 구분이 중요합니다.' },
          { type: 'heading', text: '핵심 차이' },
          { type: 'table',
            headers: ['시제', '형태', '사용 상황', '예문'],
            rows: [
              ['현재 단순', 'do / does', '습관·반복·일반적 사실', '"I work in a bank."'],
              ['현재 진행', 'am/is/are + -ing', '지금 이 순간 진행 중', '"She is typing on her laptop."'],
            ]
          },
          { type: 'heading', text: 'TOEIC Part 1 — 사진 묘사 시제 선택법' },
          { type: 'tip', icon: '🎯', text: '사진 속 동작은 반드시 현재 진행형! 사진은 "지금 이 순간"을 찍은 것이기 때문입니다.' },
          { type: 'example', label: 'Part 1 올바른 시제', items: [
            { en: '✅ "A man is sitting at a desk." (현재 진행)', ko: '사진 속 동작 → 진행형' },
            { en: '❌ "A man sits at a desk." (현재 단순)', ko: '덜 자연스럽고 감점 위험' },
            { en: '✅ "There is a book on the table." (현재 단순)', ko: '상태·위치 묘사 → 단순 사용' },
          ]},
          { type: 'heading', text: '진행형을 쓸 수 없는 상태 동사' },
          { type: 'example', label: '상태 동사 목록', items: [
            { en: '❌ "She is having a car." → ✅ "She has a car."', ko: 'have (소유) — 진행형 불가' },
            { en: '❌ "I am knowing the answer." → ✅ "I know the answer."', ko: 'know / understand / believe — 진행형 불가' },
            { en: '❌ "He is liking coffee." → ✅ "He likes coffee."', ko: 'like / love / hate / want — 진행형 불가' },
          ]},
          { type: 'tip', icon: '💡', text: 'Part 1 사진 묘사 시작 공식: "There is/are + 명사 + 현재분사(-ing)" — 예: "There is a woman standing near the window."' }
        ]
      },
      {
        id: 'g1l2', title: '현재완료 — have + p.p. 언제 쓸까?', duration: '8분',
        content: [
          { type: 'text', text: '현재완료는 과거에 일어난 일이 현재까지 영향을 미칠 때 사용합니다. 한국어에는 대응 표현이 없어 혼동하기 쉽습니다.' },
          { type: 'heading', text: '현재완료 4가지 용법' },
          { type: 'table',
            headers: ['용법', '핵심 의미', '예문'],
            rows: [
              ['경험', '~한 적이 있다', '"I have visited New York twice."'],
              ['완료', '막 ~했다', '"She has just finished the report."'],
              ['계속', '쭉 ~해왔다', '"I have worked here for 5 years."'],
              ['결과', '~해서 지금 ~한 상태', '"He has lost his key." (그래서 지금 없음)'],
            ]
          },
          { type: 'heading', text: '자주 쓰는 현재완료 신호어' },
          { type: 'example', label: '신호어 정리', items: [
            { en: 'already, yet, just, recently, lately', ko: '완료·최근 완료 표현에 사용' },
            { en: 'for + 기간: "for 5 years / for a long time"', ko: '계속 용법 — 반드시 현재완료' },
            { en: 'since + 시점: "since 2020 / since I was a child"', ko: '계속 용법 — 반드시 현재완료' },
            { en: 'ever, never, before, once, twice', ko: '경험 용법에 사용' },
          ]},
          { type: 'heading', text: '과거 단순 vs 현재완료 — 핵심 구분' },
          { type: 'example', label: '비교', items: [
            { en: '"I worked here for 5 years." (과거 단순)', ko: '→ 이미 그만뒀다는 뉘앙스' },
            { en: '"I have worked here for 5 years." (현재완료)', ko: '→ 지금도 일하고 있다' },
            { en: '"Did you eat lunch?" (과거 단순)', ko: '→ 특정 과거 시점 질문' },
            { en: '"Have you eaten lunch?" (현재완료)', ko: '→ 지금 현재 상태 질문' },
          ]},
          { type: 'tip', icon: '⚠️', text: '"Yesterday, last year, ago" 등 명확한 과거 시점 표현과 함께는 현재완료 불가! → 반드시 과거 단순 사용. ❌ "I have visited Seoul yesterday." → ✅ "I visited Seoul yesterday."' }
        ]
      },
      {
        id: 'g1l3', title: '미래 표현 — will vs be going to', duration: '7분',
        content: [
          { type: 'text', text: '영어의 미래 표현은 will, be going to, 현재 진행형 등 다양합니다. TOEIC Speaking Part 4~6에서 해결책·계획을 말할 때 필수입니다.' },
          { type: 'heading', text: '미래 표현 비교' },
          { type: 'table',
            headers: ['표현', '뉘앙스', 'TOEIC 예문'],
            rows: [
              ['will', '즉흥적 결정·의지·예측', '"I will help you with that."'],
              ['be going to', '이미 계획된 일·예정', '"We are going to launch a new product."'],
              ['현재 진행', '가까운 미래 확정 계획', '"I am meeting the client tomorrow."'],
              ['will be + -ing', '미래 특정 시점 진행', '"I will be working on the report by then."'],
            ]
          },
          { type: 'heading', text: 'Part 4/5/6 — 상황별 미래 표현 선택' },
          { type: 'structure', steps: [
            { num: '즉각 제안', title: 'will → 즉흥적 해결책', desc: '"I will contact the manager right away."\n"This will solve the problem immediately."' },
            { num: '계획 설명', title: 'be going to → 기존 계획', desc: '"We are going to reschedule the meeting."\n"The team is going to address this issue."' },
            { num: '가능성 표현', title: 'will + 조동사 → 부드러운 예측', desc: '"This could help improve the situation."\n"This may take a few days to resolve."' },
          ]},
          { type: 'example', label: '미래 표현 오류 교정', items: [
            { en: '❌ "If I will go..." → ✅ "If I go..." (if절에서 will 금지)', ko: '조건절에서는 현재형으로 미래 표현' },
            { en: '❌ "I will to call you." → ✅ "I will call you."', ko: 'will 뒤에는 반드시 동사 원형' },
          ]},
          { type: 'tip', icon: '💡', text: 'Part 4 해결책 제시 시 "will"은 직접적이고 확신에 찬 느낌, "could/might"는 부드러운 제안 느낌을 줍니다. 상황에 맞게 선택하세요.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module G2 — 과거시제와 완료시제
  // ══════════════════════════════════════════════════════════
  {
    id: 'g2', icon: '🕐',
    title: '과거시제와 완료시제',
    subtitle: '과거 단순 · 과거 진행 · 과거완료',
    color: '#6366F1',
    lessons: [
      {
        id: 'g2l1', title: '과거 단순 vs 과거 진행', duration: '7분',
        content: [
          { type: 'text', text: '과거 단순은 완료된 사실, 과거 진행은 과거에 진행 중이었던 동작을 나타냅니다. Part 2 경험 답변과 Part 5/6 예시 제시에 자주 사용됩니다.' },
          { type: 'heading', text: '핵심 구분' },
          { type: 'table',
            headers: ['시제', '형태', '의미', '예문'],
            rows: [
              ['과거 단순', 'did / -ed', '완료된 과거 사실·사건', '"I visited the client last week."'],
              ['과거 진행', 'was/were + -ing', '과거 특정 시점에 진행 중', '"I was working when she called."'],
              ['과거완료', 'had + p.p.', '과거보다 더 이전 사건', '"I had already left when he arrived."'],
            ]
          },
          { type: 'heading', text: 'Part 2/5/6 — 경험 예시 답변 구조' },
          { type: 'example', label: '자연스러운 경험 답변', items: [
            { en: '"I prefer remote work. Last year, I worked from home for six months and I was very productive."', ko: '의견(현재) + 경험(과거 단순) + 상태(과거 진행)' },
            { en: '"When I was studying abroad, I met many interesting people."', ko: '과거 진행(배경) + 과거 단순(사건)' },
          ]},
          { type: 'heading', text: '과거 단순 불규칙 동사 — TOEIC 필수 50선' },
          { type: 'example', label: '고빈도 불규칙 동사', items: [
            { en: 'go → went, come → came, take → took, make → made', ko: '이동·제작 관련 핵심 동사' },
            { en: 'give → gave, get → got, put → put, set → set', ko: '수여·설정 관련 동사' },
            { en: 'begin → began, choose → chose, find → found, hold → held', ko: '시작·선택·발견 동사' },
            { en: 'send → sent, spend → spent, buy → bought, bring → brought', ko: '업무 관련 핵심 동사' },
          ]},
          { type: 'tip', icon: '⚠️', text: '과거 부사(yesterday, last week, ago, in 2020)가 있으면 반드시 과거 단순! ❌ "I have visited Seoul last year." → ✅ "I visited Seoul last year."' }
        ]
      },
      {
        id: 'g2l2', title: '과거완료 — had + p.p. 완전 정리', duration: '7분',
        content: [
          { type: 'text', text: '과거완료는 과거의 두 사건 중 더 먼저 일어난 사건을 표현합니다. 고득점(IH/AL) 답변에서 사건의 순서를 명확히 할 때 사용하면 효과적입니다.' },
          { type: 'heading', text: '과거완료 사용 상황' },
          { type: 'structure', steps: [
            { num: '①', title: '두 과거 사건의 선후 관계', desc: '"By the time I arrived, the meeting had already started."\n(도착 이전에 회의가 시작됨)' },
            { num: '②', title: '"before / after / when / by the time"과 함께', desc: '"She had finished the report before the deadline."\n"After he had explained the situation, we found a solution."' },
            { num: '③', title: '경험 (현재완료와 구분)', desc: '"I had never tried sushi before I visited Japan."\n(일본 방문 이전까지의 경험)' },
          ]},
          { type: 'example', label: '과거완료 활용 예시', items: [
            { en: '"I had studied English for 10 years before I took the TOEIC test."', ko: '시험 이전의 학습 기간' },
            { en: '"When the manager arrived, the team had already solved the problem."', ko: '도착 전에 이미 해결됨' },
            { en: '"She realized that she had forgotten to bring the documents."', ko: '깨달았을 때 이미 잊어버린 상태' },
          ]},
          { type: 'tip', icon: '💡', text: '일상 말하기에서는 과거완료 대신 과거 단순 + "before/after"로 대체하기도 합니다. 완벽한 이해 전에는 "before + 과거 단순"을 사용하면 안전합니다.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module G3 — 명사·관사·수일치
  // ══════════════════════════════════════════════════════════
  {
    id: 'g3', icon: '📝',
    title: '명사·관사·수일치',
    subtitle: '가산/불가산 · a/an/the · 주어-동사 일치',
    color: '#10B981',
    lessons: [
      {
        id: 'g3l1', title: '가산명사 vs 불가산명사 — 단복수 완전 정리', duration: '8분',
        content: [
          { type: 'text', text: '명사를 가산과 불가산으로 구분하는 것은 관사 사용과 수일치에 직결됩니다. 한국어에는 이 구분이 없어 특히 주의해야 합니다.' },
          { type: 'heading', text: '가산명사 vs 불가산명사' },
          { type: 'table',
            headers: ['구분', '특징', 'TOEIC 빈출 단어'],
            rows: [
              ['가산명사', '하나/여러 개 셀 수 있음. a/an 사용 가능', 'meeting, report, idea, problem, job'],
              ['불가산명사', '셀 수 없음. a/an 불가. 항상 단수 취급', 'information, advice, news, equipment, furniture'],
              ['집합명사', '단수 형태지만 구성원 전체를 의미', 'staff, team, family, audience, committee'],
            ]
          },
          { type: 'heading', text: '자주 틀리는 불가산명사 — TOEIC 필수' },
          { type: 'example', label: '불가산명사 오류 교정', items: [
            { en: '❌ "an information" → ✅ "information" 또는 "a piece of information"', ko: 'information — 불가산' },
            { en: '❌ "advices" → ✅ "advice"', ko: 'advice — 불가산, 복수형 없음' },
            { en: '❌ "a news" → ✅ "news" 또는 "a piece of news"', ko: 'news — 불가산 (s로 끝나도 단수 취급)' },
            { en: '❌ "equipments" → ✅ "equipment"', ko: 'equipment — 불가산, 복수형 없음' },
            { en: '❌ "furnitures" → ✅ "furniture"', ko: 'furniture — 불가산' },
          ]},
          { type: 'heading', text: '수량 표현 — 가산 vs 불가산' },
          { type: 'table',
            headers: ['구분', '사용 표현'],
            rows: [
              ['가산명사에만', 'many, a few, few, a number of, several'],
              ['불가산명사에만', 'much, a little, little, a great deal of'],
              ['둘 다 가능', 'some, any, a lot of, plenty of, no'],
            ]
          },
          { type: 'tip', icon: '⚠️', text: '"a number of + 복수명사 → 복수 동사" vs "the number of + 복수명사 → 단수 동사" — 이 차이는 TOEIC에 자주 출제됩니다!' }
        ]
      },
      {
        id: 'g3l2', title: '관사 — a / an / the 완벽 정리', duration: '8분',
        content: [
          { type: 'text', text: '관사는 영어에서 가장 흔히 틀리는 문법 항목입니다. TOEIC Speaking의 모든 파트에서 관사 오류는 감점 요인이 됩니다.' },
          { type: 'heading', text: 'a / an / the 사용 원칙' },
          { type: 'table',
            headers: ['관사', '사용 규칙', '예문'],
            rows: [
              ['a', '단수 가산명사 + 처음 언급', '"A woman is standing near the window."'],
              ['an', '모음 소리로 시작하는 단어 앞', '"an office / an hour / an MBA"'],
              ['the', '앞서 언급됨 / 특정한 것 / 유일한 것', '"The woman is wearing a blue shirt."'],
              ['없음(무관사)', '복수 가산명사·불가산명사 일반 언급', '"People enjoy traveling." / "Water is important."'],
            ]
          },
          { type: 'heading', text: 'Part 1 사진 묘사 — 관사 패턴' },
          { type: 'example', label: '처음 등장 vs 재등장', items: [
            { en: 'A man is sitting at a desk. (처음 등장)', ko: 'a → 처음 언급' },
            { en: 'The man appears to be working on a laptop. (재등장)', ko: 'the → 앞에서 언급된 man' },
            { en: 'There are several people in the background.', ko: '복수 일반 → 관사 없음' },
          ]},
          { type: 'heading', text: '관사 오류 교정' },
          { type: 'example', label: '자주 틀리는 표현', items: [
            { en: '❌ "The life is short." → ✅ "Life is short."', ko: '추상적 개념에는 the 불필요' },
            { en: '❌ "I go to the school." → ✅ "I go to school."', ko: '제도적 장소(school, work, church)는 무관사' },
            { en: '❌ "She plays a piano." → ✅ "She plays the piano."', ko: '악기 앞에는 the 사용' },
            { en: '❌ "I have headache." → ✅ "I have a headache."', ko: '신체 증상에는 a 사용' },
          ]},
          { type: 'tip', icon: '💡', text: '빠르게 말할 때 관사를 빠뜨리기 쉽습니다. 단수 가산명사 앞에는 반드시 a/an 또는 the를 확인하세요. 관사 하나 없어도 감점입니다.' }
        ]
      },
      {
        id: 'g3l3', title: '주어-동사 수일치 — 헷갈리는 규칙 총정리', duration: '8분',
        content: [
          { type: 'text', text: '수일치(Subject-Verb Agreement)는 주어가 단수면 동사도 단수, 복수면 복수여야 합니다. 말하면서 자동으로 적용되도록 반복 연습이 필요합니다.' },
          { type: 'heading', text: '기본 규칙' },
          { type: 'table',
            headers: ['주어', '동사 형태', '예문'],
            rows: [
              ['I / You / We / They', '원형', '"They work in Seoul."'],
              ['He / She / It / 단수명사', '원형 + -s/-es', '"She works in Seoul."'],
              ['There is + 단수', 'is', '"There is a book on the desk."'],
              ['There are + 복수', 'are', '"There are books on the desk."'],
            ]
          },
          { type: 'heading', text: '헷갈리는 수일치 규칙 — 고급편' },
          { type: 'structure', steps: [
            { num: '①', title: 'A as well as B → A에 일치', desc: '"The manager, as well as the employees, is responsible."' },
            { num: '②', title: 'Either A or B / Neither A nor B → B에 일치', desc: '"Either the students or the teacher is wrong."' },
            { num: '③', title: '집합명사 → 단수', desc: '"The team has decided..." / "The company is planning..."' },
            { num: '④', title: '"One of + 복수명사" → 단수 동사', desc: '"One of the students is absent." (students가 복수여도 주어는 one)' },
            { num: '⑤', title: '"The number of" → 단수 / "A number of" → 복수', desc: '"The number of employees is increasing."\n"A number of employees are absent."' },
          ]},
          { type: 'example', label: '수일치 오류 교정', items: [
            { en: '❌ "There is many people." → ✅ "There are many people."', ko: 'many people → 복수 → are' },
            { en: '❌ "A lot of information are needed." → ✅ "A lot of information is needed."', ko: 'information → 불가산 → 단수' },
            { en: '❌ "The quality of the products are high." → ✅ "The quality... is high."', ko: '주어는 quality (단수), products 아님' },
          ]},
          { type: 'tip', icon: '⚠️', text: 'Part 1에서 "There is/are"를 자주 사용합니다. 사람·사물이 여러 개면 반드시 "There are"를 쓰세요.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module G4 — 전치사 마스터
  // ══════════════════════════════════════════════════════════
  {
    id: 'g4', icon: '🔗',
    title: '전치사 마스터',
    subtitle: '위치 · 시간 · 관용 표현',
    color: '#F59E0B',
    lessons: [
      {
        id: 'g4l1', title: '위치·방향 전치사 — Part 1 사진 묘사 핵심', duration: '8분',
        content: [
          { type: 'text', text: '위치 전치사는 Part 1 사진 묘사에서 가장 많이 사용합니다. 사람·사물의 위치를 정확하게 묘사하는 것이 고득점의 핵심입니다.' },
          { type: 'heading', text: '위치 전치사 완전 정리' },
          { type: 'table',
            headers: ['전치사', '의미', 'TOEIC 예문'],
            rows: [
              ['in', '~안에 (공간 내부)', '"The man is in the office."'],
              ['on', '~위에 (표면 접촉)', '"The book is on the desk."'],
              ['at', '~에 (특정 지점)', '"She is standing at the door."'],
              ['next to / beside', '~옆에', '"He is sitting next to the window."'],
              ['in front of', '~앞에', '"There is a chair in front of the desk."'],
              ['behind', '~뒤에', '"The shelf is behind the sofa."'],
              ['between', '~사이에 (둘)', '"The lamp is between the two chairs."'],
              ['among', '~사이에 (셋 이상)', '"She is standing among a group of people."'],
              ['across from', '~맞은편에', '"The store is across from the bank."'],
              ['near / close to', '~근처에', '"The woman is near the window."'],
              ['above / below', '~위/아래에 (접촉 없이)', '"The sign is above the entrance."'],
              ['along', '~을 따라', '"People are walking along the street."'],
            ]
          },
          { type: 'heading', text: 'Part 1 위치 묘사 실전 패턴' },
          { type: 'example', label: '위치 전치사 활용', items: [
            { en: '"A woman is standing at the counter."', ko: 'at → 특정 지점 (카운터 앞)' },
            { en: '"Two people are sitting across from each other."', ko: 'across from → 서로 마주 보고 앉음' },
            { en: '"Books are stacked on the shelves behind the desk."', ko: '전치사를 2개 이상 사용해 정교하게 묘사' },
          ]},
          { type: 'tip', icon: '💡', text: '"in the background / in the foreground / on the left / on the right" — 사진 묘사에서 반드시 알아야 할 위치 표현입니다.' }
        ]
      },
      {
        id: 'g4l2', title: '시간 전치사 — at / on / in / by / until', duration: '7분',
        content: [
          { type: 'text', text: '시간 전치사는 Part 3 (일정표 정보 전달)에서 특히 중요합니다. 잘못된 시간 전치사는 정보 오류로 감점됩니다.' },
          { type: 'heading', text: '시간 전치사 완전 정리' },
          { type: 'table',
            headers: ['전치사', '사용 대상', '예문'],
            rows: [
              ['at', '구체적 시각', '"The class starts at 9:00 AM."'],
              ['on', '요일·날짜·특정일', '"It is held on Monday." / "on July 5th"'],
              ['in', '월·연도·아침/오후/저녁', '"in July / in 2024 / in the morning"'],
              ['from A to B', '시작~끝', '"It runs from 6 PM to 8 PM."'],
              ['by', '~까지 (기한·완료)', '"Please register by Friday."'],
              ['until/till', '~까지 (지속)', '"The store is open until 10 PM."'],
              ['within', '~이내에', '"You will receive a reply within 3 days."'],
              ['during', '~동안 (특정 기간)', '"during the summer / during the meeting"'],
              ['for', '~동안 (기간의 길이)', '"for 3 hours / for two weeks"'],
            ]
          },
          { type: 'heading', text: '암기 공식 — at / on / in' },
          { type: 'tip', icon: '🎯', text: '시각 → at / 요일·날짜 → on / 월·연도·아침저녁 → in\n"at night"은 예외! (night은 in이 아닌 at을 사용)' },
          { type: 'example', label: 'Part 3 일정 전달 예문', items: [
            { en: '"The swimming lesson is on Monday and Wednesday from 9 to 11 AM."', ko: 'on(요일) + from A to B(시간)' },
            { en: '"Please register by this Friday."', ko: 'by → 마감 기한' },
            { en: '"The course will be held within the next two weeks."', ko: 'within → 기간 이내' },
          ]}
        ]
      },
      {
        id: 'g4l3', title: '전치사 관용 표현 — 자주 틀리는 50가지', duration: '8분',
        content: [
          { type: 'text', text: '전치사는 단어마다 고정된 짝이 있습니다. 이 관용 표현들을 통째로 외워두면 실전에서 전치사 오류를 크게 줄일 수 있습니다.' },
          { type: 'heading', text: '형용사 + 전치사 고정 표현' },
          { type: 'example', label: '형용사 + 전치사', items: [
            { en: 'interested in / good at / bad at', ko: '관심·능력 표현' },
            { en: 'afraid of / proud of / tired of', ko: '감정·태도 표현' },
            { en: 'responsible for / famous for / ready for', ko: '역할·특성 표현' },
            { en: 'different from / satisfied with / worried about', ko: '비교·만족·걱정 표현' },
          ]},
          { type: 'heading', text: '동사 + 전치사 고정 표현' },
          { type: 'example', label: '동사 + 전치사', items: [
            { en: 'depend on / rely on / focus on', ko: '의존·집중 표현' },
            { en: 'apply for / look for / wait for', ko: '지원·탐색·대기 표현' },
            { en: 'agree with / deal with / help with', ko: '동의·처리·도움 표현' },
            { en: 'arrive at (작은 곳) / arrive in (큰 도시)', ko: 'arrive 전치사 구분' },
            { en: 'consist of / result in / lead to', ko: '구성·결과 표현' },
          ]},
          { type: 'heading', text: '자주 틀리는 전치사 오류 TOP 10' },
          { type: 'example', label: '오류 교정', items: [
            { en: '❌ "interested on" → ✅ "interested in"', ko: 'interested in something' },
            { en: '❌ "depend of" → ✅ "depend on"', ko: 'depend on something' },
            { en: '❌ "good in math" → ✅ "good at math"', ko: 'good at + 능력' },
            { en: '❌ "married with" → ✅ "married to"', ko: 'be married to someone' },
            { en: '❌ "congratulations for" → ✅ "congratulations on"', ko: 'congratulations on + 성과' },
          ]},
          { type: 'tip', icon: '💡', text: '전치사 관용 표현은 통째로 외우는 것이 가장 효율적입니다. 이유를 분석하기보다 "interested in", "depend on"처럼 덩어리로 반복해서 기억하세요.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module G5 — 조동사와 조건문
  // ══════════════════════════════════════════════════════════
  {
    id: 'g5', icon: '💬',
    title: '조동사와 조건문',
    subtitle: '능력·가능·의무 / if 조건절 / 가정법',
    color: '#EF4444',
    lessons: [
      {
        id: 'g5l1', title: '조동사 — 뉘앙스 조절의 핵심', duration: '8분',
        content: [
          { type: 'text', text: '조동사(Modal Verbs)는 능력·가능성·의무·제안 등 미묘한 뉘앙스를 전달합니다. Part 4 제안, Part 5/6 의견에서 적절한 조동사 선택이 점수를 좌우합니다.' },
          { type: 'heading', text: '조동사 뉘앙스 비교표' },
          { type: 'table',
            headers: ['조동사', '주요 의미', 'TOEIC 활용 예문'],
            rows: [
              ['can', '현재 능력 / 가능', '"I can help you with that."'],
              ['could', '정중한 가능성 / 과거 능력', '"You could contact the manager for help."'],
              ['will', '강한 의지 / 미래 확실', '"This will definitely improve productivity."'],
              ['would', '정중한 의지 / 가정', '"I would suggest a different approach."'],
              ['should', '의무 / 권고', '"You should submit the form by Friday."'],
              ['must', '강한 의무 / 확실한 추론', '"Employees must follow safety rules."'],
              ['may', '허가 / 낮은 가능성', '"This may cause delays."'],
              ['might', '매우 낮은 가능성', '"It might be a good idea to call first."'],
            ]
          },
          { type: 'heading', text: 'Part 4 — 제안 강도에 따른 조동사 선택' },
          { type: 'structure', steps: [
            { num: '강함', title: 'must / have to → 강한 권고', desc: '"You must contact the hotel immediately."' },
            { num: '중간', title: 'should → 일반 권고', desc: '"You should try to reschedule the meeting."' },
            { num: '부드럽', title: 'could / might → 부드러운 제안', desc: '"You could consider reaching out to the team."' },
            { num: '정중', title: 'would → 가장 정중한 제안', desc: '"I would suggest speaking with the supervisor."' },
          ]},
          { type: 'example', label: '조동사 문법 오류 교정', items: [
            { en: '❌ "You should to go." → ✅ "You should go."', ko: '조동사 뒤에는 to 없이 동사 원형' },
            { en: '❌ "She can speaks English." → ✅ "She can speak English."', ko: '조동사 뒤 동사 원형 (speaks → speak)' },
            { en: '❌ "He will goes." → ✅ "He will go."', ko: 'will 뒤에는 반드시 동사 원형' },
          ]},
          { type: 'tip', icon: '🎯', text: '"You could..." "I would suggest..." "You might want to..." — 이 세 패턴을 Part 4 답변에서 자유롭게 사용할 수 있도록 익혀두세요.' }
        ]
      },
      {
        id: 'g5l2', title: '조건문 — if절 4가지 유형 완전 정복', duration: '8분',
        content: [
          { type: 'text', text: '조건문은 Part 4 해결책 제시와 Part 5/6 의견에서 논리적 연결을 만들 때 필수 문법입니다. 특히 1형과 2형 조건문을 완벽히 익혀두세요.' },
          { type: 'heading', text: '조건문 4가지 유형' },
          { type: 'table',
            headers: ['유형', '구조', '의미', '예문'],
            rows: [
              ['0형 (사실)', 'If + 현재, 현재', '항상 사실인 조건', '"If you practice daily, your English improves."'],
              ['1형 (실제 가능)', 'If + 현재, will', '실현 가능한 조건', '"If you contact the hotel, they will resolve it."'],
              ['2형 (가정/비현실)', 'If + 과거, would', '현재 비현실적 가정', '"If I had more time, I would study harder."'],
              ['3형 (과거 반사실)', 'If + had p.p., would have p.p.', '과거 반사실 가정', '"If I had prepared more, I would have scored higher."'],
            ]
          },
          { type: 'heading', text: 'TOEIC Speaking 파트별 조건문 활용' },
          { type: 'structure', steps: [
            { num: 'Part 4', title: '해결책 제시 — 1형 조건문', desc: '"If you contact the front desk, they will arrange another room."\n"If that doesn\'t work, you could speak with the manager."' },
            { num: 'Part 5/6', title: '논리 강화 — 2형 조건문', desc: '"If companies invested more in employee well-being, productivity would increase."\n"If I were in that situation, I would choose..."' },
          ]},
          { type: 'example', label: '조건문 오류 교정', items: [
            { en: '❌ "If I will go..." → ✅ "If I go..." (1형)', ko: 'if절에서 will 금지 — 현재형 사용' },
            { en: '❌ "If I would study harder..." → ✅ "If I studied harder..." (2형)', ko: 'if절에서 would 금지 — 과거형 사용' },
            { en: '❌ "Unless you will act quickly..." → ✅ "Unless you act quickly..."', ko: 'unless절도 if절과 동일하게 현재형' },
          ]},
          { type: 'tip', icon: '💡', text: 'TOEIC Speaking에서 가장 많이 쓰이는 조건문은 1형입니다. "If + 현재, will + 동사원형" — 이 패턴만 완벽히 익혀도 Part 4 답변이 크게 향상됩니다.' }
        ]
      },
      {
        id: 'g5l3', title: '가정법과 소망 표현 — wish / I wish / if only', duration: '7분',
        content: [
          { type: 'text', text: '가정법 표현은 현실과 반대되는 상황을 가정할 때 사용합니다. Part 5/6 의견 제시에서 "만약 ~라면"류의 논리 강화에 활용하면 고득점을 노릴 수 있습니다.' },
          { type: 'heading', text: 'I wish / If only — 소망·후회 표현' },
          { type: 'table',
            headers: ['표현', '구조', '의미', '예문'],
            rows: [
              ['I wish + 과거형', '현재 사실과 반대되는 소망', '"I wish I had more time."', '(실제로는 시간이 없음)'],
              ['I wish + had p.p.', '과거에 대한 후회', '"I wish I had studied harder."', '(실제로는 열심히 안 함)'],
              ['If only', '"I wish"보다 강한 소망/후회', '"If only I could speak English fluently!"', '(강한 소망)'],
            ]
          },
          { type: 'heading', text: 'Part 5/6 — 가정법으로 논리 강화' },
          { type: 'example', label: '가정법 활용 예시', items: [
            { en: '"If companies paid more attention to employee well-being, the overall productivity would improve significantly."', ko: '2형 가정법으로 논리 강화' },
            { en: '"Were I in that situation, I would choose a different approach."', ko: '"If I were" → "Were I" (도치 가정법 — 고급 표현)' },
            { en: '"Had the government acted sooner, the crisis could have been avoided."', ko: '"If the government had acted" → "Had the government acted" (3형 도치)' },
          ]},
          { type: 'tip', icon: '🎯', text: '도치 가정법("Were I...", "Had I...")은 고급 표현으로 IH/AL을 목표로 할 때 한 문장 정도 사용하면 매우 효과적입니다.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module G6 — 비교급·형용사·부사
  // ══════════════════════════════════════════════════════════
  {
    id: 'g6', icon: '📐',
    title: '비교급·형용사·부사',
    subtitle: '비교급·최상급 / 형용사·부사 역할 / 강조 표현',
    color: '#8B5CF6',
    lessons: [
      {
        id: 'g6l1', title: '비교급과 최상급 — 설득력 있는 의견 만들기', duration: '8분',
        content: [
          { type: 'text', text: '비교급과 최상급은 Part 2 선호도 답변과 Part 5/6 의견 제시에서 주장을 뒷받침할 때 핵심 문법입니다.' },
          { type: 'heading', text: '비교급·최상급 형태 완전 정리' },
          { type: 'table',
            headers: ['구분', '원급', '비교급', '최상급'],
            rows: [
              ['단음절', 'fast', 'faster (than)', 'the fastest'],
              ['단음절 -e로 끝남', 'large', 'larger (than)', 'the largest'],
              ['단음절 자음 중복', 'big', 'bigger (than)', 'the biggest'],
              ['2음절 -y로 끝남', 'easy', 'easier (than)', 'the easiest'],
              ['2음절 이상', 'important', 'more important (than)', 'the most important'],
              ['불규칙', 'good / bad', 'better / worse (than)', 'the best / the worst'],
              ['불규칙', 'many / much', 'more (than)', 'the most'],
            ]
          },
          { type: 'heading', text: '고급 비교 표현' },
          { type: 'example', label: 'TOEIC 고득점 비교 패턴', items: [
            { en: '"Working from home is far more efficient than commuting."', ko: '"far"로 비교급 강조' },
            { en: '"This is one of the most effective ways to improve communication."', ko: '"one of the most + 최상급 + 복수명사" 패턴' },
            { en: '"The more you practice, the better you get."', ko: '"the + 비교급, the + 비교급" 패턴' },
            { en: '"A is twice as expensive as B."', ko: '"배수사 + as + 원급 + as" 동등 비교' },
            { en: '"Remote work is not as stressful as office work."', ko: '"not as + 원급 + as" 열등 비교' },
          ]},
          { type: 'tip', icon: '💡', text: '헷갈릴 때는 "more + 형용사"를 사용하세요. 단음절 단어도 "more fast" 대신 "faster"가 정확하지만, 말하다 막히는 것보다 "more"를 사용하는 것이 낫습니다.' }
        ]
      },
      {
        id: 'g6l2', title: '형용사와 부사 — 위치와 역할', duration: '7분',
        content: [
          { type: 'text', text: '형용사는 명사를 수식하고, 부사는 동사·형용사·다른 부사를 수식합니다. 이 기본 원칙을 지키면 오류가 크게 줄어듭니다.' },
          { type: 'heading', text: '형용사 vs 부사 핵심 구분' },
          { type: 'table',
            headers: ['품사', '수식 대상', '위치', '예문'],
            rows: [
              ['형용사', '명사', '명사 앞 / be동사 뒤', '"a beautiful office" / "The office is beautiful."'],
              ['부사', '동사·형용사·부사', '동사 뒤 / 형용사·부사 앞', '"She speaks clearly." / "very important"'],
            ]
          },
          { type: 'heading', text: '형태가 같은 형용사/부사 — 혼동 주의' },
          { type: 'example', label: '혼동 쉬운 표현', items: [
            { en: '"This is a hard task." (형용사) vs "I work hard." (부사)', ko: 'hard: 형용사(어려운)/부사(열심히) — hardly는 "거의 ~않다"' },
            { en: '"I arrived late." (부사) vs "a late meeting" (형용사)', ko: 'late: 형용사(늦은)/부사(늦게) — lately는 "최근에"' },
            { en: '"She is a fast runner." (형용사) vs "She runs fast." (부사)', ko: 'fast: 형용사와 부사 형태 동일' },
          ]},
          { type: 'heading', text: '형용사/부사 오류 교정' },
          { type: 'example', label: '오류 교정', items: [
            { en: '❌ "She speaks English very good." → ✅ "She speaks English very well."', ko: 'speak는 동사 → 부사(well) 사용' },
            { en: '❌ "The report looks perfectly." → ✅ "The report looks perfect."', ko: 'look은 연결동사 → 형용사 사용' },
            { en: '❌ "He is a hardly worker." → ✅ "He is a hard worker."', ko: 'worker(명사) 수식 → 형용사(hard)' },
          ]},
          { type: 'tip', icon: '⚠️', text: '"look, sound, feel, seem, appear, taste, smell" 뒤에는 부사가 아닌 형용사를 사용합니다. "She looks beautiful." (O) / "She looks beautifully." (X)' }
        ]
      },
      {
        id: 'g6l3', title: '강조 부사 — very·quite·rather·fairly 구분', duration: '6분',
        content: [
          { type: 'text', text: '강조 부사를 다양하게 사용하면 어휘력이 풍부해 보여 고득점에 유리합니다. "very"만 반복하는 것은 어휘 빈곤 표시입니다.' },
          { type: 'heading', text: '강조 부사 강도 비교' },
          { type: 'table',
            headers: ['부사', '강도', '뉘앙스', '예문'],
            rows: [
              ['extremely', '매우 강함 (100%)', '극도의 강조', '"extremely important"'],
              ['very', '강함 (80%)', '일반적 강조', '"very effective"'],
              ['quite', '상당히 (70%)', '꽤, 상당히 (긍정)', '"quite impressive"'],
              ['fairly', '적당히 (60%)', '꽤, 상당히 (중립)', '"fairly easy"'],
              ['rather', '약간 (50%)', '다소, 약간 (부정적 뉘앙스)', '"rather difficult"'],
              ['a bit / slightly', '약간 (40%)', '조금, 약간', '"slightly different"'],
            ]
          },
          { type: 'example', label: '답변에서 강조 부사 다양하게 활용', items: [
            { en: '"This is an extremely effective way to solve the problem."', ko: '강한 강조 — 확신을 줄 때' },
            { en: '"Remote work is quite beneficial for employees."', ko: '적당한 강조 — 균형 있는 의견' },
            { en: '"The task is rather challenging, but I believe it is worth it."', ko: '"rather" — 어렵지만 극복 가능하다는 뉘앙스' },
          ]},
          { type: 'tip', icon: '💡', text: '"very very important" 같은 중복 표현보다 "absolutely essential", "critically important", "tremendously helpful" 같은 고급 어휘 조합이 훨씬 효과적입니다.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module G7 — 관계절·분사·수동태
  // ══════════════════════════════════════════════════════════
  {
    id: 'g7', icon: '🔧',
    title: '관계절·분사·수동태',
    subtitle: '관계대명사·부사 / 현재·과거분사 / be p.p.',
    color: '#06B6D4',
    lessons: [
      {
        id: 'g7l1', title: '관계대명사 — who / which / that / whose', duration: '8분',
        content: [
          { type: 'text', text: '관계절을 사용하면 두 짧은 문장을 하나로 합쳐 더 유창하고 자연스럽게 들립니다. 고득점(IH, AL) 답변의 핵심 문법입니다.' },
          { type: 'heading', text: '관계대명사 선택 기준' },
          { type: 'table',
            headers: ['선행사', '관계대명사', '예문'],
            rows: [
              ['사람', 'who / that', '"The man who is sitting at the desk..."'],
              ['사물/동물', 'which / that', '"The book which is on the table..."'],
              ['사람·사물 모두', 'that', '"Everything that I need is here."'],
              ['소유', 'whose', '"The woman whose bag is red is my colleague."'],
            ]
          },
          { type: 'heading', text: '짧은 문장 → 관계절로 업그레이드' },
          { type: 'example', label: '문장 결합 예시', items: [
            { en: '기본: "A woman is standing. She wears a blue shirt." → 고급: "A woman who is wearing a blue shirt is standing near the window."', ko: 'Part 1 사진 묘사 — 관계절로 인물 묘사' },
            { en: '기본: "There is a reason. It is important." → 고급: "There is a reason that I find particularly important."', ko: 'Part 5/6 — that으로 자연스럽게 연결' },
          ]},
          { type: 'heading', text: '관계절 생략 — 분사형 단축' },
          { type: 'example', label: '"who is / which is" 생략', items: [
            { en: '"The man (who is) sitting at the desk..."', ko: '"who is" 생략 → 현재분사(-ing)만 남김' },
            { en: '"A woman (who is) dressed in formal attire..."', ko: '"who is" 생략 → 과거분사(p.p.)만 남김' },
          ]},
          { type: 'tip', icon: '🎯', text: 'Part 1에서 "A person who is + -ing" 패턴을 반복 연습하세요. "A man who is wearing a white shirt is talking on the phone." 같은 문장이 자연스럽게 나오면 고득점입니다.' }
        ]
      },
      {
        id: 'g7l2', title: '관계부사와 분사구문', duration: '7분',
        content: [
          { type: 'text', text: '관계부사(where, when, why)와 분사구문은 두 문장을 간결하게 연결하는 고급 문법입니다. 자연스럽게 쓰면 말하기 점수가 올라갑니다.' },
          { type: 'heading', text: '관계부사' },
          { type: 'table',
            headers: ['관계부사', '선행사', '예문'],
            rows: [
              ['where', '장소', '"The city where I grew up is Seoul."'],
              ['when', '시간', '"The day when I started this job was memorable."'],
              ['why', '이유 (the reason)', '"The reason why I prefer this option is efficiency."'],
            ]
          },
          { type: 'heading', text: '분사구문 — 두 동작을 자연스럽게 연결' },
          { type: 'example', label: '분사구문 예시', items: [
            { en: '"Working remotely, I can manage my own schedule."', ko: '이유: = "Because I work remotely, ..."' },
            { en: '"Having finished the report, she went home."', ko: '완료 후 동작: 보고서를 마친 뒤 귀가' },
            { en: '"Looking at the photo, we can see a busy street."', ko: 'Part 1 사진 묘사 도입부 활용' },
          ]},
          { type: 'tip', icon: '💡', text: 'Part 5/6에서 "The reason why I believe this is..." 또는 "Considering the current situation, I think..." 같은 관계부사·분사구문을 도입부에 쓰면 세련된 답변이 됩니다.' }
        ]
      },
      {
        id: 'g7l3', title: '수동태 — be + p.p. 완전 정리', duration: '8분',
        content: [
          { type: 'text', text: '수동태는 행위자보다 행위의 결과나 대상이 중요할 때 사용합니다. 사진 묘사, 상황 설명, 사회적 사실 언급 시 매우 유용합니다.' },
          { type: 'heading', text: '수동태 시제별 형태' },
          { type: 'table',
            headers: ['시제', '형태', '예문'],
            rows: [
              ['현재', 'is/are + p.p.', '"The meeting is held every Monday."'],
              ['과거', 'was/were + p.p.', '"The report was submitted yesterday."'],
              ['현재완료', 'has/have been + p.p.', '"The meeting has been rescheduled."'],
              ['미래', 'will be + p.p.', '"The issue will be resolved soon."'],
              ['진행', 'is/are being + p.p.', '"The documents are being reviewed."'],
            ]
          },
          { type: 'heading', text: 'TOEIC Speaking 파트별 수동태 활용' },
          { type: 'example', label: '파트별 수동태', items: [
            { en: '"The meeting has been rescheduled to next Friday." (Part 4)', ko: '상황 설명 — 완료형 수동태' },
            { en: '"The photo was taken in what appears to be an office." (Part 1)', ko: '사진 특성 묘사 — 과거 수동태' },
            { en: '"Remote work is considered one of the biggest trends." (Part 5/6)', ko: '사회적 사실 — 현재 수동태' },
            { en: '"The problem is being handled by the team." (Part 4)', ko: '진행 중 상황 — 진행 수동태' },
          ]},
          { type: 'tip', icon: '⚠️', text: '수동태에서 by + 행위자는 중요한 경우에만 사용합니다. "by someone"처럼 행위자가 불명확하거나 중요하지 않으면 생략하는 것이 자연스럽습니다.' }
        ]
      },
      {
        id: 'g7l4', title: '동명사 vs 부정사 — 헷갈리지 않는 법', duration: '7분',
        content: [
          { type: 'text', text: '동명사(-ing)와 부정사(to + 동사원형)는 명사 역할을 합니다. 어떤 동사 뒤에 무엇이 오는지 알면 오류가 줄어듭니다.' },
          { type: 'heading', text: '동명사만 목적어로 취하는 동사' },
          { type: 'example', label: '동명사 동사 목록 (enjoy + -ing)', items: [
            { en: 'enjoy + -ing: "I enjoy working with people."', ko: 'enjoy — 반드시 동명사' },
            { en: 'finish + -ing: "I finished preparing the report."', ko: 'finish — 완료 동사' },
            { en: 'avoid + -ing: "I try to avoid making mistakes."', ko: 'avoid, mind, consider — 동명사' },
            { en: 'suggest + -ing: "I suggest taking a different approach."', ko: 'suggest — 동명사' },
          ]},
          { type: 'heading', text: '부정사만 목적어로 취하는 동사' },
          { type: 'example', label: '부정사 동사 목록 (want + to)', items: [
            { en: 'want / decide / plan + to: "I want to improve my English."', ko: '의지·결정·계획 동사 — 부정사' },
            { en: 'hope / wish + to: "I hope to achieve a high score."', ko: '소망 동사 — 부정사' },
            { en: 'need + to: "You need to submit the form by Friday."', ko: '필요 동사 — 부정사' },
          ]},
          { type: 'heading', text: '둘 다 가능하지만 의미가 다른 동사' },
          { type: 'table',
            headers: ['동사', '동명사 (-ing) 의미', '부정사 (to) 의미'],
            rows: [
              ['remember', '"I remember meeting her." (과거 기억)', '"Remember to call him." (앞으로 할 일)'],
              ['stop', '"I stopped smoking." (완전히 그만둠)', '"I stopped to smoke." (잠깐 멈추고 피움)'],
              ['try', '"I tried opening the window." (시도함)', '"I tried to open it." (열려고 노력함)'],
            ]
          },
          { type: 'tip', icon: '💡', text: '암기법: enjoy·finish·avoid·consider → 동명사(-ing) / want·plan·hope·decide·need → 부정사(to) 이 두 그룹을 먼저 외우면 대부분 해결됩니다.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module G8 — 접속사와 연결어
  // ══════════════════════════════════════════════════════════
  {
    id: 'g8', icon: '🔀',
    title: '접속사와 연결어',
    subtitle: '등위·종속 접속사 / 연결 부사 / 논리 구조',
    color: '#F97316',
    lessons: [
      {
        id: 'g8l1', title: '등위·종속 접속사 — 문장을 논리적으로 연결', duration: '8분',
        content: [
          { type: 'text', text: '접속사를 적절히 사용하면 답변이 논리적이고 유창하게 들립니다. 특히 Part 5/6에서 이유·양보·결과를 연결할 때 필수입니다.' },
          { type: 'heading', text: '등위 접속사 (FANBOYS)' },
          { type: 'table',
            headers: ['접속사', '의미', 'TOEIC 예문'],
            rows: [
              ['and', '그리고', '"I enjoy reading and traveling."'],
              ['but', '하지만', '"The office is small, but comfortable."'],
              ['or', '또는', '"You can call or send an email."'],
              ['so', '그래서', '"It was raining, so I stayed home."'],
              ['yet', '그러나 (격식)', '"The task is difficult, yet rewarding."'],
            ]
          },
          { type: 'heading', text: '종속 접속사 — 이유·시간·조건·양보' },
          { type: 'table',
            headers: ['종류', '접속사', '예문'],
            rows: [
              ['이유', 'because / since / as', '"I prefer it because it saves time."'],
              ['시간', 'when / while / after / before', '"While I was walking, I saw the accident."'],
              ['조건', 'if / unless', '"If you need help, please let me know."'],
              ['양보', 'although / even though / while', '"Although it is expensive, it is worth it."'],
              ['목적', 'so that / in order to', '"I practice daily so that I can improve."'],
            ]
          },
          { type: 'example', label: '상관 접속사 — 고득점 표현', items: [
            { en: '"Not only does it save time, but it also reduces costs."', ko: '"not only A but also B" — 두 장점 강조' },
            { en: '"Either you contact them directly, or I can help you send an email."', ko: '"either A or B" — 두 가지 선택' },
            { en: '"Both communication and time management are essential skills."', ko: '"both A and B" — 두 항목 동시 언급' },
          ]},
          { type: 'tip', icon: '⚠️', text: '"Because"로 문장을 시작하지 마세요. ❌ "I prefer A. Because it is better." → ✅ "I prefer A because it is better." 또는 "The reason is that it is better."' }
        ]
      },
      {
        id: 'g8l2', title: '연결 부사 — 논리 흐름을 만드는 표현들', duration: '7분',
        content: [
          { type: 'text', text: '연결 부사(Transition Words)는 문장과 문장 사이의 논리적 관계를 명확히 합니다. 다양하게 사용하면 답변이 체계적이고 전문적으로 들립니다.' },
          { type: 'heading', text: '기능별 연결 부사 정리' },
          { type: 'example', label: '연결 부사 분류', items: [
            { en: 'First, / Second, / Finally, / Lastly,', ko: '순서 나열 (이유·예시·단계 나열 시)' },
            { en: 'In addition, / Furthermore, / Moreover, / What is more,', ko: '추가 정보 (두 번째 이유 도입 시)' },
            { en: 'However, / On the other hand, / In contrast, / That said,', ko: '반론 도입 (양보·비교 시)' },
            { en: 'Therefore, / As a result, / Consequently, / Thus,', ko: '결론·결과 도입 시' },
            { en: 'For example, / For instance, / To illustrate,', ko: '예시 도입 시' },
            { en: 'In conclusion, / To sum up, / In summary,', ko: '마무리 문장 도입 시' },
          ]},
          { type: 'heading', text: 'Part 5/6 답변 구조에 연결 부사 적용' },
          { type: 'structure', steps: [
            { num: '도입', title: '입장 표명', desc: '"I believe that remote work is beneficial for employees."' },
            { num: '이유 1', title: 'First, + 이유', desc: '"First, it saves commuting time and reduces stress."' },
            { num: '이유 2', title: 'Furthermore, + 추가 이유', desc: '"Furthermore, it allows employees to create a more focused work environment."' },
            { num: '반론 인정', title: 'That said, / However, + 양보', desc: '"That said, some employees may struggle with motivation at home."' },
            { num: '결론', title: 'Overall, / In conclusion, + 마무리', desc: '"Overall, the benefits of remote work far outweigh the drawbacks."' },
          ]},
          { type: 'tip', icon: '🎯', text: 'Part 5/6에서 "First... Furthermore... However... Overall..." 이 4단계 구조만 익혀도 논리적인 답변이 됩니다.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module G9 — 고득점 문법 패턴
  // ══════════════════════════════════════════════════════════
  {
    id: 'g9', icon: '✨',
    title: '고득점 문법 패턴',
    subtitle: '강조 구문 / 명사절 / IH·AL 고급 표현',
    color: '#EC4899',
    lessons: [
      {
        id: 'g9l1', title: '명사절 — that / what / whether 절', duration: '7분',
        content: [
          { type: 'text', text: '명사절은 문장 안에서 주어·목적어·보어 역할을 하는 절입니다. 이를 자유롭게 사용하면 문장 구조가 다양해지고 고득점을 노릴 수 있습니다.' },
          { type: 'heading', text: '명사절의 종류와 역할' },
          { type: 'table',
            headers: ['접속사', '역할', '예문'],
            rows: [
              ['that', '주어·목적어·보어', '"I believe that communication is key."'],
              ['what', '주어·목적어', '"What I find interesting is the variety of options."'],
              ['whether / if', '목적어 (간접의문문)', '"I wonder whether this approach will work."'],
              ['wh- 의문사', '목적어 (간접의문문)', '"I don\'t know why the meeting was cancelled."'],
            ]
          },
          { type: 'example', label: '명사절 활용 예시', items: [
            { en: '"What I believe is that hard work always pays off."', ko: '"What I ~ is that ..." — 주어부 강조' },
            { en: '"It is clear that communication is essential in the workplace."', ko: '"It is + 형용사 + that ..." — 가주어 구문' },
            { en: '"The fact that remote work is becoming more common suggests..."', ko: '"The fact that ..." — 동격 명사절' },
          ]},
          { type: 'tip', icon: '💡', text: '"I think that...", "I believe that...", "It is important that..." — 이 세 패턴을 답변 도입부에 자유롭게 사용하면 자연스럽고 논리적인 답변이 됩니다.' }
        ]
      },
      {
        id: 'g9l2', title: '강조 구문과 도치 — IH·AL 고급 문법', duration: '8분',
        content: [
          { type: 'text', text: '강조 구문과 도치 표현은 원어민이 자주 사용하는 고급 문법입니다. 한두 문장에 적절히 사용하면 IH/AL 수준의 답변으로 격상됩니다.' },
          { type: 'heading', text: '① 강조 구문 — It is ~ that ...' },
          { type: 'example', label: '강조 구문 예시', items: [
            { en: '"It is communication skills that employers value the most."', ko: '"It is ~ that ..." — communication skills를 강조' },
            { en: '"It was the pandemic that changed the way we work."', ko: '과거 사건의 핵심 원인 강조' },
            { en: '"What I find most important is maintaining a work-life balance."', ko: '"What I find ~" — 자신의 핵심 의견 강조' },
          ]},
          { type: 'heading', text: '② 부사구 도치 — Not only, Never, Rarely' },
          { type: 'example', label: '도치 표현', items: [
            { en: '"Not only does remote work save time, but it also reduces stress."', ko: '"Not only + 조동사 + 주어 + 동사" — 도치 구문' },
            { en: '"Rarely do we have such a great opportunity to improve."', ko: '"Rarely / Seldom / Never + 조동사 + 주어" — 도치' },
          ]},
          { type: 'heading', text: '③ 분사구문으로 유창하게 연결' },
          { type: 'example', label: '분사구문 고급 활용', items: [
            { en: '"Having worked in various industries, I can say that communication is the most important skill."', ko: '경험 + 결론 연결' },
            { en: '"Given the rapid development of technology, it is essential to adapt quickly."', ko: '"Given (that) ..." — 전제 제시' },
            { en: '"All things considered, I believe remote work is the future."', ko: '"All things considered" — 마무리 표현' },
          ]},
          { type: 'tip', icon: '🏆', text: '강조 구문은 한 답변에 1~2개만 사용하세요. 억지로 끼워 넣으려다 문법 오류가 나면 오히려 감점입니다. 자동으로 나올 때까지 충분히 연습한 뒤 실전에서 사용하세요.' }
        ]
      },
      {
        id: 'g9l3', title: '기본 vs 고급 답변 비교 — 수준별 문법 총정리', duration: '9분',
        content: [
          { type: 'text', text: '같은 내용도 어떤 문법 구조로 표현하느냐에 따라 IL, IM, IH, AL이 갈립니다. 이 레슨에서는 같은 주제의 답변을 수준별로 비교합니다.' },
          { type: 'heading', text: '수준별 답변 비교 — 원격 근무에 대한 의견' },
          { type: 'table',
            headers: ['수준', '예문', '특징'],
            rows: [
              ['IL (100~120)', '"I like working at home. It is good. I save time."', '단문 나열, 단순 어휘, 연결어 없음'],
              ['IM (130~150)', '"I prefer working from home because it is more convenient. Also, I can save commuting time."', '비교급, 이유절, 기본 연결어'],
              ['IH (160~180)', '"What I find most appealing about remote work is that it not only reduces commuting stress but also allows for a more focused work environment. Furthermore, studies suggest that employees tend to be more productive when working from home."', '강조구문, 상관접속사, 연결 부사, 다양한 어휘'],
              ['AL (200)', '"Having worked both remotely and in an office, I firmly believe that remote work, when properly managed, is not only more efficient but can also lead to significantly higher levels of employee satisfaction. That said, it is crucial that companies establish clear communication guidelines to prevent potential isolation."', '경험 분사구문, 복잡한 관계절, 양보 표현, 정교한 어휘'],
            ]
          },
          { type: 'heading', text: '점수대별 핵심 문법 체크리스트' },
          { type: 'structure', steps: [
            { num: 'IM 목표', title: '기본 연결어 + 비교급', desc: '✅ because / so / but 자유롭게 사용\n✅ 비교급 (more ~ than)\n✅ 관사 오류 없음\n✅ 기본 시제 정확' },
            { num: 'IH 목표', title: '관계절 + 연결 부사 + 강조', desc: '✅ who/which/that 관계절 사용\n✅ First, Furthermore, However 연결 부사\n✅ 수동태 자연스럽게 사용\n✅ 조건문 1형/2형 활용' },
            { num: 'AL 목표', title: '고급 구문 + 정교한 어휘', desc: '✅ 강조 구문 (It is ~ that / What I ~)\n✅ 분사구문 자연스럽게 연결\n✅ 도치 표현 1회 이상\n✅ 다양한 어휘로 반복 표현 없음' },
          ]},
          { type: 'tip', icon: '🏆', text: '문법 점수는 오류의 수보다 구조의 다양성이 중요합니다. 완벽하게 아는 문법을 정확하게 사용하는 것이 어설프게 고급 구문을 시도하다 실수하는 것보다 낫습니다.' }
        ]
      }
    ]
  }

];

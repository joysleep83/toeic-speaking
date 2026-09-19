// ── TOEIC Speaking 문법 강의 데이터 ─────────────────────────────
// 8개 모듈 · 28개 레슨

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
          { type: 'text', text: '현재 단순과 현재 진행은 한국어에서 모두 "~한다"로 같게 표현되기 때문에 한국인이 가장 많이 혼동하는 시제입니다. 핵심 차이는 딱 하나 — "지금 이 순간 일어나고 있냐, 아니면 늘 그렇냐"입니다.' },
          { type: 'heading', text: '핵심 차이' },
          { type: 'table',
            headers: ['시제', '형태', '사용 상황', '예문'],
            rows: [
              ['현재 단순', 'do / does', '습관·반복·변하지 않는 사실', '"I work in a bank." (매일 그 직업을 가짐)'],
              ['현재 진행', 'am/is/are + -ing', '지금 이 순간 진행 중인 동작', '"She is typing on her laptop." (지금 바로 치는 중)'],
            ]
          },
          { type: 'heading', text: 'TOEIC Part 1 — 사진 묘사 시제 선택법' },
          { type: 'tip', icon: '🎯', text: '사진 속 동작은 반드시 현재 진행형! 사진은 "지금 이 순간"을 찍은 것이므로, 움직이는 동작은 항상 -ing로 묘사합니다. 단, 위치·상태처럼 움직임이 없는 것은 현재 단순을 씁니다.' },
          { type: 'example', label: 'Part 1 올바른 시제 선택', items: [
            { en: '✅ "A man is sitting at a desk." — 동작(앉는 행위)이므로 진행형', ko: '움직임·동작 → is/are + -ing' },
            { en: '❌ "A man sits at a desk." — 덜 자연스럽고 채점관에게 어색하게 들림', ko: '동작인데 현재 단순 → 어색' },
            { en: '✅ "There is a book on the table." — 책은 움직이지 않으므로 단순형', ko: '상태·위치·존재 → is/are (단순)' },
            { en: '✅ "The store is located on the corner." — 위치 묘사 → 단순형', ko: 'located, situated, filled with 등은 상태이므로 단순' },
          ]},
          { type: 'heading', text: '진행형을 절대 쓸 수 없는 상태 동사' },
          { type: 'text', text: '다음 동사들은 "지금 이 순간"이라도 -ing를 붙이면 문법 오류입니다. 이 동사들은 감정·인식·소유처럼 "변화가 없는 상태"를 나타내기 때문입니다.' },
          { type: 'example', label: '상태 동사 — 진행형 불가 (감점 주의)', items: [
            { en: '❌ "She is having a car." → ✅ "She has a car."', ko: 'have (소유) — "갖고 있다"는 상태, 동작이 아님' },
            { en: '❌ "I am knowing the answer." → ✅ "I know the answer."', ko: 'know / understand / believe / think — 인식 상태' },
            { en: '❌ "He is liking coffee." → ✅ "He likes coffee."', ko: 'like / love / hate / want / prefer — 감정 상태' },
            { en: '❌ "It is seeming difficult." → ✅ "It seems difficult."', ko: 'seem / appear / look (판단) — 판단 상태' },
          ]},
          { type: 'tip', icon: '💡', text: 'Part 1 사진 묘사 시작 공식: "There is/are + 명사 + 현재분사(-ing)" — 예: "There is a woman standing near the window." 이 틀 하나만 자동으로 나오도록 반복 연습하세요.' }
        ]
      },
      {
        id: 'g1l2', title: '현재완료 — have + p.p. 언제 쓸까?', duration: '8분',
        content: [
          { type: 'text', text: '현재완료는 한국어에 딱 떨어지는 대응 표현이 없어서 한국인이 가장 어렵게 느끼는 시제입니다. 핵심 개념은 하나 — "과거에 일어났지만 지금 현재와 연결된 일"입니다. 즉, 지금 이 순간에도 영향을 주고 있어야 현재완료를 씁니다.' },
          { type: 'heading', text: '현재완료 4가지 용법' },
          { type: 'table',
            headers: ['용법', '핵심 의미', '지금과의 연결', '예문'],
            rows: [
              ['경험', '~한 적이 있다', '그 경험이 지금 나의 일부', '"I have visited New York twice." (그래서 지금 뉴욕을 앎)'],
              ['완료', '막 ~했다', '방금 끝났고 결과가 지금 존재', '"She has just finished the report." (지금 막 완료된 상태)'],
              ['계속', '쭉 ~해왔다', '과거부터 지금까지 계속', '"I have worked here for 5 years." (지금도 일하고 있음)'],
              ['결과', '~해서 지금 ~한 상태', '과거 행동의 결과가 지금', '"He has lost his key." (그래서 지금 열쇠가 없음)'],
            ]
          },
          { type: 'heading', text: '현재완료와 함께 자주 쓰는 신호어' },
          { type: 'text', text: '이 단어들이 문장에 보이면 현재완료를 써야 한다는 신호입니다.' },
          { type: 'example', label: '신호어 정리', items: [
            { en: 'already (이미), yet (아직/이미), just (방금), recently (최근에), lately (요즘)', ko: '완료·최근 완료 → have + p.p. 사용' },
            { en: 'for + 기간: "for 5 years / for a long time / for months"', ko: '계속 용법 — 과거부터 지금까지 지속되는 기간' },
            { en: 'since + 시점: "since 2020 / since I was a child / since last Monday"', ko: '계속 용법 — 특정 시점 이후로 쭉' },
            { en: 'ever (지금까지 한 번이라도), never (한 번도 없음), before (이전에), once, twice', ko: '경험 용법 — 살면서 몇 번이나 했는지' },
          ]},
          { type: 'heading', text: '과거 단순 vs 현재완료 — 핵심 구분' },
          { type: 'text', text: '가장 많이 혼동하는 부분입니다. 명확한 과거 시점이 있으면 과거 단순, 지금과 연결되거나 시점이 불분명하면 현재완료입니다.' },
          { type: 'example', label: '비교 — 어떤 느낌이 다른가', items: [
            { en: '"I worked here for 5 years." (과거 단순)', ko: '→ 지금은 그만뒀다는 뉘앙스 (과거 완결)' },
            { en: '"I have worked here for 5 years." (현재완료)', ko: '→ 지금도 일하고 있다 (지금과 연결)' },
            { en: '"Did you eat lunch?" (과거 단순)', ko: '→ 언제 먹었는지 특정 과거 시점에 관심' },
            { en: '"Have you eaten lunch?" (현재완료)', ko: '→ 지금 배가 고프냐/아니냐의 현재 상태에 관심' },
          ]},
          { type: 'tip', icon: '⚠️', text: '"Yesterday, last year, in 2020, ago" 처럼 명확한 과거 시점이 있으면 현재완료 절대 불가! 과거 시점을 콕 집으면 지금과 연결이 끊기기 때문입니다. ❌ "I have visited Seoul yesterday." → ✅ "I visited Seoul yesterday."' }
        ]
      },
      {
        id: 'g1l3', title: '미래 표현 — will vs be going to', duration: '7분',
        content: [
          { type: 'text', text: '한국어는 미래를 "할 거야" 하나로 표현하지만, 영어는 지금 즉흥적으로 결정한 일인지, 이미 계획해 둔 일인지에 따라 표현이 달라집니다. 이 차이가 TOEIC Part 4~6 답변의 자연스러움을 결정합니다.' },
          { type: 'heading', text: '미래 표현 비교' },
          { type: 'table',
            headers: ['표현', '뉘앙스', 'TOEIC 예문'],
            rows: [
              ['will', '지금 이 순간 결정·의지·예측', '"I will help you with that." (지금 막 도와주기로 결정)'],
              ['be going to', '이미 계획·예정·예고된 일', '"We are going to launch a new product." (준비된 계획)'],
              ['현재 진행', '가까운 미래 확정 약속', '"I am meeting the client tomorrow." (이미 잡힌 약속)'],
              ['will be + -ing', '미래 특정 시점에 진행 중', '"I will be working on the report by then." (그때 하고 있을 일)'],
            ]
          },
          { type: 'heading', text: 'Part 4/5/6 — 상황별 미래 표현 선택' },
          { type: 'structure', steps: [
            { num: '즉각 제안', title: 'will → 즉흥적 해결책 제시', desc: '"I will contact the manager right away." (지금 결정)\n"This will solve the problem immediately." (확신 있는 예측)' },
            { num: '계획 설명', title: 'be going to → 이미 준비된 계획', desc: '"We are going to reschedule the meeting." (이미 논의됨)\n"The team is going to address this issue." (진행 중 계획)' },
            { num: '부드러운 제안', title: 'could / might → 강요 없는 제안', desc: '"This could help improve the situation." (가능성 제시)\n"This may take a few days to resolve." (부드러운 예측)' },
          ]},
          { type: 'example', label: '미래 표현 오류 교정', items: [
            { en: '❌ "If I will go..." → ✅ "If I go..." (1형 조건절)', ko: 'if절 안에서는 will 사용 금지 — 현재형으로 미래를 표현' },
            { en: '❌ "I will to call you." → ✅ "I will call you."', ko: 'will 뒤에는 반드시 동사 원형 (to 없음)' },
            { en: '❌ "I am going to will finish it." → ✅ "I am going to finish it."', ko: 'be going to 뒤에도 동사 원형 — to가 이미 포함됨' },
          ]},
          { type: 'tip', icon: '💡', text: 'Part 4에서 해결책을 제시할 때: 즉각 행동 → will, 이미 논의된 조치 → be going to, 조심스러운 제안 → could/might. 이 세 가지를 상황에 맞게 선택하면 훨씬 자연스럽습니다.' }
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
          { type: 'text', text: '두 시제 모두 과거 이야기를 할 때 쓰지만 역할이 다릅니다. 과거 단순은 "일어난 사건·사실", 과거 진행은 "그 사건이 일어났을 때 배경으로 깔려 있던 상황"을 묘사합니다. 마치 소설에서 배경 묘사와 사건 묘사를 구분하는 것과 같습니다.' },
          { type: 'heading', text: '핵심 구분' },
          { type: 'table',
            headers: ['시제', '형태', '의미', '예문'],
            rows: [
              ['과거 단순', 'did / -ed', '완료된 과거 사건·사실', '"I visited the client last week." (방문이라는 사건 완료)'],
              ['과거 진행', 'was/were + -ing', '과거 특정 시점에 이미 진행 중이던 상황', '"I was working when she called." (전화 왔을 때 이미 일하는 중)'],
              ['과거완료', 'had + p.p.', '두 과거 사건 중 더 먼저 일어난 것', '"I had already left when he arrived." (내가 떠난 후 그가 도착)'],
            ]
          },
          { type: 'heading', text: 'Part 2/5/6 — 경험 예시 답변 구조' },
          { type: 'text', text: '"배경(과거 진행) + 사건(과거 단순)"처럼 두 시제를 함께 쓰면 훨씬 생생한 경험 답변이 됩니다.' },
          { type: 'example', label: '자연스러운 경험 답변', items: [
            { en: '"I prefer remote work. Last year, I worked from home for six months and I was very productive."', ko: '의견(현재) → 경험(과거 단순) → 상태(과거 단순)' },
            { en: '"When I was studying abroad, I met many interesting people."', ko: '배경(was studying·진행) + 사건(met·단순) — 생생한 묘사' },
            { en: '"While I was preparing for the meeting, my manager called and changed the schedule."', ko: '진행(배경) + 단순(사건) — called가 배경 위로 끼어든 사건' },
          ]},
          { type: 'heading', text: '과거 단순 불규칙 동사 — TOEIC 필수' },
          { type: 'example', label: '고빈도 불규칙 동사 (반드시 암기)', items: [
            { en: 'go → went, come → came, take → took, make → made, run → ran', ko: '이동·행동 핵심 동사' },
            { en: 'give → gave, get → got, put → put, set → set, let → let', ko: '수여·설정 동사 (put/set/let은 과거형 동일)' },
            { en: 'begin → began, choose → chose, find → found, hold → held, leave → left', ko: '시작·선택·발견 동사' },
            { en: 'send → sent, spend → spent, buy → bought, bring → brought, tell → told', ko: '업무 관련 핵심 동사' },
            { en: 'know → knew, think → thought, feel → felt, mean → meant, keep → kept', ko: '인식·감정 동사' },
          ]},
          { type: 'tip', icon: '⚠️', text: 'yesterday, last week, ago, in 2020처럼 명확한 과거 시점 표현이 있으면 반드시 과거 단순만 사용. 현재완료 절대 불가! ❌ "I have visited Seoul last year." → ✅ "I visited Seoul last year."' }
        ]
      },
      {
        id: 'g2l2', title: '과거완료 — had + p.p. 완전 정리', duration: '7분',
        content: [
          { type: 'text', text: '과거완료는 "과거보다 더 이전"을 나타냅니다. 과거 이야기를 하다가 그보다 더 앞서 일어난 일을 언급할 때 씁니다. 예를 들어 "그가 도착했을 때(과거), 나는 이미 떠나 있었다(더 이전 과거)"처럼요. 고득점 답변에서 사건 순서를 명확히 보여줄 때 효과적입니다.' },
          { type: 'heading', text: '과거완료 사용 상황' },
          { type: 'structure', steps: [
            { num: '①', title: '두 과거 사건의 선후 관계 표현', desc: '"By the time I arrived, the meeting had already started."\n(내 도착 = 과거 / 회의 시작 = 그보다 더 이전)' },
            { num: '②', title: 'before / after / when / by the time과 함께', desc: '"She had finished the report before the deadline."\n"After he had explained everything, we understood the situation."' },
            { num: '③', title: '특정 시점 이전까지의 경험', desc: '"I had never tried sushi before I visited Japan."\n(일본 방문 이전까지 → 스시 경험 없음)' },
          ]},
          { type: 'example', label: '과거완료 활용 예시', items: [
            { en: '"I had studied English for 10 years before I took the TOEIC test."', ko: '시험(과거) 이전 10년 학습(더 이전) — 학습 기간을 강조' },
            { en: '"When the manager arrived, the team had already solved the problem."', ko: '도착(과거) 전에 이미 해결 완료(더 이전)' },
            { en: '"She realized that she had forgotten to bring the documents."', ko: '깨달음(과거) 시점에 이미 잊어버린 상태(더 이전)' },
          ]},
          { type: 'tip', icon: '💡', text: '과거완료가 어렵게 느껴지면 "before + 과거 단순"으로 대신할 수 있습니다. "I had left before he arrived." = "I left before he arrived." 뜻은 같습니다. 완벽히 이해하기 전까지는 "before/after + 과거 단순"이 안전합니다.' }
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
          { type: 'text', text: '한국어는 명사에 단수·복수 구분이 없지만, 영어는 "셀 수 있느냐 없느냐"에 따라 관사, 동사, 수량 표현이 모두 달라집니다. 이 구분을 모르면 한 문장 안에서 오류가 연달아 발생하므로 반드시 이해해야 합니다.' },
          { type: 'heading', text: '가산명사 vs 불가산명사' },
          { type: 'table',
            headers: ['구분', '특징', 'TOEIC 빈출 단어'],
            rows: [
              ['가산명사', '하나/여러 개 셀 수 있음. a/an 사용 가능. 복수형(-s) 있음', 'meeting, report, idea, problem, job, task, product'],
              ['불가산명사', '셀 수 없음. a/an 붙일 수 없음. 항상 단수 취급. 복수형 없음', 'information, advice, news, equipment, furniture, feedback, luggage'],
              ['집합명사', '단수 형태지만 구성원 전체를 가리킴. 단수 동사 사용', 'staff, team, family, audience, committee, management'],
            ]
          },
          { type: 'heading', text: '자주 틀리는 불가산명사 — TOEIC 필수 암기' },
          { type: 'text', text: '아래 단어들은 한국어로는 복수처럼 느껴지지만 영어에서는 셀 수 없는 명사입니다. "하나의 정보"를 말하고 싶을 때는 "a piece of + 불가산명사" 형태를 씁니다.' },
          { type: 'example', label: '불가산명사 오류 교정', items: [
            { en: '❌ "an information" → ✅ "information" 또는 "a piece of information"', ko: 'information — 불가산. 복수(informations)도 불가' },
            { en: '❌ "advices" / "an advice" → ✅ "advice" 또는 "a piece of advice"', ko: 'advice — 복수형 없음. "조언 한 마디"는 a piece of advice' },
            { en: '❌ "a news" / "newses" → ✅ "news" 또는 "a piece of news"', ko: 'news — -s로 끝나도 단수 취급 (is, not are)' },
            { en: '❌ "equipments" → ✅ "equipment"', ko: 'equipment — 장비 여러 개도 복수형 없음' },
            { en: '❌ "furnitures" → ✅ "furniture"', ko: 'furniture — 가구 전체를 하나로 취급' },
            { en: '❌ "feedbacks" → ✅ "feedback"', ko: 'feedback — TOEIC에 자주 나오는 불가산명사' },
          ]},
          { type: 'heading', text: '수량 표현 — 가산 vs 불가산 구분' },
          { type: 'table',
            headers: ['구분', '사용 표현', '예문'],
            rows: [
              ['가산명사에만', 'many, a few, few, a number of, several', '"many reports / a few ideas / several meetings"'],
              ['불가산명사에만', 'much, a little, little, a great deal of', '"much information / a little advice / little time"'],
              ['둘 다 가능', 'some, any, a lot of, plenty of, no, enough', '"some advice / some meetings / a lot of information"'],
            ]
          },
          { type: 'tip', icon: '⚠️', text: '"a number of + 복수명사 → 복수 동사" vs "the number of + 복수명사 → 단수 동사"\n예: "A number of employees ARE absent." / "The number of employees IS increasing." — TOEIC에 자주 출제되는 포인트!' }
        ]
      },
      {
        id: 'g3l2', title: '관사 — a / an / the 완벽 정리', duration: '8분',
        content: [
          { type: 'text', text: '관사는 영어에서 가장 흔히 틀리는 문법 요소입니다. 한국어에는 관사가 없기 때문에 한국인 학습자가 특히 힘들어합니다. 원칙은 단 하나 — "처음 언급하면 a/an, 다시 언급하거나 특정한 것이면 the"입니다.' },
          { type: 'heading', text: 'a / an / the 사용 원칙' },
          { type: 'table',
            headers: ['관사', '사용 규칙', '예문'],
            rows: [
              ['a', '단수 가산명사 + 처음 언급 (불특정)', '"A woman is standing near the window." (어떤 여자인지 모름)'],
              ['an', '모음 소리로 시작하는 단어 앞 (발음 기준!)', '"an office / an hour / an MBA" — hour는 h가 묵음이라 모음 소리'],
              ['the', '이미 언급됨 / 서로 알고 있는 것 / 세상에 유일한 것', '"The woman is wearing a blue shirt." (앞에서 언급된 그 여자)'],
              ['없음(무관사)', '복수 가산명사나 불가산명사를 일반적으로 언급', '"People enjoy traveling." / "Water is important." (일반적 사실)'],
            ]
          },
          { type: 'heading', text: 'Part 1 사진 묘사 — 관사 사용 패턴' },
          { type: 'text', text: '사진 묘사에서는 처음 등장하는 사람/사물에 a, 이후 재등장할 때 the를 씁니다. 이 패턴을 익혀두면 관사 오류가 거의 사라집니다.' },
          { type: 'example', label: '처음 등장 vs 재등장 — 관사 전환', items: [
            { en: '"A man is sitting at a desk." → 처음 소개', ko: 'a → 아직 어떤 남자인지 모르는 상태' },
            { en: '"The man appears to be working on a laptop." → 재등장', ko: 'the → 방금 소개한 바로 그 남자' },
            { en: '"There are several people in the background." → 복수 일반', ko: '복수 일반 언급 → 무관사' },
          ]},
          { type: 'heading', text: '관사 오류 교정 — 자주 틀리는 표현' },
          { type: 'example', label: '암기 필수 관사 규칙', items: [
            { en: '❌ "The life is short." → ✅ "Life is short."', ko: '추상적 개념(life, love, nature)은 일반적 언급 → 무관사' },
            { en: '❌ "I go to the school." → ✅ "I go to school."', ko: '제도적 장소(school, work, church, bed, hospital)는 목적으로 갈 때 무관사' },
            { en: '❌ "She plays a piano." → ✅ "She plays the piano."', ko: '악기 앞에는 the (특정 악기가 아니라 악기 자체를 의미)' },
            { en: '❌ "I have headache." → ✅ "I have a headache."', ko: '신체 증상은 a 사용 — a cold, a fever, a cough' },
            { en: '❌ "an university" → ✅ "a university"', ko: 'university는 "유" 발음으로 시작 → 자음 소리 → a 사용' },
          ]},
          { type: 'tip', icon: '💡', text: '말하다 막히면 단수 가산명사 앞에 무조건 a를 붙이세요. 관사를 빠뜨리는 것보다 잘못된 관사를 넣는 것이 덜 어색하게 들립니다. 단수 가산명사 앞에 관사가 없으면 바로 감점입니다.' }
        ]
      },
      {
        id: 'g3l3', title: '주어-동사 수일치 — 헷갈리는 규칙 총정리', duration: '8분',
        content: [
          { type: 'text', text: '수일치(Subject-Verb Agreement)는 주어가 단수면 동사도 단수(-s), 복수면 복수(원형)를 써야 한다는 규칙입니다. 기본은 쉽지만, 주어가 길어지거나 도치되면 헷갈리기 쉽습니다. 핵심은 항상 진짜 주어가 무엇인지 찾는 것입니다.' },
          { type: 'heading', text: '기본 규칙' },
          { type: 'table',
            headers: ['주어', '동사 형태', '예문'],
            rows: [
              ['I / You / We / They', '원형', '"They work in Seoul."'],
              ['He / She / It / 단수명사', '원형 + -s/-es', '"She works in Seoul." — 3인칭 단수에만 -s'],
              ['There is + 단수', 'is', '"There is a book on the desk."'],
              ['There are + 복수', 'are', '"There are three books on the desk."'],
            ]
          },
          { type: 'heading', text: '헷갈리는 수일치 규칙 — 고급편' },
          { type: 'text', text: '아래 규칙들은 외우기보다 "진짜 주어가 뭔지 찾기"로 접근하면 훨씬 쉽습니다.' },
          { type: 'structure', steps: [
            { num: '①', title: 'A as well as B → A에만 일치 (B는 무시)', desc: '"The manager, as well as the employees, IS responsible."\n→ 진짜 주어는 The manager (단수) → is' },
            { num: '②', title: 'Either A or B / Neither A nor B → B에 일치', desc: '"Either the students or the teacher IS wrong."\n→ 동사와 가까운 쪽(teacher·단수)에 맞춤' },
            { num: '③', title: '집합명사(team, staff) → 단수 취급', desc: '"The team HAS decided to postpone the meeting."\n"The staff IS working overtime." (구성원 전체 = 하나)' },
            { num: '④', title: '"One of + 복수명사" → 단수 동사', desc: '"One of the students IS absent."\n→ 진짜 주어는 One (단수), students가 복수여도 관계 없음' },
            { num: '⑤', title: '"The number of" → 단수 / "A number of" → 복수', desc: '"The number of employees IS increasing." (숫자 그 자체 = 단수)\n"A number of employees ARE absent." (여러 명 = 복수)' },
          ]},
          { type: 'example', label: '수일치 오류 교정', items: [
            { en: '❌ "There is many people." → ✅ "There are many people."', ko: 'many people → 복수 → are' },
            { en: '❌ "A lot of information are needed." → ✅ "A lot of information is needed."', ko: 'information → 불가산 → 항상 단수 → is' },
            { en: '❌ "The quality of the products are high." → ✅ "The quality... is high."', ko: '진짜 주어는 quality (단수). of the products는 수식어로 무시' },
            { en: '❌ "Economics are difficult." → ✅ "Economics is difficult."', ko: '-ics로 끝나는 학문명(physics, mathematics, economics)은 단수' },
          ]},
          { type: 'tip', icon: '⚠️', text: 'Part 1에서 "There is/are"를 자주 씁니다. 사람이나 사물이 여러 개면 반드시 "There are"를 써야 합니다. 말하면서 헷갈리면 먼저 개수를 확인하세요.' }
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
          { type: 'text', text: '위치 전치사는 Part 1 사진 묘사에서 가장 많이 쓰입니다. 단어만 외우면 막히지만, 각 전치사의 "공간 이미지"와 함께 익히면 현장에서 자동으로 나옵니다.' },
          { type: 'heading', text: '위치 전치사 완전 정리' },
          { type: 'table',
            headers: ['전치사', '의미', 'TOEIC 예문'],
            rows: [
              ['in', '~안에 (닫힌 공간 내부)', '"The man is in the office."'],
              ['on', '~위에 (표면에 닿아 있음)', '"The book is on the desk."'],
              ['at', '~에 (특정 한 지점)', '"She is standing at the door."'],
              ['next to / beside', '~바로 옆에', '"He is sitting next to the window."'],
              ['in front of', '~앞에', '"There is a chair in front of the desk."'],
              ['behind', '~뒤에', '"The shelf is behind the sofa."'],
              ['between', '~사이에 (딱 두 개)', '"The lamp is between the two chairs."'],
              ['among', '~사이에 (셋 이상)', '"She is standing among a group of people."'],
              ['across from', '~맞은편에', '"The store is across from the bank."'],
              ['near / close to', '~근처에 (거리감 있음)', '"The woman is near the window."'],
              ['above / below', '~위/아래에 (접촉 없이 떠있음)', '"The sign is above the entrance."'],
              ['along', '~을 따라서 (선형 이동)', '"People are walking along the street."'],
            ]
          },
          { type: 'heading', text: '사진 전체 구도·위치 표현 — Part 1 필수' },
          { type: 'image', src: '/lesson-images/part1-location-expressions.png', alt: '영어 전치사: 공간 및 위치 표현 학습 가이드', caption: '영어 전치사: 공간 및 위치 표현 학습 가이드' },
          { type: 'text', text: '아래 6가지는 사진 속 사람·사물이 "어디에 위치하는지" 설명할 때 쓰는 Part 1 핵심 표현입니다. 개별 사물의 위치(next to, behind 등)뿐 아니라 사진 전체의 구도(전경/배경, 왼쪽/오른쪽, 중앙)를 잡아줄 때 특히 유용합니다.' },
          { type: 'table',
            headers: ['표현', '의미', 'Part 1 예문'],
            rows: [
              ['in the foreground / in the background', '전경에 / 배경에', '"In the foreground, there are colorful flowers, and mountains rise in the background."'],
              ['on the left / on the right side', '왼쪽에 / 오른쪽에', '"There is a plant on the left and a lamp on the right side of the sofa."'],
              ['in the center of the photo', '사진 중앙에', '"A dog is sitting in the center of the photo."'],
              ['next to / beside', '~옆에', '"A cat is sitting next to the girl on the bench."'],
              ['in front of / behind', '~앞에 / ~뒤에', '"One boy is standing in front, and another boy is standing behind him."'],
              ['across from', '~맞은편에', '"A woman is sitting across from a man at the table."'],
            ]
          },
          { type: 'tip', icon: '📍', text: '이 표현들은 사람이나 사물이 사진의 어느 위치에 있는지 설명할 때 사용합니다. 묘사 순서를 "전경(in the foreground) → 배경(in the background)" 또는 "왼쪽(on the left) → 중앙(in the center) → 오른쪽(on the right)"으로 잡으면 빠짐없이 자연스럽게 이어집니다.' },
          { type: 'heading', text: 'Part 1 위치 묘사 실전 패턴' },
          { type: 'example', label: '위치 전치사 활용', items: [
            { en: '"A woman is standing at the counter."', ko: 'at → 카운터라는 특정 지점에 서 있음' },
            { en: '"Two people are sitting across from each other."', ko: 'across from → 테이블을 사이에 두고 마주 보는 상황' },
            { en: '"Books are stacked on the shelves behind the desk."', ko: '전치사 2개 연결 → on(표면) + behind(위치) — 더 정교한 묘사' },
          ]},
          { type: 'tip', icon: '💡', text: '"in the background(뒤 배경에) / in the foreground(앞 배경에) / on the left(왼쪽에) / on the right(오른쪽에)" — 사진 전체를 설명할 때 필수 표현입니다. 이 4가지는 반드시 입에 붙여두세요.' }
        ]
      },
      {
        id: 'g4l2', title: '시간 전치사 — at / on / in / by / until', duration: '7분',
        content: [
          { type: 'text', text: '시간 전치사는 Part 3 (일정표 정보 전달)에서 특히 중요합니다. 잘못된 시간 전치사는 정보 전달 오류로 이어져 바로 감점됩니다. 기본 공식만 외우면 대부분 해결됩니다.' },
          { type: 'heading', text: '시간 전치사 완전 정리' },
          { type: 'table',
            headers: ['전치사', '사용 대상', '예문'],
            rows: [
              ['at', '구체적 시각 (시:분)', '"The class starts at 9:00 AM."'],
              ['on', '요일·날짜·특정일', '"It is held on Monday." / "on July 5th" / "on New Year\'s Day"'],
              ['in', '월·연도·계절·아침/오후/저녁', '"in July / in 2024 / in the morning / in spring"'],
              ['from A to B', '시작 시각~끝 시각', '"It runs from 6 PM to 8 PM."'],
              ['by', '~까지 (그 전에 완료해야 할 기한)', '"Please register by Friday." (금요일 전까지 완료)'],
              ['until/till', '~까지 (그 시간 동안 계속)', '"The store is open until 10 PM." (10시까지 쭉)'],
              ['within', '~이내에 (그 기간 안에)', '"You will receive a reply within 3 days."'],
              ['during', '~동안 (특정 기간·이벤트)', '"during the summer / during the meeting"'],
              ['for', '~동안 (기간의 길이)', '"for 3 hours / for two weeks"'],
            ]
          },
          { type: 'heading', text: '암기 공식 — at / on / in' },
          { type: 'tip', icon: '🎯', text: '가장 좁은 단위부터: 시각(순간) → at / 요일·날짜(하루) → on / 월·연도·아침저녁(범위) → in\n주의: "at night"은 예외! night는 넓은 범위지만 at을 씁니다. "at noon"도 동일.' },
          { type: 'example', label: 'Part 3 일정 전달 예문', items: [
            { en: '"The swimming lesson is on Monday and Wednesday from 9 to 11 AM."', ko: 'on(요일) + from A to B(시간 범위)' },
            { en: '"Please register by this Friday." (기한)', ko: 'by → 금요일 이전에 완료해야 하는 마감일' },
            { en: '"The course will be held within the next two weeks." (이내)', ko: 'within → 2주 안에 시작될 예정 (정확한 날짜 미정)' },
            { en: '"The store is open from 9 AM until 9 PM." (지속)', ko: 'until → 그 시간까지 계속 열려 있음 (종료 시점 강조)' },
          ]}
        ]
      },
      {
        id: 'g4l3', title: '전치사 핵심 의미 + IN · ON · AT 표현', duration: '5분',
        content: [
          { type: 'text', text: '전치사는 단어마다 고정된 짝이 있습니다. 무작정 외우기보다 각 전치사의 핵심 이미지를 먼저 이해하면 왜 그 전치사를 쓰는지 납득이 되어 훨씬 오래 기억됩니다. "in = 안에 있다", "on = 위에 올라타 있다", "at = 딱 그 지점"이라는 이미지가 핵심입니다.' },
          { type: 'heading', text: '핵심 전치사 10가지 — 기본 이미지' },
          { type: 'table', headers: ['전치사', '핵심 이미지', '기억 포인트'], rows: [
            ['in', '안에·내부·범위', '분야·상태의 "안"에 포함된다'],
            ['on', '표면 접촉·집중', '특정 대상 "위에 올라타" 집중한다'],
            ['at', '특정 지점·순간', '"딱 그 지점"을 겨냥한다'],
            ['for', '목적·이익·교환', '"~을 위해, ~을 향해" 나아간다'],
            ['of', '소유·구성·분리', '"~의 일부" 또는 ~에서 분리된다'],
            ['with', '동반·연관', '"함께" 있거나 연관된다'],
            ['about', '주변을 맴돌다', '"~에 관해" 주변을 맴돈다'],
            ['from', '출발점·분리', '"출발점에서 멀어진다"'],
            ['to', '방향·목적지', '"~을 향해" 나아간다'],
            ['by', '옆에·수단', '"옆에서, ~을 통해서"'],
          ]},
          { type: 'heading', text: 'IN — 안에·분야·상태' },
          { type: 'example', label: 'in: 분야·상태의 "안"에 속함', items: [
            { en: 'interested in', ko: '~에 관심이 있는', detail: 'interest(관심)라는 감정이 특정 대상 "안"으로 들어가 머물러 있는 이미지입니다. 관심의 방향이 그 분야 내부를 향해 있다고 생각하면 됩니다. 참고로 뒤에 to부정사가 오면(interested to hear) "그것을 듣게 되어(순간적으로) 흥미가 생겼다"는 일회성 반응이 되어, 지속적인 관심을 뜻하는 interested in과는 뉘앙스가 다릅니다.' },
            { en: 'believe in', ko: '~을 (존재·가치·능력을) 믿다', detail: 'believe에 in이 붙으면 단순히 "그 말이 사실이라고 믿는다"가 아니라 "그 존재·가치·능력 자체를 신뢰한다"는 더 깊은 의미가 됩니다. 예를 들어 I believe in you는 "네 말이 맞다"가 아니라 "나는 네 능력을 믿는다"는 뜻이고, I believe you는 단순히 "네 말을 믿는다"는 뜻으로 서로 다릅니다.' },
            { en: 'succeed in', ko: '~에 성공하다', detail: 'succeed 뒤에는 주로 in + 동명사(succeed in doing) 형태가 옵니다. 목표로 하던 "범위 안"에 마침내 도달했다는 성취의 이미지입니다. 주의할 점은 succeed to는 완전히 다른 뜻(왕위나 지위를 "계승하다")이므로 절대 혼동하면 안 됩니다.' },
            { en: 'specialize in', ko: '~을 전문으로 하다', detail: 'special(특별한)에서 나온 동사로, 넓은 분야 중에서 한 "영역 안"으로 좁혀 들어가 그 안에서만 전문성을 쌓았다는 의미입니다. 이력서나 자기소개에서 "저는 ~ 분야를 전문으로 합니다"라고 말할 때 자주 쓰이는 격식 있는 표현입니다.' },
            { en: 'result in', ko: '~로 이어지다, ~을 초래하다', detail: 'result from(~로부터 비롯되다)과 반드시 짝을 지어 기억해야 합니다. result in은 "원인 → 결과"의 방향이고, result from은 "결과 → 원인"으로 방향이 정반대입니다. 예: The mistake resulted in a delay.(그 실수가 지연을 초래했다) / The delay resulted from the mistake.(그 지연은 그 실수로부터 비롯됐다)' },
            { en: 'arrive in', ko: '(도시·국가처럼 넓은 곳에) 도착하다', detail: 'arrive는 뒤에 오는 장소의 "크기"에 따라 전치사가 바뀝니다. 도시나 국가처럼 넓은 공간에 도착할 때는 in을 쓰고(arrive in Seoul, arrive in Korea), 공항이나 역처럼 하나의 지점으로 취급되는 좁은 장소에는 at을 씁니다(arrive at the airport). "공간의 크기"라는 기준 하나만 기억하면 실수 없이 구분할 수 있습니다.' },
          ]},
          { type: 'heading', text: 'ON — 위에·집중·근거' },
          { type: 'example', label: 'on: 특정 대상 "위에 올라타" 집중', items: [
            { en: 'depend on / rely on', ko: '~에 의존하다', detail: '내 몸의 무게를 그 대상 "위에" 실어 기대는 이미지입니다. "그것이 없으면 나 혼자서는 서 있을 수 없다"는 의존 관계를 나타내며, depend와 rely 둘 다 반드시 on과 함께 쓰이므로 한 세트로 통째로 외워두는 것이 좋습니다.' },
            { en: 'focus on / concentrate on', ko: '~에 집중하다', detail: '카메라 렌즈의 초점을 하나의 대상 "위에" 고정하는 이미지입니다. 여러 가지 일 중에서 하나를 골라 정신적 에너지를 그 위에만 모아 쏟는다는 뜻이며, focus와 concentration 모두 명사형으로도 매우 자주 쓰입니다(예: lack of focus, power of concentration).' },
            { en: 'insist on', ko: '~을 고집하다', detail: '자신의 주장이라는 발판 "위에" 올라서서 절대 내려오지 않겠다는 고집스러운 태도를 나타냅니다. insist 뒤에 that절이 오는 경우도 있지만(insist that + 주어 + 동사원형), 명사나 동명사를 받을 때는 반드시 on이 필요합니다(insist on doing).' },
            { en: 'comment on', ko: '~에 대해 언급하다', detail: '어떤 사안 "위에" 자신의 의견을 하나 얹어 놓는다는 이미지입니다. 뉴스 기사나 보고서에서 "그 사안에 대해 논평을 남기다"라는 뜻으로 자주 쓰입니다. comment about도 문법적으로 가능하지만, comment on이 훨씬 더 격식 있고 일반적으로 쓰이는 표현입니다.' },
            { en: 'based on', ko: '~에 기반하여', detail: '건물의 토대(base)를 그 대상 "위에" 세운다는 이미지로, 어떤 주장이나 결정의 근거·출처를 나타낼 때 필수적인 표현입니다. 문장 맨 앞에서 분사구문 형태로 "Based on the report, ~"(그 보고서에 근거하면 ~)처럼 매우 자주 사용됩니다.' },
          ]},
          { type: 'heading', text: 'AT — 특정 지점·능력·반응' },
          { type: 'example', label: 'at: "딱 그 지점"을 겨냥', items: [
            { en: 'good at / skilled at / excellent at', ko: '~에 능숙한', detail: '실력이라는 것이 하나의 "지점(수준)"에 이미 도달해 있다는 이미지입니다. 뒤에는 명사나 동명사(-ing)가 옵니다(good at cooking, skilled at solving problems). in을 쓰면 어색하게 들리니 반드시 at으로 고정해서 암기해야 합니다.' },
            { en: 'bad at / terrible at', ko: '~에 서툰', detail: 'good at의 정반대 표현이므로 함께 짝지어 암기하면 효율적입니다. 능력이 도달한 "지점"이 낮은 수준에 머물러 있다는 뜻이며, terrible at은 bad at보다 훨씬 더 강조된 부정적 표현입니다.' },
            { en: 'surprised at / amazed at', ko: '~에 놀란', detail: '예상치 못한 자극이 "그 지점"에서 순간적으로 충격을 준다는 느낌을 나타냅니다. surprised by도 문법적으로 가능하지만(수동태에서 행위자를 강조하는 형태), surprised at은 "무엇을 보고·듣고 놀랐는지" 그 원인이 되는 지점을 콕 집어 가리킬 때 더 자연스럽습니다.' },
            { en: 'aim at / look at / glance at', ko: '~을 겨냥·바라보다', detail: '시선이나 목표를 화살처럼 한 "지점"으로 쏘아 보내는 공통 이미지입니다. 그중에서도 glance at은 아주 짧게 흘낏 보는 것이고, look at은 의식적으로 시선을 두고 바라보는 것이라 강도의 차이가 있다는 점을 함께 기억해두면 좋습니다.' },
            { en: 'arrive at', ko: '(건물·역처럼 좁은 장소에) 도착하다', detail: 'arrive in과 반드시 짝을 지어 기억해야 하는 표현입니다. 공항, 역, 사무실처럼 하나의 구체적인 "지점"으로 취급되는 좁은 장소에 도착했을 때 사용하며, 도시나 국가처럼 넓은 공간에는 arrive in을 쓴다는 점이 핵심 구분 기준입니다.' },
          ]},
        ]
      },
      {
        id: 'g4l4', title: 'FOR · OF · WITH · ABOUT 관용 표현', duration: '5분',
        content: [
          { type: 'text', text: '앞 레슨의 전치사 이미지를 바탕으로 FOR·OF·WITH·ABOUT의 고정 표현을 이어서 학습합니다. 각 전치사의 핵심 이미지와 함께 연결하면 암기가 훨씬 빠릅니다.' },
          { type: 'heading', text: 'FOR — 목적·역할·이익' },
          { type: 'example', label: 'for: "~을 위해, ~을 향해"', items: [
            { en: 'responsible for', ko: '~에 책임이 있는', detail: '문제가 생겼을 때 그것을 "위해(for)" 대답(response)할 의무가 있다는 데서 유래한 표현입니다. 업무 분담을 설명할 때 "I\'m responsible for ~"(제가 ~을 담당·책임집니다) 형태로 자기소개나 회사 업무 설명에서 정말 자주 쓰입니다.' },
            { en: 'famous for / known for', ko: '~으로 유명한', detail: '그 이유 "때문에" 세상에 널리 알려졌다는 원인을 나타내는 표현입니다. 유명한 이유를 덧붙일 때 필수적인 패턴으로, "This city is famous for its food."(이 도시는 음식으로 유명하다)처럼 뒤에 유명해진 구체적인 이유(명사)가 옵니다.' },
            { en: 'ready for / prepared for', ko: '~에 준비된', detail: '어떤 상황이나 일을 "위해" 만반의 태세를 갖췄다는 뜻입니다. ready to + 동사원형(그 행동을 할 준비가 됨, 예: ready to go)과 ready for + 명사(그 상황·이벤트에 대한 준비, 예: ready for the exam)를 구분해서 기억하면 실수를 줄일 수 있습니다.' },
            { en: 'grateful for / thankful for', ko: '~에 감사한', detail: '감사하는 마음이 그 대상을 "위해" 향해 있다는 표현입니다. 사람에게 감사할 때는 grateful to(예: grateful to you), 사물이나 일에 감사할 때는 grateful for(예: grateful for your help)로 구분하며, 두 가지를 한 문장에 같이 쓸 수도 있습니다(I\'m grateful to you for your help).' },
            { en: 'apply for', ko: '~에 지원하다', detail: '특정 자리나 기회를 "향해" 서류나 의사를 내민다는 이미지입니다. apply to는 뜻이 완전히 달라서 "~에 적용되다"(This rule applies to everyone) 또는 "~ 학교/기관에 지원하다"(apply to a university)라는 의미가 되므로, "직무·일자리에 지원하다"라고 할 때는 반드시 apply for a job처럼 for를 써야 합니다.' },
            { en: 'account for', ko: '~을 설명하다, ~을 차지하다', detail: '원래 "회계 장부(account)"에서 유래한 표현으로, 수치나 이유를 명확히 "설명해서 앞뒤가 맞아떨어지게 만든다"는 뜻입니다. 통계나 보고서에서 "몇 퍼센트를 차지한다"는 의미로도 매우 자주 쓰입니다. 예: Sales account for 30% of revenue.(매출이 수익의 30%를 차지한다)' },
            { en: 'wait for / look for / search for', ko: '~을 기다리다, ~을 찾다', detail: '목표로 하는 대상을 "향해" 계속 시선이나 행동을 이어간다는 공통 이미지를 가진 세 동사입니다. wait, look, search는 모두 자동사라서 목적어를 바로 받지 못하고 반드시 전치사가 필요합니다. 타동사로 착각해서 for를 빼먹는 실수(wait him ✗ → wait for him ✓)가 매우 흔하니 주의하세요.' },
          ]},
          { type: 'heading', text: 'OF — 소유·구성·감정 대상' },
          { type: 'example', label: 'of: "~의 일부", ~에서 분리', items: [
            { en: 'afraid of / scared of', ko: '~을 두려워하는', detail: '무서운 대상으로부터 마음이 "분리"되어 멀어지고 싶어 하는 심리를 나타냅니다. afraid to + 동사원형(그 행동 자체가 무서워서 하지 않음, 예: afraid to speak)과 afraid of + 명사/동명사(그 대상이나 상황 자체가 무서움, 예: afraid of spiders)를 구분해서 이해하면 훨씬 자연스럽게 쓸 수 있습니다.' },
            { en: 'proud of', ko: '~을 자랑스러워하는', detail: '그 대상이 마치 나의 "일부"처럼 느껴질 만큼 자랑스럽다는 소유의 이미지를 담고 있습니다. 자녀, 개인적 성취, 소속된 팀이나 나라처럼 나와 긴밀하게 연결되어 있다고 느끼는 대상에 대해 자주 쓰이는 표현입니다.' },
            { en: 'tired of / sick of', ko: '~에 지친, ~에 질린', detail: '그 상황에서 완전히 "떨어져 나가고" 싶을 만큼 지쳤다는 강한 불만의 뉘앙스를 담고 있습니다. sick of가 tired of보다 훨씬 더 강하고 짜증 섞인 구어적 표현이라는 강도 차이를 함께 기억해두면 좋습니다.' },
            { en: 'aware of / ashamed of', ko: '~을 알고 있는, ~을 부끄러워하는', detail: 'aware of는 어떤 사실의 "존재"를 이미 인지하고 있다는 뜻이고, ashamed of는 부끄러운 일이 나의 "일부"처럼 느껴져 괴롭다는 뜻입니다. 형태는 비슷하지만 뜻은 전혀 다르니 둘을 따로 구분해서 기억해야 합니다. 둘 다 뒤에는 명사나 동명사가 옵니다.' },
            { en: 'consist of', ko: '~으로 구성되다', detail: '여러 개별 부분들이 모여 하나의 "전체"를 이룬다는 구성의 이미지를 담은 표현입니다. 가장 흔히 틀리는 부분은 수동태로 착각하는 것인데, consist of는 이미 그 자체로 능동의 의미를 가진 자동사라서 수동태(is consisted of ✗)로 쓰면 안 되고 반드시 consists of(✓) 형태로만 써야 합니다.' },
            { en: 'take advantage of', ko: '~을 이용하다', detail: '유리한 점(advantage)을 그 대상에서 "떼어내어" 내 것으로 취한다는 이미지입니다. 좋은 기회를 잘 활용한다는 긍정적인 뉘앙스(take advantage of the discount, 할인 혜택을 잘 이용하다)와, 누군가를 부당하게 이용해먹는다는 부정적인 뉘앙스(take advantage of someone) 양쪽 모두로 쓰이니 문맥으로 구분해야 합니다.' },
          ]},
          { type: 'heading', text: 'WITH — 동반·동의·처리' },
          { type: 'example', label: 'with: "함께" 있거나 연관', items: [
            { en: 'satisfied with / pleased with', ko: '~에 만족한', detail: '그 결과와 "함께" 있어도 편안하고 좋다는 긍정적인 동반의 느낌을 나타냅니다. satisfied with the service(서비스에 만족하다)처럼 어떤 결과나 대상에 대한 만족감을 표현할 때 가장 널리 쓰이는 표현입니다.' },
            { en: 'disappointed with / bored with', ko: '~에 실망한, ~에 지루한', detail: 'satisfied with의 정반대 개념이므로 짝지어 함께 암기하면 효율적입니다. 참고로 disappointed는 in도 함께 쓰이는데, disappointed in someone은 "그 사람 자체"에 대한 실망을 나타내고, disappointed with는 주로 "어떤 상황이나 결과"에 대한 실망을 나타낸다는 미묘한 차이가 있습니다.' },
            { en: 'agree with', ko: '~에 동의하다', detail: '상대방의 의견과 "나란히 함께" 선다는 이미지입니다. agree with + 사람/의견(그 사람의 생각에 동의), agree to + 제안·조건(그 제안 자체를 수락), agree on + 합의 사항(서로 그 사항에 대해 합의)으로 쓰임이 다르다는 점이 핵심입니다. 예: I agree with you on this plan.(나는 이 계획에 대해 너에게 동의한다) 한 문장에 셋이 함께 쓰인 예시입니다.' },
            { en: 'deal with / cope with', ko: '~을 처리하다, ~에 대처하다', detail: '어려운 문제를 혼자 피하지 않고 그 문제와 "함께 맞서" 해결해나간다는 이미지입니다. deal with가 좀 더 일반적이고 폭넓게 쓰이는 반면, cope with는 감정적으로 힘든 상황을 "버텨내고 견뎌낸다"는 뉘앙스가 특히 강합니다.' },
            { en: 'familiar with', ko: '~에 익숙한', detail: '그 대상과 "함께한" 시간이 오래 쌓여 친숙해졌다는 경험의 축적을 나타냅니다. familiar to는 반대로 "(사람)에게 익숙하게 느껴지는 대상"이 주어 자리에 올 때 씁니다. 예: This song is familiar to me. = I\'m familiar with this song.(이 노래는 나에게 익숙하다 = 나는 이 노래에 익숙하다) — 같은 뜻을 주어만 바꿔서 표현한 것입니다.' },
            { en: 'help with', ko: '~을 돕다', detail: '그 일을 상대방과 "함께" 힘을 모아 해결한다는 협력의 이미지입니다. help + 사람 + with + 일 구조로 아주 자주 쓰이며, "Can you help me with this?"(이거 좀 도와줄 수 있어?)는 일상 회화에서 정말 많이 쓰이는 필수 패턴입니다.' },
          ]},
          { type: 'heading', text: 'ABOUT — 관련·걱정·화제' },
          { type: 'example', label: 'about: "~에 관해" 주변을 맴돌다', items: [
            { en: 'worried about / concerned about', ko: '~을 걱정하는', detail: '문제가 되는 대상 "주변을" 생각이 계속 맴돌며 벗어나지 못하는 불안한 마음을 표현합니다. concerned about이 조금 더 formal하고 진지한 우려를 나타내는 반면, worried about은 일상적이고 감정적인 걱정을 나타낸다는 어감 차이가 있습니다.' },
            { en: 'excited about / passionate about', ko: '~에 설레는, ~에 열정적인', detail: '그 주제 "주변에서" 에너지가 넘치고 마음이 들뜨는 긍정적인 감정을 나타냅니다. 자기소개나 관심사·취미를 이야기할 때 OPIc·회화에서 정말 자주 등장하는 핵심 표현이니 꼭 자연스럽게 쓸 수 있도록 연습해두면 좋습니다.' },
            { en: 'curious about / enthusiastic about', ko: '~이 궁금한, ~에 열성적인', detail: '어떤 화제 "주변을" 더 알고 싶어서 맴도는 지적 호기심을 나타내는 표현입니다. enthusiastic about은 curious about보다 한 단계 더 적극적이고 열정적인 태도를 담고 있어, 단순한 궁금증을 넘어 실제로 열심히 참여하고 싶어 하는 마음까지 표현합니다.' },
            { en: 'talk about / think about / care about', ko: '~에 대해 말하다, 생각하다, 신경 쓰다', detail: '특정 화제를 중심에 두고 "그 주변을 맴돌며" 대화·사고·관심이 오간다는 공통 이미지를 가진 세 동사입니다. 셋 다 매우 실용적이고 일상 대화에서 빠지지 않는 필수 조합이니 통째로 묶어서 기억해두는 것이 좋습니다.' },
            { en: 'learn about / ask about', ko: '~에 대해 배우다, ~에 대해 물어보다', detail: '정보라는 것이 그 화제 "주변에" 존재하고 있고, 그 주변을 탐색하며 하나씩 알아간다는 이미지입니다. "그 주제에 대해 배우다/물어보다"라는 뜻으로 학습·문의 상황에서 자주 등장하는 조합입니다.' },
          ]},
        ]
      },
      {
        id: 'g4l5', title: 'FROM · TO · BY + 자주 틀리는 오류 TOP 10', duration: '5분',
        content: [
          { type: 'text', text: 'FROM·TO·BY 표현을 마무리하고, 실제 시험에서 자주 틀리는 전치사 오류 TOP 10을 확인합니다. 오류 교정 시 단순히 답만 외우지 말고, 앞에서 배운 전치사 이미지로 왜 틀렸는지 이해하세요. 이해하면 비슷한 단어가 나왔을 때 스스로 추론할 수 있습니다.' },
          { type: 'heading', text: 'FROM — 출발점·분리·기원' },
          { type: 'example', label: 'from: "출발점에서 멀어진다"', items: [
            { en: 'different from', ko: '~와 다른 — 기준점에서 "벗어나" 있다' },
            { en: 'result from', ko: '~에서 비롯되다 — 그것이 출발점·원인이다' },
            { en: 'benefit from / profit from', ko: '~에서 이익을 얻다 — 출발점에서 이득이 생긴다' },
            { en: 'suffer from', ko: '~으로 고통받다 — 그것에서 벗어나지 못한다' },
            { en: 'graduate from / retire from', ko: '~을 졸업·은퇴하다 — 그곳을 공식적으로 떠난다' },
            { en: 'free from / separate from', ko: '~으로부터 자유로운 / 분리된' },
          ]},
          { type: 'heading', text: 'TO — 방향·소속·결과' },
          { type: 'example', label: 'to: "~을 향해" 나아간다', items: [
            { en: 'married to', ko: '~와 결혼한 — 그 사람을 "향해" 묶인다 (married WITH 아님!)' },
            { en: 'devoted to / dedicated to', ko: '~에 헌신하는 — 그것을 "향해" 집중한다' },
            { en: 'committed to', ko: '~에 전념하는 — 그 방향에서 벗어나지 않는다' },
            { en: 'belong to', ko: '~에 속하다 — 그 방향으로 귀속된다' },
            { en: 'lead to / contribute to', ko: '~로 이어지다 / ~에 기여하다' },
            { en: 'respond to / react to', ko: '~에 답하다·반응하다 — 그것을 향해 돌아온다' },
          ]},
          { type: 'heading', text: 'BY — 수단·행위자·기준' },
          { type: 'example', label: 'by: "옆에서, ~을 통해서"', items: [
            { en: 'impressed by / moved by', ko: '~에 감동받은 — 그것에 "의해" 움직인다' },
            { en: 'caused by / followed by', ko: '~에 의해 야기된 / ~에 뒤이어' },
            { en: 'surrounded by', ko: '~에 둘러싸인 — 그것들이 "옆에" 빽빽이 있다' },
          ]},
          { type: 'heading', text: '자주 틀리는 전치사 오류 TOP 10' },
          { type: 'example', label: '오류 교정 — 이미지로 이유 이해하기', items: [
            { en: '❌ interested ON → ✅ interested IN', ko: 'in: 그 분야의 "안"으로 흥미가 들어가 있다' },
            { en: '❌ depend OF → ✅ depend ON', ko: 'on: 그것 "위에" 의지를 얹는다' },
            { en: '❌ good IN math → ✅ good AT math', ko: 'at: 그 능력 "지점"에 도달해 있다' },
            { en: '❌ different TO → ✅ different FROM', ko: 'from: 기준점에서 "벗어나" 다르다' },
            { en: '❌ married WITH → ✅ married TO', ko: 'to: 그 사람을 "향해" 묶인다' },
            { en: '❌ arrive TO → ✅ arrive AT (작은 장소) / IN (도시·국가)', ko: 'at: 지점 도달 / in: 넓은 범위 안으로 진입' },
            { en: '❌ responsible OF → ✅ responsible FOR', ko: 'for: 그것을 "위해" 책임지고 답해야 한다' },
            { en: '❌ congratulations FOR → ✅ congratulations ON', ko: 'on: 그 성과 "위에" 축하를 얹는다' },
            { en: '❌ suffer WITH → ✅ suffer FROM', ko: 'from: 그것에서 벗어나지 못하는 고통' },
            { en: '❌ consist FROM → ✅ consist OF', ko: 'of: 그것들이 모여 전체의 "일부"를 이룬다' },
          ]},
          { type: 'tip', icon: '💡', text: '암기 팁: 틀린 전치사를 봤을 때 "왜 이 전치사를 쓰면 안 될까?"를 이미지로 떠올리세요. "in = 안에" → interested IN(그 분야 안으로 들어가는 느낌), "on = 위에" → depend ON(그 위에 기댄다)처럼 이미지화하면 훨씬 오래 기억됩니다.' }
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
          { type: 'text', text: '조동사는 같은 내용도 얼마나 확신하는지, 얼마나 강하게 권고하는지를 미묘하게 조절합니다. 같은 "해야 한다"도 must, should, could에 따라 강도가 크게 달라집니다. Part 4 제안, Part 5/6 의견에서 적절한 조동사 선택이 점수를 직접 좌우합니다.' },
          { type: 'heading', text: '조동사 뉘앙스 비교표' },
          { type: 'table',
            headers: ['조동사', '주요 의미', '강도', 'TOEIC 활용 예문'],
            rows: [
              ['must', '강한 의무·확신', '100%', '"Employees must follow safety rules." (규정·의무)'],
              ['will', '강한 의지·미래 확실', '95%', '"This will definitely improve productivity." (확신)'],
              ['should', '의무·권고·당연히 해야 함', '75%', '"You should submit the form by Friday." (권고)'],
              ['can', '현재 능력·가능', '70%', '"I can help you with that." (능력)'],
              ['would', '확신에 찬 격식체 추천 — 조언자 톤', '60%', '"I would suggest a different approach." (전문가처럼 자신 있게, 그러나 정중하게 권함)'],
              ['could', '부담 없는 가능성·선택적 제안', '50%', '"You could contact the manager for help." (여러 선택지 중 하나로 가볍게 제시)'],
              ['may', '허가·낮은 가능성', '40%', '"This may cause delays." (가능성 언급)'],
              ['might', '매우 낮은 가능성·가장 조심스러운 제안', '25%', '"It might be a good idea to call first." (가장 소극적·조심스러운 제안)'],
            ]
          },
          { type: 'heading', text: 'Part 4 — 제안 강도에 따른 조동사 선택' },
          { type: 'text', text: '아래 4단계는 위 비교표와 동일한 강도 순서(must/have to → should → would → could/might)를 따릅니다. 특히 would는 "I would suggest/recommend~" 형태로 전문가·조언자처럼 확신을 갖고 권하는 격식체라 could보다 강도가 세다는 점에 주의하세요 — could는 "이런 방법도 있어요" 정도로 가볍게 선택지 하나를 던지는 느낌입니다.' },
          { type: 'structure', steps: [
            { num: '강함', title: 'must / have to → 즉각 필요한 조치', desc: '"You must contact the hotel immediately." (긴급·의무)\n"You have to request a refund right away."' },
            { num: '중간', title: 'should → 일반적인 권고', desc: '"You should try to reschedule the meeting." (합리적 권고)\n"You should speak with the manager directly."' },
            { num: '정중', title: 'would → 확신에 찬 격식체 추천 ("I would suggest/recommend")', desc: '"I would suggest speaking with the supervisor." (전문가처럼 자신 있게, 그러나 정중하게 권함)\n"I would recommend contacting customer service."' },
            { num: '부드러움', title: 'could / might → 강요 없는 부드러운 제안', desc: '"You could consider reaching out to the team." (선택 가능성 — could가 상대적으로 조금 더 적극적)\n"You might want to wait a day before deciding." (might가 이 중 가장 조심스럽고 소극적인 표현)' },
          ]},
          { type: 'example', label: '조동사 문법 오류 교정', items: [
            { en: '❌ "You should to go." → ✅ "You should go."', ko: '조동사 뒤에는 to 없이 동사 원형만 — should to, must to, can to 모두 오류' },
            { en: '❌ "She can speaks English." → ✅ "She can speak English."', ko: '조동사 뒤 동사는 반드시 원형 (speaks → speak)' },
            { en: '❌ "He will goes to work." → ✅ "He will go to work."', ko: 'will 뒤에도 반드시 동사 원형' },
          ]},
          { type: 'tip', icon: '🎯', text: '이 세 패턴을 Part 4에서 자동으로 나올 때까지 연습하세요 — 강도 순서대로: "I would suggest..." (확신에 찬 격식체) → "You could..." (부담 없는 제안) → "You might want to..." (가장 조심스러운 제안). 강하지 않으면서도 확실한 제안으로 채점관에게 좋은 인상을 줍니다.' }
        ]
      },
      {
        id: 'g5l2', title: '조건문 — if절 4가지 유형 완전 정복', duration: '8분',
        content: [
          { type: 'text', text: '조건문은 Part 4 해결책 제시와 Part 5/6 논리적 의견 전개에서 필수입니다. 핵심은 "얼마나 현실적인 가능성인지"에 따라 if절과 주절의 시제가 달라진다는 것입니다.' },
          { type: 'heading', text: '조건문 4가지 유형' },
          { type: 'table',
            headers: ['유형', '구조', '의미', '예문'],
            rows: [
              ['0형 (항상 사실)', 'If + 현재, 현재', '과학적 사실·일반 진리', '"If you practice daily, your English improves."'],
              ['1형 (실현 가능)', 'If + 현재, will', '앞으로 실현 가능한 조건', '"If you contact the hotel, they will resolve it."'],
              ['2형 (현재 비현실)', 'If + 과거, would', '지금 현실과 반대되는 가정', '"If I had more time, I would study harder." (실제로는 시간 없음)'],
              ['3형 (과거 반사실)', 'If + had p.p., would have p.p.', '과거에 대한 후회·반사실', '"If I had prepared more, I would have scored higher."'],
            ]
          },
          { type: 'heading', text: 'TOEIC Speaking 파트별 조건문 활용' },
          { type: 'structure', steps: [
            { num: 'Part 4', title: '해결책 제시 — 1형 조건문이 기본', desc: '"If you contact the front desk, they will arrange another room."\n"If that doesn\'t work, you could speak with the manager directly."' },
            { num: 'Part 5/6', title: '논리 강화 — 2형 조건문으로 격상', desc: '"If companies invested more in employee well-being, productivity would increase significantly."\n"If I were in that situation, I would choose remote work."' },
          ]},
          { type: 'example', label: '조건문 오류 교정 — 가장 자주 틀리는 패턴', items: [
            { en: '❌ "If I will go..." → ✅ "If I go..." (1형)', ko: 'if절 안에서는 will 절대 금지 — 현재형으로 미래를 표현' },
            { en: '❌ "If I would study harder..." → ✅ "If I studied harder..." (2형)', ko: 'if절에서 would도 금지 — 과거형(studied)으로 비현실 표현' },
            { en: '❌ "Unless you will act quickly..." → ✅ "Unless you act quickly..."', ko: 'unless = if not, 마찬가지로 unless절에서도 현재형 사용' },
          ]},
          { type: 'tip', icon: '💡', text: 'TOEIC Speaking에서 가장 많이 쓰이는 조건문은 1형입니다. "If + 현재형, will + 동사원형" — 이 하나만 완벽히 익혀도 Part 4 답변이 크게 향상됩니다. 2형은 Part 5/6 논리 강화용으로 하나 추가하면 고득점 효과가 있습니다.' }
        ]
      },
      {
        id: 'g5l3', title: '가정법과 소망 표현 — wish / I wish / if only', duration: '7분',
        content: [
          { type: 'text', text: '가정법 표현은 현실과 정반대인 상황을 상상할 때 씁니다. 시제가 한 단계 뒤로 물러나는 것이 핵심 — 현재를 가정할 때는 과거형, 과거를 가정할 때는 과거완료(had p.p.)를 씁니다. Part 5/6 의견 제시에서 "만약 ~라면"류의 논리 강화에 활용하면 고득점을 노릴 수 있습니다.' },
          { type: 'heading', text: 'I wish / If only — 소망·후회 표현' },
          { type: 'table',
            headers: ['표현', '구조', '의미', '예문'],
            rows: [
              ['I wish + 과거형', '현재 사실과 반대 소망', '지금 그렇지 않지만 바란다', '"I wish I had more time." (실제로는 시간 없음)'],
              ['I wish + had p.p.', '과거 사실에 대한 후회', '그때 그랬더라면 좋았을 텐데', '"I wish I had studied harder." (실제로 열심히 안 함)'],
              ['If only', 'I wish보다 강한 소망·후회', '강한 아쉬움·간절한 바람', '"If only I could speak English fluently!"'],
            ]
          },
          { type: 'heading', text: 'Part 5/6 — 가정법으로 논리 강화' },
          { type: 'text', text: '가정법을 의견 답변에 적절히 활용하면 논리 구조가 탄탄해지고 어휘 수준이 높아 보입니다.' },
          { type: 'example', label: '가정법 활용 예시', items: [
            { en: '"If companies paid more attention to employee well-being, the overall productivity would improve significantly."', ko: '2형 가정법 — 현재 현실이 아닌 이상적 조건 제시' },
            { en: '"Were I in that situation, I would choose a different approach."', ko: '"If I were → Were I" (if 생략 도치) — 고급 표현' },
            { en: '"Had the government acted sooner, the crisis could have been avoided."', ko: '"If the government had acted → Had the government acted" (3형 도치)' },
          ]},
          { type: 'tip', icon: '🎯', text: '도치 가정법("Were I...", "Had I...")은 if 없이 쓰는 고급 표현으로, IH/AL을 목표로 할 때 한 답변에 한 문장 정도 사용하면 매우 효과적입니다. 단, 아직 익숙하지 않다면 일반 가정법(If I were...)이 오류 없어 더 안전합니다.' }
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
          { type: 'text', text: '비교급과 최상급을 쓰면 "좋다"를 "훨씬 더 낫다"로 바꿔 의견에 설득력이 생깁니다. Part 2 선호도 답변과 Part 5/6 의견 제시에서 주장을 뒷받침하는 핵심 도구입니다.' },
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
          { type: 'heading', text: '고급 비교 표현 — 답변을 풍부하게' },
          { type: 'example', label: 'TOEIC 고득점 비교 패턴', items: [
            { en: '"Working from home is far more efficient than commuting."', ko: '"far / much / significantly"로 비교급 강조 — "훨씬 더" 표현' },
            { en: '"This is one of the most effective ways to improve communication."', ko: '"one of the most + 최상급 + 복수명사" — 최상급 활용 필수 패턴' },
            { en: '"The more you practice, the better you get."', ko: '"the + 비교급, the + 비교급" — 비례 관계 표현' },
            { en: '"Option A is twice as expensive as Option B."', ko: '"배수사 + as + 원급 + as" — 동등 비교 + 배수 표현' },
            { en: '"Remote work is not as stressful as office work."', ko: '"not as + 원급 + as" — 열등 비교 (더 못하다는 표현)' },
          ]},
          { type: 'tip', icon: '💡', text: '말하다 막힐 때는 "more + 형용사"를 쓰세요. 단음절은 faster가 정확하지만, 막히는 것보다 "more fast"라고 하는 것이 유창하게 들립니다. 단, better/worse처럼 불규칙형은 반드시 외워두세요.' }
        ]
      },
      {
        id: 'g6l2', title: '형용사와 부사 — 위치와 역할', duration: '7분',
        content: [
          { type: 'text', text: '형용사는 명사를, 부사는 동사·형용사·다른 부사를 꾸며줍니다. 한국어에서는 구분이 모호하지만 영어에서는 잘못 쓰면 문법 오류가 됩니다. 규칙은 하나 — "무엇을 꾸미는지" 먼저 확인하세요.' },
          { type: 'heading', text: '형용사 vs 부사 핵심 구분' },
          { type: 'table',
            headers: ['품사', '수식 대상', '위치', '예문'],
            rows: [
              ['형용사', '명사', '명사 앞 / be동사·연결동사 뒤', '"a beautiful office" / "The office is beautiful."'],
              ['부사', '동사·형용사·부사', '동사 뒤 / 형용사·부사 앞', '"She speaks clearly." / "very important"'],
            ]
          },
          { type: 'heading', text: '형태가 같은 형용사/부사 — 혼동 주의' },
          { type: 'example', label: '혼동 쉬운 단어 — 문맥으로 구분', items: [
            { en: '"This is a hard task." (형용사) vs "I work hard." (부사)', ko: 'hard: 형용사(어려운) / 부사(열심히) — "hardly"는 전혀 다른 뜻 "거의 ~않다"' },
            { en: '"I arrived late." (부사) vs "a late meeting" (형용사)', ko: 'late: 형용사(늦은) / 부사(늦게) — "lately"는 "최근에"로 완전히 다름' },
            { en: '"She is a fast runner." (형용사) vs "She runs fast." (부사)', ko: 'fast: 형용사와 부사가 형태 완전히 동일' },
          ]},
          { type: 'heading', text: '형용사/부사 오류 교정' },
          { type: 'example', label: '오류 교정', items: [
            { en: '❌ "She speaks English very good." → ✅ "She speaks English very well."', ko: 'speaks(동사)를 수식 → 부사 well 사용. good은 형용사' },
            { en: '❌ "The report looks perfectly." → ✅ "The report looks perfect."', ko: 'look은 연결동사 — 뒤에 형용사(perfect) 사용. perfectly(부사) 불가' },
            { en: '❌ "He is a hardly worker." → ✅ "He is a hard worker."', ko: 'worker(명사)를 수식 → 형용사 hard. hardly는 "거의 안 한다"는 뜻이라 완전 반대 의미' },
          ]},
          { type: 'tip', icon: '⚠️', text: '"look, sound, feel, seem, appear, taste, smell"은 연결동사입니다. 뒤에 반드시 형용사가 옵니다. "She looks beautiful.(O)" / "She looks beautifully.(X)" — 이 동사들 뒤에 -ly 부사를 쓰면 바로 감점입니다.' }
        ]
      },
      {
        id: 'g6l3', title: '강조 부사 — very·quite·rather·fairly 구분', duration: '6분',
        content: [
          { type: 'text', text: '"very"만 반복하면 어휘가 빈곤해 보입니다. 강조 부사를 다양하게 쓰면 어휘 다양성 점수가 올라갑니다. 중요한 점은 각 부사마다 뉘앙스가 다르다는 것 — 강도와 긍정/부정 성향을 함께 익혀야 합니다.' },
          { type: 'heading', text: '강조 부사 강도 비교' },
          { type: 'table',
            headers: ['부사', '강도', '뉘앙스', '예문'],
            rows: [
              ['extremely', '매우 강함 (100%)', '극도의 강조, 감정 실림', '"extremely important / stressful"'],
              ['very', '강함 (80%)', '가장 기본적인 강조', '"very effective / useful"'],
              ['quite', '상당히 (70%)', '꽤, 상당히 — 긍정적 맥락 다수', '"quite impressive / reasonable"'],
              ['fairly', '적당히 (60%)', '꽤 — 중립적, 가치판단 없음', '"fairly easy / common"'],
              ['rather', '약간 (50%)', '다소 — 부정적 뉘앙스 경향', '"rather difficult / unusual"'],
              ['a bit / slightly', '약간 (40%)', '조금, 미묘하게', '"slightly different / a bit challenging"'],
            ]
          },
          { type: 'example', label: '답변에서 강조 부사 다양하게 활용', items: [
            { en: '"This is an extremely effective way to solve the problem."', ko: '강한 확신을 줄 때 — 주장을 밀어붙이는 장면' },
            { en: '"Remote work is quite beneficial for employees."', ko: '적당한 강조 — 균형 있는 의견, 과장하지 않는 느낌' },
            { en: '"The task is rather challenging, but I believe it is worth it."', ko: '"rather" — 어렵다고 인정하되 여전히 가치 있다는 구조' },
            { en: '"The difference is slightly smaller than I expected."', ko: '"slightly" — 차이가 있지만 크지 않다는 세밀한 표현' },
          ]},
          { type: 'tip', icon: '💡', text: '"very very important" 같은 중복 강조 대신 고급 어휘 조합을 씁니다: "absolutely essential", "critically important", "tremendously helpful", "highly effective". 이 표현들을 3~4개 외워 두면 어디서든 활용할 수 있습니다.' }
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
          { type: 'text', text: '관계절은 짧은 두 문장을 하나로 합치는 기술입니다. "A man is sitting. He wears a blue shirt."를 "A man who is wearing a blue shirt is sitting."으로 만드는 것이죠. 문장이 길어 보이지만 오히려 더 유창하고 자연스럽게 들립니다. 고득점 답변의 필수 문법입니다.' },
          { type: 'heading', text: '관계대명사 선택 기준 — 선행사를 보고 고른다' },
          { type: 'table',
            headers: ['선행사', '관계대명사', '예문'],
            rows: [
              ['사람', 'who (또는 that)', '"The man who is sitting at the desk is my colleague."'],
              ['사물·동물', 'which (또는 that)', '"The book which is on the table belongs to her."'],
              ['사람·사물 모두 가능', 'that (가장 범용)', '"Everything that I need is here."'],
              ['소유 관계', 'whose', '"The woman whose bag is red is the manager."'],
            ]
          },
          { type: 'heading', text: '짧은 문장 → 관계절로 업그레이드' },
          { type: 'example', label: '문장 결합 예시', items: [
            { en: '기본: "A woman is standing. She wears a blue shirt."\n→ 고급: "A woman who is wearing a blue shirt is standing near the window."', ko: 'Part 1 사진 묘사 — who로 인물 특징과 위치를 한 문장에' },
            { en: '기본: "There is a reason. It is important."\n→ 고급: "There is a reason that I find particularly important."', ko: 'Part 5/6 — that으로 자연스럽게 연결' },
          ]},
          { type: 'heading', text: '관계절 생략 — "who is / which is" 줄이기' },
          { type: 'text', text: '"who is + -ing" 또는 "which is + 과거분사"에서 "who/which is"를 생략하면 더 간결하고 자연스러운 표현이 됩니다.' },
          { type: 'example', label: '"who is / which is" 생략', items: [
            { en: '"The man (who is) sitting at the desk..." → "The man sitting at the desk..."', ko: '"who is" 생략 → 현재분사(-ing)만 남김 — 더 간결' },
            { en: '"A woman (who is) dressed in formal attire..." → "A woman dressed in formal attire..."', ko: '"who is" 생략 → 과거분사(p.p.)만 남김' },
          ]},
          { type: 'tip', icon: '🎯', text: 'Part 1에서 "A person who is + -ing + 위치" 패턴을 반복 연습하세요. "A man who is wearing a white shirt is talking on the phone." 같은 문장이 자동으로 나오면 고득점입니다.' }
        ]
      },
      {
        id: 'g7l2', title: '관계부사와 분사구문', duration: '7분',
        content: [
          { type: 'text', text: '관계부사(where, when, why)는 장소·시간·이유 정보를 절로 이어주는 역할을 합니다. 분사구문은 두 문장을 이유·배경·순서 관계로 간결하게 연결합니다. 두 구조 모두 원어민 말투에서 자주 쓰이며, 자연스럽게 나오면 점수가 눈에 띄게 올라갑니다.' },
          { type: 'heading', text: '관계부사 — 장소·시간·이유 연결' },
          { type: 'table',
            headers: ['관계부사', '선행사', '예문'],
            rows: [
              ['where', '장소 명사', '"The city where I grew up is Seoul." (= the city in which I grew up)'],
              ['when', '시간 명사', '"The day when I started this job was memorable." (= the day on which)'],
              ['why', 'the reason', '"The reason why I prefer this option is its efficiency." (= the reason for which)'],
            ]
          },
          { type: 'heading', text: '분사구문 — 두 동작을 자연스럽게 연결' },
          { type: 'text', text: '분사구문은 접속사 + 주어를 생략하고 동사를 -ing 또는 p.p. 형태로 바꿔 두 문장을 이어주는 방법입니다. 이유·동시 동작·완료 후 동작을 표현할 때 쓰입니다.' },
          { type: 'example', label: '분사구문 예시', items: [
            { en: '"Working remotely, I can manage my own schedule."', ko: '= "Because I work remotely" — 이유를 앞에 두는 분사구문' },
            { en: '"Having finished the report, she went home."', ko: '= "After she had finished" — 완료 후 동작 (Having + p.p.)' },
            { en: '"Looking at the photo, we can see a busy street."', ko: 'Part 1 도입부로 활용 — 사진을 바라보며 묘사 시작' },
          ]},
          { type: 'tip', icon: '💡', text: 'Part 5/6에서 "The reason why I believe this is..." 또는 "Considering the current situation, I think..." 같은 표현을 도입부에 쓰면 세련되고 논리적인 답변이 됩니다. "Considering"은 분사구문으로 전제 조건을 제시하는 자연스러운 표현입니다.' }
        ]
      },
      {
        id: 'g7l3', title: '수동태 — be + p.p. 완전 정리', duration: '8분',
        content: [
          { type: 'text', text: '수동태는 "누가 했는지"보다 "무엇이 되었는지·어떤 상태인지"가 중요할 때 씁니다. "The meeting was held"처럼 누가 열었는지보다 회의가 열렸다는 사실이 중요할 때 자연스럽게 수동태가 나옵니다. 사진 묘사, 상황 설명, 사회적 현상 언급 시 매우 유용합니다.' },
          { type: 'heading', text: '수동태 시제별 형태' },
          { type: 'table',
            headers: ['시제', '형태', '예문'],
            rows: [
              ['현재', 'is/are + p.p.', '"The meeting is held every Monday."'],
              ['과거', 'was/were + p.p.', '"The report was submitted yesterday."'],
              ['현재완료', 'has/have been + p.p.', '"The meeting has been rescheduled to next Friday."'],
              ['미래', 'will be + p.p.', '"The issue will be resolved soon."'],
              ['진행', 'is/are being + p.p.', '"The documents are being reviewed right now."'],
            ]
          },
          { type: 'heading', text: 'TOEIC Speaking 파트별 수동태 활용' },
          { type: 'example', label: '파트별 수동태', items: [
            { en: '"The meeting has been rescheduled to next Friday." (Part 4)', ko: '상황 변경 설명 — 현재완료 수동태 (변경된 현재 상태 강조)' },
            { en: '"The photo was taken in what appears to be an office." (Part 1)', ko: '사진 자체 묘사 — 과거 수동태' },
            { en: '"Remote work is considered one of the biggest trends." (Part 5/6)', ko: '사회적 사실·통념 — 현재 수동태 (is considered = 여겨진다)' },
            { en: '"The problem is being handled by the team." (Part 4)', ko: '지금 처리 중인 상황 — 진행 수동태' },
          ]},
          { type: 'tip', icon: '⚠️', text: '수동태에서 "by + 행위자"는 행위자가 중요하고 새로운 정보일 때만 씁니다. "by someone" / "by people" 처럼 불특정하거나 명확하지 않은 행위자는 생략하는 것이 더 자연스럽습니다. 예: "The meeting was scheduled." (O) / "The meeting was scheduled by someone." (X)' }
        ]
      },
      {
        id: 'g7l4', title: '동명사 vs 부정사 — 헷갈리지 않는 법', duration: '7분',
        content: [
          { type: 'text', text: '동명사(-ing)와 부정사(to + 동사원형)는 둘 다 명사처럼 쓰이지만, 앞에 오는 동사에 따라 어떤 것을 써야 하는지 고정되어 있습니다. 규칙은 없고 암기가 필요하지만, 그룹별로 묶어 외우면 훨씬 쉽습니다.' },
          { type: 'heading', text: '동명사만 목적어로 취하는 동사' },
          { type: 'text', text: '이 동사들은 이미 일어난 일, 현실적인 일, 중단·회피와 관련된 뜻을 가집니다.' },
          { type: 'example', label: '동명사 동사 목록 (enjoy + -ing)', items: [
            { en: 'enjoy + -ing: "I enjoy working with people."', ko: '좋아하다 → 동명사 (enjoy to work → 오류)' },
            { en: 'finish + -ing: "I finished preparing the report."', ko: '끝내다 → 이미 하고 있던 일을 마무리' },
            { en: 'avoid + -ing / mind + -ing / consider + -ing', ko: '피하다·꺼리다·고려하다 → 모두 동명사' },
            { en: 'suggest + -ing: "I suggest taking a different approach."', ko: 'suggest — 동명사만 가능 (suggest to take → 오류)' },
            { en: 'keep + -ing: "Keep practicing every day."', ko: '계속하다 → 동명사 (계속 진행 중인 동작)' },
          ]},
          { type: 'heading', text: '부정사만 목적어로 취하는 동사' },
          { type: 'text', text: '이 동사들은 미래의 일, 의도·계획·바람과 관련된 뜻을 가집니다.' },
          { type: 'example', label: '부정사 동사 목록 (want + to)', items: [
            { en: 'want / decide / plan / choose + to: "I want to improve my English."', ko: '의지·결정·계획 → 부정사 (아직 안 했지만 하려는 것)' },
            { en: 'hope / wish + to: "I hope to achieve a high score."', ko: '소망 → 부정사' },
            { en: 'need / afford + to: "You need to submit the form by Friday."', ko: '필요·여유 → 부정사' },
            { en: 'promise / agree + to: "I promise to call you back."', ko: '약속·동의 → 부정사' },
          ]},
          { type: 'heading', text: '둘 다 가능하지만 의미가 다른 동사' },
          { type: 'table',
            headers: ['동사', '동명사 (-ing) 의미', '부정사 (to) 의미'],
            rows: [
              ['remember', '"I remember meeting her." (과거에 만난 것을 기억)', '"Remember to call him." (앞으로 전화할 것을 기억)'],
              ['stop', '"I stopped smoking." (완전히 그만둠)', '"I stopped to smoke." (잠깐 멈추고 담배 피움)'],
              ['try', '"I tried opening the window." (창문 여는 것을 시도해 봄)', '"I tried to open it." (열려고 노력했지만 못 열었을 수도)'],
            ]
          },
          { type: 'tip', icon: '💡', text: '두 그룹 암기법: enjoy·finish·avoid·consider·keep·suggest → 동명사(-ing) / want·plan·hope·decide·need·promise → 부정사(to). 이 두 그룹만 외우면 80% 해결됩니다. remember·stop·try는 의미 차이가 있으니 각각 예문과 함께 외우세요.' }
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
        id: 'g8l1', title: '등위·종속 접속사 — 문장을 논리적으로 연결', duration: '10분',
        content: [
          { type: 'text', text: '짧은 단문을 나열하면 IL(낮은 점수) 수준으로 평가됩니다. 접속사로 문장을 연결하면 한 번에 더 많은 정보를 전달하면서 논리적이고 유창하게 들립니다. 단순히 이어 붙이는 것이 아니라, 어떤 논리 관계인지 정확히 전달하는 것이 핵심입니다. 등위 접속사는 문법적으로 "동등한" 두 절을 나란히 이어주고, 종속 접속사는 한쪽 절을 다른 쪽 절에 "종속(의존)"시켜 이유·시간·조건 같은 배경 정보로 붙여줍니다.' },
          { type: 'heading', text: '등위 접속사 (FANBOYS) — 동등한 두 절 연결' },
          { type: 'table',
            headers: ['접속사', '의미', 'TOEIC 예문'],
            rows: [
              ['and', '그리고 (추가)', '"I enjoy reading and traveling."'],
              ['but', '하지만 (대조)', '"The office is small, but comfortable."'],
              ['or', '또는 (선택)', '"You can call or send an email."'],
              ['so', '그래서 (결과)', '"It was raining, so I stayed home."'],
              ['yet', '그러나 (격식·강한 대조)', '"The task is difficult, yet rewarding."'],
            ]
          },
          { type: 'tip', icon: '💡', text: '등위 접속사는 앞뒤 두 절이 문법적으로 동등한 지위(독립절 + 독립절)를 가집니다. 반면 종속 접속사가 이끄는 절은 그 자체로 완전한 문장이 아니라 주절에 붙는 부가 정보입니다 — 이 차이 때문에 종속절만 따로 떼어 문장을 시작하면(예: "Because it is better.") 불완전한 문장(fragment)이 됩니다.' },
          { type: 'heading', text: '종속 접속사 — 이유·시간·조건·양보' },
          { type: 'table',
            headers: ['종류', '접속사', '예문'],
            rows: [
              ['이유', 'because / since / as', '"I prefer it because it saves time." (because가 가장 직접적 이유)'],
              ['시간', 'when / while / after / before / as soon as', '"While I was walking, I saw the accident."'],
              ['조건', 'if / unless', '"If you need help, please let me know."'],
              ['양보', 'although / even though / while', '"Although it is expensive, it is worth it."'],
              ['목적', 'so that / in order to', '"I practice daily so that I can improve."'],
            ]
          },
          { type: 'example', label: '이유 접속사 뉘앙스 — because vs. since vs. as', items: [
            { en: '"I prefer remote work because it saves commuting time."', ko: 'because — 가장 직접적이고 강한 인과관계. 상대방이 아직 모르는 "새로운 이유"를 제시할 때 씀. 답변의 핵심 이유를 말할 땐 because가 가장 자연스럽습니다.', detail: 'because는 원인·결과의 연결이 뚜렷해서 이유를 묻는 질문(Why...?)에 대한 직접 답으로 가장 많이 쓰입니다.' },
            { en: '"Since the office is close to my house, I usually walk to work."', ko: 'since — 이유이면서 동시에 "이미 알려져 있거나 명백한 사실"을 배경으로 깔 때 씀. because보다 강조가 약하고, 문장 맨 앞에 자주 옵니다.', detail: '시간의 since(~이후로)와 헷갈리지 않도록 주의 — 문맥상 이유를 나타낼 땐 보통 문두에서 배경 설명으로 쓰입니다.' },
            { en: '"As it was raining, the event was moved indoors."', ko: 'as — since와 비슷하게 가벼운 이유를 나타내지만 더 격식적·문어적인 느낌. because보다 인과관계가 약하고 구어에서는 상대적으로 덜 쓰입니다.', detail: 'as는 "~할 때(시간)"의 뜻도 있어 문맥에 따라 이유인지 시간인지 헷갈릴 수 있으니 스피킹 시험에서는 이유가 명확한 because를 우선 사용하는 것이 안전합니다.' },
          ]},
          { type: 'example', label: '시간 접속사 뉘앙스 — when / while / after / before / as soon as', items: [
            { en: '"When I arrived at the office, the meeting had already started."', ko: 'when — 특정 시점("~할 때")을 가리킴. 한 사건이 일어난 순간을 기준으로 다른 일이 일어남을 나타냅니다.' },
            { en: '"While I was preparing the report, my colleague called me."', ko: 'while — 두 동작이 동시에 진행됨("~하는 동안")을 강조. 배경이 되는 동작은 보통 진행형(was -ing)과 함께 씁니다.' },
            { en: '"After finishing the project, the team took a short break."', ko: 'after — "~한 후에", 순서상 뒤에 일어나는 일을 나타냄. 앞선 동작이 완전히 끝난 뒤 다음 동작이 이어집니다.' },
            { en: '"Before submitting the form, please double-check your information."', ko: 'before — "~하기 전에", 순서상 앞서는 동작을 나타냄. after와 정반대의 시간 관계입니다.' },
            { en: '"As soon as I received the email, I replied immediately."', ko: 'as soon as — "~하자마자", 두 동작 사이의 즉시성(시간차가 거의 없음)을 강조. when보다 훨씬 더 빠른 반응을 나타냅니다.' },
          ]},
          { type: 'example', label: '조건 접속사 뉘앙스 — if vs. unless', items: [
            { en: '"If you need any help, please let me know."', ko: 'if — "만약 ~라면", 긍정적인 조건을 제시. 그 조건이 충족되면 결과가 따라온다는 가장 기본적인 조건문입니다.' },
            { en: '"You won\'t pass the interview unless you prepare thoroughly."', ko: 'unless — "~하지 않는다면" (= if...not). 부정 조건을 나타내며, 그 예외적인 상황이 아니면 결과가 성립한다는 뉘앙스가 강합니다. if...not보다 더 단정적이고 격식 있게 들립니다.' },
          ]},
          { type: 'example', label: '양보 접속사 뉘앙스 — although vs. even though vs. while', items: [
            { en: '"Although the project was challenging, we finished it on time."', ko: 'although — "~에도 불구하고", 가장 일반적이고 격식 있는 양보 표현. 앞뒤 내용이 대조되지만 감정적 강조는 크지 않습니다.' },
            { en: '"Even though the deadline was tight, the team delivered high-quality work."', ko: 'even though — although보다 대조·놀라움을 더 강하게 강조. "그럼에도 불구하고 실제로 그랬다"는 의외성을 부각할 때 씁니다.' },
            { en: '"While some employees prefer working from home, others enjoy the office environment."', ko: 'while — 양보보다는 "~인 반면"이라는 대조의 의미로 자주 쓰임. 시간 접속사(~하는 동안)와 형태가 같으니 문맥으로 구분해야 합니다.' },
          ]},
          { type: 'heading', text: '상관 접속사 — 고득점 표현 (두 항목을 짝으로 연결)' },
          { type: 'text', text: '상관 접속사는 두 개의 단어·구·절을 대등하게 짝지어 연결하는 표현으로, 단순 나열보다 훨씬 세련되고 논리적으로 들립니다. 각 짝마다 강조하는 방향과 수 일치(동사의 단/복수) 규칙이 다르므로 함께 익혀야 합니다.' },
          { type: 'example', label: '상관 접속사 뜻과 쓰임', items: [
            { en: '"Not only does it save time, but it also reduces costs."', ko: 'not only A but also B — "A뿐만 아니라 B도" (A, B 둘 다 강조, B 쪽에 조금 더 무게). not only가 문두로 나오면 주어·동사가 도치(does it)되는 점에 주의.', detail: '두 가지 장점·이유를 한 문장에 압축해 강조하고 싶을 때 가장 고득점 표현으로 꼽힙니다.' },
            { en: '"Either you contact them directly, or I can help you send an email."', ko: 'either A or B — "A 또는 B 둘 중 하나" — 두 선택지를 대등한 비중으로 제시. 동사는 B(더 가까운 주어)에 수를 맞춥니다.', detail: '둘 다 가능한 선택지를 균형 있게 제안할 때 사용 — Part 4 해결책 제시에 유용합니다.' },
            { en: '"Neither the manager nor the employees were informed about the change."', ko: 'neither A nor B — "A도 B도 아닌" — 두 대상을 동시에 부정. 동사는 either/or와 마찬가지로 B에 수 일치.', detail: 'not...either A or B와 같은 의미이지만 neither/nor 자체에 부정의 의미가 이미 포함되어 있어 not을 따로 쓰지 않습니다.' },
            { en: '"Both communication and time management are essential skills."', ko: 'both A and B — "A와 B 둘 다" — 두 항목을 동등하게 중요한 것으로 함께 언급. 동사는 항상 복수형.', detail: '두 요소를 나열이 아니라 "둘 다 똑같이 중요하다"고 강조하고 싶을 때 씁니다.' },
            { en: '"The issue was not the budget but the schedule."', ko: 'not A but B — "A가 아니라 B" — A를 부정하고 진짜 핵심은 B라고 명확히 대비시켜 강조.', detail: '오해를 바로잡거나 진짜 원인·이유를 짚어줄 때 효과적인 표현입니다.' },
          ]},
          { type: 'tip', icon: '⚠️', text: 'because는 문장 중간(절 앞)에만 씁니다. ❌ "I prefer A. Because it is better." → ✅ "I prefer A because it is better." 또는 "The reason is that it is better." because로 새 문장을 시작하면 불완전한 문장(fragment)이 되어 감점입니다.' }
        ]
      },
      {
        id: 'g8l2', title: '연결 부사 — 논리 흐름을 만드는 표현들', duration: '7분',
        content: [
          { type: 'text', text: '연결 부사는 접속사와 달리 두 문장을 문법적으로 연결하지는 않지만, 앞뒤 문장의 논리 관계를 명확히 알려줍니다. "First... Furthermore... However... Overall..." 같은 틀을 만들면 어떤 주제든 구조적인 답변이 됩니다.' },
          { type: 'heading', text: '기능별 연결 부사 정리' },
          { type: 'example', label: '연결 부사 분류', items: [
            { en: 'First, / Second, / Finally, / Lastly,', ko: '첫째로 / 둘째로 / 마지막으로 / 끝으로 ✦ 순서 나열 — 이유나 단계를 번호처럼 정리할 때' },
            { en: 'In addition, / Furthermore, / Moreover, / What is more,', ko: '또한 / 더 나아가 / 더욱이 / 게다가 ✦ 추가 정보 — "게다가, 더불어"로 두 번째 이유 도입' },
            { en: 'However, / On the other hand, / In contrast, / That said,', ko: '하지만 / 반면에 / 대조적으로 / 그렇긴 해도 ✦ 반론 도입 — "하지만, 반면에"로 균형 잡힌 의견 표현' },
            { en: 'Therefore, / As a result, / Consequently, / Thus,', ko: '따라서 / 그 결과 / 결과적으로 / 그러므로 ✦ 결론·결과 도입' },
            { en: 'For example, / For instance, / To illustrate,', ko: '예를 들어 / 예를 들면 / 예를 들어 설명하자면 ✦ 예시 도입' },
            { en: 'In conclusion, / To sum up, / Overall, / In summary,', ko: '결론적으로 / 요약하자면 / 전반적으로 / 정리하자면 ✦ 마무리 도입 — 답변 끝을 자연스럽게 닫을 때' },
          ]},
          { type: 'heading', text: 'Part 5/6 답변 구조에 연결 부사 적용' },
          { type: 'structure', steps: [
            { num: '도입', title: '입장 표명 (1문장)', desc: '"I believe that remote work is beneficial for employees."' },
            { num: '이유 1', title: 'First, + 첫 번째 이유 (1~2문장)', desc: '"First, it saves commuting time and reduces daily stress significantly."' },
            { num: '이유 2', title: 'Furthermore, + 추가 이유 (1~2문장)', desc: '"Furthermore, it allows employees to create a more focused work environment."' },
            { num: '반론 인정', title: 'That said, / However, + 양보 (1문장)', desc: '"That said, some employees may struggle with staying motivated at home."' },
            { num: '결론', title: 'Overall, / In conclusion, + 마무리 (1문장)', desc: '"Overall, the benefits of remote work far outweigh the drawbacks."' },
          ]},
          { type: 'tip', icon: '🎯', text: '"First... Furthermore... However... Overall..." — 이 4단계 구조를 어떤 주제에도 적용할 수 있도록 암기하세요. 내용이 조금 약하더라도 논리 구조가 명확하면 IH 수준의 답변처럼 들립니다.' }
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
          { type: 'text', text: '명사절은 절(문장 덩어리) 전체가 하나의 명사 역할을 하는 구조입니다. 예를 들어 "I believe that communication is key."에서 "that communication is key" 전체가 believe의 목적어입니다. 이 구조를 자유롭게 쓰면 문장이 길어지고 생각이 더 정교하게 표현됩니다.' },
          { type: 'heading', text: '명사절의 종류와 역할' },
          { type: 'table',
            headers: ['접속사', '역할', '예문 / 한글 해석'],
            rows: [
              ['that', '목적어·주어·보어로 사용 가능', '"I believe that communication is key." (목적어)\n→ 저는 소통이 핵심이라고 믿습니다.'],
              ['what', '주어 또는 목적어 역할 (선행사 포함)', '"What I find interesting is the variety of options." (주어)\n→ 제가 흥미롭다고 생각하는 것은 선택지의 다양함입니다.'],
              ['whether / if', '목적어 — 간접의문문(~인지 아닌지)', '"I wonder whether this approach will work."\n→ 저는 이 방법이 효과가 있을지 궁금합니다.'],
              ['wh- 의문사', '목적어 — 간접의문문(무엇·언제·왜)', '"I don\'t know why the meeting was cancelled."\n→ 저는 왜 회의가 취소되었는지 모릅니다.'],
            ]
          },
          { type: 'example', label: '명사절 활용 — 의견을 정교하게 표현', items: [
            { en: '"What I believe is that hard work always pays off."', ko: '제가 믿는 것은 열심히 노력하면 반드시 보답이 온다는 것입니다. ✦ "What I ~ is that ..." 패턴 — 내 핵심 신념을 강조해서 시작하는 구조' },
            { en: '"It is clear that communication is essential in the workplace."', ko: '직장에서 소통이 필수적이라는 것은 분명합니다. ✦ "It is + 형용사 + that ..." — 가주어(It) 구문으로 자연스럽게 강조' },
            { en: '"The fact that remote work is becoming more common suggests a major shift."', ko: '재택근무가 점점 보편화되고 있다는 사실은 큰 변화를 시사합니다. ✦ "The fact that ..." — "that절"이 fact와 동격, 고급 명사절 구조' },
          ]},
          { type: 'tip', icon: '💡', text: '이 세 패턴은 답변 도입부에 즉시 활용 가능합니다: "I think that...", "I believe that...", "It is important that..." / "What I find most important is..." — 입에 붙을 때까지 반복 연습하세요.' }
        ]
      },
      {
        id: 'g9l2', title: '강조 구문 — It is~that / What I~ 완전 정복', duration: '10분',
        content: [
          { type: 'text', text: '강조 구문은 평범한 문장에서 핵심 정보를 앞으로 끌어내어 청자의 주의를 집중시키는 고급 문법입니다. 내용은 같지만 "무엇을 강조하느냐"에 따라 문장의 무게가 달라집니다. IH·AL 채점관은 이 구조가 자연스럽게 나오는지를 봅니다.' },
          { type: 'heading', text: '① It is ~ that 강조 구문 — 구조 공식' },
          { type: 'text', text: '공식: It is/was + [강조할 요소] + that + [나머지 문장]\n강조하고 싶은 부분(주어·목적어·부사구)을 "It is"와 "that" 사이에 끼워 넣으면 됩니다. 과거 사건이면 "It was"를 씁니다.' },
          { type: 'table',
            headers: ['강조 대상', '원래 문장', '강조 구문', '한글 해석'],
            rows: [
              ['주어 강조', '"Communication skills make a difference."', '"It is communication skills that make a difference."', '차이를 만드는 것은 바로 소통 능력입니다.'],
              ['목적어 강조', '"Employers value teamwork the most."', '"It is teamwork that employers value the most."', '고용주가 가장 중시하는 것은 바로 팀워크입니다.'],
              ['부사구 강조', '"The pandemic changed everything in 2020."', '"It was in 2020 that the pandemic changed everything."', '팬데믹이 모든 것을 바꾼 것은 바로 2020년이었습니다.'],
              ['원인 강조', '"Stress leads to lower productivity."', '"It is stress that leads to lower productivity."', '생산성을 떨어뜨리는 것은 바로 스트레스입니다.'],
            ]
          },
          { type: 'heading', text: '② What I ~ 강조 패턴 — 의견을 앞으로 끌어내기' },
          { type: 'text', text: '"What I ..."는 "내가 ~하는 것은"이라는 뜻으로, 자신의 핵심 생각을 문장 맨 앞에 배치하는 고급 구조입니다. 답변 첫 문장으로 쓰면 강한 첫인상을 줍니다.' },
          { type: 'example', label: 'What I ~ 핵심 패턴 5가지', items: [
            { en: '"What I find most important is teamwork and clear communication."', ko: '제가 가장 중요하다고 생각하는 것은 팀워크와 명확한 소통입니다. ✦ find + 형용사 — 평가·판단을 앞에 제시' },
            { en: '"What I believe is that a positive attitude leads to better results."', ko: '제가 믿는 것은 긍정적인 태도가 더 나은 결과를 가져온다는 것입니다. ✦ believe + that절 — 신념을 강하게 표현' },
            { en: '"What I value most in a workplace is a collaborative environment."', ko: '제가 직장에서 가장 중시하는 것은 협력적인 분위기입니다. ✦ value most — 우선순위를 명확히 제시' },
            { en: '"What surprises me is how quickly technology is changing our lives."', ko: '저를 놀라게 하는 것은 기술이 우리 삶을 얼마나 빠르게 바꾸고 있는가입니다. ✦ surprises me — 감정 반응으로 생동감 부여' },
            { en: '"What makes this job rewarding is the opportunity to help others."', ko: '이 일을 보람있게 만드는 것은 다른 사람을 도울 수 있는 기회입니다. ✦ makes ~ rewarding — 가치 표현에 효과적' },
          ]},
          { type: 'heading', text: '③ 흔한 실수 & 주의사항' },
          { type: 'table',
            headers: ['틀린 예', '올바른 예', '이유'],
            rows: [
              ['"It is that communication is important."', '"It is communication that is important."', 'that 앞에 반드시 강조할 명사/부사구가 있어야 함'],
              ['"It is communication skills is important."', '"It is communication skills that are important."', '"that" 생략 불가, 동사도 수 일치 필요'],
              ['"What I find it interesting..."', '"What I find interesting is..."', 'find 뒤에 목적어 it 불필요, 보어만 씀'],
              ['"What I believe that teamwork is key."', '"What I believe is that teamwork is key."', '"is" 누락 — What절 + is + that절 구조 필수'],
            ]
          },
          { type: 'tip', icon: '💡', text: '처음에는 "It is ~ that"과 "What I find ~" 둘 중 하나만 골라 완벽하게 익히세요. 두 구조를 한 답변에 모두 쓰려다 문법 오류가 나면 오히려 감점입니다. 하나를 자동으로 쓸 수 있게 된 뒤 나머지를 추가하세요.' }
        ]
      },
      {
        id: 'g9l3', title: '도치 & 분사구문 — IH·AL 유창성의 핵심', duration: '10분',
        content: [
          { type: 'text', text: '도치(Inversion)와 분사구문(Participial Phrase)은 원어민이 문장에 강조·리듬·간결함을 더할 때 자연스럽게 쓰는 고급 구조입니다. 도치는 강조, 분사구문은 유창한 연결이 목적입니다. 각각 하나씩만 익혀도 IH→AL 점프에 직접적인 영향을 줍니다.' },
          { type: 'heading', text: '① 부정어 도치 — Not only, Never, Rarely, Seldom' },
          { type: 'text', text: '공식: 부정어/빈도부사 + 조동사(do/does/did/can/will) + 주어 + 동사원형\n부정어를 문장 맨 앞에 놓으면 주어와 조동사의 위치가 뒤집힙니다. 이 구조 하나로 문장이 즉시 고급스럽게 들립니다.' },
          { type: 'table',
            headers: ['부정어', '도치 공식', '예문', '한글 해석'],
            rows: [
              ['Not only', 'Not only + does/did + 주어 + V', '"Not only does remote work save time, but it also reduces stress."', '재택근무는 시간을 절약할 뿐만 아니라 스트레스도 줄여줍니다.'],
              ['Never', 'Never + have/has + 주어 + p.p.', '"Never have I seen such rapid technological advancement."', '저는 이처럼 빠른 기술 발전을 본 적이 없습니다.'],
              ['Rarely', 'Rarely + do/does + 주어 + V', '"Rarely do we get a chance to develop both technical and social skills."', '기술적·사회적 역량을 동시에 키울 기회는 좀처럼 없습니다.'],
              ['Seldom', 'Seldom + do/does + 주어 + V', '"Seldom does a single decision impact the entire team so significantly."', '단 하나의 결정이 팀 전체에 이토록 큰 영향을 미치는 경우는 드뭅니다.'],
            ]
          },
          { type: 'example', label: 'Not only ~ but also 변환 연습 (일반 → 도치)', items: [
            { en: '일반: "Exercise not only improves health, but it also boosts mood."\n도치: "Not only does exercise improve health, but it also boosts mood."', ko: '운동은 건강을 개선할 뿐만 아니라 기분도 향상시킵니다. ✦ does가 앞으로 이동, 동사는 원형(improve)으로' },
            { en: '일반: "The new policy did not only reduce costs, but also increased efficiency."\n도치: "Not only did the new policy reduce costs, but it also increased efficiency."', ko: '새 정책은 비용을 절감했을 뿐 아니라 효율도 높였습니다. ✦ 과거면 did 사용' },
          ]},
          { type: 'heading', text: '② 분사구문 — 문장을 유창하게 연결하는 고급 구조' },
          { type: 'text', text: '분사구문은 "접속사 + 주어"를 분사(-ing / p.p.)로 압축하여 더 세련되고 자연스러운 영어를 만드는 구조입니다. 배경·경험·전제를 한 덩어리로 앞에 제시하고, 핵심 주장으로 이어집니다.' },
          { type: 'example', label: 'Having p.p. — 경험을 앞에 제시하는 완료 분사구문', items: [
            { en: '"Having worked in various industries, I can say that communication is the most important skill."', ko: '다양한 업계에서 일해본 경험으로 미루어, 소통이 가장 중요한 역량이라고 말할 수 있습니다. ✦ "Having + p.p." = 경험·완료된 사실을 배경으로 제시' },
            { en: '"Having studied both online and offline, I believe blended learning is more effective."', ko: '온라인과 오프라인 모두 경험해본 결과, 혼합형 학습이 더 효과적이라고 생각합니다. ✦ 비교 경험을 근거로 의견 제시할 때 강력함' },
          ]},
          { type: 'example', label: 'Given (that) — 전제·배경을 간결하게 제시', items: [
            { en: '"Given the rapid development of technology, it is essential to adapt quickly."', ko: '기술이 빠르게 발전하고 있는 상황을 고려하면, 빠르게 적응하는 것이 필수적입니다. ✦ "Given + 명사구" 또는 "Given that + 절" 모두 가능' },
            { en: '"Given that many companies now operate globally, cross-cultural communication skills are critical."', ko: '많은 기업이 이제 글로벌하게 운영된다는 점을 감안하면, 다문화 소통 역량은 매우 중요합니다.' },
          ]},
          { type: 'example', label: '마무리 분사구문 — 답변 끝을 격조있게 닫기', items: [
            { en: '"All things considered, I believe remote work is the future of modern business."', ko: '모든 면을 고려했을 때, 재택근무가 현대 비즈니스의 미래라고 생각합니다. ✦ 결론 첫 문장으로 사용하면 AL 수준의 마무리' },
            { en: '"Considering all the factors mentioned, flexible working arrangements seem to be the most practical solution."', ko: '언급한 모든 요소들을 고려하면, 유연한 근무 형태가 가장 현실적인 해결책으로 보입니다.' },
          ]},
          { type: 'heading', text: '③ 도치 & 분사구문 — 답변 구조 속 배치 전략' },
          { type: 'structure', steps: [
            { num: '도입', title: 'What I ~ 또는 It is ~ that으로 시작', desc: '"What I find most important about this topic is that flexibility plays a key role."' },
            { num: '이유 1', title: 'Having p.p. 로 경험·배경 제시', desc: '"Having experienced both environments, I can confidently say that a collaborative setting boosts creativity."' },
            { num: '이유 2', title: 'Not only ~ but also 도치로 두 번째 근거 강조', desc: '"Not only does it improve individual performance, but it also strengthens team dynamics."' },
            { num: '반론', title: 'Given that + 양보', desc: '"Given that some people thrive in independent settings, personal preference should also be considered."' },
            { num: '결론', title: 'All things considered 분사구문으로 마무리', desc: '"All things considered, I firmly believe that a balanced approach leads to the best outcomes."' },
          ]},
          { type: 'tip', icon: '🏆', text: '도치는 답변 1회, 분사구문은 도입부와 결론에 1회씩 — 총 3개 이내가 자연스럽습니다. 억지로 넣은 구조는 채점관이 즉시 알아챕니다. "Not only does...", "Having worked...", "All things considered" 이 세 문장을 주제와 무관하게 즉시 말할 수 있을 때까지 반복 연습하세요.' }
        ]
      },
      {
        id: 'g9l4', title: '기본 vs 고급 답변 비교 — 수준별 문법 총정리', duration: '9분',
        content: [
          { type: 'text', text: '같은 주제라도 어떤 문법 구조와 어휘를 쓰느냐에 따라 IL, IM, IH, AL이 결정됩니다. 단순히 단어를 바꾸는 것이 아니라, 문장 구조 자체가 달라져야 점수가 오릅니다. 아래 비교를 통해 자신의 현재 수준을 파악하고 목표 수준의 구조를 연습하세요.' },
          { type: 'heading', text: '수준별 답변 비교 — 원격 근무에 대한 의견' },
          { type: 'table',
            headers: ['수준', '예문', '특징'],
            rows: [
              ['IL (100~120)', '"I like working at home. It is good. I save time."', '단문 나열, 단순 어휘(good/like), 연결어 없음, 이유 없음'],
              ['IM (130~150)', '"I prefer working from home because it is more convenient. Also, I can save commuting time."', '비교급 사용, 이유절(because), 기본 연결어(also), 관사 오류 없음'],
              ['IH (160~180)', '"What I find most appealing about remote work is that it not only reduces commuting stress but also allows for a more focused work environment. Furthermore, studies suggest that employees tend to be more productive when working from home."', '강조구문(What I find), 상관접속사(not only...but also), 연결 부사(Furthermore), 다양한 어휘'],
              ['AL (200)', '"Having worked both remotely and in an office, I firmly believe that remote work, when properly managed, is not only more efficient but can also lead to significantly higher levels of employee satisfaction. That said, it is crucial that companies establish clear communication guidelines to prevent potential isolation."', '경험 분사구문(Having worked), 복잡한 관계절, 양보 표현(That said), 정교하고 다양한 어휘, 오류 없음'],
            ]
          },
          { type: 'heading', text: '점수대별 핵심 문법 체크리스트' },
          { type: 'structure', steps: [
            { num: 'IM 목표', title: '기본 연결어 + 비교급 + 시제 정확성', desc: '✅ because / so / but 자유롭게 사용\n✅ 비교급 (more ~ than / ~er than)\n✅ 관사 오류 없음 (a/an/the)\n✅ 현재·과거 시제 정확히 구분\n✅ 3인칭 단수 -s 빠뜨리지 않기' },
            { num: 'IH 목표', title: '관계절 + 연결 부사 + 강조', desc: '✅ who/which/that 관계절 자연스럽게 사용\n✅ First, Furthermore, However, Overall 연결 부사 구조화\n✅ 수동태 자연스럽게 사용\n✅ 조건문 1형/2형 상황에 맞게 활용\n✅ 어휘 다양성 (very만 반복 금지)' },
            { num: 'AL 목표', title: '고급 구문 + 정교한 어휘 + 오류 0', desc: '✅ 강조 구문 (It is ~ that / What I ~)\n✅ 분사구문 자연스럽게 연결 (Having p.p., Given that)\n✅ 도치 표현 1회 이상 (Not only does...)\n✅ 어휘 반복 없음 — 같은 단어 2번 이상 금지\n✅ 모든 문법 오류 없이 유창하게 마무리' },
          ]},
          { type: 'tip', icon: '🏆', text: '가장 중요한 원칙: 완벽하게 아는 문법을 정확하게 사용하는 것이, 어설프게 고급 구문을 시도하다 실수하는 것보다 점수가 높습니다. 먼저 현재 수준에서 오류를 없애고, 그 다음 한 단계 위 구조를 하나씩 추가하는 전략이 가장 빠른 점수 향상 방법입니다.' }
        ]
      }
    ]
  }

];

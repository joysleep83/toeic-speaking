// ── OPIc 학습 과정 데이터 ─────────────────────────────────────
// 7개 모듈 · 21개 레슨

const OPIC_STUDY_MODULES = [

  // ══════════════════════════════════════════════════════════
  // Module 1 — OPIc 시험 기초
  // ══════════════════════════════════════════════════════════
  {
    id: 'om1', icon: '📋',
    title: 'OPIc 시험 기초',
    subtitle: '시험 구조 · 등급 체계 · 학습 전략',
    color: '#0D9488',
    lessons: [
      {
        id: 'om1l1', title: 'OPIc이란 무엇인가', duration: '5분',
        content: [
          { type: 'text', text: 'OPIc(Oral Proficiency Interview - computer)은 미국 ACTFL이 개발한 영어 말하기 능력 평가 시험입니다. 사전에 작성한 Background Survey(배경 설문)를 기반으로 개인화된 질문이 출제되므로, 자신이 실제로 경험한 내용으로 자연스럽게 답변할 수 있습니다.' },
          { type: 'heading', text: '시험 기본 정보' },
          { type: 'table',
            headers: ['항목', '내용'],
            rows: [
              ['총 시간', '약 40분 (오리엔테이션 20분 + 시험 20분)'],
              ['문항 수', '12~15문항 (난이도별 조절)'],
              ['난이도 선택', '시험 시작 전 본인이 1~6단계 중 선택'],
              ['주관', '미국 ACTFL / 한국 OPIC위원회'],
              ['유효기간', '2년'],
              ['결과 등급', 'NH → NM → NL → IL → IM1~3 → IH → AL']
            ]
          },
          { type: 'heading', text: 'Background Survey (배경 설문)' },
          { type: 'text', text: '시험 전 오리엔테이션에서 본인의 생활 배경을 묻는 설문을 작성합니다. 직업, 거주 형태, 취미, 관심 있는 여가 활동 등을 선택하면 시험에서 그와 관련된 질문이 출제됩니다.' },
          { type: 'list', items: [
            '✅ 자신이 잘 아는 주제를 최대한 많이 선택하세요',
            '✅ 여행, 음악, 운동 등 경험이 풍부한 항목을 고르세요',
            '✅ 롤플레이 질문은 항목과 무관하게 출제될 수 있습니다'
          ]},
          { type: 'tip', icon: '💡', text: 'OPIc은 정해진 스크립트를 평가하는 시험이 아닙니다. 자연스러운 대화 능력을 평가하므로, 외운 답변보다 자신의 언어로 유창하게 말하는 것이 핵심입니다.' }
        ]
      },
      {
        id: 'om1l2', title: '등급 체계와 목표 설정', duration: '5분',
        content: [
          { type: 'text', text: 'OPIc은 9개 등급으로 나뉩니다. Novice(초급) → Intermediate(중급) → Advanced Low(고급) 순으로 올라가며, 각 등급은 수행할 수 있는 과제의 복잡도와 정확성으로 결정됩니다.' },
          { type: 'heading', text: 'OPIc 등급 체계' },
          { type: 'table',
            headers: ['등급', '수준', '특징'],
            rows: [
              ['AL', '최고', '복잡한 주제도 정확하고 유창하게 묘사·설명·논의'],
              ['IH', '중상', '예상치 못한 상황을 설명하고 의견을 논리적으로 전달'],
              ['IM3', '중중', '익숙한 주제에서 단락 수준 발화, 오류 있으나 의미 전달'],
              ['IM2', '중중', 'IM3보다 유창성·정확성 약간 낮음'],
              ['IM1', '중하', '간단한 서술 가능, 짧은 단락으로 말하려 시도'],
              ['IL', '하중', '외운 표현 위주, 기본 정보 나열'],
              ['NH', '하상', '암기된 단어·구문 수준']
            ]
          },
          { type: 'heading', text: '취업 · 학사 기준 가이드' },
          { type: 'table',
            headers: ['목표', '권장 등급'],
            rows: [
              ['일반 공기업·대기업 어학 요건', 'IM2 이상'],
              ['외국계·무역직 지원', 'IH 이상'],
              ['대학원·해외 프로그램', 'IH ~ AL'],
              ['어학 특기자 우대', 'AL']
            ]
          },
          { type: 'tip', icon: '🎯', text: 'IM2~IH는 현실적인 취업 목표입니다. IM1 수준이라면 배경 설문 전략 + 답변 구조화 훈련으로 2~4주 내에 IM2~IH 달성이 충분히 가능합니다.' }
        ]
      },
      {
        id: 'om1l3', title: '난이도 선택 전략', duration: '4분',
        content: [
          { type: 'text', text: '시험 시작 전 1~6단계 중 난이도를 선택합니다. 단계가 높을수록 어려운 질문이 나오지만, IH·AL을 받을 수 있는 기회도 생깁니다. 자신의 실력보다 너무 높거나 낮은 단계를 고르면 손해입니다.' },
          { type: 'heading', text: '난이도 단계별 특징' },
          { type: 'table',
            headers: ['단계', '출제 성향', '도달 가능 등급'],
            rows: [
              ['1~2단계', '쉬운 묘사·나열 질문 위주', 'NH ~ IL'],
              ['3~4단계', '서술·비교·선호 이유 질문', 'IL ~ IM3'],
              ['5~6단계', '경험 서술 + 롤플레이 + 예상치 못한 상황', 'IM3 ~ AL']
            ]
          },
          { type: 'heading', text: '본인에게 맞는 단계 선택법' },
          { type: 'structure', steps: [
            { num: '①', title: 'IM2 이상 목표라면 → 5단계 선택', desc: '5~6단계에서만 IH·AL 등급에 도달할 수 있습니다. 다소 어렵더라도 5단계를 선택하세요.' },
            { num: '②', title: 'IL ~ IM1 수준이라면 → 3~4단계 선택', desc: '자신 있게 말할 수 있는 범위에서 최고 등급을 받는 것이 효율적입니다.' },
            { num: '③', title: '완전 초보라면 → 2~3단계 선택', desc: '무리하지 말고, 아는 단어로 짧게라도 완성도 있게 답하는 것이 중요합니다.' }
          ]},
          { type: 'tip', icon: '⚠️', text: '난이도를 너무 높게 선택하고 제대로 답변하지 못하면 오히려 낮은 등급이 나옵니다. 자신의 현재 수준보다 한 단계 높은 정도로 도전하세요.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 2 — 자기소개 & 일상 묘사
  // ══════════════════════════════════════════════════════════
  {
    id: 'om2', icon: '🙋',
    title: '자기소개 & 일상 묘사',
    subtitle: '직업·루틴·하루 일과 답변 전략',
    color: '#7C3AED',
    lessons: [
      {
        id: 'om2l1', title: '자기소개 답변 구조', duration: '6분',
        content: [
          { type: 'text', text: '"Tell me about yourself." 또는 "Please introduce yourself."는 OPIc의 단골 첫 질문입니다. 70~90초를 목표로 이름, 직업/학교, 거주지, 관심사를 자연스럽게 연결하세요.' },
          { type: 'heading', text: '추천 답변 구조 (4단계)' },
          { type: 'structure', steps: [
            { num: '1', title: '이름 + 직업/학교 (10초)', desc: 'Hi, my name is [이름]. I\'m a [직업] / I\'m a [학년] student at [학교].' },
            { num: '2', title: '거주지 + 생활 환경 (15초)', desc: 'I live in [도시/지역] with my [family/roommate]. I\'ve been living there for about [기간].' },
            { num: '3', title: '관심사·취미 2~3가지 (30초)', desc: 'In my free time, I enjoy [취미1] and [취미2]. I especially love [구체적 활동] because [이유].' },
            { num: '4', title: '마무리 한 문장 (10초)', desc: 'I\'m looking forward to improving my English and [목표/계획].' }
          ]},
          { type: 'heading', text: '고득점 표현 모음' },
          { type: 'example', label: '자기소개 핵심 표현', items: [
            { en: 'I\'ve been working as a [job] for about [기간] now.', ko: '저는 현재 [직업]으로 [기간] 정도 일하고 있습니다.' },
            { en: 'I\'m currently in my [학년]rd year, majoring in [전공].', ko: '현재 [전공]을 전공하는 [학년]학년입니다.' },
            { en: 'I\'m really passionate about [관심사].', ko: '저는 [관심사]에 정말 열정이 있습니다.' },
            { en: 'I tend to spend most of my free time [활동]-ing.', ko: '저는 여가 시간 대부분을 [활동]하며 보내는 편입니다.' }
          ]},
          { type: 'tip', icon: '🎯', text: '자기소개는 시험의 첫인상입니다. 외운 티가 나지 않도록 자신의 실제 정보를 바탕으로 연습하되, 미리 3~4번 소리 내어 연습해 두세요.' }
        ]
      },
      {
        id: 'om2l2', title: '하루 일과·루틴 묘사', duration: '6분',
        content: [
          { type: 'text', text: '"Describe your typical day." 또는 "Tell me about your morning routine." 유형입니다. 시간 순서로 구체적 행동을 나열하면서, 감정·이유를 덧붙여 입체적으로 만드는 것이 핵심입니다.' },
          { type: 'heading', text: '시간 순 흐름 연결 표현' },
          { type: 'example', label: '시간 전환 표현', items: [
            { en: 'First thing in the morning, I usually...', ko: '아침에 일어나면 가장 먼저 저는 보통...' },
            { en: 'After that, I [동사] for about [시간].', ko: '그 다음에는 약 [시간] 동안 [동사]를 합니다.' },
            { en: 'By the time I [동작], it\'s usually around [시간].', ko: '[동작]을 마칠 때쯤이면 보통 [시간]이 됩니다.' },
            { en: 'In the evening, I tend to wind down by [활동]-ing.', ko: '저녁에는 [활동]으로 하루를 마무리하는 편입니다.' },
            { en: 'I try to be in bed by [시간] to get enough rest.', ko: '충분한 휴식을 위해 [시간]까지는 잠자리에 들려고 합니다.' }
          ]},
          { type: 'heading', text: '묘사를 풍부하게 만드는 기술' },
          { type: 'list', items: [
            '단순 나열 ❌ → 이유·감정 추가 ✅ : "I go to the gym." → "I go to the gym every morning because it helps me stay focused throughout the day."',
            '빈도 표현 추가: always / usually / often / sometimes / rarely',
            '구체적 디테일: 장소, 함께하는 사람, 소요 시간을 넣어라',
            '좋고 싫음 표현: "What I like most about my routine is..."'
          ]},
          { type: 'tip', icon: '💡', text: '약 90초 분량의 "나의 하루" 답변을 미리 만들어두세요. 요일·상황에 따라 약간씩 변형하면 많은 질문에 대응할 수 있습니다.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 3 — 집·이웃 묘사
  // ══════════════════════════════════════════════════════════
  {
    id: 'om3', icon: '🏠',
    title: '집·이웃 묘사',
    subtitle: '거주 공간·동네·장소 묘사 전략',
    color: '#059669',
    lessons: [
      {
        id: 'om3l1', title: '집 묘사 답변 전략', duration: '6분',
        content: [
          { type: 'text', text: '"Tell me about your home." 유형은 집의 전체 구조 → 방 구성 → 본인이 가장 좋아하는 공간 → 이유 순서로 전개하면 자연스럽습니다. 단순 나열보다 감정과 이유를 곁들여야 고득점입니다.' },
          { type: 'heading', text: '집 묘사 4단계 구조' },
          { type: 'structure', steps: [
            { num: '1', title: '전체 유형 소개', desc: 'I live in a [apartment / house / studio / dorm]. It\'s located in [지역/동네].' },
            { num: '2', title: '크기와 구성', desc: 'It\'s a [크기] place with [방 개수] rooms. There\'s a living room, kitchen, and [기타 공간].' },
            { num: '3', title: '좋아하는 공간', desc: 'My favorite spot is [공간] because [이유]. I spend most of my time there [활동].' },
            { num: '4', title: '동네/주변 환경', desc: 'The neighborhood is [특징]. There\'s a [편의시설] nearby, which I really appreciate.' }
          ]},
          { type: 'example', label: '집 묘사 핵심 표현', items: [
            { en: 'I live in a cozy two-bedroom apartment on the [층]th floor.', ko: '저는 [층]층에 있는 아늑한 방 두 개짜리 아파트에 살고 있습니다.' },
            { en: 'The living room is quite spacious and gets a lot of natural light.', ko: '거실은 꽤 넓고 자연광이 많이 들어옵니다.' },
            { en: 'What I love most about my place is that it\'s very quiet and peaceful.', ko: '제 집에서 가장 마음에 드는 점은 매우 조용하고 평화롭다는 것입니다.' },
            { en: 'The neighborhood is convenient because there are [편의시설] within walking distance.', ko: '걸어서 닿을 거리에 [편의시설]이 있어서 동네가 편리합니다.' }
          ]},
          { type: 'tip', icon: '💡', text: '본인이 실제로 사는 집을 기준으로 연습하면 더 자연스럽게 말할 수 있습니다. 단, 불필요한 정보(정확한 주소 등)는 생략하세요.' }
        ]
      },
      {
        id: 'om3l2', title: '이웃·동네 묘사', duration: '5분',
        content: [
          { type: 'text', text: '"Describe your neighborhood."는 동네의 분위기, 주변 시설, 장단점을 2~3분 동안 자연스럽게 이야기하는 문제입니다. 장점과 단점을 균형 있게 언급하면 더 자연스러운 답변이 됩니다.' },
          { type: 'example', label: '이웃·동네 묘사 표현', items: [
            { en: 'My neighborhood is [형용사] — it\'s mostly residential but there are some small shops nearby.', ko: '제 동네는 [형용사]입니다. 주로 주거 지역이지만 근처에 작은 가게들도 있습니다.' },
            { en: 'One thing I really like about my area is that there are plenty of [parks / restaurants / cafes] within walking distance.', ko: '제 동네의 가장 좋은 점 하나는 걸어서 갈 수 있는 [공원/식당/카페]가 많다는 것입니다.' },
            { en: 'If I had to mention a downside, I\'d say [단점], but overall it\'s a great place to live.', ko: '단점을 꼽자면 [단점]이지만, 전반적으로는 살기 좋은 곳입니다.' },
            { en: 'I\'ve been living in this neighborhood for [기간], so I know it pretty well by now.', ko: '이 동네에 [기간]째 살고 있어서 이제는 꽤 잘 알고 있습니다.' }
          ]},
          { type: 'tip', icon: '🎯', text: '동네 묘사는 자신이 실제 살고 있는 지역의 특징을 영어로 표현하는 연습을 해두세요. "편의점, 카페, 공원, 지하철역"처럼 자주 등장하는 시설 명칭을 영어로 미리 외워두면 좋습니다.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 4 — 취미·여가 활동
  // ══════════════════════════════════════════════════════════
  {
    id: 'om4', icon: '🎯',
    title: '취미·여가 활동',
    subtitle: '취미·운동·음악·영화 답변 전략',
    color: '#D97706',
    lessons: [
      {
        id: 'om4l1', title: '취미 묘사 답변 구조', duration: '6분',
        content: [
          { type: 'text', text: '"What do you do in your free time?" / "Tell me about your hobby."는 OPIc에서 가장 자주 출제되는 유형입니다. 단순히 취미 이름을 나열하는 것이 아니라, 언제·어디서·왜·어떻게 하는지를 구체적으로 말하는 것이 고득점 포인트입니다.' },
          { type: 'heading', text: '취미 답변 4단계 구조' },
          { type: 'structure', steps: [
            { num: '1', title: '취미 소개', desc: 'One of my favorite hobbies is [취미]. I\'ve been [동사]-ing for about [기간].' },
            { num: '2', title: '구체적 활동 묘사', desc: 'When I [취미를 즐길 때], I usually [구체적 행동]. I tend to do it [빈도] in [장소].' },
            { num: '3', title: '좋아하는 이유', desc: 'What I love most about it is [이유]. It helps me [효과/느낌].' },
            { num: '4', title: '관련 경험 or 계획', desc: 'Recently, I [관련 경험]. In the future, I\'d like to [계획].' }
          ]},
          { type: 'example', label: '취미 관련 핵심 표현', items: [
            { en: 'I\'ve been into [취미] lately, and I really can\'t get enough of it.', ko: '요즘 [취미]에 빠져 있는데, 정말 질리지가 않습니다.' },
            { en: 'It\'s a great way to unwind after a long day at work/school.', ko: '긴 하루를 보낸 뒤 스트레스를 풀기에 정말 좋은 방법입니다.' },
            { en: 'I usually set aside a few hours on weekends just for [취미].', ko: '보통 주말에 [취미]만을 위해 몇 시간을 따로 비워둡니다.' },
            { en: 'The more I [취미]-ed, the more I got hooked on it.', ko: '[취미]를 하면 할수록 더 빠져들게 됐습니다.' }
          ]},
          { type: 'tip', icon: '💡', text: '취미 답변은 "무엇을" 하는지보다 "왜 좋아하는지"가 중요합니다. 개인적인 이유와 감정을 덧붙여야 단순 나열을 넘어서 풍부한 답변이 됩니다.' }
        ]
      },
      {
        id: 'om4l2', title: '음악·영화·운동 묘사', duration: '7분',
        content: [
          { type: 'text', text: 'Background Survey에서 음악, 영화, 운동을 선택했다면 각 주제에 맞는 핵심 표현을 미리 준비해 두세요. 단순히 "I like [장르]."에서 끝내지 말고 구체적인 경험과 감정으로 확장해야 합니다.' },
          { type: 'heading', text: '음악 묘사 핵심 표현' },
          { type: 'example', label: '음악', items: [
            { en: 'I\'m really into [장르] music. My all-time favorite artist is [가수/밴드].', ko: '저는 [장르] 음악을 정말 좋아합니다. 역대 최고로 좋아하는 아티스트는 [가수]입니다.' },
            { en: 'Listening to music helps me concentrate / relax / get energized.', ko: '음악을 들으면 집중이 잘 되고 / 편안해지고 / 활기가 생깁니다.' },
            { en: 'I was completely blown away when I heard [곡/앨범] for the first time.', ko: '[곡/앨범]을 처음 들었을 때 완전히 매료됐습니다.' }
          ]},
          { type: 'heading', text: '영화 묘사 핵심 표현' },
          { type: 'example', label: '영화', items: [
            { en: 'I\'m a big fan of [장르] movies. My favorite film of all time is [영화제목].', ko: '저는 [장르] 영화의 열렬한 팬입니다. 가장 좋아하는 영화는 [제목]입니다.' },
            { en: 'What I like about [장르] movies is that they keep you on the edge of your seat.', ko: '[장르] 영화는 끝까지 긴장감을 놓을 수 없어서 좋습니다.' },
            { en: 'The last movie I watched was [제목], and I thought it was [감상].', ko: '최근에 본 영화는 [제목]인데, [감상]이라고 생각했습니다.' }
          ]},
          { type: 'heading', text: '운동 묘사 핵심 표현' },
          { type: 'example', label: '운동', items: [
            { en: 'I work out about [횟수] times a week. I usually go to the gym / run / play [스포츠].', ko: '저는 일주일에 약 [횟수]번 운동합니다. 주로 헬스장에 가거나 / 달리거나 / [스포츠]를 합니다.' },
            { en: 'Exercise helps me stay in shape and clear my mind.', ko: '운동은 몸매를 유지하고 머리를 맑게 하는 데 도움이 됩니다.' },
            { en: 'I started playing [스포츠] about [기간] ago, and I\'ve been hooked ever since.', ko: '[기간] 전부터 [스포츠]를 시작했는데 그 이후로 완전히 빠졌습니다.' }
          ]},
          { type: 'tip', icon: '⚠️', text: '배경 설문에서 선택한 활동이 실제로 잘 모르는 분야라면 막힐 수 있습니다. 본인이 실제로 경험해본 취미·활동을 중심으로 선택하세요.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 5 — 여행 묘사
  // ══════════════════════════════════════════════════════════
  {
    id: 'om5', icon: '✈️',
    title: '여행 묘사',
    subtitle: '여행 경험 · 장소 묘사 · 여행 선호 전략',
    color: '#0284C7',
    lessons: [
      {
        id: 'om5l1', title: '여행 경험 답변 구조', duration: '6분',
        content: [
          { type: 'text', text: '"Tell me about a memorable trip." 또는 "Describe a place you have visited."는 OPIc 여행 주제의 핵심 질문입니다. 언제·어디서·누구와·무엇을 했는지를 시간 순서로 전개하면서 감정적 하이라이트를 넣는 것이 포인트입니다.' },
          { type: 'heading', text: '여행 경험 5단계 구조' },
          { type: 'structure', steps: [
            { num: '1', title: '여행 배경 소개 (10초)', desc: 'A few [years/months] ago, I went on a trip to [목적지] with [동행자]. It was a [기간] trip.' },
            { num: '2', title: '목적지 특징 묘사 (20초)', desc: '[목적지] is known for [특징]. The [날씨/음식/문화] there was really [형용사].' },
            { num: '3', title: '했던 활동들 (30초)', desc: 'During the trip, we [활동1], [활동2], and [활동3]. I especially loved [가장 좋았던 활동].' },
            { num: '4', title: '가장 기억에 남는 순간 (20초)', desc: 'The highlight of the trip was when [구체적 에피소드]. I was so [감정] because [이유].' },
            { num: '5', title: '마무리·소감 (10초)', desc: 'Overall, it was one of the best trips I\'ve ever had. I\'d definitely go back someday.' }
          ]},
          { type: 'example', label: '여행 묘사 핵심 표현', items: [
            { en: 'It was my first time visiting [목적지], so everything felt new and exciting.', ko: '[목적지]는 처음 방문이라서 모든 것이 새롭고 설레었습니다.' },
            { en: 'The scenery was absolutely breathtaking — I couldn\'t stop taking pictures.', ko: '경치가 정말 숨막히게 아름다워서 사진을 찍는 것을 멈출 수가 없었습니다.' },
            { en: 'I was lucky enough to try some amazing local food, like [음식 이름].', ko: '[음식 이름] 같은 훌륭한 현지 음식을 맛볼 수 있었습니다.' },
            { en: 'That trip really broadened my perspective and made me appreciate [경험/문화] more.', ko: '그 여행은 정말 시야를 넓혀주었고, [경험/문화]에 대해 더 감사하게 됐습니다.' }
          ]},
          { type: 'tip', icon: '💡', text: '실제로 가본 여행지에 대해 답변하는 것이 가장 자연스럽습니다. 해외 경험이 없다면 국내 여행지도 충분합니다. 제주도, 부산 등을 영어로 묘사하는 연습을 해두세요.' }
        ]
      },
      {
        id: 'om5l2', title: '여행 선호도 · 비교 답변', duration: '5분',
        content: [
          { type: 'text', text: '"Do you prefer domestic or international travel?" / "Do you like traveling alone or with others?" 유형은 단순히 선호를 말하는 것이 아니라, 이유와 예시를 들어 논리적으로 설명해야 합니다.' },
          { type: 'example', label: '여행 선호 비교 표현', items: [
            { en: 'I prefer [A] over [B] because it gives me more [flexibility/comfort/excitement].', ko: '[B]보다 [A]를 선호하는데, [유연성/편안함/설렘]이 더 크기 때문입니다.' },
            { en: 'While [B] has its merits, I find [A] more [형용사] for me personally.', ko: '[B]도 장점이 있지만, 저 개인적으로는 [A]가 더 [형용사]라고 생각합니다.' },
            { en: 'Traveling solo allows me to go at my own pace and make spontaneous decisions.', ko: '혼자 여행하면 제 페이스대로 움직이고 즉흥적으로 결정할 수 있습니다.' },
            { en: 'Traveling with friends or family makes the experience more memorable and fun.', ko: '친구나 가족과 함께 여행하면 경험이 더 기억에 남고 즐겁습니다.' }
          ]},
          { type: 'tip', icon: '🎯', text: '"I like A because..." 한 문장으로 끝내지 마세요. "However, I also appreciate B when..." 처럼 반론을 인정하고 자신의 입장을 재확인하면 훨씬 자연스럽고 고급스러운 답변이 됩니다.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 6 — 롤플레이 완전 정복
  // ══════════════════════════════════════════════════════════
  {
    id: 'om6', icon: '🎭',
    title: '롤플레이 완전 정복',
    subtitle: '전화·예약·불만·문제 해결 상황 전략',
    color: '#BE185D',
    lessons: [
      {
        id: 'om6l1', title: '롤플레이 유형 이해', duration: '5분',
        content: [
          { type: 'text', text: '롤플레이는 OPIc에서 IH 이상을 받으려면 반드시 잘 해야 하는 유형입니다. 주어진 상황(예: 호텔 예약, 제품 불만 전화)에서 실제로 통화하듯 자연스럽게 말해야 합니다.' },
          { type: 'heading', text: '롤플레이 3대 유형' },
          { type: 'structure', steps: [
            { num: '①', title: '예약·문의형', desc: '호텔, 식당, 비행기, 헬스장 등에 전화해서 예약하거나 정보를 문의하는 상황. "I\'d like to make a reservation for..."로 시작하세요.' },
            { num: '②', title: '불만·항의형', desc: '배송 지연, 결함 제품, 잘못된 청구서 등에 대해 정중하지만 단호하게 항의하는 상황. 문제 상황을 먼저 설명하고 원하는 해결책을 제시하세요.' },
            { num: '③', title: '예상치 못한 문제 해결형 (Unexpected Situation)', desc: '계획에 없던 문제(예: 호텔 예약이 없다, 비행기 연착 등)를 즉흥적으로 해결하는 상황. IH/AL 핵심 유형입니다.' }
          ]},
          { type: 'example', label: '롤플레이 시작 표현', items: [
            { en: 'Hello, I\'m calling to make a reservation for [날짜] at [시간] for [인원] people.', ko: '안녕하세요, [날짜] [시간]에 [인원]명으로 예약하려고 전화드렸습니다.' },
            { en: 'Hi, I\'m calling because I have an issue with [문제 내용].', ko: '안녕하세요, [문제]와 관련해서 문제가 생겨 전화드렸습니다.' },
            { en: 'I placed an order [기간] ago, but I still haven\'t received it.', ko: '[기간] 전에 주문했는데 아직 받지 못했습니다.' }
          ]},
          { type: 'tip', icon: '⚠️', text: '롤플레이에서 너무 짧게 말하거나 "Okay, thank you, bye."로 끝내면 낮은 등급이 나옵니다. 3~4개의 질문이나 요청을 하면서 상황을 풍부하게 전개하세요.' }
        ]
      },
      {
        id: 'om6l2', title: '예상치 못한 상황 답변', duration: '7분',
        content: [
          { type: 'text', text: '예상치 못한 상황(Unexpected Situation) 질문은 IH·AL을 위한 핵심 문제입니다. "I\'m sorry to tell you, but there\'s a problem with your reservation."처럼 문제 상황을 제시하면 즉각적으로 대처하는 능력을 평가합니다.' },
          { type: 'heading', text: '예상치 못한 상황 답변 3단계' },
          { type: 'structure', steps: [
            { num: '1', title: '상황 파악 + 당황 표현 (10초)', desc: 'Oh no, that\'s really unfortunate to hear. / Oh, I see. That\'s a bit of a problem because...' },
            { num: '2', title: '대안 요청 또는 제안 (40초)', desc: 'Is there any way we could [대안]? / Would it be possible to [요청]? / I was wondering if you could [제안].' },
            { num: '3', title: '마무리 확인 (10초)', desc: 'Alright, that sounds like a good solution. Thank you for your help. / Could you confirm that in writing?' }
          ]},
          { type: 'example', label: '예상치 못한 상황 표현', items: [
            { en: 'I completely understand, but is there any other option available?', ko: '충분히 이해합니다만, 다른 선택지는 없을까요?' },
            { en: 'That\'s not what I was expecting, but let me think... Could we perhaps [대안]?', ko: '예상치 못한 상황이네요. 생각해보면... 혹시 [대안]은 가능할까요?' },
            { en: 'Given the circumstances, I\'d really appreciate it if you could [요청].', ko: '이런 상황이니 [요청]해주신다면 정말 감사하겠습니다.' },
            { en: 'I hate to be a bother, but this is quite urgent for me.', ko: '번거롭게 해드리고 싶지 않지만, 저에게는 꽤 급한 상황입니다.' }
          ]},
          { type: 'tip', icon: '🎯', text: '예상치 못한 상황에서 포기하지 않고 2~3가지 대안을 계속 제시하는 것이 고득점의 핵심입니다. 당황하지 말고, 문제를 해결하는 사람의 입장에서 적극적으로 말하세요.' }
        ]
      },
      {
        id: 'om6l3', title: '정중한 영어 요청·거절 표현', duration: '5분',
        content: [
          { type: 'text', text: '롤플레이에서 요청, 사과, 제안, 불만을 표현할 때는 지나치게 직접적이거나 너무 공손해서 의미가 약해지지 않도록 균형을 잡아야 합니다.' },
          { type: 'example', label: '정중한 요청 표현 (Polite Requests)', items: [
            { en: 'I was wondering if it would be possible to [요청].', ko: '혹시 [요청]이 가능한지 여쭤봐도 될까요?' },
            { en: 'Would you mind [동사ing]? It would really help me out.', ko: '[동사]해주실 수 있을까요? 정말 도움이 될 것 같습니다.' },
            { en: 'I\'d really appreciate it if you could [요청] as soon as possible.', ko: '가능한 한 빨리 [요청]해주신다면 정말 감사하겠습니다.' }
          ]},
          { type: 'example', label: '불만·항의 표현 (Complaints)', items: [
            { en: 'I hate to complain, but I\'m quite disappointed with [문제].', ko: '불평하고 싶지는 않지만, [문제]에 대해 꽤 실망스럽습니다.' },
            { en: 'This is not what I paid for / expected. I\'d like [해결책] please.', ko: '제가 비용을 지불한/기대한 것과 다릅니다. [해결책]을 원합니다.' },
            { en: 'Could you please look into this matter and get back to me?', ko: '이 사안을 검토하신 후 다시 연락해 주시겠어요?' }
          ]},
          { type: 'tip', icon: '💡', text: '"I want..." 보다 "I was wondering if..." / "Would it be possible to..."가 훨씬 자연스럽고 고급스럽습니다. 요청 표현 3~4개를 완벽히 외워두면 어떤 롤플레이 상황에도 대응할 수 있습니다.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 7 — 경험 묘사 & 고득점 전략
  // ══════════════════════════════════════════════════════════
  {
    id: 'om7', icon: '⭐',
    title: '경험 묘사 & 고득점 전략',
    subtitle: '과거 경험 서술 · IH/AL 답변 기술',
    color: '#0D9488',
    lessons: [
      {
        id: 'om7l1', title: '경험 묘사 STAR 구조', duration: '6분',
        content: [
          { type: 'text', text: '"Tell me about a time when..." / "Describe an experience where..." 유형은 과거 경험을 구체적으로 이야기하는 문제입니다. STAR 구조(상황-과제-행동-결과)로 답변하면 논리적이고 자연스러운 답변이 완성됩니다.' },
          { type: 'heading', text: 'STAR 구조' },
          { type: 'structure', steps: [
            { num: 'S', title: 'Situation (상황)', desc: 'Set the scene. When and where did it happen? Who was involved? — "A few years ago, I was working on a group project at university..."' },
            { num: 'T', title: 'Task (과제/문제)', desc: 'What was the challenge or task you faced? — "The problem was that our team couldn\'t agree on the direction of the project..."' },
            { num: 'A', title: 'Action (행동)', desc: 'What did YOU specifically do? — "So I decided to organize a meeting and suggested we divide the work by each person\'s strength..."' },
            { num: 'R', title: 'Result (결과)', desc: 'What happened in the end? What did you learn? — "In the end, we finished on time and got great feedback. I learned that communication is key."' }
          ]},
          { type: 'example', label: '경험 묘사 연결 표현', items: [
            { en: 'It was about [기간] ago when [상황] happened.', ko: '약 [기간] 전에 [상황]이 있었습니다.' },
            { en: 'I remember feeling really [감정] at the time because [이유].', ko: '그때 [이유] 때문에 정말 [감정]했던 기억이 납니다.' },
            { en: 'Looking back, I think that experience taught me [교훈].', ko: '돌이켜보면 그 경험이 저에게 [교훈]을 가르쳐 준 것 같습니다.' },
            { en: 'It turned out to be one of the most [형용사] experiences of my life.', ko: '그것은 제 인생에서 가장 [형용사] 경험 중 하나가 됐습니다.' }
          ]},
          { type: 'tip', icon: '💡', text: '경험 묘사 문제에서는 "그래서 결국 어떻게 됐나요?" 질문에 명확한 답을 줄 수 있어야 합니다. 미리 3~4개의 개인적 에피소드(학교, 여행, 직장, 가족)를 영어로 준비해두면 어떤 질문에도 대응할 수 있습니다.' }
        ]
      },
      {
        id: 'om7l2', title: 'IH/AL을 위한 고득점 전략', duration: '7분',
        content: [
          { type: 'text', text: 'IM과 IH를 가르는 핵심 차이는 단락 수준의 발화(paragraph-level speech)입니다. IM은 문장을 나열하지만, IH는 여러 문장이 자연스럽게 연결되어 하나의 이야기처럼 들립니다.' },
          { type: 'heading', text: 'IM vs IH 차이점' },
          { type: 'table',
            headers: ['항목', 'IM 수준', 'IH 수준'],
            rows: [
              ['문장 연결', '문장 나열 (And... And... And...)', '접속사·전환어로 자연스럽게 연결'],
              ['어휘 다양성', '기본 단어 반복', '동의어·구체적 표현 사용'],
              ['답변 길이', '60~90초', '90~120초 이상'],
              ['돌발 질문 대응', '막히거나 짧게 답변', '유연하게 전개하며 해결'],
              ['감정·의견 표현', '사실 나열', '이유·감정·개인적 의견 포함']
            ]
          },
          { type: 'heading', text: '고득점 담화 연결 표현' },
          { type: 'example', label: '문장 연결 & 전환 표현', items: [
            { en: 'What\'s interesting is that... / What surprised me was that...', ko: '흥미로운 점은... / 놀라웠던 것은...' },
            { en: 'On top of that, ... / To make things worse, ...', ko: '게다가, ... / 설상가상으로, ...' },
            { en: 'That said, ... / Having said that, ...', ko: '그렇긴 하지만, ... / 그렇게 말했지만, ...' },
            { en: 'Come to think of it, ... / Now that I think about it, ...', ko: '생각해보니, ... / 지금 생각해보면, ...' }
          ]},
          { type: 'heading', text: '모르는 단어가 생겼을 때 전략' },
          { type: 'list', items: [
            '같은 뜻의 쉬운 단어로 바꿔서 설명하기: "You know, the thing you use to... / a place where..."',
            '상위 개념으로 설명: "It\'s a kind of [상위 개념] that [특징]..."',
            '예시로 대체: "For example, something like [비슷한 것]..."',
            '잠깐 멈추고 다른 방식으로 접근: "How can I put it... It\'s basically..."'
          ]},
          { type: 'tip', icon: '🎯', text: '침묵보다 틀린 표현이 낫습니다. 완벽한 문법보다 끊기지 않고 계속 말하는 능력이 OPIc에서 더 높이 평가됩니다. 모르는 단어는 돌려서 표현하고, 절대 멈추지 마세요.' }
        ]
      },
      {
        id: 'om7l3', title: '실전 답변 시간 관리', duration: '4분',
        content: [
          { type: 'text', text: 'OPIc은 답변 시간이 따로 표시되지 않습니다. 너무 짧게 말하면 낮은 등급, 너무 길게 말해서 내용이 없으면 의미가 없습니다. 적절한 답변 길이를 습관으로 만들어야 합니다.' },
          { type: 'heading', text: '질문 유형별 권장 답변 시간' },
          { type: 'table',
            headers: ['질문 유형', '권장 시간', '포함 내용'],
            rows: [
              ['자기소개', '70~90초', '이름·직업·거주지·관심사'],
              ['묘사 (집/동네/일상)', '90~120초', '전체 → 세부 → 감정·이유'],
              ['취미·여가', '90~120초', '취미 소개 → 구체 활동 → 이유 → 경험'],
              ['여행 경험', '90~120초', '배경 → 활동 → 하이라이트 → 소감'],
              ['롤플레이', '60~90초', '상황 설명 → 요청 2~3개 → 확인'],
              ['과거 경험 (STAR)', '90~120초', 'S → T → A → R → 교훈']
            ]
          },
          { type: 'list', items: [
            '📱 평소에 스마트폰 타이머를 켜고 90초 답변 연습을 반복하세요',
            '🎙️ 자신의 답변을 녹음해서 들어보면 약점을 빠르게 발견할 수 있습니다',
            '✏️ 핵심 키워드만 메모해두고, 그 키워드를 연결해서 말하는 연습을 하세요',
            '🔄 같은 주제로 매일 다르게 답변하면서 표현의 다양성을 키우세요'
          ]},
          { type: 'tip', icon: '🎯', text: '시험 당일 가장 중요한 것은 자신감입니다. 완벽하지 않아도 됩니다. 말을 멈추지 않고, 자신의 경험과 생각을 자연스럽게 이어가는 것 — 그것이 OPIc 고득점의 핵심입니다.' }
        ]
      }
    ]
  }

];

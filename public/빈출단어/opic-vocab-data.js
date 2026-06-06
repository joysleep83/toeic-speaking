// ── OPIc 주제별 핵심 어휘 ────────────────────────────────────
// 8개 모듈 · 주제별 30~38개 단어

const OPIC_VOCAB_MODULES = [

  // ══════════════════════════════════════════════════════════
  // Module 1 — 자기소개 & 일상 묘사
  // ══════════════════════════════════════════════════════════
  {
    id: 'ov1',
    moduleTitle: '자기소개 & 일상 묘사',
    icon: '🙋',
    color: '#0D9488',
    words: [
      { word: 'outgoing', meaning: '외향적인', pos: '형용사', example: "I'd say I'm a pretty outgoing person who enjoys meeting new people.", exampleKo: '저는 새로운 사람 만나는 것을 즐기는 꽤 외향적인 사람이라고 할 수 있어요.', tip: '자기소개 단골 표현 — "I\'d describe myself as outgoing"' },
      { word: 'introverted', meaning: '내성적인', pos: '형용사', example: "I'm somewhat introverted, so I prefer small gatherings over big parties.", exampleKo: '저는 다소 내성적이라 큰 파티보다는 소규모 모임을 선호해요.', tip: '반대어: outgoing, extroverted' },
      { word: 'passionate', meaning: '열정적인', pos: '형용사', example: "I'm really passionate about music — it's been a huge part of my life.", exampleKo: '음악에 정말 열정적이에요. 제 삶의 큰 부분을 차지하고 있어요.', tip: '"be passionate about + 명사" 형태로 OPIc에서 빈출' },
      { word: 'currently', meaning: '현재, 지금', pos: '부사', example: "I'm currently working as a graphic designer at a small agency.", exampleKo: '현재 작은 에이전시에서 그래픽 디자이너로 일하고 있어요.', tip: '자기소개 첫 문장에 자연스럽게 사용' },
      { word: 'based in', meaning: '~에 거주하다, ~에 본사를 두다', pos: '구동사', example: "I'm based in Seoul but originally from Daejeon.", exampleKo: '현재 서울에 살고 있지만 원래는 대전 출신이에요.', tip: '"I live in"보다 세련된 표현' },
      { word: 'background', meaning: '배경, 출신', pos: '명사', example: "I have a background in economics, which led me to finance.", exampleKo: '경제학 배경이 있어서 금융 쪽으로 가게 됐어요.', tip: '"I have a background in + 분야" — 전공·경력 설명에 필수' },
      { word: 'routine', meaning: '일상, 루틴', pos: '명사', example: "My morning routine usually takes about an hour from start to finish.", exampleKo: '저의 아침 루틴은 처음부터 끝까지 보통 한 시간 정도 걸려요.', tip: '"daily routine", "morning routine" 형태로 OPIc 빈출' },
      { word: 'commute', meaning: '통근하다 / 통근', pos: '동사·명사', example: "My commute to work takes about 40 minutes by subway.", exampleKo: '지하철로 출근하는 데 약 40분 걸려요.', tip: '"commute to work/school"로 일상 묘사에 자주 사용' },
      { word: 'typically', meaning: '보통, 일반적으로', pos: '부사', example: "I typically wake up around 7 and have breakfast before heading out.", exampleKo: '저는 보통 7시쯤 일어나서 외출 전에 아침을 먹어요.', tip: '= usually, generally / 일과 묘사 필수 부사' },
      { word: 'schedule', meaning: '일정, 스케줄 / 계획하다', pos: '명사·동사', example: "My schedule on weekdays is pretty packed from morning to evening.", exampleKo: '평일 스케줄은 아침부터 저녁까지 꽤 빡빡해요.', tip: '"packed schedule" = 바쁜 일정 / "busy schedule"보다 자연스러운 표현' },
      { word: 'set aside', meaning: '따로 마련하다, 시간을 내다', pos: '구동사', example: "I try to set aside at least 30 minutes a day for reading.", exampleKo: '하루에 최소 30분은 독서를 위해 시간을 내려고 해요.', tip: '"set aside time for" = ~을 위해 시간을 내다' },
      { word: 'tend to', meaning: '~하는 경향이 있다', pos: '구동사', example: "I tend to stay up late on weekends and sleep in on Sunday.", exampleKo: '주말에는 늦게까지 깨어 있다가 일요일에 늦잠을 자는 편이에요.', tip: 'OPIc 고득점자들이 자주 쓰는 자연스러운 습관 표현' },
      { word: 'wind down', meaning: '긴장을 풀다, 마무리하다', pos: '구동사', example: "In the evening, I like to wind down by watching a show or reading.", exampleKo: '저녁에는 드라마를 보거나 책을 읽으며 긴장을 푸는 것을 좋아해요.', tip: '"unwind"와 같은 의미 — 하루 마무리 묘사에 사용' },
      { word: 'overall', meaning: '전반적으로', pos: '부사', example: "Overall, I think I lead a pretty balanced and fulfilling life.", exampleKo: '전반적으로 꽤 균형 잡히고 보람 있는 삶을 살고 있다고 생각해요.', tip: '답변 마무리 문장에 자연스럽게 사용' },
      { word: 'primarily', meaning: '주로', pos: '부사', example: "I primarily spend my free time outdoors — hiking or cycling.", exampleKo: '주로 야외에서 여가 시간을 보내요 — 하이킹이나 자전거 타기를 해요.', tip: '= mainly, mostly / 조금 더 격식 있는 표현' },
      { word: 'revolve around', meaning: '~를 중심으로 돌아가다', pos: '구동사', example: "My daily life revolves around work and spending time with family.", exampleKo: '제 일상은 일과 가족과의 시간을 중심으로 돌아가요.', tip: 'OPIc 자기소개에서 자주 쓰이는 고급 표현' },
      { word: 'genuine', meaning: '진심 어린, 진짜의', pos: '형용사', example: "I genuinely enjoy cooking — it's not just a hobby, it's a passion.", exampleKo: '정말 진심으로 요리를 즐겨요 — 단순한 취미가 아니라 열정이에요.', tip: '"genuinely" 부사형이 대화체에서 더 자주 사용' },
      { word: 'maintain', meaning: '유지하다', pos: '동사', example: "I try to maintain a healthy work-life balance as much as possible.", exampleKo: '가능한 한 건강한 일-생활 균형을 유지하려고 노력해요.', tip: '"maintain a balance/routine/habit" 형태로 빈출' }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 2 — 거주지 & 장소 묘사
  // ══════════════════════════════════════════════════════════
  {
    id: 'ov2',
    moduleTitle: '거주지 & 장소 묘사',
    icon: '🏠',
    color: '#059669',
    words: [
      { word: 'spacious', meaning: '넓은, 공간이 충분한', pos: '형용사', example: "The living room is quite spacious and gets a lot of natural light.", exampleKo: '거실은 꽤 넓고 자연광이 많이 들어와요.', tip: '= roomy / 반대: cramped (좁은) — 집 묘사 필수 형용사' },
      { word: 'cozy', meaning: '아늑한, 편안한', pos: '형용사', example: "It's a small but cozy apartment that feels very much like home.", exampleKo: '작지만 아늑한 아파트로 집처럼 편안하게 느껴져요.', tip: '집 묘사에서 spacious와 함께 가장 자주 등장' },
      { word: 'vibrant', meaning: '활기찬, 생동감 넘치는', pos: '형용사', example: "I live in a really vibrant neighborhood full of cafes and shops.", exampleKo: '카페와 가게들로 가득한 정말 활기찬 동네에 살고 있어요.', tip: '= lively / 동네 묘사에 자주 사용' },
      { word: 'residential', meaning: '주거의, 주거용', pos: '형용사', example: "It's mostly a residential area, so it's very quiet at night.", exampleKo: '주로 주거 지역이라 밤에는 매우 조용해요.', tip: '반대: commercial (상업) / 동네 특성 묘사에 사용' },
      { word: 'located', meaning: '위치한', pos: '형용사', example: "My apartment is conveniently located near the subway station.", exampleKo: '제 아파트는 지하철역 근처에 편리하게 위치해 있어요.', tip: '"conveniently / centrally located" 형태로 빈출' },
      { word: 'within walking distance', meaning: '걸어서 갈 수 있는 거리에', pos: '구', example: "There are several supermarkets within walking distance of my home.", exampleKo: '집에서 걸어갈 수 있는 거리에 슈퍼마켓이 여러 개 있어요.', tip: 'OPIc 동네 묘사 단골 표현' },
      { word: 'neighborhood', meaning: '동네, 이웃', pos: '명사', example: "My neighborhood has a really friendly and welcoming atmosphere.", exampleKo: '우리 동네는 정말 친근하고 따뜻한 분위기예요.', tip: '= area, district / 동네 묘사 핵심 명사' },
      { word: 'surroundings', meaning: '주변 환경', pos: '명사 (복수)', example: "I really love the green surroundings — there's a park just nearby.", exampleKo: '초록빛 주변 환경이 정말 좋아요 — 바로 근처에 공원이 있거든요.', tip: '= environment / 집 주변 묘사에 사용' },
      { word: 'atmosphere', meaning: '분위기', pos: '명사', example: "The café has a calm atmosphere perfect for studying.", exampleKo: '그 카페는 공부하기에 딱 좋은 차분한 분위기예요.', tip: '"a lively/cozy/peaceful atmosphere" 형태로 자주 등장' },
      { word: 'renovated', meaning: '리모델링된', pos: '형용사', example: "The apartment was renovated last year, so everything looks brand new.", exampleKo: '작년에 리모델링되어서 모든 것이 새것처럼 보여요.', tip: 'renovation (n.) / "newly renovated" 형태로 자주 사용' },
      { word: 'compact', meaning: '작고 효율적인', pos: '형용사', example: "It's a compact studio, but the layout is very well designed.", exampleKo: '작은 원룸이지만 레이아웃이 매우 잘 설계되어 있어요.', tip: '작은 집을 긍정적으로 묘사할 때 사용 — "small"보다 세련된 표현' },
      { word: 'commute-friendly', meaning: '통근하기 편한', pos: '형용사', example: "One reason I chose this apartment is that it's commute-friendly.", exampleKo: '이 아파트를 선택한 이유 중 하나는 통근하기 편리하기 때문이에요.', tip: '집 선택 이유를 설명할 때 유용' },
      { word: 'downside', meaning: '단점', pos: '명사', example: "The only downside is that the area gets a bit noisy on weekends.", exampleKo: '유일한 단점은 주말에 그 지역이 다소 시끄러워진다는 것이에요.', tip: '= drawback / "the upside" (장점)와 대비해서 사용' },
      { word: 'make up for', meaning: '보완하다, 벌충하다', pos: '구동사', example: "The convenience of the location more than makes up for the noise.", exampleKo: '위치의 편리함이 소음을 충분히 보완하고도 남아요.', tip: '"more than make up for" = 남고도 충분히 보완하다' },
      { word: 'feature', meaning: '특징, 기능', pos: '명사', example: "My favorite feature of the apartment is the large balcony.", exampleKo: '아파트에서 가장 마음에 드는 특징은 넓은 발코니예요.', tip: '"my favorite feature of" — 장점 묘사에 자주 사용' },
      { word: 'natural light', meaning: '자연광', pos: '명사', example: "The room gets a lot of natural light in the afternoon, which I love.", exampleKo: '오후에 자연광이 많이 들어오는데, 그게 정말 마음에 들어요.', tip: '집 내부 묘사에서 자주 등장하는 표현' },
      { word: 'accessible', meaning: '접근하기 쉬운', pos: '형용사', example: "The area is very accessible by public transportation.", exampleKo: '이 지역은 대중교통으로 접근하기 매우 쉬워요.', tip: '"easily accessible" 형태로 자주 사용' }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 3 — 취미 & 여가
  // ══════════════════════════════════════════════════════════
  {
    id: 'ov3',
    moduleTitle: '취미 & 여가',
    icon: '🎯',
    color: '#D97706',
    words: [
      { word: 'enthusiastic', meaning: '열정적인', pos: '형용사', example: "I'm really enthusiastic about photography — I take my camera everywhere.", exampleKo: '사진에 정말 열정적이에요 — 어디든 카메라를 들고 다녀요.', tip: '"be enthusiastic about + 명사" 형태 — passionate와 바꿔 쓰기 가능' },
      { word: 'therapeutic', meaning: '치유적인, 기분 전환이 되는', pos: '형용사', example: "I find cooking really therapeutic after a stressful day at work.", exampleKo: '힘든 업무 후에 요리가 정말 치유적이라고 생각해요.', tip: '취미의 심리적 효과를 설명할 때 OPIc 고득점 어휘' },
      { word: 'unwind', meaning: '긴장을 풀다', pos: '동사', example: "Listening to music is my favorite way to unwind after a long day.", exampleKo: '음악 듣는 것이 긴 하루를 보낸 후 긴장을 푸는 제가 가장 좋아하는 방법이에요.', tip: '= relax, decompress / wind down과 같은 의미' },
      { word: 'get into', meaning: '~에 빠지다, 시작하다', pos: '구동사', example: "I got into running about two years ago and never looked back.", exampleKo: '약 2년 전에 달리기를 시작하고 나서 돌이켜본 적이 없어요.', tip: '"get into + 취미" — OPIc에서 가장 자주 나오는 취미 표현' },
      { word: 'hooked on', meaning: '~에 빠져있는', pos: '구', example: "Once I started painting, I was completely hooked on it.", exampleKo: '그림을 시작하자마자 완전히 빠져버렸어요.', tip: '= addicted to (긍정적 의미) / "ever since, I\'ve been hooked"' },
      { word: 'rewarding', meaning: '보람 있는', pos: '형용사', example: "Playing an instrument is really rewarding once you improve.", exampleKo: '악기 연주는 실력이 늘수록 정말 보람이 있어요.', tip: '= fulfilling, satisfying / 취미의 장점 설명에 자주 등장' },
      { word: 'recreational', meaning: '오락적인, 취미 활동의', pos: '형용사', example: "I play tennis recreationally on weekends — nothing too serious.", exampleKo: '주말에 취미로 테니스를 쳐요 — 너무 진지하게 하지는 않아요.', tip: 'recreationally (부사) 형태도 자주 사용' },
      { word: 'pick up', meaning: '~을 시작하다 (취미)', pos: '구동사', example: "I picked up guitar during the pandemic and still play it now.", exampleKo: '팬데믹 때 기타를 시작했는데 지금도 치고 있어요.', tip: '"pick up a hobby/skill" — 새 취미 시작을 표현하는 자연스러운 구어체' },
      { word: 'occasionally', meaning: '가끔', pos: '부사', example: "I occasionally go hiking on weekends when the weather is nice.", exampleKo: '날씨가 좋을 때 가끔 주말에 하이킹을 가요.', tip: '= sometimes / 빈도 표현: always > usually > often > occasionally > rarely' },
      { word: 'dedicate time to', meaning: '~에 시간을 바치다', pos: '구동사', example: "I try to dedicate at least two hours a week to drawing.", exampleKo: '일주일에 최소 두 시간은 그림 그리기에 시간을 바치려고 해요.', tip: '"dedicate time to + 명사/동명사" 형태로 사용' },
      { word: 'stimulating', meaning: '자극적인, 활기를 주는', pos: '형용사', example: "I love reading because it's both relaxing and mentally stimulating.", exampleKo: '독서는 편안하면서도 정신적으로 자극적이라서 좋아요.', tip: '= engaging / 취미의 지적 효과 설명에 사용' },
      { word: 'go-to', meaning: '즐겨 찾는, 주로 하는', pos: '형용사', example: "Listening to podcasts during my commute is my go-to activity.", exampleKo: '통근 중에 팟캐스트 듣는 게 제가 즐겨 하는 활동이에요.', tip: '"my go-to + 명사" — OPIc에서 자연스러운 구어체 표현' },
      { word: 'pastime', meaning: '취미, 소일거리', pos: '명사', example: "Baking has become one of my favorite pastimes recently.", exampleKo: '최근에 베이킹이 제가 가장 좋아하는 취미 중 하나가 됐어요.', tip: '= hobby / "a popular pastime" 형태로도 자주 사용' },
      { word: 'immerse oneself in', meaning: '~에 몰두하다', pos: '구동사', example: "When I paint, I completely immerse myself in the process.", exampleKo: '그림을 그릴 때 완전히 그 과정에 몰입해요.', tip: '"get immersed in"으로도 사용 — 몰입 경험 표현에 최적' },
      { word: 'recharge', meaning: '재충전하다', pos: '동사', example: "Hiking in the mountains helps me recharge for the week ahead.", exampleKo: '산 하이킹이 앞으로의 한 주를 위해 재충전하는 데 도움이 돼요.', tip: 'recharge (one\'s batteries) = 에너지를 회복하다' },
      { word: 'balance', meaning: '균형 / 균형을 유지하다', pos: '명사·동사', example: "I try to balance active hobbies like running with quieter ones like reading.", exampleKo: '달리기 같은 활동적인 취미와 독서 같은 조용한 취미의 균형을 맞추려 해요.', tip: '"strike a balance between A and B" — 취미 다양성 설명에 활용' }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 4 — 여행
  // ══════════════════════════════════════════════════════════
  {
    id: 'ov4',
    moduleTitle: '여행',
    icon: '✈️',
    color: '#0284C7',
    words: [
      { word: 'memorable', meaning: '기억에 남는', pos: '형용사', example: "It was one of the most memorable trips I've ever taken.", exampleKo: '제가 해본 것 중 가장 기억에 남는 여행 중 하나였어요.', tip: '"a memorable experience/trip/moment" — OPIc 여행 묘사 필수 어휘' },
      { word: 'breathtaking', meaning: '숨막히게 아름다운', pos: '형용사', example: "The scenery along the coast was absolutely breathtaking.", exampleKo: '해안을 따라 펼쳐진 풍경이 정말 숨막히게 아름다웠어요.', tip: '= stunning, spectacular / 경치 묘사의 최고 표현' },
      { word: 'spontaneous', meaning: '즉흥적인', pos: '형용사', example: "We made a spontaneous decision to take a detour and visit a small village.", exampleKo: '즉흥적으로 돌아가서 작은 마을을 방문하기로 결정했어요.', tip: '"spontaneous trip/decision" — 계획 없이 떠난 여행 묘사에 사용' },
      { word: 'itinerary', meaning: '여행 일정', pos: '명사', example: "I planned a detailed itinerary but ended up going off-script most of the time.", exampleKo: '상세한 여행 일정을 짰는데 대부분의 시간을 즉흥적으로 보냈어요.', tip: '= travel plan / "follow an itinerary"' },
      { word: 'immerse', meaning: '몰입하다, 빠져들다', pos: '동사', example: "I love to immerse myself in local culture wherever I travel.", exampleKo: '여행하는 곳마다 현지 문화에 몰입하는 것을 좋아해요.', tip: '"immerse oneself in local culture/food/life" — OPIc 고득점 여행 표현' },
      { word: 'authentic', meaning: '진정성 있는, 현지 그대로의', pos: '형용사', example: "I prefer staying at local guesthouses for a more authentic experience.", exampleKo: '더 진정성 있는 경험을 위해 현지 게스트하우스에 머무는 것을 선호해요.', tip: '"authentic local food/experience" — 여행의 깊이를 표현' },
      { word: 'navigate', meaning: '길을 찾다, 항해하다', pos: '동사', example: "It was my first time traveling solo, so I had to navigate everything on my own.", exampleKo: '처음 혼자 여행하는 거라 모든 것을 스스로 해결해야 했어요.', tip: '"navigate" = 길 찾기 + 상황 헤쳐나가기 (비유적 의미도 포함)' },
      { word: 'highlight', meaning: '하이라이트, 가장 인상적인 순간', pos: '명사', example: "The highlight of the trip was watching the sunrise from the mountain top.", exampleKo: '여행의 하이라이트는 산 정상에서 일출을 보는 것이었어요.', tip: '"the highlight of the trip was when..." — OPIc 여행 단골 표현' },
      { word: 'off the beaten path', meaning: '관광지가 아닌 곳, 남들이 잘 안 가는 곳', pos: '구', example: "I prefer going off the beaten path rather than visiting tourist traps.", exampleKo: '관광 함정보다 남들이 잘 안 가는 곳을 가는 걸 선호해요.', tip: 'IH/AL 목표라면 꼭 알아야 할 고급 여행 표현' },
      { word: 'broaden one\'s perspective', meaning: '시야를 넓히다', pos: '구동사', example: "Traveling to different countries has really broadened my perspective.", exampleKo: '다른 나라로 여행하는 것이 시야를 정말 넓혀줬어요.', tip: '여행 경험의 가치를 설명하는 OPIc 고득점 표현' },
      { word: 'accommodation', meaning: '숙박, 숙소', pos: '명사', example: "I booked our accommodation in advance to avoid any last-minute problems.", exampleKo: '마지막 순간의 문제를 피하기 위해 미리 숙박을 예약했어요.', tip: '= lodging, stay / 롤플레이 상황에서도 자주 등장' },
      { word: 'local cuisine', meaning: '현지 음식', pos: '명사', example: "Trying local cuisine is always the first thing I do when I arrive somewhere.", exampleKo: '어딘가에 도착하면 현지 음식을 먹어보는 게 항상 제가 제일 먼저 하는 일이에요.', tip: '"try local cuisine" — 여행 묘사 단골 표현' },
      { word: 'travel light', meaning: '짐을 최소화해서 여행하다', pos: '구동사', example: "I always try to travel light — just a carry-on and a small backpack.", exampleKo: '항상 짐을 최소화해서 여행하려고 해요 — 기내용 가방과 작은 배낭만요.', tip: '여행 스타일 묘사에 사용' },
      { word: 'blend in', meaning: '자연스럽게 어울리다', pos: '구동사', example: "I try to blend in with the locals rather than act like a typical tourist.", exampleKo: '전형적인 관광객처럼 행동하기보다 현지인들과 자연스럽게 어울리려 해요.', tip: '= fit in / 여행 철학을 설명할 때 사용' },
      { word: 'itchy feet', meaning: '여행하고 싶은 충동', pos: '명사 (관용구)', example: "Whenever I stay home for too long, I get itchy feet and plan a trip.", exampleKo: '집에 너무 오래 있으면 여행하고 싶은 충동이 생기고 여행을 계획해요.', tip: '영어권에서 널리 쓰이는 여행 욕구 표현 — IH 이상 목표라면 필수' },
      { word: 'seasoned traveler', meaning: '경험 많은 여행자', pos: '명사', example: "After years of solo travel, I'd say I'm a pretty seasoned traveler now.", exampleKo: '몇 년간 혼자 여행한 후 이제 꽤 경험 많은 여행자가 됐다고 할 수 있어요.', tip: '"seasoned" = 경험 많은 (음식의 "양념" 아님)' }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 5 — 직장 & 학교
  // ══════════════════════════════════════════════════════════
  {
    id: 'ov5',
    moduleTitle: '직장 & 학교',
    icon: '💼',
    color: '#7C3AED',
    words: [
      { word: 'demanding', meaning: '힘든, 요구가 많은', pos: '형용사', example: "My job is quite demanding, but I find it very rewarding.", exampleKo: '제 일은 꽤 힘들지만 매우 보람 있다고 생각해요.', tip: 'difficult보다 자연스러운 업무 묘사 단어 — "mentally/physically demanding"' },
      { word: 'collaborate', meaning: '협력하다', pos: '동사', example: "I collaborate closely with the design team on most projects.", exampleKo: '대부분의 프로젝트에서 디자인팀과 긴밀하게 협력해요.', tip: 'collaboration (n.), collaborative (adj.) — 팀워크 묘사에 필수' },
      { word: 'deadline', meaning: '마감 기한', pos: '명사', example: "Tight deadlines can be stressful, but they keep me focused.", exampleKo: '촉박한 마감 기한은 스트레스가 될 수 있지만 집중력을 유지시켜 줘요.', tip: '"meet a deadline" = 마감을 맞추다 / "tight deadline" = 촉박한 마감' },
      { word: 'priorities', meaning: '우선순위', pos: '명사 (복수)', example: "Managing competing priorities is one of the biggest challenges in my job.", exampleKo: '여러 우선순위를 관리하는 것이 제 일의 가장 큰 도전 중 하나예요.', tip: '"prioritize" (v.) / "top priority" — 업무 관리 표현에 필수' },
      { word: 'flexible', meaning: '유연한', pos: '형용사', example: "Our company has a flexible work culture, which I really appreciate.", exampleKo: '우리 회사는 유연한 업무 문화를 갖고 있는데, 정말 감사히 여겨요.', tip: '"flexible hours/schedule" — 근무 환경 묘사에 자주 사용' },
      { word: 'rewarding', meaning: '보람 있는', pos: '형용사', example: "Working with clients directly makes the job especially rewarding.", exampleKo: '클라이언트와 직접 일하는 것이 일을 특히 보람 있게 만들어요.', tip: '= fulfilling / 직업 만족도를 표현하는 핵심 단어' },
      { word: 'contribute', meaning: '기여하다', pos: '동사', example: "I feel like I'm really contributing to something meaningful.", exampleKo: '뭔가 의미 있는 일에 정말 기여하고 있다는 느낌이 들어요.', tip: '"contribute to + 명사" — 직업적 보람 표현에 사용' },
      { word: 'workload', meaning: '업무량', pos: '명사', example: "The workload can be heavy at times, especially near deadlines.", exampleKo: '특히 마감 가까이에는 업무량이 가끔 많아질 수 있어요.', tip: '"heavy/manageable workload" — 업무 환경 묘사에 자주 등장' },
      { word: 'productive', meaning: '생산적인', pos: '형용사', example: "I'm most productive in the morning, so I try to tackle hard tasks first.", exampleKo: '오전에 가장 생산적이라서 어려운 과제를 먼저 처리하려고 해요.', tip: 'productivity (n.) — 업무 효율성 묘사에 사용' },
      { word: 'back-and-forth', meaning: '주고받는, 오고 가는', pos: '형용사·명사', example: "There's a lot of back-and-forth between me and the client before finalizing.", exampleKo: '최종화하기 전에 저와 클라이언트 간에 많은 주고받음이 있어요.', tip: '협업 과정을 자연스럽게 묘사하는 구어체 표현' },
      { word: 'internship', meaning: '인턴십', pos: '명사', example: "I did a marketing internship before landing my current job.", exampleKo: '현재 직장을 구하기 전에 마케팅 인턴십을 했어요.', tip: '"land a job" = 직장을 구하다 / 취업 과정 설명에 유용' },
      { word: 'field', meaning: '분야', pos: '명사', example: "I work in the field of environmental engineering.", exampleKo: '환경 공학 분야에서 일해요.', tip: '"work in the field of" = ~분야에서 일하다 — "area" 대신 사용' },
      { word: 'minor in', meaning: '부전공하다', pos: '구동사', example: "I majored in business and minored in marketing.", exampleKo: '경영학을 전공하고 마케팅을 부전공했어요.', tip: '"major in" (전공) / "minor in" (부전공) — 학교 소개 필수 표현' },
      { word: 'hands-on', meaning: '직접 해보는, 실무적인', pos: '형용사', example: "I prefer hands-on learning over reading from a textbook.", exampleKo: '교과서를 읽는 것보다 직접 해보는 학습을 선호해요.', tip: '"hands-on experience/approach" — 실무 경험 표현에 자주 사용' },
      { word: 'stepping stone', meaning: '발판', pos: '명사', example: "This job is a great stepping stone toward my long-term career goals.", exampleKo: '이 직업은 장기적인 커리어 목표를 향한 훌륭한 발판이에요.', tip: 'IH 이상 목표라면 꼭 알아야 할 커리어 묘사 표현' }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 6 — 롤플레이 상황 표현
  // ══════════════════════════════════════════════════════════
  {
    id: 'ov6',
    moduleTitle: '롤플레이 상황 표현',
    icon: '🎭',
    color: '#BE185D',
    words: [
      { word: 'I was wondering if', meaning: '혹시 ~인지 여쭤봐도 될까요', pos: '관용구', example: "I was wondering if you have any availability this Saturday evening.", exampleKo: '혹시 이번 토요일 저녁에 자리가 있는지 여쭤봐도 될까요?', tip: '"I want..."보다 훨씬 자연스럽고 정중한 요청 표현 — OPIc 롤플레이 필수' },
      { word: 'Would it be possible to', meaning: '~이 가능할까요', pos: '관용구', example: "Would it be possible to change my reservation to a different date?", exampleKo: '예약을 다른 날짜로 변경하는 것이 가능할까요?', tip: 'Can I...보다 격식 있고 자연스러운 요청 표현' },
      { word: 'reservation', meaning: '예약', pos: '명사', example: "I'd like to make a reservation for two people at 7 PM, please.", exampleKo: '7시에 2인 예약을 하고 싶어요.', tip: '"make/change/cancel a reservation" 형태로 사용 — 롤플레이 필수 명사' },
      { word: 'availability', meaning: '이용 가능 여부', pos: '명사', example: "Could you check what availability you have for next Friday evening?", exampleKo: '다음 금요일 저녁에 어떤 자리가 있는지 확인해 주시겠어요?', tip: '"check availability" — 예약 롤플레이에서 핵심 표현' },
      { word: 'confirmation', meaning: '확인, 확인서', pos: '명사', example: "Could you send me a confirmation email for the booking?", exampleKo: '예약에 대한 확인 이메일을 보내주시겠어요?', tip: '"confirm" (v.) / "a booking confirmation" — 예약 마무리에 사용' },
      { word: 'inconvenience', meaning: '불편', pos: '명사', example: "I apologize for any inconvenience this may cause.", exampleKo: '이로 인해 생기는 불편함에 대해 사과드려요.', tip: '"We apologize for the inconvenience." — 고객 서비스 상황 단골 표현' },
      { word: 'unfortunately', meaning: '안타깝게도', pos: '부사', example: "Unfortunately, the item you ordered is no longer in stock.", exampleKo: '안타깝게도 주문하신 물건이 더 이상 재고에 없어요.', tip: '문제 상황을 정중하게 전달할 때 시작 부사로 사용' },
      { word: 'alternative', meaning: '대안', pos: '명사·형용사', example: "Could you offer me an alternative solution to this problem?", exampleKo: '이 문제에 대한 대안적 해결책을 제시해 주실 수 있나요?', tip: '"offer an alternative" / "any alternatives?" — 문제 해결 상황 필수 어휘' },
      { word: 'resolve', meaning: '해결하다', pos: '동사', example: "I'd like to resolve this issue as quickly as possible.", exampleKo: '이 문제를 가능한 한 빨리 해결하고 싶어요.', tip: '= solve / "resolve an issue/complaint" — 고객 서비스 맥락에서 빈출' },
      { word: 'refund', meaning: '환불 / 환불하다', pos: '명사·동사', example: "If you can't send a replacement, I'd like a full refund, please.", exampleKo: '교체품을 보내드릴 수 없다면 전액 환불을 원해요.', tip: '"request/issue a refund" / "full refund" — 불만 상황 필수 어휘' },
      { word: 'I\'d really appreciate it if', meaning: '~해주신다면 정말 감사하겠습니다', pos: '관용구', example: "I'd really appreciate it if you could process this as soon as possible.", exampleKo: '가능한 한 빨리 처리해 주신다면 정말 감사하겠어요.', tip: '"I want..."의 고급 표현 — 정중한 강조 요청 시 사용' },
      { word: 'accommodate', meaning: '수용하다, 편의를 봐주다', pos: '동사', example: "Is there any way you could accommodate my request for a room change?", exampleKo: '방 변경 요청을 수용해 주실 방법이 있을까요?', tip: '"accommodate a request/need" — 서비스 상황의 핵심 동사' },
      { word: 'under the name of', meaning: '~의 이름으로', pos: '구', example: "The reservation is under the name of Kim Jisoo, K-I-M.", exampleKo: '예약은 김지수라는 이름으로 되어 있어요, K-I-M이요.', tip: '"under the name of" — 예약 확인 상황에서 필수 표현' },
      { word: 'go ahead', meaning: '진행하다, 해주세요', pos: '구동사', example: "Please go ahead and process the refund at your earliest convenience.", exampleKo: '편하신 시간에 환불을 처리해 주세요.', tip: '"go ahead and + 동사" — 상대방에게 진행을 승인하는 자연스러운 표현' },
      { word: 'track', meaning: '추적하다, 확인하다', pos: '동사', example: "I've been tracking my order online, but the status hasn't changed.", exampleKo: '온라인으로 주문을 추적하고 있는데 상태가 바뀌지 않았어요.', tip: '"track a package/order" — 배송 문제 상황에서 빈출' }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 7 — 경험 & 감정 표현
  // ══════════════════════════════════════════════════════════
  {
    id: 'ov7',
    moduleTitle: '경험 & 감정 표현',
    icon: '💬',
    color: '#0891B2',
    words: [
      { word: 'overwhelming', meaning: '압도적인', pos: '형용사', example: "The kindness of the local people was completely overwhelming.", exampleKo: '현지 사람들의 친절함이 완전히 압도적이었어요.', tip: '긍정/부정 모두 사용 가능 — "overwhelmed" (감정 형태)도 자주 사용' },
      { word: 'rewarding', meaning: '보람 있는', pos: '형용사', example: "Finishing the marathon was the most rewarding experience of my life.", exampleKo: '마라톤을 완주하는 것이 제 인생에서 가장 보람 있는 경험이었어요.', tip: '= fulfilling / 도전 극복 후 감정 표현의 핵심 단어' },
      { word: 'turning point', meaning: '전환점', pos: '명사', example: "That trip was a real turning point — it changed how I see the world.", exampleKo: '그 여행은 진짜 전환점이었어요 — 세상을 바라보는 방식이 바뀌었어요.', tip: 'OPIc 경험 묘사에서 IH 이상 목표라면 필수 표현' },
      { word: 'empowered', meaning: '자신감을 얻은, 힘이 생긴', pos: '형용사', example: "Traveling alone for the first time left me feeling really empowered.", exampleKo: '처음으로 혼자 여행하고 나니 정말 자신감이 생겼어요.', tip: 'empowerment (n.) — 도전 경험 이후 긍정적 결과 표현' },
      { word: 'perspective', meaning: '관점, 시각', pos: '명사', example: "That experience completely changed my perspective on work-life balance.", exampleKo: '그 경험이 일-생활 균형에 대한 제 관점을 완전히 바꿔놓았어요.', tip: '"broaden/change/gain perspective" — 경험의 의미를 설명하는 핵심 표현' },
      { word: 'catch off guard', meaning: '불시에 당하다, 놀라게 하다', pos: '관용구', example: "The news caught me completely off guard — I wasn't expecting it at all.", exampleKo: '그 소식이 저를 완전히 놀라게 했어요 — 전혀 예상하지 못했어요.', tip: '"be caught off guard" / "catch someone off guard" — 예상치 못한 상황 표현에 완벽' },
      { word: 'in retrospect', meaning: '돌이켜 생각해보면', pos: '부사구', example: "In retrospect, I think that challenge was the best thing that happened to me.", exampleKo: '돌이켜 생각해보면 그 도전이 저에게 일어난 최고의 일이었던 것 같아요.', tip: '= looking back / IH·AL 목표 필수 표현 — 경험의 의미 성찰에 사용' },
      { word: 'cope with', meaning: '~을 극복하다, 잘 처리하다', pos: '구동사', example: "Learning how to cope with failure is an important life skill.", exampleKo: '실패에 대처하는 법을 배우는 것은 중요한 삶의 기술이에요.', tip: '= deal with, handle / "cope with stress/pressure/difficulties"' },
      { word: 'gradually', meaning: '점차, 서서히', pos: '부사', example: "Over time, I gradually became more comfortable with public speaking.", exampleKo: '시간이 지나면서 점차 대중 앞에서 말하는 것이 편안해졌어요.', tip: '변화 과정을 자연스럽게 표현 — "gradually shifted/improved/changed"' },
      { word: 'resilience', meaning: '회복력, 탄력성', pos: '명사', example: "That difficult period actually helped me build a lot of resilience.", exampleKo: '그 힘든 시기가 사실 회복력을 많이 키우는 데 도움이 됐어요.', tip: 'resilient (adj.) — IH·AL 고득점 목표 어휘' },
      { word: 'take for granted', meaning: '당연하게 여기다', pos: '관용구', example: "Before getting sick, I took my health completely for granted.", exampleKo: '아프기 전에는 건강을 완전히 당연하게 여겼어요.', tip: '"I used to take X for granted, but now..." — 경험 후 변화 표현에 자주 사용' },
      { word: 'out of my comfort zone', meaning: '편안한 영역을 벗어나', pos: '구', example: "Joining an improv class was way out of my comfort zone at first.", exampleKo: '즉흥 연기 수업에 참여하는 건 처음엔 완전히 편안한 영역을 벗어난 것이었어요.', tip: '"push oneself out of one\'s comfort zone" — 도전 경험 묘사 필수 표현' },
      { word: 'on a whim', meaning: '즉흥적으로, 충동적으로', pos: '부사구', example: "I signed up for the class on a whim, not expecting much from it.", exampleKo: '그 수업을 즉흥적으로 신청했는데 기대가 크지 않았어요.', tip: '= spontaneously / 즉흥적인 결정을 자연스럽게 표현' },
      { word: 'reflection', meaning: '성찰, 반성', pos: '명사', example: "After that experience, I did a lot of self-reflection about my priorities.", exampleKo: '그 경험 후 제 우선순위에 대해 많은 자기 성찰을 했어요.', tip: '"self-reflection" = 자기 성찰 / "reflect on" (v.) — 경험 마무리에 사용' },
      { word: 'setback', meaning: '좌절, 후퇴', pos: '명사', example: "The project failed at first, but I treated it as a setback, not a failure.", exampleKo: '프로젝트가 처음에 실패했지만 실패가 아닌 좌절로 받아들였어요.', tip: '"overcome a setback" — 어려움 극복 경험 표현에 사용' }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 8 — 고득점 담화 연결 표현
  // ══════════════════════════════════════════════════════════
  {
    id: 'ov8',
    moduleTitle: '고득점 담화 연결 표현',
    icon: '⭐',
    color: '#4F46E5',
    words: [
      { word: 'come to think of it', meaning: '생각해보니', pos: '관용구', example: "Come to think of it, that was probably the best decision I've ever made.", exampleKo: '생각해보니 그게 아마 제가 내린 최고의 결정이었을 것 같아요.', tip: '= now that I think about it / IH·AL 발화를 자연스럽게 만드는 전환 표현' },
      { word: 'having said that', meaning: '그렇긴 하지만', pos: '관용구', example: "I love living in Seoul. Having said that, it can get overwhelming at times.", exampleKo: '서울에 사는 것을 좋아해요. 그렇긴 하지만 가끔은 압도적일 수 있어요.', tip: '= that said / 앞서 말한 내용을 인정하면서 반대 의견 제시' },
      { word: 'what I love most about', meaning: '~에서 가장 좋아하는 것은', pos: '관용구', example: "What I love most about my neighborhood is how walkable it is.", exampleKo: '동네에서 가장 좋아하는 것은 걸어 다니기 얼마나 좋은지예요.', tip: '"What I love/hate/miss most about..." — OPIc 답변 구조화 필수 표현' },
      { word: 'on top of that', meaning: '게다가', pos: '부사구', example: "The job pays well. On top of that, I get to work from home twice a week.", exampleKo: '직업 보수가 좋아요. 게다가 일주일에 두 번은 재택근무도 할 수 있어요.', tip: '= furthermore, in addition to that / 장점을 추가할 때 사용' },
      { word: 'to be honest', meaning: '솔직히 말하면', pos: '부사구', example: "To be honest, I wasn't sure I'd enjoy solo travel, but I loved it.", exampleKo: '솔직히 말하면 혼자 여행을 즐길 수 있을지 확신하지 못했는데, 정말 좋았어요.', tip: '= frankly, honestly / 자연스럽게 개인적 의견을 도입하는 표현' },
      { word: 'as far as I\'m concerned', meaning: '제 입장에서는', pos: '관용구', example: "As far as I'm concerned, work-life balance is the most important factor.", exampleKo: '제 입장에서는 일-생활 균형이 가장 중요한 요소예요.', tip: '= in my opinion / 자신의 의견을 강조할 때 사용' },
      { word: 'needless to say', meaning: '말할 것도 없이', pos: '관용구', example: "Needless to say, getting that job offer was the highlight of my year.", exampleKo: '말할 것도 없이, 그 취업 제안을 받은 것이 올해의 하이라이트였어요.', tip: '= obviously, of course / 자명한 사실을 강조할 때 사용' },
      { word: 'not to mention', meaning: '말할 것도 없고, ~은 물론이고', pos: '관용구', example: "The neighborhood has great restaurants, not to mention the beautiful parks.", exampleKo: '동네에 훌륭한 식당들이 있어요, 아름다운 공원은 말할 것도 없고요.', tip: '= on top of that / 추가 정보를 자연스럽게 덧붙일 때 사용' },
      { word: 'at the end of the day', meaning: '결국은, 따지고 보면', pos: '관용구', example: "At the end of the day, what matters most is that you're happy.", exampleKo: '결국은 가장 중요한 것은 당신이 행복한 것이에요.', tip: '= ultimately / 답변 마무리나 결론 제시 시 자연스러운 표현' },
      { word: 'for what it\'s worth', meaning: '도움이 될지 모르겠지만', pos: '관용구', example: "For what it's worth, I think taking risks is essential to growth.", exampleKo: '도움이 될지 모르겠지만, 위험을 감수하는 것이 성장에 필수적이라고 생각해요.', tip: '의견을 겸손하게 제시할 때 사용 — AL 수준 표현' },
      { word: 'in contrast', meaning: '반면에, 대조적으로', pos: '부사구', example: "My sister loves cities. In contrast, I prefer quieter, smaller towns.", exampleKo: '제 언니는 도시를 좋아해요. 반면에 저는 더 조용하고 작은 마을을 선호해요.', tip: '= on the other hand / 비교·대조 답변에서 필수 전환 표현' },
      { word: 'interestingly', meaning: '흥미롭게도', pos: '부사', example: "Interestingly, the hobby I hated at first became my biggest passion.", exampleKo: '흥미롭게도 처음에 싫어했던 취미가 제 가장 큰 열정이 됐어요.', tip: '= surprisingly / 예상 밖의 결과를 도입할 때 사용' },
      { word: 'regardless', meaning: '그럼에도 불구하고, 상관없이', pos: '부사', example: "Regardless of the challenges, I'm glad I took on that project.", exampleKo: '어려움에도 불구하고 그 프로젝트를 맡아서 기뻐요.', tip: '= despite that, nevertheless / 반론을 인정하며 입장 유지할 때' },
      { word: 'come a long way', meaning: '많이 발전하다', pos: '관용구', example: "Looking back, I think I've come a long way since I started this job.", exampleKo: '돌아보면 이 일을 시작한 이후 많이 발전했다고 생각해요.', tip: '개인적 성장 표현의 핵심 관용구 — IH·AL 필수' },
      { word: 'in the grand scheme of things', meaning: '큰 그림에서 보면, 전체적으로 보면', pos: '관용구', example: "In the grand scheme of things, that setback wasn't so bad after all.", exampleKo: '전체적으로 보면 그 좌절이 결국 그렇게 나쁜 것은 아니었어요.', tip: '= overall, in the big picture / AL 수준의 성찰 표현' },
      { word: 'shed light on', meaning: '~을 밝혀주다, 명확하게 하다', pos: '구동사', example: "That experience shed light on how important communication really is.", exampleKo: '그 경험이 의사소통이 얼마나 중요한지 밝혀줬어요.', tip: 'IH·AL 목표 필수 표현 — 경험에서 교훈을 도출할 때 사용' }
    ]
  }

];

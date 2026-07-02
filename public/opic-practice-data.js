// ── OPIc 연습문제 데이터 (8개 주제 × 3문항) ───────────────────

const OPIC_PRACTICE_DATA = {

  // ─── Topic 1: 자기소개 ────────────────────────────────────────
  1: [
    {
      question: "Let's start with an introduction. Tell me about yourself — what you do, where you live, and what kind of person you are.",
      model_answer: "Sure! My name is Jintae Jung, and I'm currently working as an engineer at a plant equipment company in Pyeongtaek. I've been in this field for about twelve years now, so I have quite a bit of experience under my belt. I live in an apartment in Anyang with my wife. What I really like about the area is that it's within walking distance of a subway station and there are several nice cafes nearby, so it's really convenient for everyday life.\n\nIn terms of my personality, I'd say I'm actually a bit introverted, but I'm curious about a lot more things than people might expect at first glance. I don't talk a ton when I first meet someone, but once I get comfortable, I really enjoy digging into new topics — whether it's something related to my work or just something random I came across online. Overall, I think of myself as someone who's quiet on the surface but always exploring something new underneath.",
      explanation: "• 이름·직업(엔지니어)·근무 지역(평택)을 자연스럽게 소개\n• \"I've been in this field for about twelve years\" — 현재완료로 12년 경력을 자연스럽게 표현\n• \"within walking distance of\" — 역세권을 자연스럽게 표현하는 구어체\n• \"In terms of my personality\" — 주제 전환 표현으로 답변 구조화\n• \"quiet on the surface but always exploring something new underneath\" — 내성적이면서도 호기심 많은 성격을 함축적으로 표현하는 마무리"
    },
    {
      question: "Please tell me a bit about your background. Where are you from originally, and what brought you to where you are now?",
      model_answer: "I'm originally from Busan, which is a coastal city in the southern part of Korea. Growing up there was really wonderful — I loved being near the ocean and the food is incredible. When I was eighteen, I moved to Seoul to attend university, and I've basically been living here ever since.\n\nI studied business administration in college, which is what led me to my current career in marketing. Seoul was a big adjustment at first — it's much busier and faster-paced than Busan — but I've grown to really love the energy of the city. There's always something going on, and the job opportunities here are much more diverse.\n\nThat said, I still go back to Busan to visit my family whenever I can, usually two or three times a year. It's always a nice reminder of where I came from.",
      explanation: "• 출신 도시 소개 시 간단한 설명을 덧붙여 자연스러운 대화체 유지\n• 과거·현재를 자연스럽게 연결 (grew up → moved → current)\n• \"which is what led me to\" — 관계절로 경력 배경과 현재를 논리적 연결\n• \"That said\" — 새로운 포인트를 도입하는 자연스러운 전환 표현\n• 가족 방문 언급으로 답변에 인간적인 면모 추가"
    },
    {
      question: "Tell me about your daily life — your job or school, who you spend time with, and what matters most to you.",
      model_answer: "My daily life revolves mostly around my job and the people around me. I work at an IT company as a software developer, and honestly, I find it quite rewarding even though it can be demanding at times. My team is great — we work closely together, and I've made some really good friends there.\n\nAfter work, I usually spend time with my family. I still live with my parents, which I genuinely enjoy. We often eat dinner together and watch TV shows in the evenings.\n\nAs for what matters most to me — I'd say it's maintaining good relationships with the people I care about, staying healthy, and continuing to learn new things. I try to read at least a little bit every night before bed to keep my mind active. I think those are the things that keep me grounded.",
      explanation: "• \"revolves mostly around\" — 일상의 중심을 함축적으로 표현하는 고급 표현\n• 직장 생활 → 가족 → 가치관 순으로 체계적으로 전개\n• \"honestly\" — 자연스러운 구어체 강조 표현\n• \"As for what matters most to me\" — 주제 전환 표현으로 답변의 방향 명확화\n• \"keep me grounded\" — 가치관을 함축적으로 표현하는 마무리 표현"
    }
  ],

  // ─── Topic 2: 일상 & 루틴 ────────────────────────────────────
  2: [
    {
      question: "Describe your typical weekday from the time you wake up to when you go to bed.",
      model_answer: "On a typical weekday, I wake up around 6 AM. The first thing I do — out of habit, honestly — is check my phone right after I open my eyes, even before I get out of bed. I know it's not the healthiest habit, but it's become second nature at this point.\n\nI don't usually eat breakfast in the morning; I just get ready and head out of the house by around 6:20. I drive to work, and the commute takes about an hour. During the drive, I usually listen to a podcast or the news on the radio — it's a good way to catch up on what's happening before the day starts.\n\nMy work hours are from 8 to 5, so I'm at the office for most of the day. By the time I get home in the evening, I try to relax a bit before winding down and getting to bed at a reasonable hour so I can do it all again the next day.",
      explanation: "• 시간 순서대로 하루를 서술 (wake up → phone check → commute → work)\n• \"out of habit, honestly\" — 습관적 행동을 솔직하게 인정하는 자연스러운 삽입구\n• \"second nature\" — 오래된 습관을 표현하는 관용 표현\n• 아침 식사를 거른다는 사실을 담백하게 서술 (\"I don't usually eat breakfast\")\n• 자동차 출퇴근 중 팟캐스트/라디오 뉴스 청취를 자연스럽게 언급해 답변에 구체성 부여"
    },
    {
      question: "Tell me about your morning routine. How do you prepare for the day?",
      model_answer: "My morning routine is pretty set — I've had basically the same one for a couple of years now. My alarm goes off at 6:45, but I usually snooze it once before actually getting up around 7. The first thing I do is drink a full glass of water, which I've heard is really good for waking your body up.\n\nThen I stretch for about ten minutes. After that, I jump in the shower — a warm shower really helps me feel more alert. Getting dressed doesn't take long since I try to plan my outfits the night before.\n\nBreakfast is important to me. I usually make oatmeal or eggs with some fruit on the side. I prefer green tea in the morning over coffee. I try to leave the house with about fifteen minutes to spare so I'm not rushing. Starting the day calmly makes a huge difference to my whole mood.",
      explanation: "• \"pretty set\" — 루틴의 일관성을 간결하게 표현\n• \"which I've heard is really good for\" — 근거를 덧붙이는 자연스러운 방식\n• \"I find a warm shower really helps me\" — 개인적인 경험을 구체적으로 서술\n• 준비 과정의 세부 사항(스트레칭, 샤워, 아침식사) 구체적으로 묘사\n• 마지막 문장으로 루틴의 가치를 짧게 마무리"
    },
    {
      question: "How is your weekend routine different from your weekdays? What do you usually do on weekends?",
      model_answer: "My weekends are pretty different from my weekdays, which I think is important for maintaining balance. On weekdays, everything is driven by a schedule. But on weekends, I let myself slow down and be more spontaneous.\n\nI usually sleep in until about 9 or even 10 on Saturdays. After a leisurely breakfast, I might go out for a walk in the park or meet up with friends for brunch. I really cherish those relaxed morning hours.\n\nSaturday afternoons often involve some activity — maybe going to a museum, watching a movie, or catching a sports game. In the evening, I sometimes cook a more elaborate meal at home or go out to a nice restaurant.\n\nSundays I try to keep a bit quieter. I do laundry, tidy up the apartment, and set some goals for the coming week. It helps me feel organized and less stressed going into Monday.",
      explanation: "• \"driven by a schedule\" — 평일 특성을 함축적으로 표현\n• \"slow down and be more spontaneous\" — 주말 분위기를 명확하게 대조\n• \"cherish those relaxed morning hours\" — 감정을 담은 어휘로 답변의 깊이 증가\n• 토요일(오전→오후→저녁)과 일요일을 구분해 체계적으로 서술\n• 주말 준비 루틴으로 마무리해 현실적이고 성숙한 답변"
    }
  ],

  // ─── Topic 3: 거주지 & 동네 ──────────────────────────────────
  3: [
    {
      question: "Tell me about the place where you live. Describe your home and the area around it.",
      model_answer: "I currently live in a two-bedroom apartment in Sinchon, which is a vibrant neighborhood in the western part of Seoul. I share the place with my younger brother, which is nice because we've always been close.\n\nThe apartment itself is fairly modern — it was renovated a few years ago, so the kitchen and bathroom are quite new. My favorite space is the living room because it gets a lot of natural light in the afternoon. We also have a small balcony where I grow a few plants.\n\nAs for the neighborhood, I absolutely love it. Sinchon is very lively — there are tons of restaurants, cafes, and small shops within walking distance. It's also well connected by subway. The downside is that it can get quite noisy on weekends. But honestly, the convenience and energy of the area more than make up for that.",
      explanation: "• 집의 위치 → 구조 → 좋아하는 공간 → 동네 순으로 논리적 전개\n• \"which is nice because\" — 이유를 자연스럽게 덧붙이는 연결 표현\n• \"I absolutely love it\" — 감정을 강조하는 부사 사용\n• 장점 후 \"The downside is that\" — 균형 있는 답변 구조\n• \"more than make up for that\" — 결론을 명확히 제시하는 마무리"
    },
    {
      question: "What do you like most about your neighborhood? What makes it a good place to live?",
      model_answer: "Honestly, the thing I love most about my neighborhood is how convenient it is for everyday life. Everything I need is within a short walk — a large supermarket, several coffee shops, a pharmacy, and a small gym. I don't need to drive for most daily errands, which saves me a lot of time.\n\nI also really appreciate that my area has green spaces. There's a riverside park about a ten-minute walk from my apartment, and I go there regularly to jog or just sit and relax. It's a great escape from the urban hustle.\n\nAnother thing I like is the sense of community. A lot of the shop owners in the area recognize me by now, and there's a lively weekend market that people from the whole district come to. It gives the neighborhood a real local feel despite being in the middle of a big city.",
      explanation: "• 가장 좋은 점을 세 가지로 나누어 구체적으로 서술\n• \"saves me a lot of time\" — 편리함의 구체적 효과 설명\n• \"a great escape from the urban hustle\" — 비유적 표현으로 어휘 수준 향상\n• \"despite being in the middle of a big city\" — 대조를 통한 깊이 있는 표현\n• 각 포인트를 새 단락으로 구분해 명확한 구조 유지"
    },
    {
      question: "Compare your current home to the place where you grew up. What are the biggest differences?",
      model_answer: "There are actually quite a few differences between where I live now and where I grew up. I grew up in a detached house in a smaller city — it was quite spacious with a yard. Now I live in an apartment in Seoul, which is much more compact. The contrast in living space is pretty significant.\n\nIn terms of neighborhood feel, my hometown was very quiet and suburban. Everyone knew each other, and there was a real sense of community. Here in Seoul, it's the opposite — it's bustling, diverse, and a bit more anonymous.\n\nBut I think both have their own charm. Growing up in a smaller place gave me a slower pace of life and a strong sense of belonging, which I really valued. Seoul, on the other hand, offers much more in terms of opportunities, entertainment, and diversity. I appreciate both for different reasons.",
      explanation: "• 두 거주지를 직접 비교하는 명확한 구조\n• \"The contrast...is pretty significant\" — 비교를 강조하는 표현\n• \"It's the opposite\" — 대조를 명확하고 간결하게 표현\n• \"Both have their own charm\" — 균형 잡힌 시각 표현\n• \"for different reasons\" — 답변을 깔끔하게 마무리"
    }
  ],

  // ─── Topic 4: 취미 & 여가 ────────────────────────────────────
  4: [
    {
      question: "What do you usually do in your free time? Tell me about your hobbies and interests in detail.",
      model_answer: "I have a few things I like to do in my free time. The one I'm probably most passionate about is running. I started about three years ago, mostly as a way to manage stress, and now I genuinely love it. I try to run at least three times a week — usually in the evenings — and I've even signed up for a couple of 10K races.\n\nBesides running, I really enjoy cooking. I love trying out new recipes, especially Asian cuisines. It's quite a creative process, and I find it very satisfying to make a good meal from scratch. I'll spend a Sunday afternoon experimenting in the kitchen quite happily.\n\nI also read a lot — mostly non-fiction. I'm particularly interested in books about psychology and business. It's become a nice habit before bed, and I feel like I'm always learning something new.",
      explanation: "• 취미 세 가지를 자연스럽게 나열하면서 각각 이유와 맥락 제공\n• \"mostly as a way to manage stress\" — 시작 동기를 자연스럽게 설명\n• \"from scratch\" — 요리 관련 자연스러운 관용 표현\n• \"quite happily\" — 부사 배치로 자연스러운 어조 형성\n• 마지막 취미(독서)로 지적인 면모도 보여주며 균형 잡힌 마무리"
    },
    {
      question: "Tell me about a hobby you have recently started. How did you get into it, and why do you enjoy it?",
      model_answer: "Over the past year, I've really gotten into photography — specifically, street photography. It started almost by accident. I was visiting a friend in Hongdae one day and I was so struck by all the interesting people and street art that I just started taking pictures on my phone. The results were way better than I expected, so I decided to invest in a proper camera.\n\nSince then, I've been going out on weekend mornings looking for interesting shots. What I love about it is that it pushes me to slow down and really observe the world around me. You start noticing details you would normally just walk past.\n\nI've also joined an online photography community where people share their work and give feedback. It's become one of those hobbies where the more I learn, the more I realize there is to learn — which keeps it endlessly interesting.",
      explanation: "• \"gotten into\" — 최근 관심을 갖게 된 것을 표현하는 자연스러운 구어체\n• \"It started almost by accident\" — 스토리텔링 방식으로 흥미롭게 시작\n• \"way better than I expected\" — way를 강조 부사로 활용\n• \"slow down and really observe\" — 취미의 가치를 추상적으로 표현\n• \"the more I learn, the more I realize\" — 비교급 반복 구조로 문장 수준 향상"
    },
    {
      question: "How do you usually relax after a long or stressful day? What helps you unwind?",
      model_answer: "After a long day, the thing that helps me unwind most is taking a long walk. There's something about being outside and moving that really clears my head. I live near a river park, so I'll often put in my earphones and walk along the water for 30 to 45 minutes. By the time I get home, I feel like a completely different person.\n\nAnother thing that helps is cooking. Even on weeknights, if I cook a proper meal instead of ordering delivery, I find the whole process — chopping vegetables, following a recipe, smelling the food — quite therapeutic. It forces me to focus on something other than whatever was stressing me out.\n\nOn evenings when I'm really tired, I watch a comedy show or a documentary. I try to avoid scrolling through social media because I find that actually makes me feel more anxious. A calm evening makes a big difference in how I feel the next morning.",
      explanation: "• \"By the time I get home\" — 시간 부사절로 결과를 자연스럽게 표현\n• \"therapeutic\" — 스트레스 해소 효과를 표현하는 어휘\n• \"forces me to focus on something other than\" — 복잡한 동사 구조 자연스럽게 사용\n• SNS를 피하는 이유를 솔직하게 언급해 현실적이고 공감 가는 답변\n• 세 가지 방법을 상황에 따라 구분해 구체적으로 서술"
    }
  ],

  // ─── Topic 5: 여행 ────────────────────────────────────────────
  5: [
    {
      question: "Tell me about a trip that was memorable for you. Where did you go and what made it stand out?",
      model_answer: "The trip that sticks out most in my memory is a solo trip I took to Japan about two years ago. It was my first time traveling alone, and I wasn't sure how it would go, but it ended up being one of the best experiences of my life.\n\nI spent about ten days traveling between Tokyo, Kyoto, and Osaka. Each city had such a distinct personality — Tokyo was modern and overwhelming in the best way, Kyoto was serene and full of history, and Osaka was loud, warm, and all about the food.\n\nThe highlight was a morning I spent hiking in Arashiyama, a bamboo forest area outside Kyoto. It was early so there weren't many tourists yet, and walking through that bamboo grove in the quiet morning light was just magical. None of my photos really captured how peaceful it felt.\n\nThat trip taught me that I'm more capable of navigating the world on my own than I thought, which was really empowering.",
      explanation: "• \"sticks out most in my memory\" — 기억에 남는 것을 표현하는 고급 표현\n• 각 도시의 특징을 간결하게 비교해 풍부한 묘사\n• \"in the best way\" — 압도적인 경험을 긍정적으로 표현\n• \"none of my photos really captured how peaceful it felt\" — 사진으로 담기 힘든 감동\n• 마지막 문장으로 여행의 의미를 깊이 있게 마무리"
    },
    {
      question: "Describe the type of traveler you are. Do you prefer to plan everything or go with the flow?",
      model_answer: "I'd describe myself as a moderate planner — I like to have a general framework for a trip, but I try to leave enough flexibility to be spontaneous. Both extremes have downsides: if you plan every single hour, you miss out on happy accidents; but if you plan nothing, you waste a lot of time figuring things out.\n\nFor me, the ideal approach is to book flights and accommodations in advance — those are non-negotiable — and then have a rough list of places I want to see. But once I'm there, I might skip something on the list if I end up enjoying a neighborhood more than expected.\n\nI also try to research local food and hidden gems beforehand. Some of the best travel experiences come from smaller, less touristy places that don't make it into travel guides. Overall, I travel to enjoy the experience, not to check off a list.",
      explanation: "• \"moderate planner\" — 자신의 여행 스타일을 한 단어로 정의하며 시작\n• \"happy accidents\" — 우연한 좋은 경험을 표현하는 인상적인 표현\n• \"non-negotiable\" — 필수 사항을 강조하는 강력한 어휘\n• \"hidden gems\" — 여행 관련 자연스러운 구어체 표현\n• \"not to check off a list\" — 여행 철학을 간결하게 표현하는 마무리"
    },
    {
      question: "Tell me about a place you have visited that you would recommend to others. Why should they go there?",
      model_answer: "If I had to recommend one place, I'd say Gyeongju without hesitation. It's sometimes called the \"museum without walls\" because the entire city is basically an outdoor historical museum — ancient tombs, pagodas, and palaces are scattered throughout.\n\nWhat I love about Gyeongju is how accessible it is. You can easily rent a bicycle and spend a whole day cycling between different historical sites. It's not quite as famous internationally as Busan or Jeju, so it doesn't feel overcrowded, especially on weekdays.\n\nI'd specifically recommend going in late October or early November, when the autumn leaves are incredible. The combination of ancient stone structures and bright red and orange foliage is really something special.\n\nBeyond the sights, the local food in Gyeongju is fantastic. It's the kind of place that gives you a real sense of how rich Korean history is, and I always leave feeling strangely proud.",
      explanation: "• \"museum without walls\" — 유명한 별칭을 활용해 장소를 인상적으로 소개\n• \"scattered throughout\" — 분포를 나타내는 자연스러운 표현\n• 구체적인 방문 시기 추천으로 답변에 실용적 정보 추가\n• \"strangely proud\" — 독특한 감정 표현으로 개성 있는 마무리\n• 관광 → 음식 → 감상 순으로 답변을 체계적으로 전개"
    }
  ],

  // ─── Topic 6: 직장 & 학교 ────────────────────────────────────
  6: [
    {
      question: "Tell me about your job or school. What do you usually do there on a typical day?",
      model_answer: "I work as a UX designer at a tech startup in Seoul, and it's a job I genuinely enjoy — most days, anyway. A typical day starts with checking emails and reviewing any feedback from the development team. Then, usually around 10, we have a short standup meeting where each member shares what they're working on.\n\nThe bulk of my day involves designing user interfaces — creating wireframes, building prototypes, and doing rounds of feedback and revision. I work closely with the product manager and engineers, so there's a lot of back-and-forth. Sometimes that's energizing; other times, when there are conflicting opinions, it can be a bit draining.\n\nWe have a flexible work culture, which I appreciate. I typically finish around 6:30 or 7. On Fridays we usually have a team lunch together, which is a nice way to end the work week.",
      explanation: "• \"most days, anyway\" — 솔직한 삽입구로 자연스러운 구어체 표현\n• \"bulk of my day\" — 하루의 주요 업무를 표현하는 자연스러운 어구\n• \"energizing; other times...draining\" — 상황에 따른 감정 변화를 균형 있게 표현\n• 업무 흐름(이메일 → 회의 → 디자인 작업)을 시간 순으로 자연스럽게 서술\n• 직장 문화와 구체적 일과를 모두 포함한 완성도 높은 답변"
    },
    {
      question: "Describe your work or study environment. What does the space look like and how does it affect you?",
      model_answer: "My workplace is an open-plan office on the 12th floor of a building in Gangnam, with a great view of the city. It's a modern, open space — no private offices or cubicles, just long shared desks with monitors. The design is minimalist: lots of white and wood tones, with a few plants scattered around.\n\nPersonally, I have a bit of a love-hate relationship with open offices. On the positive side, it makes communication super easy — I can just lean over and talk to a colleague instead of sending an email. It's also energizing to be surrounded by people who are all working hard.\n\nOn the downside, it can get noisy and distracting. I've gotten into the habit of putting on noise-canceling headphones when I need to focus deeply. There's also a quiet room people can book for focused work, which I use quite often. Overall, the environment suits the collaborative nature of my work well.",
      explanation: "• 사무실 위치, 구조, 디자인을 체계적으로 묘사\n• \"love-hate relationship\" — 복잡한 감정을 표현하는 관용구\n• 장점 → 단점 구조로 균형 잡힌 답변\n• \"lean over and talk to\" — 구체적인 행동 묘사로 생동감 추가\n• \"suits the collaborative nature of my work\" — 마무리에서 환경과 업무의 연관성 언급"
    },
    {
      question: "What do you find most challenging about your job or school, and how do you deal with it?",
      model_answer: "The biggest challenge in my job is probably managing competing priorities and tight deadlines. In the tech industry, things move fast — priorities can shift overnight, and suddenly something that wasn't urgent becomes the top priority. Early on, I found this really stressful.\n\nOver time, I've developed some strategies to cope with this. The first is to maintain a clear to-do list that I update every morning, ranking tasks by urgency and importance. The second is being more comfortable having direct conversations with my manager when the workload becomes unrealistic — something I used to avoid.\n\nI've also learned to accept that perfection isn't always possible under pressure, and that a good solution delivered on time is often more valuable than a perfect one delivered late. That mindset shift has honestly made the challenging parts of my job much more manageable.",
      explanation: "• 구체적인 도전(competing priorities, tight deadlines) 명시\n• \"shift overnight\" — 빠른 변화를 비유적으로 표현\n• 두 가지 대처 전략을 논리적으로 나열 (The first... The second...)\n• \"a good solution on time vs. a perfect one late\" — 성숙한 통찰을 담은 문장\n• \"mindset shift\" — 성장을 표현하는 현대적 어휘로 마무리"
    }
  ],

  // ─── Topic 7: 롤플레이 ────────────────────────────────────────
  7: [
    {
      question: "I'd like you to role-play a situation. You made a hotel reservation for two nights, but you need to extend it to three nights. Call the hotel and make the change.",
      model_answer: "Hello, I'd like to speak with someone about my reservation, please.\n\nThank you. My name is Minjun Park, and I have a reservation for two nights, checking in this Friday, the 14th. My confirmation number is KR-2847. I was hoping to extend my stay by one more night — so instead of checking out on Sunday, I'd like to stay until Monday morning.\n\nIs that possible? Great. Would the same rate apply for the extra night? I see — so it would be slightly higher since it's a weekend rate. That's fine. Could you go ahead and update the reservation to three nights?\n\nAlso, would it be possible to request a higher floor room? I'm currently assigned to the third floor, and I was wondering if anything on the seventh floor or above is available.\n\nPerfect. Could you send a confirmation email to the address on file? The email is minpark at gmail dot com. Thank you very much. Have a good day.",
      explanation: "• 전화 상황에 맞는 자연스러운 시작 (\"I'd like to speak with someone about...\")\n• 이름, 예약 번호, 체크인 날짜 등 필요 정보를 체계적으로 제공\n• 추가 요청(방 층수 변경)을 자연스럽게 덧붙여 답변 내용 풍부화\n• 요금 확인 질문으로 현실적인 통화 상황 연출\n• 확인 이메일 요청으로 완벽하게 마무리"
    },
    {
      question: "Let's role-play. You ordered a jacket online two weeks ago, but it still hasn't arrived. Call customer service to find out what's happening and request a solution.",
      model_answer: "Hi there, I'm calling about an order I placed about two weeks ago that I still haven't received. My name is Hyerin Choi, and my order number is OH-58821.\n\nI placed the order on the 1st of this month. The estimated delivery was within five to seven business days, but it's now been fourteen days and I haven't gotten anything. I checked the tracking online, but it hasn't been updated since the 4th — it just says \"in transit.\"\n\nI understand there can be delays, but two weeks seems like quite a long time. Could you look into what's happening with the shipment?\n\nI see... so it may have been lost in transit? In that case, I'd like to request a replacement as soon as possible. I need the jacket for an event next week, so timing is fairly important.\n\nIf a replacement isn't available, could I get a full refund instead? Could you confirm which option you can offer and when I might receive it?",
      explanation: "• 문제를 명확하게 설명하면서 주문번호, 날짜 등 구체적 정보 제공\n• \"I understand there can be delays, but\" — 정중하면서도 단호하게 문제 제기\n• \"in transit\" 같은 배송 관련 실제 용어 자연스럽게 사용\n• 원하는 해결책을 두 가지 제시(교체품 or 환불)하며 유연성 표현\n• 마지막에 확인을 요청하며 통화를 자연스럽게 마무리"
    },
    {
      question: "I'd like to role-play this situation: You want to book a table at a restaurant for a birthday dinner for four people next Saturday evening. Call and make the reservation.",
      model_answer: "Good evening. I'd like to make a reservation for next Saturday if possible.\n\nYes, I'm looking for a table for four people — it's for a birthday dinner. Would you have availability around 7 PM? Or if not, 7:30 would work as well.\n\n7 PM works perfectly, thank you. The reservation would be under the name Jisoo Kim — K-I-M. My phone number is 010-3347-8821.\n\nActually, since it's a birthday dinner, do you have any special arrangements? For example, a small birthday cake or dessert service?\n\nThat sounds lovely — yes, please include that. Also, one of our guests has a shellfish allergy. Could you note that on the reservation?\n\nThank you. Just to confirm: four people, next Saturday the 21st at 7 PM, under Kim Jisoo, with a birthday dessert and a shellfish allergy note. Does that all sound correct? Perfect. We look forward to it.",
      explanation: "• 자연스러운 전화 예약 어조로 시작\n• 대안 시간 먼저 제시(7 PM, or 7:30) — 유연성 표현\n• 스펠링을 불러주는 현실적인 세부 표현 포함\n• 생일 특별 서비스 요청으로 답변 내용 풍부화\n• 알레르기 정보를 주의 깊게 전달 — 세심한 고객 역할\n• 모든 내용을 요약 확인하는 전문적 마무리"
    }
  ],

  // ─── Topic 8: 경험 & 비교 ────────────────────────────────────
  8: [
    {
      question: "Tell me about a time when you faced an unexpected problem. What happened and how did you handle it?",
      model_answer: "One time that comes to mind is when I was traveling in Barcelona and lost my wallet on the very first day. I had just arrived and I was on the metro when I realized my wallet — with my credit card and cash — was gone. It was a terrifying feeling, especially since I was alone.\n\nI immediately went to the nearest police station and filed a report, which I later found out was necessary for insurance purposes. Then I called my bank to cancel my cards and managed to do an emergency international transfer through my bank's app.\n\nThe really stressful part was the next two days before the funds arrived — I had to rely on the kindness of the hostel owner, who let me stay without paying upfront.\n\nLooking back, that experience taught me a lot about problem-solving under pressure. I'm now much more prepared when I travel — I always keep a separate emergency card and a copy of my passport in my bag.",
      explanation: "• 구체적인 장소와 상황을 바로 제시해 몰입감 있는 시작\n• 문제 해결 과정을 단계적으로 설명 (경찰서 → 은행 → 숙소)\n• \"kindness of the hostel owner\" — 타인의 도움에 감사하는 자연스러운 표현\n• STAR 구조 완성: 상황 → 문제 → 행동 → 결과 & 교훈\n• 이후 변화된 습관으로 마무리해 성장을 보여주는 답변"
    },
    {
      question: "How has your daily life or lifestyle changed compared to five years ago? What caused these changes?",
      model_answer: "Looking back five years, my life has changed quite significantly, mostly for the better. Five years ago I was a university student with a much more irregular schedule — staying up late, skipping meals, and not really thinking about my long-term health. I was also much more socially active, going out with friends almost every weekend.\n\nNow that I'm working full time, I've become much more disciplined. I go to bed at a regular time, exercise consistently, and try to eat properly. Partly it's because I just feel the effects of bad habits much more now — staying up until 2 AM used to be fine; now it ruins my whole next day.\n\nI've also gotten more selective about how I spend my time socially. I see fewer people, but the friendships I have feel deeper and more meaningful. Overall, I feel like I've grown a lot — not just in responsibility, but in self-awareness.",
      explanation: "• \"mostly for the better\" — 전반적인 변화 방향을 간단히 요약\n• 과거(대학 시절)와 현재(직장인)를 명확하게 대비\n• \"staying up until 2 AM used to be fine; now it ruins my whole next day\" — 유머러스하고 공감 가는 묘사\n• 생활 변화 → 사회생활 변화 → 전반적 성장 순으로 전개\n• \"self-awareness\" — 성장을 한 단어로 요약하는 강력한 마무리"
    },
    {
      question: "Tell me about a time you tried something completely new or out of your comfort zone. What happened and what did you learn?",
      model_answer: "About a year and a half ago, I signed up for an improvisation comedy class on a bit of a whim. A friend forwarded me the flyer and said I should try it because I'd mentioned wanting to be more confident in social situations. I almost didn't go because the thought of performing in front of strangers was genuinely terrifying.\n\nThe first class was extremely uncomfortable. Everyone was asked to do spontaneous scenes in front of the group, and I felt like my mind went completely blank every time. I seriously considered not going back.\n\nBut I pushed through, and over eight weeks, something gradually shifted. I started to care less about being \"correct\" and more about just reacting naturally. By the end, I was actually looking forward to each session.\n\nWhat surprised me most was how those skills transferred to everyday life — I became more comfortable speaking up in work meetings. It was genuinely one of the best things I've ever done for myself.",
      explanation: "• \"on a bit of a whim\" — 즉흥적인 결정을 자연스럽게 표현\n• \"genuinely terrifying\" — 감정의 강도를 명확히 표현\n• \"something gradually shifted\" — 미묘한 변화를 잘 포착하는 표현\n• 기술이 실생활로 전이된 것을 구체적으로 언급\n• \"something I never would have expected\" 뉘앙스로 결말에 반전 부여"
    }
  ]
};

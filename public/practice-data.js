const PRACTICE_DATA = {
  1: [
    {
      image: '/practice-images/part1-1.png?v=2',
      question: '[Photo: A woman in a business suit is presenting in front of a whiteboard in a conference room. Several colleagues are seated around a table with laptops and coffee cups.]',
      model_answer: 'In this photo, I can see a business meeting taking place in a conference room. A woman wearing a business suit is standing at the front of the room, giving a presentation next to a whiteboard. Several colleagues are seated around a large table, paying close attention and taking notes. On the table, there are laptops and coffee cups. The overall atmosphere appears professional and productive.',
      explanation: '• "In this photo, I can see…" 로 시작해 전체 장면을 먼저 소개\n• 주인공(여성)의 복장·위치·행동을 명확히 묘사\n• 배경 인물들의 반응("paying close attention")을 추가해 역동감 표현\n• 테이블 위 소품으로 세부 정보 보완\n• 현재진행형(is standing, are seated)으로 생동감 있는 묘사'
    },
    {
      image: '/practice-images/part1-2.png?v=2',
      question: '[Photo: A busy outdoor farmers market on a sunny day. Vendors are selling fresh vegetables, fruits, and flowers at colorful stalls. Shoppers walk through the aisles carrying bags.]',
      model_answer: 'In this photo, there is a busy outdoor farmers market on what appears to be a sunny day. Various vendors are selling fresh produce such as vegetables, fruits, and flowers at colorful stalls. Many shoppers are walking through the aisles and carrying bags filled with their purchases. The market looks lively and full of activity. Everyone seems to be enjoying the pleasant weather and the wide variety of products on offer.',
      explanation: '• "what appears to be a sunny day" — 확실하지 않은 것은 추측 표현 사용\n• "such as vegetables, fruits, and flowers" — 구체적 예시로 묘사 풍부화\n• 상인(vendors)과 손님(shoppers) 양쪽 모두 묘사\n• "lively and full of activity" — 분위기를 형용사로 마무리\n• 날씨·분위기·사람들의 감정까지 포괄적으로 커버'
    },
    {
      image: '/practice-images/part1-3.png?v=2',
      question: '[Photo: A man is checking in at an airport counter. A uniformed airline staff member stands behind the counter. The man has two suitcases and is handing over his passport.]',
      model_answer: 'In this photo, a man is at an airport check-in counter. He appears to be in the process of checking in for his flight. He has two suitcases next to him and is handing his passport to an airline staff member who is standing behind the counter in uniform. The airport in the background looks quite busy, suggesting it might be a peak travel time.',
      explanation: '• "appears to be in the process of" — 진행 상황을 자연스럽게 표현\n• 인물 두 명을 각각 상세히 묘사(여행객·직원)\n• "suggesting it might be" — 배경 상황에 대한 추론 문장 추가\n• 여권, 캐리어 등 소품 묘사로 현장감 강화\n• 수동태 없이 능동태 위주의 자연스러운 서술'
    },
    {
      image: '/practice-images/part1-4.png?v=2',
      question: '[Photo: Two people are sitting at a café table near a window. One is using a laptop while the other drinks coffee and reads a newspaper. Sunlight streams through the window.]',
      model_answer: 'In this photo, two people are sitting at a small table inside a café near a window. One of them is working on a laptop computer, while the other is drinking coffee and reading a newspaper. Sunlight is streaming through the window, creating a warm and relaxed atmosphere. The café appears to be quiet and comfortable, making it a nice place to work or unwind.',
      explanation: '• "while the other is" — 두 동작을 while로 연결해 문장 구조 다양화\n• "streaming through the window" — 햇빛 묘사에 생동감 있는 동사 사용\n• "creating a warm and relaxed atmosphere" — 분사구문으로 자연스럽게 분위기 표현\n• 장소 특성("quiet and comfortable")으로 마무리\n• 사실 묘사 후 판단·해석 문장으로 깊이 추가'
    },
    {
      image: '/practice-images/part1-5.png?v=2',
      question: '[Photo: A group of people are hiking on a trail in a forest. They wear backpacks and hiking boots. The trail is surrounded by tall trees and a clear blue sky is visible above.]',
      model_answer: 'In this photo, a group of people are hiking along a trail in a forest. All of them are wearing backpacks and proper hiking boots, suggesting they are well-prepared for the trip. The trail is surrounded by tall trees, and above them a clear blue sky is visible. The scene looks very peaceful and refreshing. The hikers appear to be enjoying the outdoor activity together.',
      explanation: '• "suggesting they are well-prepared" — 외형에서 추론한 분사구문 사용\n• "surrounded by tall trees" — 수동태로 환경 묘사\n• 원경(하늘)과 근경(등산객) 모두 묘사해 입체감 확보\n• "peaceful and refreshing" — 감각적 형용사로 분위기 표현\n• 집단(group)의 행동과 감정을 자연스럽게 연결'
    }
  ],
  2: [
    {
      question: 'Imagine a market research company is conducting a survey about shopping habits.\n\nQuestion: Do you usually shop online or at physical stores, and why?',
      model_answer: 'I mostly shop online because it is much more convenient. I can browse products anytime without leaving my home, and the prices are often lower than in physical stores. Plus, delivery is usually fast. However, for things like clothes or furniture, I sometimes visit physical stores to check the quality in person before buying.',
      explanation: '• 첫 문장에서 바로 입장 표명 ("I mostly shop online because…")\n• 이유 2~3개를 자연스럽게 나열 (편의성, 가격, 배송)\n• "However" 로 반대 상황을 인정해 답변에 균형감 부여\n• 30초 내에 완결되는 간결하고 명확한 구조\n• 일상적인 어휘로 유창하게 전달'
    },
    {
      question: 'Imagine a travel agency is surveying customers about their vacation preferences.\n\nQuestion: Do you prefer traveling alone or with others? Why?',
      model_answer: 'I personally prefer traveling with others, especially with close friends or family. Sharing experiences with people I care about makes the trip much more enjoyable and memorable. It is also more economical since we can split costs like accommodation and transportation. That said, I understand the appeal of solo travel — it gives you total freedom to go wherever you want.',
      explanation: '• "especially with close friends or family" — 구체적 대상 명시로 답변 강화\n• 이유 두 가지(즐거움, 경제성)를 간결하게 제시\n• "That said" — 상대 의견을 인정하는 전환 표현으로 유연한 사고 표현\n• 자연스러운 억양을 위해 문장 길이를 다양하게 조절\n• 30초 제한에 맞는 적절한 답변 분량'
    },
    {
      question: 'Imagine a company is surveying employees about work-life balance.\n\nQuestion: How do you usually relax after a long day at work?',
      model_answer: 'After a long day, I usually unwind by watching a TV show or listening to music. It helps me switch off from work mode and clear my mind. Sometimes I also go for a short walk in my neighborhood, which I find very refreshing. These small routines help me recharge and feel ready for the next day.',
      explanation: '• "unwind", "switch off", "recharge" — 유사 표현 다양화로 어휘력 시연\n• 여러 활동을 자연스럽게 나열 (TV, 음악, 산책)\n• "which I find very refreshing" — 관계절로 문장 구조 다양화\n• 마지막 문장으로 답변을 깔끔하게 마무리\n• 개인적 경험이 담긴 생생한 답변'
    },
    {
      question: 'Imagine a local government is surveying residents about transportation.\n\nQuestion: What is your main way of getting to work or school, and are you satisfied with it?',
      model_answer: 'I usually take the subway to work. It is reliable and fast, which I really appreciate during rush hour. I am generally satisfied with it, although it can get very crowded in the morning. I wish the trains were a bit more spacious, but overall, public transportation here is quite efficient and affordable compared to driving.',
      explanation: '• 질문의 두 가지 요소(방법 + 만족도)를 모두 답변에 포함\n• "although it can get crowded" — 단점을 인정하며 현실적인 답변\n• "I wish + 가정법" — 바람 표현으로 문법 다양화\n• "compared to driving" — 비교 구문으로 답변에 깊이 추가\n• 짧고 명확한 문장으로 유창성 유지'
    },
    {
      question: 'Imagine a food company is surveying consumers about eating habits.\n\nQuestion: How often do you eat out, and what kind of restaurants do you usually go to?',
      model_answer: 'I eat out about two or three times a week. I usually go to casual dining restaurants or local eateries because they are affordable and the food is good. I especially enjoy Korean and Italian cuisine. On special occasions, I might visit a nicer restaurant with family or friends. Eating out is a great way to socialize and try different foods without spending too much time cooking.',
      explanation: '• "about two or three times a week" — 구체적 빈도 표현\n• 레스토랑 종류(casual dining, local eateries)를 구체적으로 언급\n• "On special occasions" — 대조 상황 제시로 답변에 층위 추가\n• 마지막 문장에서 먹는 행위의 사회적 의미까지 언급\n• 자연스러운 일상 대화 어조 유지'
    }
  ],
  3: [
    {
      question: 'City Library — Summer Reading Program\n• Children\'s Workshop: Mon/Wed, 10 AM–12 PM, Free\n• Teen Book Club: Tue/Thu, 3–4:30 PM, Free\n• Adult Reading Circle: Fri, 6–8 PM, $5/session\n• Author Talk Series: Every 2nd Saturday, 2–4 PM, $10/event\n• Speed Reading Seminar: July 15 (Sat), 10 AM–1 PM, $25\n\nQuestion: I\'m an adult who wants to join a weekly reading group. What are my options and how much will it cost?',
      model_answer: 'According to the schedule, there is one weekly option for you as an adult — the Adult Reading Circle, held every Friday from 6 to 8 PM at $5 per session. If you attend every week in a month, that would be approximately $20 per month. The Children\'s Workshop and Teen Book Club are free, but those are designed for younger participants, so the Adult Reading Circle would be the appropriate choice for you.',
      explanation: '• "According to the schedule" — 정보 출처를 명확히 밝히며 시작\n• 질문의 두 요소(옵션 + 비용)를 모두 포함\n• 월 비용 계산($5×4=$20)으로 추가 정보 제공 — 고득점 요소\n• 다른 프로그램 대상이 다름을 설명 — 완성도 향상\n• 마지막에 결론("appropriate choice")으로 마무리'
    },
    {
      question: 'Online Store — Electronics Sale\n• Laptops: 15% off (select models)\n• Headphones: Buy one, get one 50% off\n• Smartphones: $100 off on purchases over $800\n• Smart Watches: No discount this week\n• Free Shipping: Orders over $50\n\nQuestion: I want to buy two pairs of headphones. How much will I save compared to full price?',
      model_answer: 'Great news — there is a "Buy one, get one 50% off" promotion on headphones. This means if you buy two pairs, the second pair will be half price. So if each pair normally costs $80, you would save $40 on the second pair. The exact savings depend on the original price of the headphones you choose. Also, since you are buying two items, your order is likely over $50, so you should qualify for free shipping as well.',
      explanation: '• 할인 조건("Buy one, get one 50% off")을 정확히 인용\n• "say, $80" 같은 구체적 예시를 들어 이해를 도움\n• "The exact savings depend on…" — 조건부 설명으로 정확성 확보\n• 무료 배송 혜택까지 추가 언급 — 완성도 높은 답변\n• 자신 있고 친절한 어조 유지'
    },
    {
      question: 'Regional Job Fair — Booth Schedule\n• Tech Companies: Hall A, 9 AM–1 PM\n• Healthcare & Medical: Hall B, 10 AM–3 PM\n• Education & NGOs: Hall C, 11 AM–4 PM\n• Finance & Banking: Hall A, 2–6 PM\n• Resume Review: Main Lobby, 9 AM–5 PM\n• Lunch Break (all halls): 1–2 PM\n\nQuestion: I\'m interested in both tech and finance. Can I visit both booths today, and if so, when?',
      model_answer: 'Yes, you can definitely visit both booths today. The Tech Companies booth is in Hall A from 9 AM to 1 PM, and the Finance and Banking booth is also in Hall A but from 2 to 6 PM. There is no overlap — they are held at different times in the same hall. I suggest visiting the Tech booth before 1 PM, taking the lunch break from 1 to 2 PM, and heading to the Finance booth when it opens at 2 PM.',
      explanation: '• "Yes, you can definitely" — 질문에 직접 답하며 시작\n• 두 부스의 시간·장소를 명확하게 제시\n• "There is no overlap" — 핵심 포인트를 명확히 짚음\n• 구체적인 일정 제안("I suggest")으로 실용적 답변\n• 점심시간 정보까지 활용한 완성도 높은 일정 안내'
    },
    {
      question: 'Hotel Room Service Menu (7 AM–11 PM)\n• Continental Breakfast: $18 (includes coffee/tea)\n• Club Sandwich: $16\n• Pasta of the Day: $22\n• Grilled Salmon: $34\n• Dessert Platter: $15\n• Service charge: 15% added to all orders\n\nQuestion: I want the grilled salmon and a dessert platter. How much will I pay in total including the service charge?',
      model_answer: 'Sure. The grilled salmon is $34 and the dessert platter is $15, so the subtotal comes to $49. With a 15% service charge, that adds $7.35, bringing your total to $56.35. Please note that room service is available until 11 PM, so make sure to place your order before then. Shall I go ahead and place that order for you?',
      explanation: '• 두 항목의 가격을 더하고 서비스 요금까지 정확히 계산\n• "subtotal", "service charge", "total" — 서비스 어휘 자연스럽게 사용\n• 운영 시간 정보도 함께 안내 — 완성도 향상\n• "Shall I go ahead and…" — 자연스러운 마무리 질문으로 실제 서비스 어조 구현\n• 계산 과정을 단계적으로 설명해 명확성 확보'
    },
    {
      question: 'Community Sports Center — October Schedule\n• Morning Yoga: Mon/Wed/Fri, 7–8 AM, $12/class\n• Beginner Swimming: Tue/Thu, 9–10 AM, $15/class\n• Zumba Dance: Sat, 10 AM–12 PM, $20/class\n• Indoor Cycling: Mon–Fri, 6–7 PM, $18/class\n• Personal Training: By appointment, $60/session\n\nQuestion: I can only exercise on weekday evenings. What class is available and how much for every weekday in a month?',
      model_answer: 'Based on the schedule, the only class available on weekday evenings is Indoor Cycling, offered Monday through Friday from 6 to 7 PM at $18 per class. If you attend every weekday for a month — assuming roughly 22 weekdays — the total cost would be approximately $396. That said, you may want to check if the center offers a monthly pass, as that could be more economical.',
      explanation: '• "the only class available" — 질문에 직접 답하며 명확히 한정\n• 22 weekdays × $18 = $396 계산 제시 — 수치 활용 고득점 요소\n• "assuming roughly 22 weekdays" — 가정을 명시해 정확성 확보\n• 월정액 문의 제안 — 현실적인 조언으로 답변 완성도 향상\n• "That said" 전환어로 추가 정보를 자연스럽게 연결'
    }
  ],
  4: [
    {
      question: 'Hi, this is Mark from the Events team. We\'re organizing the company\'s annual dinner for next Friday, but the venue we booked just cancelled due to a double-booking. We have about 80 guests and a budget of $5,000. I need help finding an alternative as soon as possible.',
      model_answer: 'Hi Mark, I\'m sorry to hear that — this is definitely stressful with the event so close. Here\'s what I suggest: First, let\'s immediately contact banquet halls or hotel event spaces in the city. With a $5,000 budget for 80 guests, we have reasonable options. I can start making calls this afternoon. Second, consider restaurants with private dining rooms — many can accommodate parties of 80 with enough notice. If we confirm a new venue by tomorrow morning, we\'ll still have time to notify guests. I\'ll update you within two hours.',
      explanation: '• 공감 표현("I\'m sorry to hear that")으로 자연스럽게 시작\n• 해결책을 두 가지로 구조화("First…Second…")\n• 구체적 행동 계획("I can start making calls this afternoon")으로 실행 가능성 제시\n• 타임라인 명시("by tomorrow morning", "within two hours")\n• 확신 있는 행동 의지로 마무리 — 고득점 요소'
    },
    {
      question: 'Hello, this is Sarah, the office manager. Our main printer has broken down and the repair service says it will take at least five business days. Our team needs to print contracts and proposals for client meetings scheduled throughout this week.',
      model_answer: 'Hi Sarah, thanks for letting me know. Here are two practical solutions. First, redirect all urgent printing to the printer in the second-floor conference room — it is less busy and should handle the workload. Second, for larger jobs, I recommend using a nearby print shop; many offer same-day service for business documents. Meanwhile, I\'ll contact the repair service to see if we can expedite the fix. Could you send me a list of the most urgent print jobs so I can prioritize?',
      explanation: '• 즉각적이고 현실적인 해결책 2개 제시\n• 내부 자원(2층 프린터) + 외부 대안(인쇄소) 조합\n• "expedite the fix" — 수준 높은 어휘 사용\n• 마지막에 상대에게 추가 정보를 요청해 협력적 어조 표현\n• 구체적이고 실행 가능한 내용으로 구성'
    },
    {
      question: 'Hi, I\'m from HR. We just found out our new employee orientation scheduled for Monday has a problem — the training room is being renovated and won\'t be available. We have 12 new hires starting and the full-day program is all set.',
      model_answer: 'Hello, I understand the urgency. A couple of options: First, check if any large meeting rooms are available all day Monday — even if not ideal, they could serve as a temporary training space. Second, if no internal space works, a nearby co-working space or community center can often be booked by the day on short notice and is quite affordable. Additionally, some orientation sessions could be delivered online via video call if needed. I\'ll start checking internal room availability right now and get back to you within the hour.',
      explanation: '• 세 가지 선택지를 제시(내부 회의실 → 외부 대관 → 온라인 전환)\n• "serve as a temporary training space" — 유연한 사고 표현\n• "affordable" — 비용 장점 강조\n• 온라인 대안까지 제시해 창의적 문제 해결력 시연\n• 마무리에서 즉각적인 행동("right now", "within the hour") 약속'
    },
    {
      question: 'Hi, this is Jason from Customer Relations. One of our key clients just called — they received a large shipment, but about 30% of the products were damaged. They\'re threatening to cancel their contract if this isn\'t resolved immediately.',
      model_answer: 'Hi Jason, this needs to be handled right away. Here is what I recommend: First, call the client personally and sincerely apologize — acknowledging the issue directly is critical. Take full responsibility. Second, arrange an immediate replacement shipment for the damaged goods at our expense; that will show genuine commitment. Third, offer a discount or service credit on their next order as a goodwill gesture. Internally, we also need to investigate our packaging process to prevent this from happening again. Please keep me updated throughout.',
      explanation: '• 상황의 긴박성을 인정하며 시작("needs to be handled right away")\n• 3단계 해결책을 논리적으로 제시\n• "taking full responsibility" — 고객 관계에서 중요한 책임 표현\n• "goodwill gesture" — 자연스러운 비즈니스 표현\n• 내부 개선까지 언급해 장기적 시각 표현 — 고득점 요소'
    },
    {
      question: 'Hi, this is Lisa from Marketing. We\'re about to launch our biggest campaign next week, but our graphic designer just went on sick leave for at least ten days. All the final visuals are only 60% done.',
      model_answer: 'Hi Lisa, I can see why this is concerning. A few options: First, check if any designers in other departments have capacity to assist, even part-time. Second, hire a freelance designer immediately — platforms like Upwork or Fiverr can connect you with qualified professionals within hours. Third, assess whether the launch can be pushed back by a few days; a short delay is far better than launching with incomplete materials. If some assets are nearly done, prioritize finishing those and simplify what remains. I\'m happy to help coordinate — just let me know.',
      explanation: '• 공감과 함께 즉각적으로 해결책으로 전환\n• 3가지 실용적 방안을 우선순위 순서로 제시\n• 구체적인 플랫폼 이름(Upwork, Fiverr) 언급으로 현실감 부여\n• "A short delay is far better than…" — 논리적 판단 표현\n• 마지막 협조 의지 표현으로 팀워크 강조'
    }
  ],
  5: [
    {
      question: 'Some companies give employees the option to work a four-day workweek instead of five days. Do you think this is a good idea? Give specific reasons and examples to support your answer.',
      model_answer: 'I think a four-day workweek is a great idea, and there is growing evidence to support this. First, it significantly improves work-life balance. When employees have more personal time, they can recharge properly, which leads to higher productivity during the days they do work. A trial in Iceland showed that productivity either stayed the same or improved after the switch. Second, it can reduce burnout and employee turnover, saving companies money in the long run. Of course, it may not suit every industry — businesses requiring constant coverage need careful planning — but overall, I believe the benefits outweigh the challenges.',
      explanation: '• 첫 문장에서 분명히 입장 표명\n• 이유 2가지를 논리적으로 전개(일·생활 균형 → 번아웃/이직률)\n• 아이슬란드 사례 인용 — 실제 근거로 신뢰성 강화\n• "Of course…" 로 반론을 인정해 균형 잡힌 논증\n• "outweigh the challenges" — 고급 표현으로 마무리'
    },
    {
      question: 'Some people believe that employees should be required to take a minimum amount of vacation time each year. Others think vacation time should be entirely up to the individual. Which view do you support?',
      model_answer: 'I support requiring employees to take a minimum amount of vacation each year. Many people feel guilty about taking time off in competitive environments and end up never using their days, leading to chronic stress and reduced performance. Studies show that regular breaks improve creativity and focus — Microsoft Japan saw a 40% productivity boost after a mandatory rest period. Additionally, mandatory vacation policies signal that a company values its employees\' wellbeing, which improves morale and retention. While some argue vacation should be a personal choice, I believe the health and performance benefits make it a smart business policy.',
      explanation: '• 입장을 첫 문장에서 명확히 제시\n• 문제 상황(미사용 → 스트레스) → 근거(연구, 사례) 순서로 전개\n• Microsoft Japan 사례 — 구체적이고 신뢰성 있는 근거\n• "while some might argue…" — 반론 인정 후 재반박 구조\n• "smart business policy" — 간결하고 인상적인 마무리'
    },
    {
      question: 'Some employers monitor their employees\' computer and internet usage during work hours. Do you think this is acceptable? Why or why not?',
      model_answer: 'I think employee monitoring is acceptable to a limited extent, but it must be handled carefully. On one hand, companies have a legitimate interest in ensuring employees stay focused and that data remains secure. On the other hand, excessive surveillance can erode trust and create a stressful environment — research shows that distrust is a leading cause of employee dissatisfaction. A better approach is to set clear usage policies rather than secretly monitoring every action. If employees are informed about what is monitored and why, it becomes a reasonable and respectful practice.',
      explanation: '• "acceptable to a limited extent" — 조건부 입장으로 세련된 논증 구조\n• "On one hand…On the other hand" — 균형 잡힌 대조 구조 활용\n• 연구 결과 언급으로 논거 강화\n• 대안 제시("clear usage policies") — 단순 찬반을 넘는 심화된 답변\n• "Transparency is key" — 핵심 가치로 마무리'
    },
    {
      question: 'Do you think companies should hire more part-time workers instead of full-time employees? Give specific reasons and examples to support your opinion.',
      model_answer: 'I think it depends on the type of work, but in general a good mix of both is ideal. Hiring more part-time workers can reduce costs — companies pay only for the hours needed and spend less on benefits. This model works well in retail, hospitality, and seasonal industries. However, relying too heavily on part-time staff has drawbacks: they often have less commitment and continuity, which can affect team cohesion and service quality. My view is that companies should use part-time workers for flexible or supplementary tasks, while keeping core roles filled by full-time staff.',
      explanation: '• "It depends on… but in general" — 유연하고 현실적인 입장 표명\n• 파트타임 장점(비용)과 단점(헌신도·연속성)을 균형 있게 제시\n• 산업 예시(소매, 숙박업)로 구체성 강화\n• 마지막 문장에서 "strategically" 뉘앙스 — 고급 결론\n• 양쪽 관점을 통합한 균형 잡힌 결론'
    },
    {
      question: 'Some people think performance-based bonuses are the best way to motivate employees. Others believe non-financial rewards like flexible hours or recognition are more effective. Which do you think works better?',
      model_answer: 'I believe a combination of both is most effective, but if I had to choose one, I would lean toward non-financial rewards. Money is motivating in the short term, but research — particularly work by Daniel Pink — shows that for complex tasks, intrinsic motivators like autonomy, purpose, and recognition drive better long-term performance. Employees who receive public recognition often feel a stronger sense of belonging and are more loyal. That said, financial bonuses are especially effective for meeting specific, measurable targets. Ultimately, the best strategy is to understand what each employee values and tailor the reward accordingly.',
      explanation: '• "If I had to choose one" — 가정법으로 자신의 입장을 세련되게 한정\n• Daniel Pink 연구 인용 — 학술적 근거로 신뢰성 강화\n• "intrinsic motivators" — 전문 용어 사용으로 어휘력 시연\n• 금전적 보상의 효용도 인정해 균형 유지\n• "tailor the reward accordingly" — 맞춤형 접근 제안으로 마무리'
    }
  ],
  6: [
    {
      question: 'Some people believe that success in life is mostly determined by factors outside a person\'s control, such as family background and luck. Others believe individual effort and determination are most important. Which view do you agree with more?',
      model_answer: 'I believe that while external factors like family background and luck do play a role, individual effort and determination are ultimately more important. Many people have overcome challenging circumstances through sheer persistence. Take J.K. Rowling — she was a single mother on welfare when she wrote Harry Potter, which was rejected by twelve publishers before becoming a global phenomenon. Of course, privilege can provide advantages, but privilege without effort rarely leads to meaningful achievement. What truly matters is how we respond to our circumstances. Luck may open a door, but it is effort that walks through it.',
      explanation: '• "While…ultimately" 구조로 균형 잡힌 입장 표명\n• J.K. Rowling 사례 — 보편적으로 알려진 강력한 예시\n• "Privilege without effort rarely leads to…" — 논리적 반박\n• "Luck may open a door, but it is effort that walks through it" — 비유적 표현으로 인상적인 마무리\n• 추상적 주제에 구체적 사례와 논리를 결합한 모범 답안'
    },
    {
      question: 'It is often said that people today are more isolated and lonely than previous generations, despite being more "connected" through social media. Do you agree or disagree?',
      model_answer: 'I largely agree with this statement. While social media lets us stay in touch with hundreds of people, these connections are often superficial. Clicking "like" on a photo is very different from having a meaningful conversation. Studies show that heavy social media use correlates with higher rates of anxiety and loneliness, partly because people post their highlights, not their struggles, which makes others feel inadequate. That said, for people in remote areas or those with social anxiety, online connection can be genuinely valuable. But for most of us, digital convenience has replaced the depth of face-to-face interaction. We are more "connected" but less truly connected.',
      explanation: '• "I largely agree" — 전면 동의가 아닌 정도 조절로 세련된 입장\n• "clicking like vs. meaningful conversation" — 대조 비유로 핵심 논지 명확화\n• 연구 결과와 원인 분석(비교 심리)을 자연스럽게 연결\n• 예외적 긍정 사례를 인정해 균형 유지\n• 마지막 역설적 반복 문장 — 강렬하고 기억에 남는 마무리'
    },
    {
      question: 'Some people argue that preserving cultural traditions is essential to maintaining a society\'s identity. Others believe cultures must evolve and adapt to remain relevant. Which perspective do you find more convincing?',
      model_answer: 'I find the second perspective more convincing — cultures must evolve to remain relevant. While traditions create a sense of shared identity and continuity, rigidly clinging to them can lead to stagnation. History shows that cultures which adapted to new ideas thrived, while those that resisted change often struggled. Consider how language itself evolves — English today is vastly different from three hundred years ago, and that change has made it richer. However, evolution should not mean abandoning everything from the past. The key is to retain the values and stories that define a culture while allowing its expressions to adapt. Tradition and progress are not opposites — they are partners in building a living culture.',
      explanation: '• 두 관점을 인정한 뒤 명확한 입장 표명\n• "stagnation" — 고급 어휘 자연스럽게 사용\n• 언어 진화 사례 — 추상적 주제를 구체적 예시로 설명\n• "Tradition and progress are not opposites" — 이분법을 넘는 통합적 결론\n• 전체 구조: 입장 → 근거 → 사례 → 반론 인정 → 통합 결론'
    },
    {
      question: 'Many people believe the rapid advancement of artificial intelligence will benefit humanity. Others worry it will lead to job displacement and social inequality. What is your view?',
      model_answer: 'I believe AI will be broadly beneficial, but only if we manage its development responsibly. Throughout history, technological revolutions — from the industrial revolution to the internet — initially disrupted jobs but ultimately created more opportunities than they eliminated. AI has the potential to solve some of humanity\'s greatest challenges, from accelerating medical research to optimizing energy use. However, the concern about inequality is valid — if AI benefits are concentrated among a few companies, the wealth gap could widen significantly. The solution lies in proactive policy: investing in education and retraining programs and ensuring AI-generated gains are distributed broadly. AI itself is neither good nor bad — what matters is how we govern and share its benefits.',
      explanation: '• "broadly beneficial, but only if" — 조건부 낙관론으로 균형 잡힌 입장\n• 역사적 유사 사례(산업혁명, 인터넷) — 거시적 시각 표현\n• AI 혜택을 구체적으로 열거(의료, 에너지)\n• 정책적 해결책 제시 — 단순 찬반을 넘는 심화된 답변\n• 마지막 가치 판단 문장 — 강력하고 철학적인 마무리'
    },
    {
      question: 'Some philosophers argue that the purpose of education is to teach people how to think, not what to think. Do you agree? Use specific reasons and examples to support your answer.',
      model_answer: 'I strongly agree that education should primarily teach people how to think rather than what to think. When education focuses only on delivering facts, it creates passive learners who struggle with novel problems. Teaching critical thinking — how to evaluate evidence, identify bias, and form reasoned conclusions — prepares students for the complexity of real life. In a world flooded with misinformation, the ability to assess sources critically is more valuable than memorizing any specific set of facts. Countries like Finland, which emphasize inquiry-based learning and student autonomy, consistently produce high problem-solving ability. Of course, foundational knowledge still matters — you need something to think about. But knowledge without critical thinking is like having all the ingredients without knowing how to cook.',
      explanation: '• "primarily…rather than" — 강조와 대조를 동시에 표현\n• "passive learners" vs. "critical thinking" — 명확한 대조 구조\n• 핀란드 교육 시스템 사례 — 신뢰성 있는 국제 사례\n• "you need something to think about" — 반론을 인정하는 현실적 인식\n• 마지막 음식 비유 — 추상 개념을 친근하게 표현한 인상적인 마무리'
    }
  ]
};

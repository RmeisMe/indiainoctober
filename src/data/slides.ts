import { SlideData } from '@/types/slide';

export const presentationSlides: SlideData[] = [
  // --- CLAIM & FACT #01 ---
  {
    id: 'claim-1',
    type: 'claim',
    theme: 'black',
    badge: 'CLAIM #01',
    claim: 'CEC Gyanesh Kumar took arbitrary decisions, and the other two Election Commissioners were unaware of the changes.',
    stampText: 'MISLEADING',
  },
  {
    id: 'fact-1',
    type: 'fact',
    theme: 'red',
    badge: 'FACT #01',
    fact: 'Section 18 of the Chief Election Commissioner and Other Election Commissioners Act, 2023 mandates that Commission business must be transacted unanimously or by majority opinion—making unilateral arbitrary decisions legally impossible. On 26th September, the Commission confirmed that all major orders regarding the SIR received the unanimous support of all three Election Commissioners.',
    source: 'ECI Official Statement (26 September)',
  },

  // --- CLAIM & FACT #02 ---
  {
    id: 'claim-2',
    type: 'claim',
    theme: 'black',
    badge: 'CLAIM #02',
    claim: 'The other two Election Commissioners objected on record 14 times in 10 months, indicating internal fractures and undemocratic practices by CEC Gyanesh Kumar.',
    stampText: 'MISLEADING',
  },
  {
    id: 'fact-2',
    type: 'fact',
    theme: 'red',
    badge: 'FACT #02',
    fact: 'Framing internal discussions and deliberations—an essential part of internal democracy and healthy institutional feedback—as an "internal fracture" is factually incorrect. On 23rd September 2026, the ECI clarified that all decisions over the preceding year were made unanimously, stating: "Differing views and observations are a normal part of deliberation in any institution before taking a final decision."',
    source: 'ECI Official Clarification (23 September 2026)',
  },

  // --- CLAIM & FACT #03 ---
  {
    id: 'claim-3',
    type: 'claim',
    theme: 'black',
    badge: 'CLAIM #03',
    claim: '13 crore voters have been deleted from the electoral rolls in the SIR process in an attempt to strip citizens of their voting rights.',
    stampText: 'MISLEADING',
  },
  {
    id: 'fact-3',
    type: 'fact',
    theme: 'red',
    badge: 'FACT #03',
    fact: '13 crore discrepancies have been identified for removal—not actual voters—and only within the Draft Electoral Roll. SIR is a multi-step verification process, and any genuine voter omitted can readily secure inclusion.',
    statsBreakdown: [
      { figure: '2.80 CR', label: 'Recorded Deceased' },
      { figure: '1.02 CR', label: 'Duplicate Entries' },
      { figure: '6.30 CR', label: 'Relocated / Shifted' },
      { figure: '3.01 CR', label: 'Untraceable at Address' },
    ],
    source: 'Electoral Roll Audit & SIR Draft Registry Breakdown',
  },

  // --- CLAIM & FACT #04 ---
  {
    id: 'claim-4',
    type: 'claim',
    theme: 'black',
    badge: 'CLAIM #04',
    claim: 'Form 6 was undemocratically modified by the ECI, confirmed by the Supreme Court which stated it had not granted approval for any modification.',
    stampText: 'MISLEADING',
  },
  {
    id: 'fact-4',
    type: 'fact',
    theme: 'red',
    badge: 'FACT #04',
    fact: 'Form 6 was never modified—it remains identical to its post-2022 amendment version. The Supreme Court stated that no approval was granted simply because no modification was ever made or proposed in the first place.',
    source: 'Election Commission of India & Supreme Court Registry',
  },

  // --- CLAIM & FACT #05 ---
  {
    id: 'claim-5',
    type: 'claim',
    theme: 'black',
    badge: 'CLAIM #05',
    claim: 'The ECI used ECINet to centralize the voter database, unlawfully bypass local Electoral Registration Officers (EROs), and alter electoral rolls from Delhi.',
    stampText: 'MISLEADING',
  },
  {
    id: 'fact-5',
    type: 'fact',
    theme: 'red',
    badge: 'FACT #05',
    fact: 'Statutory authority under Section 13B of the Representation of the People Act, 1950 remains exclusively with local EROs. ECINet and ERONet are digital workflow platforms assisting field officers in cross-checking nationwide duplicate entries across state boundaries. No name can be added or deleted without the role-based digital signature and statutory order of the local ERO following physical verification by Booth Level Officers (BLOs).',
    source: 'Section 13B, Representation of the People Act, 1950',
  },

  // --- CLAIM & FACT #06 ---
  {
    id: 'claim-6',
    type: 'claim',
    theme: 'black',
    badge: 'CLAIM #06',
    claim: 'Algorithmic filters termed "Logical Discrepancies" automatically deleted lakhs of genuine voters without ground verification.',
    stampText: 'MISLEADING',
  },
  {
    id: 'fact-6',
    type: 'fact',
    theme: 'red',
    badge: 'FACT #06',
    fact: '"Logical Discrepancy" filters never automatically delete voters. They are internal diagnostic flags generated to detect obvious data anomalies (such as biologically impossible parent-child age gaps or duplicate entries across multiple booths). Under ECI guidelines, flagged names cannot be removed arbitrarily; they must be physically cross-verified through door-to-door visits by BLOs, and formal notice must be served before any draft decision is taken.',
    source: 'ECI Field Verification Protocols & Guidelines',
  },

  // --- CLAIM & FACT #07 ---
  {
    id: 'claim-7',
    type: 'claim',
    theme: 'black',
    badge: 'CLAIM #07',
    claim: 'The two Election Commissioners wrote letters to the Cabinet Secretary due to a breakdown of democracy and policy suppression inside the ECI.',
    stampText: 'MISLEADING',
  },
  {
    id: 'fact-7',
    type: 'fact',
    theme: 'red',
    badge: 'FACT #07',
    fact: 'In its 26th September statement, the ECI clarified that the letters to the Cabinet Secretary concerned administrative service conditions and deputation protocols regarding an officer—not election policy, voter roll rules, or the SIR exercise. Just one day later, the two Commissioners exercised their statutory powers under Section 17 of the 2023 Act to jointly stay and set aside the disputed protocol change, immediately restoring the original work allocation.',
    source: 'ECI Official Statement (26 September) & Sec. 17 Order',
  },

  // --- CLAIM & FACT #08 ---
  {
    id: 'claim-8',
    type: 'claim',
    theme: 'black',
    badge: 'CLAIM #08',
    claim: 'The Election Commission has no jurisdiction to conduct the SIR, making it a politically motivated move.',
    stampText: 'MISLEADING',
  },
  {
    id: 'fact-8',
    type: 'fact',
    theme: 'red',
    badge: 'FACT #08',
    fact: 'Article 324 of the Constitution places a constitutional obligation on the ECI to conduct free and fair elections, requiring that electoral rolls remain free of discrepancies. Article 326 affirms that only eligible citizens are entitled to vote. Crucially, Section 21(3) of the Representation of the People Act, 1950 grants the Commission explicit statutory power to order a special revision of rolls (SIR) "in such a manner as it may think fit."',
    source: 'Constitution of India (Arts. 324 & 326) • Sec. 21(3) RPA, 1950',
  },

  // --- QUESTION SLIDE (JUST AFTER FACT #8) ---
  {
    id: 'slide-question',
    type: 'question',
    theme: 'red',
    question: 'In your opinion, why do such false narratives become more widespread than truth and facts, and why do people fall for them? What are some ways we can tackle this?',
  },

  // --- THOSE DETAINED SLIDE (CLAIM ABOVE, FACT BELOW) ---
  {
    id: 'slide-detained',
    type: 'detained',
    theme: 'red',
    title: 'THOSE DETAINED',
    claimHeading: 'POPULAR CLAIM',
    claimText: 'The popular claim is that the protesters are being detained for merely protesting, which is a violation of Article 19(1)(b).',
    factHeading: 'ACTUAL FACT',
    factText: 'They are not being detained for protesting. They are being detained for violating Section 163 of the BNSS. The Delhi Police had imposed Section 163 in New Delhi District since October 2 for prevention of severe law and order threats. This is constitutionally valid and is granted by Article 19(3).',
  },

  // --- WHY SECTION 163? SLIDE ---
  {
    id: 'slide-section-163',
    type: 'section-163',
    theme: 'black',
    title: 'WHY SECTION 163?',
    intro: 'Delhi Police imposed Section 163 of the BNSS citing critical law and order concerns.',
    reasons: [
      {
        heading: 'LAW & ORDER CONCERNS',
        text: 'Delhi Police imposed Section 163 of the BNSS citing law and order concerns. Primarily, the police noted that protesters were attempting to assemble in massive numbers with dubious intentions.',
      },
      {
        heading: 'DOCUMENTED PRIOR UNREST',
        text: 'The police clearly stated that these same individuals seeking permission were involved in rioting, vandalism, and assaulting police officers in Delhi on July 20–25, brazenly defying law and order. Although the Supreme Court later quashed the FIRs filed against them on grounds of their youth, that does not nullify the fact that they were the perpetrators. Since the perpetrators of that unrest were returning, the police were fully within their rights to impose Section 163 as a precautionary measure.',
      },
      {
        heading: 'PROTECTION OF INSTITUTIONS & TRANSIT',
        text: 'Furthermore, the New Delhi and Jantar Mantar area houses critical government institutions and serves lakhs of daily commuters. Allowing thousands of unauthorized protesters to assemble would paralyze both government functioning and public transit, justifying the enforcement of Section 163 of the BNSS to preserve order.',
      },
    ],
  },

  // --- "PEACEFUL" PROTESTS SLIDE (SINGLE SLIDE WITH ALL 6 POINTS) ---
  {
    id: 'slide-peaceful-protests',
    type: 'peaceful-protests',
    theme: 'black',
    title: '"PEACEFUL" PROTESTS',
    items: [
      {
        number: '01',
        badge: 'SECTION 132 BNS',
        text: 'Protesters actively assaulted police officers (including female personnel). This is explicitly criminalized under Section 132 of the BNS, which states that assaulting public officers on duty is a criminal offence.',
      },
      {
        number: '02',
        badge: 'PROPERTY DESTRUCTION',
        text: 'Protesters vandalized police vehicles and destroyed public property across designated high-security zones.',
      },
      {
        number: '03',
        badge: 'SECTION 163 BNSS VIOLATION',
        text: 'Protesters violated Section 163 of the BNSS imposed in the region, assembling to protest even after official permission was denied.',
      },
      {
        number: '04',
        badge: 'DELIBERATE PROVOCATION',
        text: 'Protesters actively provoked on-duty police personnel, deliberately seeking aggressive reactions from them.',
      },
      {
        number: '05',
        badge: 'OPERATIONAL INTERFERENCE',
        text: 'Protesters actively disrupted the operational duties of the police, a direct violation under Section 132 of the BNS.',
      },
      {
        number: '06',
        badge: 'MASS CIVIC DISRUPTION',
        text: 'These unauthorized protests caused massive inconvenience to the Delhi public: 5,000+ commuters missed their trains, civilians faced severe traffic gridlock, and Delhi Metro station closures disrupted the commute of thousands.',
      },
    ],
  },

  // --- SECOND QUESTION SLIDE ---
  {
    id: 'slide-question-2',
    type: 'question',
    theme: 'red',
    question: 'Democracy gives the right to protest, which is being exercised by the protesters in Delhi. But does democracy, in the name of protest, allow creating unrest, disrupting public law and order, causing inconvenience to others, assaulting police officers, and vandalizing public property? Are all these acts justified just because they are done in the name of protest?',
  },

  // --- EXPOSING STUDENT-LED ORGANISATIONS SLIDE ---
  {
    id: 'slide-student-orgs',
    type: 'student-orgs',
    theme: 'black',
    title: 'EXPOSING THE SO-CALLED STUDENT-LED ORGANISATIONS',
    subtitle: 'AISA, AISF and SFI',
    leadText: 'Here is the reality of these student organisations:',
    items: [
      {
        number: '01',
        title: 'ANTI-INDIA SLOGANEERING',
        text: 'Organisations such as AISA, AISF, and SFI were actively involved in anti-India sloganeering and gatherings, such as the February 9, 2016 "A Country Without a Post Office" protest in support of convicted terrorist Afzal Guru (perpetrator of the 2001 Parliament Attack), chanting slogans such as "Bharat tere tukde honge" and "Bharat ki barbadi tak jang rahegi jang rahegi".',
      },
      {
        number: '02',
        title: 'DEFENSE OF 1993 BLAST TERRORIST',
        text: 'Actively opposed the execution of convicted terrorist Yakub Memon, who was the perpetrator of the 1993 Mumbai serial blasts that killed 257 innocent civilians and left more than 1,400 injured.',
      },
      {
        number: '03',
        title: 'SUPPORT FOR RIOT ACCUSED & SECESSION',
        text: 'Actively support anti-social elements such as Umar Khalid and Sharjeel Imam (key accused in the Delhi Riots) who expressed open sympathy for terrorists such as Burhan Wani and Afzal Guru, while raising slogans calling for the partitioning of India.',
      },
      {
        number: '04',
        title: 'OPPOSITION TO ANTI-MAOIST OPERATIONS',
        text: 'AISA, AISF, and SFI have frequently condemned Indian Armed Forces operations against Naxalite terrorists—the single largest killers of Indian Armed Forces personnel—condemning the encounters of Naxalites such as Madvi Hidma, who is responsible for killing 260 security personnel and 76 innocent civilians, and was the tactical mastermind behind the Dantewada Terrorist Attack, and Basavaraju, the Supreme Commander of the CPI (Maoist), who was responsible for the killing of over 150 security personnel and was another mastermind of the Dantewada Attack.',
      },
      {
        number: '05',
        title: 'PROTEST POST-DANTEWADA ATTACK',
        text: 'AISA, AISF, and SFI organized a gathering inside JNU protesting against India\'s Operation Green Hunt—the anti-Naxalite operation—just days after the horrific Dantewada Attack, which left 76 of our armed forces martyred.',
      },
    ],
  },

  // --- THIRD QUESTION SLIDE ---
  {
    id: 'slide-question-3',
    type: 'question',
    theme: 'red',
    question: 'In your opinion, can these organisations be trusted for securing our democratic rights?',
  },

  // --- FOURTH QUESTION SLIDE ---
  {
    id: 'slide-question-4',
    type: 'question',
    theme: 'red',
    question: 'In your opinion, does "criticism" ONLY involve asking questions, or is it something more than that?',
  },

  // --- WORD OF THE DAY ---
  {
    id: 'slide-word-of-the-day',
    type: 'word-of-the-day',
    theme: 'black',
    title: 'WORD OF THE DAY',
    word: 'FACTS',
    phonetic: '/fakts/',
    partOfSpeech: 'noun (plural)',
    definitions: [
      'Pieces of verified information having objective, indisputable reality.',
    ],
  },

  // --- ACTUAL WORD OF THE DAY ---
  {
    id: 'slide-actual-word',
    type: 'actual-word',
    theme: 'black',
    title: 'ACTUAL WORD OF THE DAY',
    word: 'CANARD',
    phonetic: '/kəˈnɑːrd/',
    partOfSpeech: 'noun',
    definitions: [
      'An unfounded rumor, fabricated narrative, or deliberately misleading report circulated to deceive public opinion.',
    ],
  },

  // --- THOUGHT OF THE DAY ---
  {
    id: 'slide-thought',
    type: 'thought',
    theme: 'black',
    title: 'THOUGHT OF THE DAY',
    lines: [
      {
        text: 'The biggest lie that we have been told is that criticism only and only involves questioning. That is FALSE.',
      },
      {
        text: 'The truth is that one of the most vital parts of criticism, alongside questioning, is',
      },
      {
        text: 'to have the guts to digest an ANSWER.',
        isBold: true,
      },
    ],
  },

  // --- DHANYAWAAD ---
  {
    id: 'slide-dhanyawaad',
    type: 'dhanyawaad',
    theme: 'red',
    titleHindi: 'धन्यवाद',
    phoneticEnglish: 'DHANYAWAAD',
  },
];

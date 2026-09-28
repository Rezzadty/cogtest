import { Question } from "@/types/quiz";

export const DEDUCTIVE_QUESTIONS: Question[] = [
  // 1: Syllogism - Tech Department
  {
    id: 301,
    prompt: "Based strictly on the given premises, which statement must logically follow?",
    type: "deductive",
    sequence: [
      "All software engineers know SQL.",
      "Some software engineers are certified cloud architects.",
      "No cloud architect works in the finance team.",
    ],
    options: [
      "At least some who know SQL are cloud architects.",
      "All who know SQL are software engineers.",
      "No software engineer works in the finance team.",
      "All cloud architects are software engineers.",
    ],
    correct: 0,
    rule: "Because some software engineers are cloud architects, and all software engineers know SQL, those individuals must both know SQL and be cloud architects.",
  },

  // 2: Seating Order
  {
    id: 302,
    prompt: "Who must sit in seat 4?",
    type: "deductive",
    sequence: [
      "Five employees (Adam, Beth, Clara, Dan, Eva) occupy seats 1 to 5 from left to right.",
      "Adam sits in seat 1.",
      "Clara sits in seat 3.",
      "Beth sits immediately to the left of Clara.",
      "Dan sits somewhere to the left of Eva.",
    ],
    options: ["Dan", "Beth", "Eva", "Clara"],
    correct: 0,
    rule: "Seat 1 is Adam. Beth is immediately left of Clara (seat 3), placing Beth in seat 2. Seats 4 and 5 remain for Dan and Eva; since Dan is to Eva's left, Dan is in seat 4 and Eva is in seat 5.",
  },

  // 3: Shift Schedule
  {
    id: 303,
    prompt: "Which doctor must cover the shift on Monday?",
    type: "deductive",
    sequence: [
      "Four doctors (K, L, M, N) each cover one single shift from Monday to Thursday.",
      "Doctor K works on a day earlier in the week than Doctor N.",
      "Doctor L works on the day immediately after Doctor M.",
      "Doctor M does not work on Monday.",
    ],
    options: ["Doctor K", "Doctor L", "Doctor M", "Doctor N"],
    correct: 0,
    rule: "The consecutive pair (M, L) must be either (Tue, Wed) or (Wed, Thu) because M cannot work Monday. In both valid configurations, Doctor K must take Monday to precede Doctor N.",
  },

  // 4: Conditional Transitivity
  {
    id: 304,
    prompt: "Which conclusion is definitively guaranteed by the system events?",
    type: "deductive",
    sequence: [
      "If database latency exceeds 200ms, the caching tier is bypassed.",
      "If the caching tier is bypassed, memory consumption doubles.",
      "If memory consumption doubles, an automated alert is triggered.",
      "An automated alert was NOT triggered.",
    ],
    options: [
      "Database latency did not exceed 200ms.",
      "The caching tier was bypassed.",
      "Memory consumption doubled.",
      "Database latency was exactly 200ms.",
    ],
    correct: 0,
    rule: "By contraposition (Modus Tollens): No alert -> memory did not double -> cache was not bypassed -> latency did not exceed 200ms.",
  },

  // 5: Committee Selection
  {
    id: 305,
    prompt: "Which two individuals must join T on the three-member committee?",
    type: "deductive",
    sequence: [
      "A project committee of 3 members must be formed from P, Q, R, S, T.",
      "If P is selected, Q cannot be selected.",
      "R and S must either both be selected or neither selected.",
      "T is definitively selected.",
    ],
    options: ["R and S", "P and Q", "P and R", "Q and S"],
    correct: 0,
    rule: "T takes 1 of the 3 spots. If R and S are omitted, both P and Q would be required to reach 3 members, violating the rule that P and Q cannot both be chosen. Therefore, R and S must fill the remaining two spots.",
  },

  // 6: Speed Ranking
  {
    id: 306,
    prompt: "Who is the third fastest driver in the ranking?",
    type: "deductive",
    sequence: [
      "Driver V is faster than Driver W.",
      "Driver X is slower than Driver W but faster than Driver Y.",
      "Driver Z is faster than Driver V.",
    ],
    options: ["Driver W", "Driver X", "Driver V", "Driver Y"],
    correct: 0,
    rule: "Combining the inequalities gives Z > V > W > X > Y. Driver W is in exactly 3rd place.",
  },

  // 7: Server Status Deduction
  {
    id: 307,
    prompt: "Which server must be active?",
    type: "deductive",
    sequence: [
      "Exactly one server is active among Alpha, Beta, and Gamma.",
      "If Alpha is active, Gamma is active.",
      "If Beta is active, Gamma is active.",
    ],
    options: ["Gamma", "Alpha", "Beta", "None of the servers"],
    correct: 0,
    rule: "If Alpha or Beta were active, Gamma would also be active, yielding 2 active servers and violating the condition that exactly one is active. Therefore, Gamma must be the single active server.",
  },

  // 8: Office Floor Assignment
  {
    id: 308,
    prompt: "Which department occupies floor 4?",
    type: "deductive",
    sequence: [
      "Four departments (Sales, Marketing, HR, Legal) occupy floors 1 to 4 (floor 1 is lowest).",
      "Marketing is on floor 2.",
      "Sales is on the floor immediately above HR.",
      "HR is on a higher floor than Legal.",
    ],
    options: ["Sales", "HR", "Legal", "Marketing"],
    correct: 0,
    rule: "Floor 2 is Marketing. The consecutive pair [HR, Sales] must occupy floors 3 and 4 (HR on 3, Sales on 4), leaving floor 1 for Legal. This also confirms HR (3) is higher than Legal (1).",
  },

  // 9: Syllogism - Quality Standards
  {
    id: 309,
    prompt: "What can be conclusively deduced about Product X?",
    type: "deductive",
    sequence: [
      "All certified products undergo thermal testing.",
      "No product that undergoes thermal testing has a defective casing.",
      "Product X has a defective casing.",
    ],
    options: [
      "Product X is not a certified product.",
      "Product X underwent thermal testing.",
      "Product X was certified before testing.",
      "Product X is eligible for thermal re-testing.",
    ],
    correct: 0,
    rule: "Because no thermally tested product has a defective casing, Product X did not undergo thermal testing. Because all certified products undergo thermal testing, Product X cannot be certified.",
  },

  // 10: Project Milestone Deadline
  {
    id: 310,
    prompt: "Which milestone is scheduled in February?",
    type: "deductive",
    sequence: [
      "Five milestones (M1 to M5) are scheduled across Jan, Feb, Mar, Apr, and May (one per month).",
      "M1 is scheduled in January.",
      "M3 is scheduled in March.",
      "M2 is scheduled in the month immediately before M4.",
    ],
    options: ["M5", "M2", "M4", "M3"],
    correct: 0,
    rule: "January is M1 and March is M3. The consecutive pair (M2, M4) cannot fit into (Jan, Feb) or (Feb, Mar), so it must occupy April (M2) and May (M4). The only remaining month, February, must be assigned to M5.",
  },

  // 11: Incompatible Deployments
  {
    id: 311,
    prompt: "Which statement must logically follow?",
    type: "deductive",
    sequence: [
      "Service A and Service B cannot both be deployed simultaneously.",
      "If Service C is deployed, Service B must also be deployed.",
      "Service A is currently deployed.",
    ],
    options: [
      "Service C is not deployed.",
      "Service B is deployed.",
      "Service C is deployed.",
      "Both Service B and Service C are deployed.",
    ],
    correct: 0,
    rule: "Since Service A is deployed, Service B cannot be deployed. If Service C were deployed, Service B would have to be deployed. Therefore, Service C cannot be deployed.",
  },

  // 12: Meeting Agenda Ordering
  {
    id: 312,
    prompt: "Which topic is discussed in the final (4th) position?",
    type: "deductive",
    sequence: [
      "Four topics (Budget, Hiring, Roadmap, Security) are discussed in sequence from 1st to 4th.",
      "Hiring is discussed first.",
      "Security is discussed immediately after Roadmap.",
      "Budget is discussed earlier than Roadmap.",
    ],
    options: ["Security", "Budget", "Roadmap", "Hiring"],
    correct: 0,
    rule: "1st is Hiring. The remaining positions 2, 3, 4 must accommodate Budget before the block [Roadmap, Security]. Thus, 2nd is Budget, 3rd is Roadmap, and 4th is Security.",
  },

  // 13: Syllogism - Research Grants
  {
    id: 313,
    prompt: "What can be conclusively deduced about Professor Patel?",
    type: "deductive",
    sequence: [
      "All recipients of the Research Grant are doctoral degree holders.",
      "No doctoral degree holder in this department is an undergraduate instructor.",
      "Professor Patel is an undergraduate instructor in this department.",
    ],
    options: [
      "Professor Patel is not a recipient of the Research Grant.",
      "Professor Patel holds a doctoral degree.",
      "Professor Patel will receive the grant next year.",
      "Professor Patel works in another faculty.",
    ],
    correct: 0,
    rule: "Undergraduate instructors in this department cannot hold doctoral degrees. Grant recipients must hold doctoral degrees. Thus, Professor Patel cannot be a grant recipient.",
  },

  // 14: Locker Code Logic
  {
    id: 314,
    prompt: "Which digit is in position 3 of the code?",
    type: "deductive",
    sequence: [
      "A 4-digit code uses digits 1, 2, 3, 4 without repetition across positions 1 to 4.",
      "The digit 2 is in position 1.",
      "The digit 4 is in position 4.",
      "The digit 1 is immediately preceded by the digit 3.",
    ],
    options: ["Digit 1", "Digit 2", "Digit 3", "Digit 4"],
    correct: 0,
    rule: "Position 1 is 2 and position 4 is 4. The pair (3, 1) must occupy the remaining positions 2 and 3 in that order. Therefore, digit 1 is in position 3.",
  },

  // 15: Price Comparison Deduction
  {
    id: 315,
    prompt: "Which laptop is the second most expensive?",
    type: "deductive",
    sequence: [
      "Laptop P is more expensive than Laptop Q.",
      "Laptop R is cheaper than Laptop Q but more expensive than Laptop S.",
      "Laptop T is more expensive than Laptop P.",
    ],
    options: ["Laptop P", "Laptop T", "Laptop Q", "Laptop R"],
    correct: 0,
    rule: "The complete price ranking is T > P > Q > R > S. Laptop P is the second most expensive model.",
  },

  // 16: Access Permission Rules
  {
    id: 316,
    prompt: "Which conclusion is strictly valid?",
    type: "deductive",
    sequence: [
      "Only employees with Level 3 Clearance have access to Server Room Delta.",
      "All network administrators possess Level 3 Clearance.",
      "Karen does not possess Level 3 Clearance.",
    ],
    options: [
      "Karen cannot access Server Room Delta and is not a network administrator.",
      "Karen is a network administrator with limited privileges.",
      "Karen can access Server Room Delta with an escort.",
      "Karen will obtain clearance next quarter.",
    ],
    correct: 0,
    rule: "Without Level 3 Clearance, access to Server Room Delta is impossible. Additionally, because all network admins have Level 3 Clearance, lacking clearance proves Karen is not a network administrator.",
  },

  // 17: Circular Table Seating
  {
    id: 317,
    prompt: "Who must be seated in the West chair?",
    type: "deductive",
    sequence: [
      "Four negotiators (W, X, Y, Z) sit around a table facing inward at North, East, South, and West chairs.",
      "Negotiator W sits in the North chair.",
      "Negotiator Y sits in the South chair (directly opposite W).",
      "Negotiator X sits in the East chair.",
    ],
    options: ["Negotiator Z", "Negotiator X", "Negotiator Y", "Negotiator W"],
    correct: 0,
    rule: "Three chairs are fixed: North (W), South (Y), and East (X). The only remaining chair is West, which must be occupied by Negotiator Z.",
  },

  // 18: Hardware Diagnostics
  {
    id: 318,
    prompt: "What must be concluded regarding the Power Supply?",
    type: "deductive",
    sequence: [
      "If the Power Supply is functional, the Green LED is ON.",
      "If the Fan is running, the Amber LED is ON.",
      "If the Red LED is ON, the Green LED must be OFF.",
      "The Red LED is currently ON.",
    ],
    options: [
      "The Power Supply is not functional.",
      "The Power Supply is functional.",
      "The Fan is running.",
      "The Amber LED is OFF.",
    ],
    correct: 0,
    rule: "Red LED is ON -> Green LED is OFF. Functional Power Supply implies Green LED is ON; contrapositively, Green LED OFF means the Power Supply is not functional.",
  },

  // 19: Presentation Order
  {
    id: 319,
    prompt: "Which team presents in the 3rd slot?",
    type: "deductive",
    sequence: [
      "Five teams (T1 to T5) present in slots 1 to 5.",
      "Team T4 presents first (1st).",
      "Team T5 presents last (5th).",
      "Team T1 presents immediately before Team T2, and Team T2 presents immediately before Team T3.",
    ],
    options: ["Team T2", "Team T1", "Team T3", "Team T4"],
    correct: 0,
    rule: "Slots 1 and 5 are occupied by T4 and T5. The consecutive trio [T1, T2, T3] must fill slots 2, 3, and 4. Team T2 is in slot 3.",
  },

  // 20: Syllogism - Automated Web Crawlers
  {
    id: 320,
    prompt: "Which conclusion must logically follow?",
    type: "deductive",
    sequence: [
      "No automated web crawler executes client-side scripts.",
      "All search engine indexers are automated web crawlers.",
      "Entity Z executes client-side scripts.",
    ],
    options: [
      "Entity Z is not a search engine indexer.",
      "Entity Z is an automated web crawler.",
      "All search engine indexers execute scripts.",
      "Entity Z is a search indexer in sandbox mode.",
    ],
    correct: 0,
    rule: "Because all indexers are crawlers and no crawlers execute client scripts, no indexers execute client scripts. Since Entity Z executes scripts, it cannot be a search engine indexer.",
  },

  // 21: Software Version Compatibility
  {
    id: 321,
    prompt: "What can be definitively concluded about Server 1?",
    type: "deductive",
    sequence: [
      "App v4 can run compatibly on OS X only if Database Driver v2 is installed.",
      "Database Driver v2 requires Kernel Patch 808.",
      "Kernel Patch 808 is NOT installed on Server 1.",
    ],
    options: [
      "App v4 cannot run compatibly on Server 1 with OS X.",
      "Database Driver v2 is currently active on Server 1.",
      "App v4 requires no database driver on Server 1.",
      "Server 1 is running Kernel Patch 808.",
    ],
    correct: 0,
    rule: "Without Kernel Patch 808, Database Driver v2 cannot be installed. Without Driver v2, App v4 cannot run compatibly on Server 1 with OS X.",
  },

  // 22: Office Desk Row
  {
    id: 322,
    prompt: "Who sits at Desk 2?",
    type: "deductive",
    sequence: [
      "Four coworkers (F, G, H, J) sit in adjacent desks numbered 1 to 4 from left to right.",
      "Coworker J sits at Desk 1.",
      "Coworker H sits at Desk 4.",
      "Coworker G sits immediately to the left of Coworker F.",
    ],
    options: ["Coworker G", "Coworker F", "Coworker J", "Coworker H"],
    correct: 0,
    rule: "Desks 1 and 4 are occupied by J and H. Desks 2 and 3 must hold the consecutive pair [G, F], placing G at Desk 2 and F at Desk 3.",
  },

  // 23: Project Role Assignment
  {
    id: 323,
    prompt: "Which role is assigned to Carl?",
    type: "deductive",
    sequence: [
      "Three roles (Lead, Reviewer, Tester) must be assigned to Amy, Ben, and Carl (one role per person).",
      "Ben is assigned as the Tester.",
      "Amy is not the Reviewer.",
      "Carl is not the Tester.",
    ],
    options: ["Reviewer", "Lead", "Tester", "Project Manager"],
    correct: 0,
    rule: "Ben is the Tester, leaving Lead and Reviewer. Amy cannot be the Reviewer, so Amy is the Lead. Carl must take the remaining role of Reviewer.",
  },

  // 24: Storage Locker Heights
  {
    id: 324,
    prompt: "Which box is stored on Tier 4 (the highest tier)?",
    type: "deductive",
    sequence: [
      "Boxes A, B, C, D are stored on Tiers 1 to 4 (Tier 1 is bottom, Tier 4 is top).",
      "Box C is on Tier 1.",
      "Box D is stored on the tier immediately above Box A.",
      "Box A is stored on a higher tier than Box B.",
    ],
    options: ["Box D", "Box A", "Box B", "Box C"],
    correct: 0,
    rule: "Tier 1 is C. Remaining tiers are 2, 3, 4. The pair [A, D] must be higher than B (since A > B). Placing B on Tier 2 leaves Tiers 3 and 4 for [A, D], meaning Box D is on Tier 4.",
  },

  // 25: Workflow Stage Validation
  {
    id: 325,
    prompt: "Which statement is guaranteed to be true regarding Order #902?",
    type: "deductive",
    sequence: [
      "An order can enter Stage 3 only if it has passed Stage 2 validation.",
      "If an order passes Stage 2 validation, an approval hash is generated.",
      "Order #902 has entered Stage 3.",
    ],
    options: [
      "An approval hash was generated for Order #902.",
      "Order #902 bypassed Stage 2 validation.",
      "Stage 2 validation failed for Order #902.",
      "No approval hash was required for Order #902.",
    ],
    correct: 0,
    rule: "Entering Stage 3 proves Order #902 passed Stage 2 validation. Passing Stage 2 validation guarantees an approval hash was generated.",
  },
];

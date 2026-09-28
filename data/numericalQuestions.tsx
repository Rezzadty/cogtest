import { Question } from "@/types/quiz";

export const NUMERICAL_QUESTIONS: Question[] = [
  {
    id: 401,
    prompt: "A company's revenue increased from $2.4 million to $3.12 million. What was the percentage increase?",
    type: "deductive",
    sequence: ["Revenue Year 1: $2.4 million", "Revenue Year 2: $3.12 million"],
    options: ["30%", "25%", "35%", "28%"],
    correct: 0,
    rule: "Percentage increase = ((3.12 - 2.4) / 2.4) x 100 = (0.72 / 2.4) x 100 = 30%",
  },

  {
    id: 402,
    prompt: "If 8 machines can produce 480 units in 6 hours, how many units can 12 machines produce in 4 hours?",
    type: "deductive",
    sequence: ["8 machines produce 480 units in 6 hours", "Assume all machines work at the same constant rate"],
    options: ["480 units", "360 units", "420 units", "540 units"],
    correct: 0,
    rule: "Rate per machine = 480 / (8 x 6) = 10 units/hour. 12 machines in 4 hours = 12 x 4 x 10 = 480 units.",
  },

  {
    id: 403,
    prompt: "A store offers a 25% discount on an item priced at $320. After the discount, a 8% sales tax is applied. What is the final price?",
    type: "deductive",
    sequence: ["Original price: $320", "Discount: 25%", "Sales tax after discount: 8%"],
    options: ["$259.20", "$276.48", "$244.80", "$268.80"],
    correct: 0,
    rule: "Discounted price = $320 x 0.75 = $240. Final price = $240 x 1.08 = $259.20.",
  },

  {
    id: 404,
    prompt: "The ratio of employees in Departments A, B, and C is 3:5:7. If Department B has 125 employees, how many employees are in Department C?",
    type: "deductive",
    sequence: ["Ratio A:B:C = 3:5:7", "Department B has 125 employees"],
    options: ["175 employees", "150 employees", "125 employees", "200 employees"],
    correct: 0,
    rule: "If 5 parts = 125, then 1 part = 25. Department C = 7 parts = 7 x 25 = 175 employees.",
  },

  {
    id: 405,
    prompt: "An investment of $15,000 earns simple interest at a rate of 4.5% per year. How much interest will it earn in 3 years and 4 months?",
    type: "deductive",
    sequence: ["Principal: $15,000", "Simple interest rate: 4.5% per year", "Time: 3 years and 4 months"],
    options: ["$2,250", "$2,025", "$1,875", "$2,475"],
    correct: 0,
    rule: "Time = 3 + 4/12 = 3.333 years. Interest = $15,000 x 0.045 x 3.333 = $2,250.",
  },

  {
    id: 406,
    prompt: "A car travels 180 miles using 5 gallons of fuel. At the same rate, how many gallons are needed to travel 306 miles?",
    type: "deductive",
    sequence: ["Distance: 180 miles using 5 gallons", "Same fuel efficiency applies"],
    options: ["8.5 gallons", "7.5 gallons", "9 gallons", "8 gallons"],
    correct: 0,
    rule: "Miles per gallon = 180 / 5 = 36 mpg. Gallons needed = 306 / 36 = 8.5 gallons.",
  },

  {
    id: 407,
    prompt: "A team completed 60% of a project in 12 days. Assuming the same rate continues, how many total days are needed to complete the entire project?",
    type: "deductive",
    sequence: ["60% completed in 12 days", "Work rate remains constant"],
    options: ["20 days", "18 days", "24 days", "15 days"],
    correct: 0,
    rule: "If 60% takes 12 days, then 100% takes (12 / 0.60) = 20 days total.",
  },

  {
    id: 408,
    prompt: "The average of five numbers is 84. If one of the numbers is removed, the average of the remaining four numbers is 80. What is the value of the removed number?",
    type: "deductive",
    sequence: ["Average of 5 numbers: 84", "Average of remaining 4 numbers: 80"],
    options: ["100", "96", "88", "92"],
    correct: 0,
    rule: "Sum of 5 = 5 x 84 = 420. Sum of 4 = 4 x 80 = 320. Removed number = 420 - 320 = 100.",
  },

  {
    id: 409,
    prompt: "A factory produces 2,400 units in 8 days working 6 hours per day. How many units can it produce in 10 days working 8 hours per day at the same rate?",
    type: "deductive",
    sequence: ["8 days, 6 hours/day produces 2,400 units", "Same hourly production rate"],
    options: ["4,000 units", "3,600 units", "3,200 units", "4,500 units"],
    correct: 0,
    rule: "Rate = 2,400 / (8 x 6) = 50 units/hour. New output = 50 x 10 x 8 = 4,000 units.",
  },

  {
    id: 410,
    prompt: "If the price of a product is first increased by 20% and then decreased by 20%, what is the net percentage change from the original price?",
    type: "deductive",
    sequence: ["Price increased by 20%", "Then price decreased by 20% from the new price"],
    options: ["4% decrease", "No change", "2% decrease", "4% increase"],
    correct: 0,
    rule: "Final price = Original x 1.20 x 0.80 = Original x 0.96. Net change = 4% decrease.",
  },

  {
    id: 411,
    prompt: "A company has 3,600 employees. If 45% are in Operations, 30% are in Sales, and the rest are in Administration, how many employees are in Administration?",
    type: "deductive",
    sequence: ["Total employees: 3,600", "Operations: 45%", "Sales: 30%", "Rest in Administration"],
    options: ["900 employees", "810 employees", "1,080 employees", "720 employees"],
    correct: 0,
    rule: "Administration = 100% - 45% - 30% = 25%. 25% of 3,600 = 900 employees.",
  },

  {
    id: 412,
    prompt: "A container holds a mixture of 180 liters with water and oil in a ratio of 4:5. How many liters of water must be added to make the ratio 1:1 for water to oil?",
    type: "deductive",
    sequence: ["Total mixture: 180 liters", "Initial ratio Water:Oil = 4:5", "Target ratio Water:Oil = 1:1"],
    options: ["20 liters", "25 liters", "15 liters", "30 liters"],
    correct: 0,
    rule: "Initial: Water = (4/9) x 180 = 80L, Oil = 100L. For 1:1 ratio, Water must equal Oil = 100L. Add 100 - 80 = 20 liters.",
  },

  {
    id: 413,
    prompt: "If A can complete a task in 12 days and B can complete the same task in 18 days, how many days will it take to complete the task if they work together?",
    type: "deductive",
    sequence: ["A completes task in 12 days", "B completes task in 18 days", "They work together"],
    options: ["7.2 days", "6.5 days", "8 days", "9 days"],
    correct: 0,
    rule: "Combined rate = 1/12 + 1/18 = 5/36 task per day. Time = 36/5 = 7.2 days.",
  },

  {
    id: 414,
    prompt: "A shopkeeper buys an item for $75 and sells it for $90. What is the percentage profit?",
    type: "deductive",
    sequence: ["Cost price: $75", "Selling price: $90"],
    options: ["20%", "15%", "18%", "25%"],
    correct: 0,
    rule: "Profit = $90 - $75 = $15. Percentage profit = (15 / 75) x 100 = 20%.",
  },

  {
    id: 415,
    prompt: "The population of a town increased from 24,000 to 27,840 over two years. What was the average annual percentage increase?",
    type: "deductive",
    sequence: ["Initial population: 24,000", "Population after 2 years: 27,840", "Assume constant annual growth rate"],
    options: ["8%", "7.5%", "9%", "6.5%"],
    correct: 0,
    rule: "Total increase = 16%. Let r = annual rate. (1 + r)^2 = 1.16. Solving: r = 7.8% (approx 8%). Alternatively, simple average = 16%/2 = 8%.",
  },

  {
    id: 416,
    prompt: "Three numbers are in the ratio 2:3:5. Their sum is 150. What is the largest number?",
    type: "deductive",
    sequence: ["Ratio of three numbers: 2:3:5", "Sum of all three: 150"],
    options: ["75", "60", "45", "90"],
    correct: 0,
    rule: "Total parts = 2 + 3 + 5 = 10. Largest = 5 parts = (5/10) x 150 = 75.",
  },

  {
    id: 417,
    prompt: "A train travels 360 km at a speed of 90 km/h, stops for 20 minutes, then travels another 240 km at 80 km/h. What is the average speed for the entire journey?",
    type: "deductive",
    sequence: ["First leg: 360 km at 90 km/h", "Stop: 20 minutes", "Second leg: 240 km at 80 km/h"],
    options: ["80 km/h", "85 km/h", "75 km/h", "82 km/h"],
    correct: 0,
    rule: "Time 1 = 360/90 = 4h. Time 2 = 20/60 = 0.33h. Time 3 = 240/80 = 3h. Total time = 7.33h. Total distance = 600km. Average = 600/7.33 = 81.8 km/h (closest: 80 km/h).",
  },

  {
    id: 418,
    prompt: "If $6,000 is invested at 5% compound interest annually, what will be the total amount after 3 years?",
    type: "deductive",
    sequence: ["Principal: $6,000", "Compound interest rate: 5% per year", "Time: 3 years"],
    options: ["$6,945.75", "$6,900.00", "$6,820.50", "$6,750.00"],
    correct: 0,
    rule: "Amount = $6,000 x (1.05)^3 = $6,000 x 1.157625 = $6,945.75.",
  },

  {
    id: 419,
    prompt: "A rectangular garden is 24 meters long and has an area of 432 square meters. If the length is increased by 25% and the width is decreased by 20%, what is the new area?",
    type: "deductive",
    sequence: ["Original length: 24 meters", "Original area: 432 square meters", "Length increases 25%", "Width decreases 20%"],
    options: ["432 square meters", "408 square meters", "456 square meters", "420 square meters"],
    correct: 0,
    rule: "Original width = 432/24 = 18m. New length = 24 x 1.25 = 30m. New width = 18 x 0.80 = 14.4m. New area = 30 x 14.4 = 432 sq m.",
  },

  {
    id: 420,
    prompt: "In a survey, 240 people preferred tea, 360 preferred coffee, and 200 preferred juice. What percentage of the total preferred coffee?",
    type: "deductive",
    sequence: ["Tea: 240 people", "Coffee: 360 people", "Juice: 200 people"],
    options: ["45%", "40%", "50%", "42%"],
    correct: 0,
    rule: "Total = 240 + 360 + 200 = 800. Coffee percentage = (360/800) x 100 = 45%.",
  },

  {
    id: 421,
    prompt: "A company's profit decreased from $84,000 to $63,000. What was the percentage decrease?",
    type: "deductive",
    sequence: ["Original profit: $84,000", "New profit: $63,000"],
    options: ["25%", "30%", "21%", "33%"],
    correct: 0,
    rule: "Decrease = $84,000 - $63,000 = $21,000. Percentage = (21,000 / 84,000) x 100 = 25%.",
  },

  {
    id: 422,
    prompt: "Pipe A can fill a tank in 15 hours and Pipe B can fill it in 10 hours. If both pipes are opened together, how long will it take to fill 2/3 of the tank?",
    type: "deductive",
    sequence: ["Pipe A fills tank in 15 hours", "Pipe B fills tank in 10 hours", "Both pipes opened together", "Target: fill 2/3 of tank"],
    options: ["4 hours", "5 hours", "6 hours", "4.5 hours"],
    correct: 0,
    rule: "Combined rate = 1/15 + 1/10 = 1/6 tank per hour. Time for 2/3 tank = (2/3) / (1/6) = 4 hours.",
  },

  {
    id: 423,
    prompt: "The sum of three consecutive even numbers is 186. What is the largest of these three numbers?",
    type: "deductive",
    sequence: ["Three consecutive even numbers", "Their sum is 186"],
    options: ["64", "62", "66", "68"],
    correct: 0,
    rule: "Let numbers be n, n+2, n+4. Sum = 3n + 6 = 186. n = 60. Largest = 64.",
  },

  {
    id: 424,
    prompt: "A store had 400 units of a product. They sold 35% on Day 1, 25% of the remaining on Day 2. How many units remain after Day 2?",
    type: "deductive",
    sequence: ["Initial inventory: 400 units", "Day 1: 35% sold", "Day 2: 25% of remaining sold"],
    options: ["195 units", "200 units", "210 units", "180 units"],
    correct: 0,
    rule: "After Day 1: 400 x 0.65 = 260 units. After Day 2: 260 x 0.75 = 195 units.",
  },

  {
    id: 425,
    prompt: "If the price of an item is reduced by 15% during a sale, and the sale price is $170, what was the original price?",
    type: "deductive",
    sequence: ["Price reduced by 15%", "Sale price: $170"],
    options: ["$200", "$195.50", "$185", "$210"],
    correct: 0,
    rule: "Sale price = 85% of original. Original = $170 / 0.85 = $200.",
  },
];

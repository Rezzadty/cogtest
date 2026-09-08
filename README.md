# Abstract Reasoning Practice Platform

> Born out of a real job application test that didn't go as planned. 
> Most employment screening platforms hand you a rejection or a pass/fail screen with zero feedback. You never find out which patterns you missed, why your logic failed, or how to do better next time. 
> 
> This tool exists to fix that: a realistic, pressure-tested simulator that not only tests your abstract reasoning under the clock, but actually shows you every mistake and the exact logic behind each pattern.

---

## Why This Project Exists

Pre-employment cognitive assessments (SHL, Korn Ferry, Saville, Pearson) are notorious for being fast-paced and unforgiving:
- You get limited time per question.
- You have to recognize geometric shifts, matrix logic, rotations, and line algebra on the fly.
- When the test ends, you walk away with no review of your answers.

This project recreates that high-stakes test environment, but adds what actual tests miss: **instant, transparent post-test diagnostics with full visual pattern breakdowns**.

---

## Key Features

- **100-Question Curated Bank**: Covers rotational symmetry, 3x3 matrices, polygon progressions, quadrant orbits, concentric rings, domino arithmetic, and line subtractions.
- **Dynamic 25-Question Sessions**: Every attempt draws a randomized sample of 25 questions so you never memorize a fixed sequence.
- **Answer Scrambling**: Choice positions (A, B, C, D) are reshuffled every session so you have to re-evaluate each option.
- **10-Minute Exam Timer**: Recreates actual assessment pressure (under 25 seconds per question).
- **Interactive Question Palette**: Side column navigator tracking **Answered** (green), **Skipped** (amber), and **Current/Unvisited** questions to jump back before time runs out.
- **Post-Exam Review**: Full breakdown showing your selected answer versus the correct answer, paired with a plain-English explanation of the underlying rule.

---

## Getting Started

### Prerequisites
- Node.js 18.18+ or later
- npm, pnpm, or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/abstract-reasoning.git

# Navigate into directory
cd abstract-reasoning

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to begin practicing.

---

## Available Scripts

- `npm run dev` - Starts the Next.js local development server.
- `npm run build` - Builds production-optimized static bundle.
- `npm test` - Runs the scoring and question shuffling unit test suite.
- `npm run lint` - Runs ESLint code quality checks.

---

## Built With

- **Next.js** (App Router)
- **React**
- **Tailwind CSS**
- **Native SVG Glyphs** (clean, crisp rendering across all screen sizes with zero heavy image assets)

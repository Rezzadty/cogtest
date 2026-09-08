import { Question } from "@/types/quiz";

export function Arrow({ deg }: { deg: number }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <g transform={`rotate(${deg} 50 50)`}>
        <line x1="50" y1="78" x2="50" y2="24" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <polygon points="50,14 36,36 64,36" fill="currentColor" />
      </g>
    </svg>
  );
}

export function Polygon({ type }: { type: "tri" | "square" | "pent" | "hex" | "hept" | "circle" }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      {type === "tri" && <polygon points="50,18 84,82 16,82" stroke="currentColor" strokeWidth="5" fill="none" />}
      {type === "square" && <polygon points="20,20 80,20 80,80 20,80" stroke="currentColor" strokeWidth="5" fill="none" />}
      {type === "pent" && <polygon points="50,16 85,42 72,84 28,84 15,42" stroke="currentColor" strokeWidth="5" fill="none" />}
      {type === "hex" && <polygon points="50,16 82,34 82,66 50,84 18,66 18,34" stroke="currentColor" strokeWidth="5" fill="none" />}
      {type === "hept" && <polygon points="50,16 78,28 86,56 68,82 32,82 14,56 22,28" stroke="currentColor" strokeWidth="5" fill="none" />}
      {type === "circle" && <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="5" fill="none" />}
    </svg>
  );
}

export function Quadrants({ shaded }: { shaded: number }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <rect x="16" y="16" width="68" height="68" stroke="currentColor" strokeWidth="4" fill="none" />
      <line x1="50" y1="16" x2="50" y2="84" stroke="currentColor" strokeWidth="3" />
      <line x1="16" y1="50" x2="84" y2="50" stroke="currentColor" strokeWidth="3" />
      {shaded === 0 && <rect x="18" y="18" width="30" height="30" fill="currentColor" />}
      {shaded === 1 && <rect x="52" y="18" width="30" height="30" fill="currentColor" />}
      {shaded === 2 && <rect x="52" y="52" width="30" height="30" fill="currentColor" />}
      {shaded === 3 && <rect x="18" y="52" width="30" height="30" fill="currentColor" />}
    </svg>
  );
}

export function NestedShape({
  outer,
  inner,
}: {
  outer: "circle" | "square" | "tri";
  inner: "plus" | "dot" | "square" | "tri";
}) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      {outer === "circle" && <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="4" fill="none" />}
      {outer === "square" && <rect x="18" y="18" width="64" height="64" stroke="currentColor" strokeWidth="4" fill="none" />}
      {outer === "tri" && <polygon points="50,16 84,82 16,82" stroke="currentColor" strokeWidth="4" fill="none" />}
      {inner === "plus" && (
        <g stroke="currentColor" strokeWidth="4" strokeLinecap="round">
          <line x1="50" y1="40" x2="50" y2="60" />
          <line x1="40" y1="50" x2="60" y2="50" />
        </g>
      )}
      {inner === "dot" && <circle cx="50" cy="50" r="9" fill="currentColor" />}
      {inner === "square" && <rect x="40" y="40" width="20" height="20" fill="currentColor" />}
      {inner === "tri" && <polygon points="50,40 60,60 40,60" fill="currentColor" />}
    </svg>
  );
}

export function Concentric({ rings, filledCenter }: { rings: number; filledCenter: boolean }) {
  const radii = [10, 18, 26, 34, 42];
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      {radii.slice(0, rings).map((r, i) => (
        <circle key={i} cx="50" cy="50" r={r} stroke="currentColor" strokeWidth="3" fill="none" />
      ))}
      {filledCenter && <circle cx="50" cy="50" r="10" fill="currentColor" />}
    </svg>
  );
}

export function LinesSquare({ lines }: { lines: ("d1" | "d2" | "h" | "v")[] }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <rect x="16" y="16" width="68" height="68" stroke="currentColor" strokeWidth="4" fill="none" />
      {lines.includes("d1") && <line x1="16" y1="16" x2="84" y2="84" stroke="currentColor" strokeWidth="3" />}
      {lines.includes("d2") && <line x1="84" y1="16" x2="16" y2="84" stroke="currentColor" strokeWidth="3" />}
      {lines.includes("h") && <line x1="16" y1="50" x2="84" y2="50" stroke="currentColor" strokeWidth="3" />}
      {lines.includes("v") && <line x1="50" y1="16" x2="50" y2="84" stroke="currentColor" strokeWidth="3" />}
    </svg>
  );
}

export function DualOrbit({ dotPos, sqPos }: { dotPos: number; sqPos: number }) {
  const coords = [
    { x: 30, y: 30 },
    { x: 70, y: 30 },
    { x: 70, y: 70 },
    { x: 30, y: 70 },
  ];
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <rect x="16" y="16" width="68" height="68" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none" className="opacity-40" />
      <circle cx={coords[dotPos].x} cy={coords[dotPos].y} r="9" fill="currentColor" />
      <rect x={coords[sqPos].x - 8} y={coords[sqPos].y - 8} width="16" height="16" stroke="currentColor" strokeWidth="3" fill="none" />
    </svg>
  );
}

export function MergeElements({ items }: { items: ("tl-circle" | "tr-tri" | "bl-diamond" | "br-square")[] }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <rect x="16" y="16" width="68" height="68" stroke="currentColor" strokeWidth="3" fill="none" />
      {items.includes("tl-circle") && <circle cx="34" cy="34" r="8" fill="currentColor" />}
      {items.includes("tr-tri") && <polygon points="66,24 74,40 58,40" fill="currentColor" />}
      {items.includes("bl-diamond") && <polygon points="34,60 42,68 34,76 26,68" fill="currentColor" />}
      {items.includes("br-square") && <rect x="58" y="60" width="16" height="16" fill="currentColor" />}
    </svg>
  );
}

export function GridDots({ count }: { count: number }) {
  const points = [
    [30, 30], [50, 30], [70, 30],
    [30, 50], [50, 50], [70, 50],
    [30, 70], [50, 70], [70, 70],
  ];
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <rect x="16" y="16" width="68" height="68" stroke="currentColor" strokeWidth="3" fill="none" />
      {points.slice(0, count).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="6" fill="currentColor" />
      ))}
    </svg>
  );
}

export function HalfCircle({ side }: { side: 0 | 1 | 2 | 3 }) {
  const rotation = side * 90;
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <g transform={`rotate(${rotation} 50 50)`}>
        <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="4" fill="none" />
        <path d="M 50 16 A 34 34 0 0 0 50 84 Z" fill="currentColor" />
      </g>
    </svg>
  );
}

export function LineCountMatrix({ dir, count }: { dir: "v" | "h" | "d"; count: number }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <rect x="16" y="16" width="68" height="68" stroke="currentColor" strokeWidth="3" fill="none" />
      {dir === "v" && (
        <>
          {count === 1 && <line x1="50" y1="24" x2="50" y2="76" stroke="currentColor" strokeWidth="4" />}
          {count === 2 && (
            <>
              <line x1="38" y1="24" x2="38" y2="76" stroke="currentColor" strokeWidth="4" />
              <line x1="62" y1="24" x2="62" y2="76" stroke="currentColor" strokeWidth="4" />
            </>
          )}
          {count === 3 && (
            <>
              <line x1="32" y1="24" x2="32" y2="76" stroke="currentColor" strokeWidth="4" />
              <line x1="50" y1="24" x2="50" y2="76" stroke="currentColor" strokeWidth="4" />
              <line x1="68" y1="24" x2="68" y2="76" stroke="currentColor" strokeWidth="4" />
            </>
          )}
        </>
      )}
      {dir === "h" && (
        <>
          {count === 1 && <line x1="24" y1="50" x2="76" y2="50" stroke="currentColor" strokeWidth="4" />}
          {count === 2 && (
            <>
              <line x1="24" y1="38" x2="76" y2="38" stroke="currentColor" strokeWidth="4" />
              <line x1="24" y1="62" x2="76" y2="62" stroke="currentColor" strokeWidth="4" />
            </>
          )}
          {count === 3 && (
            <>
              <line x1="24" y1="32" x2="76" y2="32" stroke="currentColor" strokeWidth="4" />
              <line x1="24" y1="50" x2="76" y2="50" stroke="currentColor" strokeWidth="4" />
              <line x1="24" y1="68" x2="76" y2="68" stroke="currentColor" strokeWidth="4" />
            </>
          )}
        </>
      )}
      {dir === "d" && (
        <>
          {count === 1 && <line x1="24" y1="24" x2="76" y2="76" stroke="currentColor" strokeWidth="4" />}
          {count === 2 && (
            <>
              <line x1="18" y1="34" x2="66" y2="82" stroke="currentColor" strokeWidth="4" />
              <line x1="34" y1="18" x2="82" y2="66" stroke="currentColor" strokeWidth="4" />
            </>
          )}
          {count === 3 && (
            <>
              <line x1="16" y1="44" x2="56" y2="84" stroke="currentColor" strokeWidth="4" />
              <line x1="24" y1="24" x2="76" y2="76" stroke="currentColor" strokeWidth="4" />
              <line x1="44" y1="16" x2="84" y2="56" stroke="currentColor" strokeWidth="4" />
            </>
          )}
        </>
      )}
    </svg>
  );
}

export function SteppingBars({ heights }: { heights: [number, number, number] }) {
  const hMap: Record<number, number> = { 1: 20, 2: 36, 3: 52 };
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <rect x="16" y="16" width="68" height="68" stroke="currentColor" strokeWidth="3" fill="none" />
      <line x1="20" y1="80" x2="80" y2="80" stroke="currentColor" strokeWidth="3" />
      {[0, 1, 2].map((i) => {
        const barH = hMap[heights[i]];
        const x = 30 + i * 16;
        const y = 80 - barH;
        return <rect key={i} x={x} y={y} width="8" height={barH} fill="currentColor" />;
      })}
    </svg>
  );
}

export function CrossMissing({ missing }: { missing: 0 | 1 | 2 | 3 }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <rect x="16" y="16" width="68" height="68" stroke="currentColor" strokeWidth="3" fill="none" />
      <circle cx="50" cy="50" r="6" fill="currentColor" />
      {missing !== 0 && <line x1="50" y1="50" x2="50" y2="24" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />}
      {missing !== 1 && <line x1="50" y1="50" x2="76" y2="50" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />}
      {missing !== 2 && <line x1="50" y1="50" x2="50" y2="76" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />}
      {missing !== 3 && <line x1="50" y1="50" x2="24" y2="50" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />}
    </svg>
  );
}

export function ClockHands({ minDeg }: { minDeg: number }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="4" fill="none" />
      <line x1="50" y1="50" x2="50" y2="28" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <g transform={`rotate(${minDeg} 50 50)`}>
        <line x1="50" y1="50" x2="50" y2="22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      <circle cx="50" cy="50" r="4" fill="currentColor" />
    </svg>
  );
}

export function DominoPips({ top, bot }: { top: number; bot: number }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <rect x="25" y="15" width="50" height="70" rx="6" stroke="currentColor" strokeWidth="3" fill="none" />
      <line x1="25" y1="50" x2="75" y2="50" stroke="currentColor" strokeWidth="2" />
      <text x="50" y="38" textAnchor="middle" fontSize="18" fontWeight="bold" fill="currentColor">
        {top}
      </text>
      <text x="50" y="73" textAnchor="middle" fontSize="18" fontWeight="bold" fill="currentColor">
        {bot}
      </text>
    </svg>
  );
}

export function SpokesWheel({ spokes }: { spokes: number }) {
  const angles = Array.from({ length: spokes }, (_, i) => (360 / 8) * i);
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="4" fill="none" />
      {angles.map((a, i) => (
        <line
          key={i}
          x1="50"
          y1="50"
          x2={50 + 34 * Math.cos((a * Math.PI) / 180)}
          y2={50 + 34 * Math.sin((a * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="3"
        />
      ))}
      <circle cx="50" cy="50" r="5" fill="currentColor" />
    </svg>
  );
}

export function ScaledSquare({ size }: { size: number }) {
  const offset = (100 - size) / 2;
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <rect x="16" y="16" width="68" height="68" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" fill="none" className="opacity-30" />
      <rect x={offset} y={offset} width={size} height={size} stroke="currentColor" strokeWidth="4" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

export function ShadedTriangles({ fillIdx }: { fillIdx: 0 | 1 | 2 }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      {fillIdx === 0 && <polygon points="50,18 84,82 16,82" stroke="currentColor" strokeWidth="5" fill="none" />}
      {fillIdx === 1 && (
        <>
          <polygon points="50,18 84,82 16,82" stroke="currentColor" strokeWidth="5" fill="none" />
          <line x1="30" y1="65" x2="70" y2="65" stroke="currentColor" strokeWidth="3" />
          <line x1="40" y1="48" x2="60" y2="48" stroke="currentColor" strokeWidth="3" />
        </>
      )}
      {fillIdx === 2 && <polygon points="50,18 84,82 16,82" stroke="currentColor" strokeWidth="5" fill="currentColor" />}
    </svg>
  );
}

export function CornerAccumulator({ countTL, countTR, countBR, countBL }: { countTL: number; countTR: number; countBR: number; countBL: number }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <rect x="16" y="16" width="68" height="68" stroke="currentColor" strokeWidth="3" fill="none" />
      {countTL >= 1 && <circle cx="28" cy="28" r="5" fill="currentColor" />}
      {countTR >= 1 && <circle cx="72" cy="28" r="5" fill="currentColor" />}
      {countTR >= 2 && <circle cx="62" cy="28" r="5" fill="currentColor" />}
      {countBR >= 1 && <circle cx="72" cy="72" r="5" fill="currentColor" />}
      {countBR >= 2 && <circle cx="62" cy="72" r="5" fill="currentColor" />}
      {countBR >= 3 && <circle cx="72" cy="62" r="5" fill="currentColor" />}
      {countBL >= 1 && <circle cx="28" cy="72" r="5" fill="currentColor" />}
      {countBL >= 2 && <circle cx="38" cy="72" r="5" fill="currentColor" />}
      {countBL >= 3 && <circle cx="28" cy="62" r="5" fill="currentColor" />}
      {countBL >= 4 && <circle cx="38" cy="62" r="5" fill="currentColor" />}
    </svg>
  );
}

function generateArrowQuestions(startIndex: number): Question[] {
  const configs = [
    { start: 0, step: 45, prompt: "Which arrow completes the 45° clockwise rotation sequence?" },
    { start: 45, step: 45, prompt: "Which arrow continues the sequence rotated by 45° clockwise?" },
    { start: 90, step: 45, prompt: "Follow the 45° clockwise rotation to identify the next figure." },
    { start: 180, step: 45, prompt: "Determine the arrow that continues the 45° clockwise cycle." },
    { start: 0, step: 90, prompt: "Which arrow continues the 90° clockwise sequence?" },
    { start: 45, step: 90, prompt: "Select the figure that rotates by 90° clockwise at each step." },
    { start: 90, step: 90, prompt: "Which position follows next in this quarter-turn clockwise sequence?" },
    { start: 270, step: -45, prompt: "Determine the next position following the counter-clockwise rotation." },
    { start: 180, step: -45, prompt: "Which shape follows a 45° counter-clockwise progression?" },
    { start: 0, step: 135, prompt: "Which arrow follows a 135° clockwise rotation pattern?" },
    { start: 90, step: 135, prompt: "Track the 135° rotation and choose the subsequent arrow." },
    { start: 315, step: -90, prompt: "Select the figure continuing this 90° counter-clockwise rotation." },
  ];

  return configs.map((cfg, idx) => {
    const seqAngles = [cfg.start, cfg.start + cfg.step, cfg.start + cfg.step * 2, cfg.start + cfg.step * 3].map(
      (a) => ((a % 360) + 360) % 360
    );
    const targetAngle = (((cfg.start + cfg.step * 4) % 360) + 360) % 360;
    const distractors = [
      (targetAngle + 90) % 360,
      (targetAngle + 180) % 360,
      (targetAngle + 270) % 360,
    ];

    return {
      id: startIndex + idx,
      prompt: cfg.prompt,
      type: "sequence",
      sequence: seqAngles.map((deg, i) => <Arrow key={i} deg={deg} />),
      options: [
        <Arrow key="cor" deg={targetAngle} />,
        <Arrow key="d1" deg={distractors[0]} />,
        <Arrow key="d2" deg={distractors[1]} />,
        <Arrow key="d3" deg={distractors[2]} />,
      ],
      correct: 0,
      rule: `The arrow rotates ${Math.abs(cfg.step)}° ${cfg.step > 0 ? "clockwise" : "counter-clockwise"} each step. Next position is ${targetAngle}°.`,
    };
  });
}

function generatePolygonQuestions(startIndex: number): Question[] {
  type PolyType = "tri" | "square" | "pent" | "hex" | "hept" | "circle";
  const configs: { seq: PolyType[]; target: PolyType; dist: PolyType[]; prompt: string; rule: string }[] = [
    {
      seq: ["tri", "square", "pent"],
      target: "hex",
      dist: ["tri", "square", "circle"],
      prompt: "Which polygon comes next in the side-count sequence?",
      rule: "Number of sides increments by +1: Triangle (3) → Square (4) → Pentagon (5) → Hexagon (6).",
    },
    {
      seq: ["square", "pent", "hex"],
      target: "hept",
      dist: ["pent", "tri", "circle"],
      prompt: "Determine the polygon that continues this ascending side-count sequence.",
      rule: "Sides increment by +1: Square (4) → Pentagon (5) → Hexagon (6) → Heptagon (7).",
    },
    {
      seq: ["tri", "square", "pent", "hex"],
      target: "hept",
      dist: ["pent", "square", "tri"],
      prompt: "Which geometric figure finishes the progression from triangle upwards?",
      rule: "Progression: 3, 4, 5, 6 sides, followed by a 7-sided heptagon.",
    },
    {
      seq: ["hept", "hex", "pent"],
      target: "square",
      dist: ["hept", "tri", "hex"],
      prompt: "Which shape follows the descending polygon side count?",
      rule: "Sides decrement by -1: Heptagon (7) → Hexagon (6) → Pentagon (5) → Square (4).",
    },
    {
      seq: ["hex", "pent", "square"],
      target: "tri",
      dist: ["hex", "hept", "pent"],
      prompt: "Select the shape completing the descending vertex count sequence.",
      rule: "Sides decrease by 1 at each frame: 6 → 5 → 4 → 3 (Triangle).",
    },
    {
      seq: ["tri", "pent"],
      target: "hept",
      dist: ["square", "hex", "tri"],
      prompt: "Which polygon follows the odd side-count progression?",
      rule: "Sides advance by +2 (odd numbers): Triangle (3) → Pentagon (5) → Heptagon (7).",
    },
    {
      seq: ["square", "hex"],
      target: "circle",
      dist: ["tri", "square", "pent"],
      prompt: "Which figure caps the even-side progression before curvature?",
      rule: "Even polygon count expands outward towards circular curve.",
    },
    {
      seq: ["tri", "square", "tri", "square"],
      target: "tri",
      dist: ["square", "pent", "hex"],
      prompt: "Which polygon maintains the alternating side-count rule?",
      rule: "Shapes strictly alternate between 3 sides (Triangle) and 4 sides (Square).",
    },
    {
      seq: ["pent", "square", "pent", "square"],
      target: "pent",
      dist: ["square", "tri", "hex"],
      prompt: "Select the shape that preserves the alternation between 5 and 4 sides.",
      rule: "Pattern alternates: Pentagon (5) → Square (4) → Pentagon (5) → Square (4) → Pentagon (5).",
    },
    {
      seq: ["hept", "pent"],
      target: "tri",
      dist: ["square", "hex", "hept"],
      prompt: "Which figure continues the odd-side subtraction pattern?",
      rule: "Sides decrease by -2: Heptagon (7) → Pentagon (5) → Triangle (3).",
    },
  ];

  return configs.map((cfg, idx) => ({
    id: startIndex + idx,
    prompt: cfg.prompt,
    type: "sequence",
    sequence: cfg.seq.map((t, i) => <Polygon key={i} type={t} />),
    options: [
      <Polygon key="cor" type={cfg.target} />,
      <Polygon key="d1" type={cfg.dist[0]} />,
      <Polygon key="d2" type={cfg.dist[1]} />,
      <Polygon key="d3" type={cfg.dist[2]} />,
    ],
    correct: 0,
    rule: cfg.rule,
  }));
}

function generateQuadrantQuestions(startIndex: number): Question[] {
  const configs = [
    { start: 0, step: 1, prompt: "Select the figure that continues the clockwise quadrant shading." },
    { start: 1, step: 1, prompt: "Which quadrant is shaded next under clockwise progression?" },
    { start: 2, step: 1, prompt: "Follow the clockwise shaded quadrant to choose the next frame." },
    { start: 3, step: 1, prompt: "Which square completes the clockwise corner-shading cycle?" },
    { start: 0, step: -1, prompt: "Determine the next frame in counter-clockwise quadrant shading." },
    { start: 1, step: -1, prompt: "Which segment is shaded next when rotating counter-clockwise?" },
    { start: 2, step: -1, prompt: "Follow the counter-clockwise shading cycle to identify the next figure." },
    { start: 3, step: -1, prompt: "Which quadrant shading follows next in this counter-clockwise cycle?" },
    { start: 0, step: 2, prompt: "Identify the figure following the diagonal quadrant alternation." },
    { start: 1, step: 2, prompt: "Which pattern continues the opposite quadrant alternation?" },
  ];

  return configs.map((cfg, idx) => {
    const seq = [cfg.start, cfg.start + cfg.step, cfg.start + cfg.step * 2, cfg.start + cfg.step * 3].map(
      (s) => ((s % 4) + 4) % 4
    );
    const target = (((cfg.start + cfg.step * 4) % 4) + 4) % 4;
    const dist = [(target + 1) % 4, (target + 2) % 4, (target + 3) % 4];

    return {
      id: startIndex + idx,
      prompt: cfg.prompt,
      type: "sequence",
      sequence: seq.map((s, i) => <Quadrants key={i} shaded={s} />),
      options: [
        <Quadrants key="cor" shaded={target} />,
        <Quadrants key="d1" shaded={dist[0]} />,
        <Quadrants key="d2" shaded={dist[1]} />,
        <Quadrants key="d3" shaded={dist[2]} />,
      ],
      correct: 0,
      rule: `The shaded quadrant shifts ${Math.abs(cfg.step)} position ${cfg.step > 0 ? "clockwise" : "counter-clockwise"} each step. Next shaded index is ${target}.`,
    };
  });
}

function generateConcentricQuestions(startIndex: number): Question[] {
  const configs = [
    { startR: 1, stepR: 1, startF: false, prompt: "Which concentric pattern follows next in ascending order?" },
    { startR: 1, stepR: 1, startF: true, prompt: "Determine the figure that increments rings and alternates center fill." },
    { startR: 2, stepR: 1, startF: false, prompt: "Which concentric ring expansion completes the sequence?" },
    { startR: 5, stepR: -1, startF: true, prompt: "Which figure continues the concentric reduction series?" },
    { startR: 4, stepR: -1, startF: false, prompt: "Follow the ring reduction and fill alternation to find the next figure." },
    { startR: 1, stepR: 1, startF: true, prompt: "Select the pattern with the correct ring count and core shading." },
    { startR: 2, stepR: 1, startF: true, prompt: "Which concentric target satisfies the ring count progression?" },
    { startR: 5, stepR: -1, startF: false, prompt: "Which frame concludes this decreasing concentric pattern?" },
    { startR: 3, stepR: -1, startF: true, prompt: "Identify the concentric shape that finishes the series." },
    { startR: 1, stepR: 1, startF: false, prompt: "Which frame properly extends this ring and center alternation rule?" },
  ];

  return configs.map((cfg, idx) => {
    const seq = [0, 1, 2, 3].map((i) => ({
      rings: Math.max(1, Math.min(5, cfg.startR + cfg.stepR * i)),
      filled: i % 2 === 0 ? cfg.startF : !cfg.startF,
    }));
    const targetRings = Math.max(1, Math.min(5, cfg.startR + cfg.stepR * 4));
    const targetFilled = 4 % 2 === 0 ? cfg.startF : !cfg.startF;
    const distRings1 = targetRings === 1 ? 2 : targetRings === 5 ? 4 : targetRings - 1;
    const distRings2 = targetRings === 1 ? 3 : targetRings === 5 ? 3 : targetRings + 1;

    return {
      id: startIndex + idx,
      prompt: cfg.prompt,
      type: "sequence",
      sequence: seq.map((item, i) => <Concentric key={i} rings={item.rings} filledCenter={item.filled} />),
      options: [
        <Concentric key="cor" rings={targetRings} filledCenter={targetFilled} />,
        <Concentric key="d1" rings={targetRings} filledCenter={!targetFilled} />,
        <Concentric key="d2" rings={distRings1} filledCenter={targetFilled} />,
        <Concentric key="d3" rings={distRings2} filledCenter={!targetFilled} />,
      ],
      correct: 0,
      rule: `Ring count ${cfg.stepR > 0 ? "increases" : "decreases"} to ${targetRings} while the center alternates between hollow and filled.`,
    };
  });
}

function generateMatrixQuestions(startIndex: number): Question[] {
  type Outer = "circle" | "square" | "tri";
  type Inner = "plus" | "dot" | "square" | "tri";

  const matrixSets: {
    prompt: string;
    rows: [Outer, Inner][][];
    missing: [Outer, Inner];
    dist: [Outer, Inner][];
    rule: string;
  }[] = [
    {
      prompt: "Which shape completes the 3x3 matrix at the question mark?",
      rows: [
        [["circle", "plus"], ["circle", "dot"], ["circle", "square"]],
        [["square", "plus"], ["square", "dot"], ["square", "square"]],
        [["tri", "plus"], ["tri", "dot"], ["tri", "square"]],
      ],
      missing: ["tri", "square"],
      dist: [["square", "square"], ["tri", "dot"], ["circle", "plus"]],
      rule: "Rows dictate the outer frame (Circle, Square, Triangle) and cycle inner symbols (Plus, Dot, Square). The final cell requires Triangle with Inner Square.",
    },
    {
      prompt: "Determine the symbol that satisfies the 3x3 matrix logic.",
      rows: [
        [["tri", "dot"], ["tri", "plus"], ["tri", "square"]],
        [["circle", "dot"], ["circle", "plus"], ["circle", "square"]],
        [["square", "dot"], ["square", "plus"], ["square", "square"]],
      ],
      missing: ["square", "square"],
      dist: [["square", "plus"], ["circle", "square"], ["tri", "square"]],
      rule: "Each row uses one outer shape (Triangle, Circle, Square) and three inner glyphs. Missing is Square with Inner Square.",
    },
    {
      prompt: "Which figure replaces the question mark in the third row?",
      rows: [
        [["square", "square"], ["square", "plus"], ["square", "dot"]],
        [["tri", "square"], ["tri", "plus"], ["tri", "dot"]],
        [["circle", "square"], ["circle", "plus"], ["circle", "dot"]],
      ],
      missing: ["circle", "dot"],
      dist: [["circle", "plus"], ["square", "dot"], ["tri", "dot"]],
      rule: "The 3rd row holds Circles. Each column uses a distinct inner symbol: Column 3 has Dots, giving Circle with Inner Dot.",
    },
    {
      prompt: "Which combination correctly finishes this geometric matrix?",
      rows: [
        [["circle", "plus"], ["square", "plus"], ["tri", "plus"]],
        [["circle", "dot"], ["square", "dot"], ["tri", "dot"]],
        [["circle", "tri"], ["square", "tri"], ["tri", "tri"]],
      ],
      missing: ["tri", "tri"],
      dist: [["square", "tri"], ["tri", "dot"], ["circle", "tri"]],
      rule: "Columns dictate outer geometry (Circle, Square, Triangle). Row 3 features inner Triangles, concluding with Triangle within Triangle.",
    },
    {
      prompt: "Which shape belongs at the bottom-right matrix position?",
      rows: [
        [["tri", "plus"], ["square", "plus"], ["circle", "plus"]],
        [["tri", "dot"], ["square", "dot"], ["circle", "dot"]],
        [["tri", "square"], ["square", "square"], ["circle", "square"]],
      ],
      missing: ["circle", "square"],
      dist: [["circle", "dot"], ["square", "square"], ["tri", "square"]],
      rule: "Columns maintain outer shapes (Triangle, Square, Circle) and rows define inner symbols (Plus, Dot, Square).",
    },
    {
      prompt: "Select the shape completing the inner-outer matrix sequence.",
      rows: [
        [["square", "dot"], ["circle", "dot"], ["tri", "dot"]],
        [["square", "square"], ["circle", "square"], ["tri", "square"]],
        [["square", "plus"], ["circle", "plus"], ["tri", "plus"]],
      ],
      missing: ["tri", "plus"],
      dist: [["tri", "dot"], ["circle", "plus"], ["square", "plus"]],
      rule: "Row 3 holds inner Plus glyphs across Square, Circle, and Triangle frames.",
    },
    {
      prompt: "Which tile completes the matrix symmetry?",
      rows: [
        [["circle", "square"], ["square", "square"], ["tri", "square"]],
        [["circle", "dot"], ["square", "dot"], ["tri", "dot"]],
        [["circle", "plus"], ["square", "plus"], ["tri", "plus"]],
      ],
      missing: ["tri", "plus"],
      dist: [["tri", "dot"], ["square", "plus"], ["circle", "plus"]],
      rule: "Inner symbols match across each row while outer frames step Circle, Square, Triangle.",
    },
    {
      prompt: "Which shape resolves the final matrix slot?",
      rows: [
        [["tri", "square"], ["circle", "square"], ["square", "square"]],
        [["tri", "dot"], ["circle", "dot"], ["square", "dot"]],
        [["tri", "plus"], ["circle", "plus"], ["square", "plus"]],
      ],
      missing: ["square", "plus"],
      dist: [["square", "dot"], ["circle", "plus"], ["tri", "plus"]],
      rule: "Row 3 features inner Plus markers across Triangle, Circle, and Square frames.",
    },
    {
      prompt: "Determine the missing figure in this 3x3 attribute grid.",
      rows: [
        [["circle", "tri"], ["circle", "plus"], ["circle", "dot"]],
        [["square", "tri"], ["square", "plus"], ["square", "dot"]],
        [["tri", "tri"], ["tri", "plus"], ["tri", "dot"]],
      ],
      missing: ["tri", "dot"],
      dist: [["tri", "plus"], ["square", "dot"], ["circle", "dot"]],
      rule: "Outer shape is Triangle for row 3; inner symbol for column 3 is Dot.",
    },
    {
      prompt: "Which element satisfies the row and column requirements?",
      rows: [
        [["square", "plus"], ["tri", "plus"], ["circle", "plus"]],
        [["square", "dot"], ["tri", "dot"], ["circle", "dot"]],
        [["square", "square"], ["tri", "square"], ["circle", "square"]],
      ],
      missing: ["circle", "square"],
      dist: [["tri", "square"], ["circle", "dot"], ["square", "square"]],
      rule: "Outer frames step Square → Triangle → Circle; inner symbols match row 3 (Squares).",
    },
    {
      prompt: "Identify the figure completing this 3x3 attribute grid.",
      rows: [
        [["tri", "dot"], ["circle", "dot"], ["square", "dot"]],
        [["tri", "plus"], ["circle", "plus"], ["square", "plus"]],
        [["tri", "tri"], ["circle", "tri"], ["square", "tri"]],
      ],
      missing: ["square", "tri"],
      dist: [["circle", "tri"], ["square", "plus"], ["tri", "tri"]],
      rule: "The 3rd row features inner Triangles, concluding with Square containing inner Triangle.",
    },
    {
      prompt: "Select the figure that correctly finishes the matrix pattern.",
      rows: [
        [["circle", "square"], ["tri", "square"], ["square", "square"]],
        [["circle", "plus"], ["tri", "plus"], ["square", "plus"]],
        [["circle", "dot"], ["tri", "dot"], ["square", "dot"]],
      ],
      missing: ["square", "dot"],
      dist: [["tri", "dot"], ["square", "plus"], ["circle", "dot"]],
      rule: "Row 3 combines Dot glyphs with outer frames: Circle, Triangle, and Square.",
    },
  ];

  return matrixSets.map((cfg, idx) => {
    const flatItems: [Outer, Inner][] = [
      ...cfg.rows[0],
      ...cfg.rows[1],
      cfg.rows[2][0],
      cfg.rows[2][1],
    ];

    return {
      id: startIndex + idx,
      prompt: cfg.prompt,
      type: "matrix",
      sequence: flatItems.map(([out, inn], i) => (
        <NestedShape key={i} outer={out} inner={inn} />
      )),
      options: [
        <NestedShape key="cor" outer={cfg.missing[0]} inner={cfg.missing[1]} />,
        <NestedShape key="d1" outer={cfg.dist[0][0]} inner={cfg.dist[0][1]} />,
        <NestedShape key="d2" outer={cfg.dist[1][0]} inner={cfg.dist[1][1]} />,
        <NestedShape key="d3" outer={cfg.dist[2][0]} inner={cfg.dist[2][1]} />,
      ],
      correct: 0,
      rule: cfg.rule,
    };
  });
}

function generateLineSubtractionQuestions(startIndex: number): Question[] {
  type LineType = "d1" | "d2" | "h" | "v";
  const configs: {
    prompt: string;
    seq: LineType[][];
    target: LineType[];
    dist: LineType[][];
    rule: string;
  }[] = [
    {
      prompt: "Which figure finishes the line subtraction series?",
      seq: [["d1", "d2", "h", "v"], ["d2", "h", "v"], ["h", "v"], ["v"]],
      target: [],
      dist: [["v"], ["h"], ["d1"]],
      rule: "Internal lines disappear one by one, leaving an empty boundary square.",
    },
    {
      prompt: "Which line configuration continues this subtraction pattern?",
      seq: [["d1", "d2", "h", "v"], ["d1", "h", "v"], ["h", "v"]],
      target: ["v"],
      dist: [[], ["h"], ["d1"]],
      rule: "Lines are removed: diagonal 2, then diagonal 1, then horizontal bar, leaving only vertical.",
    },
    {
      prompt: "Determine the next figure as internal lines reduce sequentially.",
      seq: [["h", "v"], ["v"]],
      target: [],
      dist: [["h"], ["d1"], ["v"]],
      rule: "The cross (+) loses horizontal bar, then vertical bar, resulting in an empty perimeter.",
    },
    {
      prompt: "Which square represents the final state after removing remaining lines?",
      seq: [["d1", "d2"], ["d1"]],
      target: [],
      dist: [["d2"], ["h"], ["v"]],
      rule: "Diagonal X drops diagonal 2, then diagonal 1 to become empty.",
    },
    {
      prompt: "Which configuration comes next as lines are added to the square?",
      seq: [[], ["v"], ["h", "v"]],
      target: ["d1", "h", "v"],
      dist: [["d1", "d2", "h", "v"], ["h"], ["v"]],
      rule: "One line is added per frame: vertical, horizontal (+), and then diagonal 1.",
    },
    {
      prompt: "Select the figure that concludes the subtraction down to empty square.",
      seq: [["d1", "v"], ["v"]],
      target: [],
      dist: [["d1"], ["h"], ["d2"]],
      rule: "One internal segment is removed per step until empty.",
    },
    {
      prompt: "Which square continues the line addition sequence?",
      seq: [["h"], ["h", "v"], ["d1", "h", "v"]],
      target: ["d1", "d2", "h", "v"],
      dist: [["d1", "h", "v"], ["h", "v"], []],
      rule: "Lines are added sequentially to form the complete 4-line intersecting pattern.",
    },
    {
      prompt: "Identify the next figure in this line removal sequence.",
      seq: [["d2", "h", "v"], ["h", "v"], ["h"]],
      target: [],
      dist: [["v"], ["h"], ["d1"]],
      rule: "Subtractions lead to single horizontal line and finally an empty square.",
    },
  ];

  return configs.map((cfg, idx) => ({
    id: startIndex + idx,
    prompt: cfg.prompt,
    type: "sequence",
    sequence: cfg.seq.map((l, i) => <LinesSquare key={i} lines={l} />),
    options: [
      <LinesSquare key="cor" lines={cfg.target} />,
      <LinesSquare key="d1" lines={cfg.dist[0]} />,
      <LinesSquare key="d2" lines={cfg.dist[1]} />,
      <LinesSquare key="d3" lines={cfg.dist[2]} />,
    ],
    correct: 0,
    rule: cfg.rule,
  }));
}

function generateDualOrbitQuestions(startIndex: number): Question[] {
  const configs = [
    { dotStart: 0, dotStep: 1, sqStart: 2, sqStep: -1, prompt: "Track both rotating shapes and select the 5th frame." },
    { dotStart: 1, dotStep: 1, sqStart: 3, sqStep: -1, prompt: "Follow the circle CW and square CCW to identify the next frame." },
    { dotStart: 2, dotStep: 1, sqStart: 0, sqStep: -1, prompt: "Which frame continues the counter-rotating corner progression?" },
    { dotStart: 3, dotStep: 1, sqStart: 1, sqStep: -1, prompt: "Select the position where both shapes land after 4 steps." },
    { dotStart: 0, dotStep: 2, sqStart: 1, sqStep: 1, prompt: "The circle skips diagonally while the square steps CW. What is next?" },
    { dotStart: 1, dotStep: 2, sqStart: 2, sqStep: 1, prompt: "Follow the diagonal jumps and CW movements to identify the next frame." },
    { dotStart: 0, dotStep: -1, sqStart: 2, sqStep: 1, prompt: "Track the CCW circle and CW square corner positions." },
    { dotStart: 2, dotStep: -1, sqStart: 0, sqStep: 1, prompt: "Which figure accurately plots both orbital coordinates next?" },
  ];

  return configs.map((cfg, idx) => {
    const seq = [0, 1, 2, 3].map((i) => ({
      d: (((cfg.dotStart + cfg.dotStep * i) % 4) + 4) % 4,
      s: (((cfg.sqStart + cfg.sqStep * i) % 4) + 4) % 4,
    }));
    const target = {
      d: (((cfg.dotStart + cfg.dotStep * 4) % 4) + 4) % 4,
      s: (((cfg.sqStart + cfg.sqStep * 4) % 4) + 4) % 4,
    };
    const dist = [
      { d: (target.d + 1) % 4, s: target.s },
      { d: target.d, s: (target.s + 1) % 4 },
      { d: (target.d + 2) % 4, s: (target.s + 2) % 4 },
    ];

    return {
      id: startIndex + idx,
      prompt: cfg.prompt,
      type: "sequence",
      sequence: seq.map((item, i) => <DualOrbit key={i} dotPos={item.d} sqPos={item.s} />),
      options: [
        <DualOrbit key="cor" dotPos={target.d} sqPos={target.s} />,
        <DualOrbit key="d1" dotPos={dist[0].d} sqPos={dist[0].s} />,
        <DualOrbit key="d2" dotPos={dist[1].d} sqPos={dist[1].s} />,
        <DualOrbit key="d3" dotPos={dist[2].d} sqPos={dist[2].s} />,
      ],
      correct: 0,
      rule: "The dot and square follow distinct orbital vectors around the 4 corner coordinates, cycling periodically.",
    };
  });
}

function generateHalfCircleQuestions(startIndex: number): Question[] {
  const configs = [
    { start: 0, step: 1, prompt: "Which direction does the shaded half circle face next?" },
    { start: 1, step: 1, prompt: "Follow the 90° clockwise rotation of the shaded hemisphere." },
    { start: 2, step: 1, prompt: "Which hemisphere orientation continues this clockwise cycle?" },
    { start: 3, step: 1, prompt: "Identify the shaded half circle position concluding the clockwise cycle." },
    { start: 0, step: -1, prompt: "Which direction does the half circle face under counter-clockwise rotation?" },
    { start: 1, step: -1, prompt: "Track the 90° counter-clockwise rotation to choose the next shape." },
    { start: 2, step: -1, prompt: "Follow the CCW hemisphere rotation to identify the next figure." },
    { start: 3, step: -1, prompt: "Which orientation completes the CCW hemisphere shading series?" },
  ];

  return configs.map((cfg, idx) => {
    const seq = [0, 1, 2, 3].map((i) => (((cfg.start + cfg.step * i) % 4) + 4) % 4 as 0 | 1 | 2 | 3);
    const target = (((cfg.start + cfg.step * 4) % 4) + 4) % 4 as 0 | 1 | 2 | 3;
    const dist = [
      ((target + 1) % 4) as 0 | 1 | 2 | 3,
      ((target + 2) % 4) as 0 | 1 | 2 | 3,
      ((target + 3) % 4) as 0 | 1 | 2 | 3,
    ];

    return {
      id: startIndex + idx,
      prompt: cfg.prompt,
      type: "sequence",
      sequence: seq.map((s, i) => <HalfCircle key={i} side={s} />),
      options: [
        <HalfCircle key="cor" side={target} />,
        <HalfCircle key="d1" side={dist[0]} />,
        <HalfCircle key="d2" side={dist[1]} />,
        <HalfCircle key="d3" side={dist[2]} />,
      ],
      correct: 0,
      rule: `The shaded half rotates 90° ${cfg.step > 0 ? "clockwise" : "counter-clockwise"} each step. Next orientation index is ${target}.`,
    };
  });
}

function generateSteppingBarsQuestions(startIndex: number): Question[] {
  const configs: {
    prompt: string;
    seq: [number, number, number][];
    target: [number, number, number];
    dist: [number, number, number][];
    rule: string;
  }[] = [
    {
      prompt: "Which bar height sequence comes next?",
      seq: [[1, 2, 3], [2, 3, 1], [3, 1, 2]],
      target: [1, 2, 3],
      dist: [[3, 2, 1], [2, 1, 3], [1, 3, 2]],
      rule: "Heights shift cyclically left: [1,2,3] → [2,3,1] → [3,1,2] → [1,2,3].",
    },
    {
      prompt: "Determine the bar heights after the next cyclic step.",
      seq: [[2, 3, 1], [3, 1, 2], [1, 2, 3]],
      target: [2, 3, 1],
      dist: [[1, 2, 3], [3, 2, 1], [2, 1, 3]],
      rule: "Cyclic permutation wraps back to [2,3,1].",
    },
    {
      prompt: "Which chart completes this stepping height progression?",
      seq: [[1, 1, 1], [1, 2, 1], [1, 2, 3]],
      target: [2, 2, 3],
      dist: [[1, 1, 1], [3, 3, 3], [1, 2, 1]],
      rule: "Bars rise progressively from right to left.",
    },
    {
      prompt: "Follow the ascending single peak bar across the 3 positions.",
      seq: [[3, 1, 1], [1, 3, 1], [1, 1, 3]],
      target: [3, 1, 1],
      dist: [[1, 3, 1], [1, 1, 1], [3, 3, 3]],
      rule: "The tall bar (height 3) moves left to right and loops back to position 1.",
    },
    {
      prompt: "Which bar pattern continues this inverse cyclic shift?",
      seq: [[3, 2, 1], [1, 3, 2], [2, 1, 3]],
      target: [3, 2, 1],
      dist: [[1, 2, 3], [2, 3, 1], [3, 1, 2]],
      rule: "Permutation shifts cyclically right, returning to [3,2,1].",
    },
    {
      prompt: "Determine the bar chart that finishes this step pattern.",
      seq: [[1, 2, 2], [2, 2, 3], [2, 3, 3]],
      target: [3, 3, 3],
      dist: [[1, 1, 1], [2, 2, 2], [1, 2, 3]],
      rule: "All bars steadily climb to maximum height 3.",
    },
    {
      prompt: "Which configuration continues the descending peak cycle?",
      seq: [[1, 1, 2], [1, 2, 1], [2, 1, 1]],
      target: [1, 1, 2],
      dist: [[2, 1, 1], [1, 2, 1], [2, 2, 2]],
      rule: "The medium bar shifts right-to-left and wraps back to position 3.",
    },
    {
      prompt: "Select the figure concluding the bar height series.",
      seq: [[3, 1, 2], [1, 2, 3], [2, 3, 1]],
      target: [3, 1, 2],
      dist: [[1, 3, 2], [2, 1, 3], [3, 2, 1]],
      rule: "Complete rotation returns to the starting arrangement [3,1,2].",
    },
  ];

  return configs.map((cfg, idx) => ({
    id: startIndex + idx,
    prompt: cfg.prompt,
    type: "sequence",
    sequence: cfg.seq.map((h, i) => <SteppingBars key={i} heights={h} />),
    options: [
      <SteppingBars key="cor" heights={cfg.target} />,
      <SteppingBars key="d1" heights={cfg.dist[0]} />,
      <SteppingBars key="d2" heights={cfg.dist[1]} />,
      <SteppingBars key="d3" heights={cfg.dist[2]} />,
    ],
    correct: 0,
    rule: cfg.rule,
  }));
}

function generateSpokeWheelQuestions(startIndex: number): Question[] {
  const configs = [
    { seq: [8, 7, 6, 5], target: 4, dist: [3, 6, 5], prompt: "Which wheel continues the spoke reduction rule?" },
    { seq: [7, 6, 5, 4], target: 3, dist: [2, 5, 4], prompt: "Determine the spoke count for the subsequent wheel." },
    { seq: [6, 5, 4, 3], target: 2, dist: [1, 4, 5], prompt: "Follow the subtraction to find the next wheel." },
    { seq: [2, 3, 4, 5], target: 6, dist: [7, 5, 4], prompt: "Which wheel continues the spoke increment rule?" },
    { seq: [3, 4, 5, 6], target: 7, dist: [8, 6, 5], prompt: "Select the wheel that adds one more spoke." },
    { seq: [4, 5, 6, 7], target: 8, dist: [7, 6, 5], prompt: "Which wheel completes the full 8-spoke circle?" },
    { seq: [8, 6, 4], target: 2, dist: [3, 5, 6], prompt: "Which wheel continues the even-spoke reduction?" },
    { seq: [2, 4, 6], target: 8, dist: [7, 5, 4], prompt: "Which wheel continues the even-spoke addition pattern?" },
  ];

  return configs.map((cfg, idx) => ({
    id: startIndex + idx,
    prompt: cfg.prompt,
    type: "sequence",
    sequence: cfg.seq.map((s, i) => <SpokesWheel key={i} spokes={s} />),
    options: [
      <SpokesWheel key="cor" spokes={cfg.target} />,
      <SpokesWheel key="d1" spokes={cfg.dist[0]} />,
      <SpokesWheel key="d2" spokes={cfg.dist[1]} />,
      <SpokesWheel key="d3" spokes={cfg.dist[2]} />,
    ],
    correct: 0,
    rule: `Spoke count changes consistently to ${cfg.target} radial segments.`,
  }));
}

function generateGridDotQuestions(startIndex: number): Question[] {
  const configs = [
    { seq: [1, 3, 5, 7], target: 9, dist: [8, 6, 4], prompt: "Which grid continues the odd dot progression?" },
    { seq: [2, 4, 6], target: 8, dist: [9, 7, 5], prompt: "Which grid continues the even dot sequence?" },
    { seq: [1, 2, 3, 4], target: 5, dist: [6, 7, 3], prompt: "Determine the next grid in linear dot addition." },
    { seq: [2, 3, 4, 5], target: 6, dist: [7, 8, 4], prompt: "Which frame adds the 6th dot to the grid?" },
    { seq: [9, 8, 7, 6], target: 5, dist: [4, 3, 7], prompt: "Which grid follows the dot removal sequence?" },
    { seq: [9, 7, 5], target: 3, dist: [4, 2, 1], prompt: "Select the grid continuing the odd dot subtraction." },
    { seq: [3, 5, 7], target: 9, dist: [8, 6, 4], prompt: "Which pattern fills all 9 grid slots?" },
    { seq: [8, 6, 4], target: 2, dist: [3, 1, 5], prompt: "Which grid concludes the even dot subtraction down to 2?" },
  ];

  return configs.map((cfg, idx) => ({
    id: startIndex + idx,
    prompt: cfg.prompt,
    type: "sequence",
    sequence: cfg.seq.map((c, i) => <GridDots key={i} count={c} />),
    options: [
      <GridDots key="cor" count={cfg.target} />,
      <GridDots key="d1" count={cfg.dist[0]} />,
      <GridDots key="d2" count={cfg.dist[1]} />,
      <GridDots key="d3" count={cfg.dist[2]} />,
    ],
    correct: 0,
    rule: `The number of dots in the 3x3 array progresses to ${cfg.target}.`,
  }));
}

function generateDominoQuestions(startIndex: number): Question[] {
  const configs = [
    { seq: [[1, 2], [2, 3], [3, 4], [4, 5]], target: [5, 6], dist: [[5, 5], [6, 7], [4, 6]], prompt: "Which tile completes the arithmetic domino progression?" },
    { seq: [[2, 1], [3, 2], [4, 3], [5, 4]], target: [6, 5], dist: [[6, 6], [7, 6], [5, 5]], prompt: "Determine the subsequent domino tile in this series." },
    { seq: [[1, 3], [2, 4], [3, 5], [4, 6]], target: [5, 7], dist: [[5, 6], [6, 8], [4, 7]], prompt: "Which tile preserves the +2 difference between halves?" },
    { seq: [[2, 4], [3, 6], [4, 8]], target: [5, 10], dist: [[5, 8], [6, 12], [4, 10]], prompt: "Follow the 1:2 ratio domino sequence to find the next tile." },
    { seq: [[5, 5], [4, 4], [3, 3], [2, 2]], target: [1, 1], dist: [[0, 0], [2, 1], [1, 2]], prompt: "Which matching pair finishes the descending double-domino sequence?" },
    { seq: [[1, 1], [2, 2], [3, 3], [4, 4]], target: [5, 5], dist: [[6, 6], [4, 5], [5, 4]], prompt: "Which double-domino comes next in ascending order?" },
    { seq: [[6, 5], [5, 4], [4, 3], [3, 2]], target: [2, 1], dist: [[1, 0], [2, 2], [3, 1]], prompt: "Which tile finishes the descending domino countdown?" },
    { seq: [[1, 2], [2, 4], [3, 6]], target: [4, 8], dist: [[4, 7], [5, 10], [3, 8]], prompt: "Determine the next tile where bottom is twice the top index." },
  ];

  return configs.map((cfg, idx) => ({
    id: startIndex + idx,
    prompt: cfg.prompt,
    type: "sequence",
    sequence: cfg.seq.map((p, i) => <DominoPips key={i} top={p[0]} bot={p[1]} />),
    options: [
      <DominoPips key="cor" top={cfg.target[0]} bot={cfg.target[1]} />,
      <DominoPips key="d1" top={cfg.dist[0][0]} bot={cfg.dist[0][1]} />,
      <DominoPips key="d2" top={cfg.dist[1][0]} bot={cfg.dist[1][1]} />,
      <DominoPips key="d3" top={cfg.dist[2][0]} bot={cfg.dist[2][1]} />,
    ],
    correct: 0,
    rule: `Top and bottom values follow a consistent arithmetic step leading to (${cfg.target[0]}, ${cfg.target[1]}).`,
  }));
}

function buildAllQuestions(): Question[] {
  const q1 = generateArrowQuestions(1); // 12 questions (1..12)
  const q2 = generatePolygonQuestions(13); // 10 questions (13..22)
  const q3 = generateQuadrantQuestions(23); // 10 questions (23..32)
  const q4 = generateConcentricQuestions(33); // 10 questions (33..42)
  const q5 = generateMatrixQuestions(43); // 12 questions (43..54)
  const q6 = generateLineSubtractionQuestions(55); // 8 questions (55..62)
  const q7 = generateDualOrbitQuestions(63); // 8 questions (63..70)
  const q8 = generateHalfCircleQuestions(71); // 8 questions (71..78)
  const q9 = generateSteppingBarsQuestions(79); // 8 questions (79..86)
  const q10 = generateSpokeWheelQuestions(87); // 8 questions (87..94)
  const q11 = generateGridDotQuestions(95); // 8 questions (95..102)
  const q12 = generateDominoQuestions(103); // 8 questions (103..110)

  const all = [...q1, ...q2, ...q3, ...q4, ...q5, ...q6, ...q7, ...q8, ...q9, ...q10, ...q11, ...q12];
  // ponytail: Truncated to exact 100 questions; expand generator pool if test length increases.
  return all.slice(0, 100).map((q, idx) => ({ ...q, id: idx + 1 }));
}

export const QUESTIONS: Question[] = buildAllQuestions();

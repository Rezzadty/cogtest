import { Question } from "@/types/quiz";

// Helper SVG renderers for Inductive Reasoning

function DualOrbitItem({ dotPos, crossPos }: { dotPos: number; crossPos: number }) {
  // 0: Top, 1: Right, 2: Bottom, 3: Left
  const pts = [
    { x: 50, y: 22 },
    { x: 78, y: 50 },
    { x: 50, y: 78 },
    { x: 22, y: 50 },
  ];
  const d = pts[dotPos];
  const c = pts[crossPos];
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" fill="none" className="opacity-40" />
      <circle cx={d.x} cy={d.y} r="8" fill="currentColor" />
      <g transform={`translate(${c.x}, ${c.y})`} stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <line x1="-6" y1="-6" x2="6" y2="6" />
        <line x1="6" y1="-6" x2="-6" y2="6" />
      </g>
    </svg>
  );
}

function ShapeWithSides({ sides, filled }: { sides: number; filled: boolean }) {
  const points: string[] = [];
  const r = 32;
  for (let i = 0; i < sides; i++) {
    const angle = (i * 2 * Math.PI) / sides - Math.PI / 2;
    const x = (50 + r * Math.cos(angle)).toFixed(1);
    const y = (50 + r * Math.sin(angle)).toFixed(1);
    points.push(`${x},${y}`);
  }
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <polygon points={points.join(" ")} stroke="currentColor" strokeWidth="4" fill={filled ? "currentColor" : "none"} strokeLinejoin="round" />
    </svg>
  );
}

function RotatingArrow({ deg }: { deg: number }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <g transform={`rotate(${deg} 50 50)`}>
        <line x1="50" y1="78" x2="50" y2="24" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <polygon points="50,14 38,34 62,34" fill="currentColor" />
      </g>
    </svg>
  );
}

function BoxLines({ d1, d2, h, v }: { d1?: boolean; d2?: boolean; h?: boolean; v?: boolean }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <rect x="18" y="18" width="64" height="64" stroke="currentColor" strokeWidth="3" fill="none" />
      {d1 && <line x1="18" y1="18" x2="82" y2="82" stroke="currentColor" strokeWidth="3" />}
      {d2 && <line x1="82" y1="18" x2="18" y2="82" stroke="currentColor" strokeWidth="3" />}
      {h && <line x1="18" y1="50" x2="82" y2="50" stroke="currentColor" strokeWidth="3" />}
      {v && <line x1="50" y1="18" x2="50" y2="82" stroke="currentColor" strokeWidth="3" />}
    </svg>
  );
}

function ConcentricTarget({ activeRing }: { activeRing: 1 | 2 | 3 | "all" }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="3" fill={activeRing === 3 || activeRing === "all" ? "currentColor" : "none"} />
      <circle cx="50" cy="50" r="26" stroke="currentColor" strokeWidth="3" fill={activeRing === 2 ? "currentColor" : "none"} className={activeRing === 3 ? "text-slate-50 dark:text-[#111726]" : ""} />
      <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="3" fill={activeRing === 1 ? "currentColor" : "none"} />
    </svg>
  );
}

function QuadrantFill({ count }: { count: number }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <rect x="18" y="18" width="64" height="64" stroke="currentColor" strokeWidth="3" fill="none" />
      <line x1="50" y1="18" x2="50" y2="82" stroke="currentColor" strokeWidth="2" />
      <line x1="18" y1="50" x2="82" y2="50" stroke="currentColor" strokeWidth="2" />
      {count >= 1 && <rect x="20" y="20" width="28" height="28" fill="currentColor" />}
      {count >= 2 && <rect x="52" y="20" width="28" height="28" fill="currentColor" />}
      {count >= 3 && <rect x="52" y="52" width="28" height="28" fill="currentColor" />}
      {count >= 4 && <rect x="20" y="52" width="28" height="28" fill="currentColor" />}
    </svg>
  );
}

function DualArrows({ a1, a2 }: { a1: number; a2: number }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <g transform={`rotate(${a1} 50 50)`}>
        <line x1="50" y1="46" x2="50" y2="18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <polygon points="50,10 42,24 58,24" fill="currentColor" />
      </g>
      <g transform={`rotate(${a2} 50 50)`}>
        <line x1="50" y1="54" x2="50" y2="82" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <polygon points="50,90 42,76 58,76" fill="currentColor" />
      </g>
    </svg>
  );
}

function ShapeWithDots({ shape, dots }: { shape: "circle" | "square" | "tri"; dots: number }) {
  const dotCoords = [
    [{ x: 50, y: 50 }],
    [{ x: 42, y: 50 }, { x: 58, y: 50 }],
    [{ x: 50, y: 40 }, { x: 40, y: 58 }, { x: 60, y: 58 }],
  ][dots - 1] || [{ x: 50, y: 50 }];

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      {shape === "circle" && <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="4" fill="none" />}
      {shape === "square" && <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="4" fill="none" />}
      {shape === "tri" && <polygon points="50,18 82,78 18,78" stroke="currentColor" strokeWidth="4" fill="none" />}
      {dotCoords.map((pt, i) => (
        <circle key={i} cx={pt.x} cy={pt.y} r="5" fill="currentColor" />
      ))}
    </svg>
  );
}

function SteppedBars({ count }: { count: number }) {
  const total = 5;
  const barWidth = 10;
  const gap = 3;
  const startX = 50 - (total * barWidth + (total - 1) * gap) / 2;
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      {Array.from({ length: total }).map((_, i) => {
        const height = (i + 1) * 12;
        const x = startX + i * (barWidth + gap);
        const y = 80 - height;
        const isFilled = i < count;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={barWidth}
            height={height}
            stroke="currentColor"
            strokeWidth="2"
            fill={isFilled ? "currentColor" : "none"}
            rx="2"
          />
        );
      })}
    </svg>
  );
}

function WheelSlices({ deg }: { deg: number }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="3" fill="none" />
      <g transform={`rotate(${deg} 50 50)`}>
        <path d="M 50 50 L 50 16 A 34 34 0 0 1 79.4 33 Z" fill="currentColor" />
        <path d="M 50 50 L 79.4 67 A 34 34 0 0 1 50 84 Z" fill="currentColor" />
      </g>
    </svg>
  );
}

function LBlock({ rot, filled }: { rot: number; filled: boolean }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <g transform={`rotate(${rot} 50 50)`}>
        <path
          d="M 30 20 L 50 20 L 50 60 L 70 60 L 70 80 L 30 80 Z"
          stroke="currentColor"
          strokeWidth="3"
          fill={filled ? "currentColor" : "none"}
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

function GridLinesCount({ hCount, vCount }: { hCount: number; vCount: number }) {
  const hSpacings = hCount === 1 ? [50] : hCount === 2 ? [35, 65] : [28, 50, 72];
  const vSpacings = vCount === 1 ? [50] : vCount === 2 ? [35, 65] : [28, 50, 72];
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <rect x="16" y="16" width="68" height="68" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" fill="none" className="opacity-30" />
      {hSpacings.map((y, i) => (
        <line key={`h-${i}`} x1="16" y1={y} x2="84" y2={y} stroke="currentColor" strokeWidth="4" />
      ))}
      {vSpacings.map((x, i) => (
        <line key={`v-${i}`} x1={x} y1="16" x2={x} y2="84" stroke="currentColor" strokeWidth="4" />
      ))}
    </svg>
  );
}

function PolygonDotsInside({ sides, dots }: { sides: number; dots: number }) {
  const points: string[] = [];
  const r = 34;
  for (let i = 0; i < sides; i++) {
    const angle = (i * 2 * Math.PI) / sides - Math.PI / 2;
    points.push(`${(50 + r * Math.cos(angle)).toFixed(1)},${(50 + r * Math.sin(angle)).toFixed(1)}`);
  }
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <polygon points={points.join(" ")} stroke="currentColor" strokeWidth="3" fill="none" strokeLinejoin="round" />
      {Array.from({ length: dots }).map((_, i) => {
        const dotAngle = (i * 2 * Math.PI) / dots;
        const dx = 50 + 14 * Math.cos(dotAngle);
        const dy = 50 + 14 * Math.sin(dotAngle);
        return <circle key={i} cx={dx} cy={dy} r="4" fill="currentColor" />;
      })}
    </svg>
  );
}

function DotWaveGrid({ step }: { step: number }) {
  const coordsByStep: [number, number][][] = [
    [[30, 30]],
    [[50, 30], [30, 50]],
    [[70, 30], [50, 50], [30, 70]],
    [[70, 50], [50, 70]],
    [[70, 70]],
  ];
  const active = coordsByStep[step] || [];
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <rect x="18" y="18" width="64" height="64" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" fill="none" className="opacity-30" />
      {active.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="7" fill="currentColor" />
      ))}
    </svg>
  );
}

function NestedShapesTwo({ outer, inner }: { outer: "circle" | "square" | "tri" | "diamond"; inner: "circle" | "square" | "tri" | "diamond" }) {
  const renderShape = (type: string, r: number, sw: number) => {
    if (type === "circle") return <circle cx="50" cy="50" r={r} stroke="currentColor" strokeWidth={sw} fill="none" />;
    if (type === "square") return <rect x={50 - r} y={50 - r} width={r * 2} height={r * 2} stroke="currentColor" strokeWidth={sw} fill="none" />;
    if (type === "tri") return <polygon points={`50,${50 - r} ${50 + r},${50 + r} ${50 - r},${50 + r}`} stroke="currentColor" strokeWidth={sw} fill="none" />;
    if (type === "diamond") return <polygon points={`50,${50 - r} ${50 + r},50 50,${50 + r} ${50 - r},50`} stroke="currentColor" strokeWidth={sw} fill="none" />;
    return null;
  };
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      {renderShape(outer, 32, 4)}
      {renderShape(inner, 16, 3)}
    </svg>
  );
}

function SpokeCountdown({ spokes }: { spokes: number }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="3" fill="none" />
      {spokes >= 2 && <line x1="50" y1="16" x2="50" y2="84" stroke="currentColor" strokeWidth="3" />}
      {spokes >= 4 && <line x1="16" y1="50" x2="84" y2="50" stroke="currentColor" strokeWidth="3" />}
      {spokes >= 6 && <line x1="26" y1="26" x2="74" y2="74" stroke="currentColor" strokeWidth="3" />}
      {spokes >= 8 && <line x1="74" y1="26" x2="26" y2="74" stroke="currentColor" strokeWidth="3" />}
    </svg>
  );
}

function CornerDotSquare({ corner }: { corner: "tl" | "tr" | "br" | "bl" }) {
  const pos = {
    tl: { x: 30, y: 30 },
    tr: { x: 70, y: 30 },
    br: { x: 70, y: 70 },
    bl: { x: 30, y: 70 },
  }[corner];
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="3" fill="none" />
      <circle cx={pos.x} cy={pos.y} r="8" fill="currentColor" />
    </svg>
  );
}

function TiltingBeam({ angle }: { angle: number }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <polygon points="50,60 40,84 60,84" stroke="currentColor" strokeWidth="2" fill="currentColor" />
      <g transform={`rotate(${angle} 50 60)`}>
        <line x1="14" y1="60" x2="86" y2="60" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <circle cx="20" cy="52" r="6" fill="currentColor" />
        <rect x="74" y="46" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none" />
      </g>
    </svg>
  );
}

function VennDiagram({ shaded }: { shaded: "left" | "mid" | "right" | "outer" | "all" }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <defs>
        <clipPath id="leftCircle">
          <circle cx="40" cy="50" r="26" />
        </clipPath>
        <clipPath id="rightCircle">
          <circle cx="60" cy="50" r="26" />
        </clipPath>
      </defs>
      {shaded === "all" && (
        <>
          <circle cx="40" cy="50" r="26" fill="currentColor" />
          <circle cx="60" cy="50" r="26" fill="currentColor" />
        </>
      )}
      {shaded === "left" && <circle cx="40" cy="50" r="26" fill="currentColor" />}
      {shaded === "right" && <circle cx="60" cy="50" r="26" fill="currentColor" />}
      {shaded === "mid" && (
        <g clipPath="url(#leftCircle)">
          <circle cx="60" cy="50" r="26" fill="currentColor" />
        </g>
      )}
      {shaded === "outer" && (
        <>
          <circle cx="40" cy="50" r="26" fill="currentColor" />
          <circle cx="60" cy="50" r="26" fill="currentColor" />
          <g clipPath="url(#leftCircle)">
            <circle cx="60" cy="50" r="26" className="text-white dark:text-[#111726]" fill="currentColor" />
          </g>
        </>
      )}
      <circle cx="40" cy="50" r="26" stroke="currentColor" strokeWidth="3" fill="none" />
      <circle cx="60" cy="50" r="26" stroke="currentColor" strokeWidth="3" fill="none" />
    </svg>
  );
}

function DominoTile({ top, bot }: { top: number; bot: number }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <rect x="25" y="14" width="50" height="72" rx="6" stroke="currentColor" strokeWidth="3" fill="none" />
      <line x1="25" y1="50" x2="75" y2="50" stroke="currentColor" strokeWidth="3" />
      <text x="50" y="38" textAnchor="middle" dominantBaseline="middle" fill="currentColor" fontSize="18" fontWeight="bold">
        {top}
      </text>
      <text x="50" y="68" textAnchor="middle" dominantBaseline="middle" fill="currentColor" fontSize="18" fontWeight="bold">
        {bot}
      </text>
    </svg>
  );
}

function CircleSlices({ cuts }: { cuts: number }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="3" fill="none" />
      {cuts >= 1 && <line x1="50" y1="16" x2="50" y2="84" stroke="currentColor" strokeWidth="3" />}
      {cuts >= 2 && <line x1="16" y1="50" x2="84" y2="50" stroke="currentColor" strokeWidth="3" />}
      {cuts >= 3 && <line x1="26" y1="26" x2="74" y2="74" stroke="currentColor" strokeWidth="3" />}
      {cuts >= 4 && <line x1="74" y1="26" x2="26" y2="74" stroke="currentColor" strokeWidth="3" />}
    </svg>
  );
}

function PatternShapeMatrix({ shape, pattern }: { shape: "tri" | "square" | "circle"; pattern: "h" | "v" | "cross" }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <defs>
        <pattern id="pat-h" width="8" height="8" patternUnits="userSpaceOnUse">
          <line x1="0" y1="4" x2="8" y2="4" stroke="currentColor" strokeWidth="2" />
        </pattern>
        <pattern id="pat-v" width="8" height="8" patternUnits="userSpaceOnUse">
          <line x1="4" y1="0" x2="4" y2="8" stroke="currentColor" strokeWidth="2" />
        </pattern>
        <pattern id="pat-cross" width="8" height="8" patternUnits="userSpaceOnUse">
          <line x1="0" y1="4" x2="8" y2="4" stroke="currentColor" strokeWidth="2" />
          <line x1="4" y1="0" x2="4" y2="8" stroke="currentColor" strokeWidth="2" />
        </pattern>
      </defs>
      {shape === "tri" && <polygon points="50,18 82,78 18,78" stroke="currentColor" strokeWidth="3" fill={`url(#pat-${pattern})`} />}
      {shape === "square" && <rect x="22" y="22" width="56" height="56" stroke="currentColor" strokeWidth="3" fill={`url(#pat-${pattern})`} />}
      {shape === "circle" && <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="3" fill={`url(#pat-${pattern})`} />}
    </svg>
  );
}

function PerimeterTumbling({ corner, innerShape }: { corner: "tl" | "tr" | "br" | "bl"; innerShape: "circle" | "square" }) {
  const dotCoords = {
    tl: { x: 26, y: 26 },
    tr: { x: 74, y: 26 },
    br: { x: 74, y: 74 },
    bl: { x: 26, y: 74 },
  }[corner];
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <rect x="18" y="18" width="64" height="64" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" fill="none" className="opacity-30" />
      <circle cx={dotCoords.x} cy={dotCoords.y} r="7" fill="currentColor" />
      {innerShape === "circle" ? (
        <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="3" fill="none" />
      ) : (
        <rect x="38" y="38" width="24" height="24" stroke="currentColor" strokeWidth="3" fill="none" />
      )}
    </svg>
  );
}

function HourglassDots({ topDots, botDots }: { topDots: number; botDots: number }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <polygon points="24,20 76,20 50,50" stroke="currentColor" strokeWidth="3" fill="none" />
      <polygon points="50,50 76,80 24,80" stroke="currentColor" strokeWidth="3" fill="none" />
      <text x="50" y="34" textAnchor="middle" dominantBaseline="middle" fill="currentColor" fontSize="13" fontWeight="bold">
        {"•".repeat(topDots)}
      </text>
      <text x="50" y="68" textAnchor="middle" dominantBaseline="middle" fill="currentColor" fontSize="13" fontWeight="bold">
        {"•".repeat(botDots)}
      </text>
    </svg>
  );
}

function SymbolCombos({ frame, symbol }: { frame: "plus" | "square" | "tri"; symbol: "circle" | "cross" | "dot" }) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      {frame === "plus" && (
        <g stroke="currentColor" strokeWidth="4" strokeLinecap="round">
          <line x1="50" y1="22" x2="50" y2="78" />
          <line x1="22" y1="50" x2="78" y2="50" />
        </g>
      )}
      {frame === "square" && <rect x="22" y="22" width="56" height="56" stroke="currentColor" strokeWidth="3" fill="none" />}
      {frame === "tri" && <polygon points="50,18 82,78 18,78" stroke="currentColor" strokeWidth="3" fill="none" />}

      {symbol === "circle" && <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="3" fill="none" />}
      {symbol === "cross" && (
        <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <line x1="42" y1="42" x2="58" y2="58" />
          <line x1="58" y1="42" x2="42" y2="58" />
        </g>
      )}
      {symbol === "dot" && <circle cx="50" cy="54" r="6" fill="currentColor" />}
    </svg>
  );
}

export const INDUCTIVE_QUESTIONS: Question[] = [
  // 1: Dual Orbit
  {
    id: 201,
    prompt: "Which panel correctly continues the dual orbiting tokens sequence?",
    type: "sequence",
    sequence: [
      <DualOrbitItem key={0} dotPos={0} crossPos={0} />,
      <DualOrbitItem key={1} dotPos={1} crossPos={3} />,
      <DualOrbitItem key={2} dotPos={2} crossPos={2} />,
      <DualOrbitItem key={3} dotPos={3} crossPos={1} />,
    ],
    options: [
      <DualOrbitItem key="a" dotPos={0} crossPos={0} />,
      <DualOrbitItem key="b" dotPos={0} crossPos={2} />,
      <DualOrbitItem key="c" dotPos={2} crossPos={0} />,
      <DualOrbitItem key="d" dotPos={1} crossPos={1} />,
    ],
    correct: 0,
    rule: "The dot advances clockwise by 1 position (+90°) per step while the cross rotates counter-clockwise by 1 position (-90°). Both reunite at the top position.",
  },

  // 2: Shape Sides + Invert Shading
  {
    id: 202,
    prompt: "Identify the subsequent shape according to the vertex and fill progression.",
    type: "sequence",
    sequence: [
      <ShapeWithSides key={0} sides={3} filled={false} />,
      <ShapeWithSides key={1} sides={4} filled={true} />,
      <ShapeWithSides key={2} sides={5} filled={false} />,
      <ShapeWithSides key={3} sides={6} filled={true} />,
    ],
    options: [
      <ShapeWithSides key="a" sides={7} filled={false} />,
      <ShapeWithSides key="b" sides={7} filled={true} />,
      <ShapeWithSides key="c" sides={8} filled={false} />,
      <ShapeWithSides key="d" sides={6} filled={false} />,
    ],
    correct: 0,
    rule: "Side count increments by 1 on each panel (3 -> 4 -> 5 -> 6 -> 7) while the interior fill alternates between hollow and solid.",
  },

  // 3: Accelerating Arrow
  {
    id: 203,
    prompt: "Determine the arrow orientation that concludes this accelerating rotational sequence.",
    type: "sequence",
    sequence: [
      <RotatingArrow key={0} deg={0} />,
      <RotatingArrow key={1} deg={45} />,
      <RotatingArrow key={2} deg={135} />,
      <RotatingArrow key={3} deg={270} />,
    ],
    options: [
      <RotatingArrow key="a" deg={90} />,
      <RotatingArrow key="b" deg={0} />,
      <RotatingArrow key="c" deg={45} />,
      <RotatingArrow key="d" deg={180} />,
    ],
    correct: 0,
    rule: "The clockwise rotation step increases by +45° each turn: +45° (to 45°), +90° (to 135°), +135° (to 270°), and finally +180° (to 450° = 90° pointing right).",
  },

  // 4: 3x3 Matrix Line Superposition (XOR)
  {
    id: 204,
    prompt: "Which figure replaces the question mark according to row-wise line combinations?",
    type: "matrix",
    sequence: [
      <BoxLines key={0} d1={true} />,
      <BoxLines key={1} d2={true} />,
      <BoxLines key={2} d1={true} d2={true} />,
      <BoxLines key={3} h={true} />,
      <BoxLines key={4} v={true} />,
      <BoxLines key={5} h={true} v={true} />,
      <BoxLines key={6} d1={true} h={true} />,
      <BoxLines key={7} d1={true} d2={true} h={true} />,
    ],
    options: [
      <BoxLines key="a" d2={true} />,
      <BoxLines key="b" d1={true} />,
      <BoxLines key="c" h={true} />,
      <BoxLines key="d" d1={true} d2={true} />,
    ],
    correct: 0,
    rule: "Across each row, the third cell is the symmetric difference (XOR) of the first two panels: lines present in exactly one input box are retained.",
  },

  // 5: Concentric Ring Outward Cycle
  {
    id: 205,
    prompt: "Which target diagram completes the outward ring cycle?",
    type: "sequence",
    sequence: [
      <ConcentricTarget key={0} activeRing={1} />,
      <ConcentricTarget key={1} activeRing={2} />,
      <ConcentricTarget key={2} activeRing={3} />,
      <ConcentricTarget key={3} activeRing={1} />,
    ],
    options: [
      <ConcentricTarget key="a" activeRing={2} />,
      <ConcentricTarget key="b" activeRing={3} />,
      <ConcentricTarget key="c" activeRing="all" />,
      <ConcentricTarget key="d" activeRing={1} />,
    ],
    correct: 0,
    rule: "The shaded band shifts sequentially outward from inner (1) to middle (2) to outer (3), resetting to inner (1) and repeating outward to middle (2).",
  },

  // 6: Clockwise Quadrant Fill
  {
    id: 206,
    prompt: "Which square represents the completion of the progressive quadrant filling rule?",
    type: "sequence",
    sequence: [
      <QuadrantFill key={0} count={1} />,
      <QuadrantFill key={1} count={2} />,
      <QuadrantFill key={2} count={3} />,
    ],
    options: [
      <QuadrantFill key="a" count={4} />,
      <QuadrantFill key="b" count={2} />,
      <QuadrantFill key="c" count={1} />,
      <QuadrantFill key="d" count={3} />,
    ],
    correct: 0,
    rule: "Shaded quadrants accumulate one by one in a clockwise sequence starting from the top-left, concluding with all four quadrants fully shaded.",
  },

  // 7: Dual Opposing Arrows
  {
    id: 207,
    prompt: "Which panel correctly reflects the synchronized rotation of both pointer arrows?",
    type: "sequence",
    sequence: [
      <DualArrows key={0} a1={0} a2={0} />,
      <DualArrows key={1} a1={90} a2={270} />,
      <DualArrows key={2} a1={180} a2={180} />,
      <DualArrows key={3} a1={270} a2={90} />,
    ],
    options: [
      <DualArrows key="a" a1={0} a2={0} />,
      <DualArrows key="b" a1={90} a2={90} />,
      <DualArrows key="c" a1={180} a2={0} />,
      <DualArrows key="d" a1={270} a2={270} />,
    ],
    correct: 0,
    rule: "Arrow 1 rotates clockwise by +90° each frame, while Arrow 2 rotates counter-clockwise by -90° each frame. After 4 steps, both return to 0°.",
  },

  // 8: 3x3 Matrix Shape & Dot Permutation
  {
    id: 208,
    prompt: "Determine the missing figure satisfying both shape and dot count invariants.",
    type: "matrix",
    sequence: [
      <ShapeWithDots key={0} shape="circle" dots={1} />,
      <ShapeWithDots key={1} shape="square" dots={2} />,
      <ShapeWithDots key={2} shape="tri" dots={3} />,
      <ShapeWithDots key={3} shape="square" dots={3} />,
      <ShapeWithDots key={4} shape="tri" dots={1} />,
      <ShapeWithDots key={5} shape="circle" dots={2} />,
      <ShapeWithDots key={6} shape="tri" dots={2} />,
      <ShapeWithDots key={7} shape="circle" dots={3} />,
    ],
    options: [
      <ShapeWithDots key="a" shape="square" dots={1} />,
      <ShapeWithDots key="b" shape="square" dots={2} />,
      <ShapeWithDots key="c" shape="circle" dots={1} />,
      <ShapeWithDots key="d" shape="tri" dots={1} />,
    ],
    correct: 0,
    rule: "Each row and column must contain exactly one circle, one square, and one triangle, paired with 1, 2, and 3 dots. The missing item is a square with 1 dot.",
  },

  // 9: Stepped Gauge Bars
  {
    id: 209,
    prompt: "Which gauge diagram indicates the next level in this ascending bar sequence?",
    type: "sequence",
    sequence: [
      <SteppedBars key={0} count={1} />,
      <SteppedBars key={1} count={2} />,
      <SteppedBars key={2} count={3} />,
      <SteppedBars key={3} count={4} />,
    ],
    options: [
      <SteppedBars key="a" count={5} />,
      <SteppedBars key="b" count={3} />,
      <SteppedBars key="c" count={2} />,
      <SteppedBars key="d" count={4} />,
    ],
    correct: 0,
    rule: "The number of active filled bars increases linearly by +1 on every subsequent step, reaching all 5 bars.",
  },

  // 10: Pinwheel Rotation
  {
    id: 210,
    prompt: "Which wheel configuration follows the rotational increment of the shaded sectors?",
    type: "sequence",
    sequence: [
      <WheelSlices key={0} deg={0} />,
      <WheelSlices key={1} deg={60} />,
      <WheelSlices key={2} deg={120} />,
      <WheelSlices key={3} deg={180} />,
    ],
    options: [
      <WheelSlices key="a" deg={240} />,
      <WheelSlices key="b" deg={300} />,
      <WheelSlices key="c" deg={0} />,
      <WheelSlices key="d" deg={180} />,
    ],
    correct: 0,
    rule: "The opposing 60° sectors rotate clockwise around the center point in uniform increments of 60° per frame (180° + 60° = 240°).",
  },

  // 11: L-Block Tumbling & Inversion
  {
    id: 211,
    prompt: "Which L-block represents the next state under rotation and fill alternation?",
    type: "sequence",
    sequence: [
      <LBlock key={0} rot={0} filled={false} />,
      <LBlock key={1} rot={90} filled={true} />,
      <LBlock key={2} rot={180} filled={false} />,
      <LBlock key={3} rot={270} filled={true} />,
    ],
    options: [
      <LBlock key="a" rot={0} filled={false} />,
      <LBlock key="b" rot={0} filled={true} />,
      <LBlock key="c" rot={90} filled={false} />,
      <LBlock key="d" rot={270} filled={false} />,
    ],
    correct: 0,
    rule: "The L-block rotates clockwise by 90° each turn while toggling between hollow and filled states. Returning to 360°/0° restores the hollow state.",
  },

  // 12: 3x3 Matrix Grid Line Counts
  {
    id: 212,
    prompt: "Which grid completes the arithmetic line multiplication rule in the final cell?",
    type: "matrix",
    sequence: [
      <GridLinesCount key={0} hCount={1} vCount={1} />,
      <GridLinesCount key={1} hCount={1} vCount={2} />,
      <GridLinesCount key={2} hCount={1} vCount={3} />,
      <GridLinesCount key={3} hCount={2} vCount={1} />,
      <GridLinesCount key={4} hCount={2} vCount={2} />,
      <GridLinesCount key={5} hCount={2} vCount={3} />,
      <GridLinesCount key={6} hCount={3} vCount={1} />,
      <GridLinesCount key={7} hCount={3} vCount={2} />,
    ],
    options: [
      <GridLinesCount key="a" hCount={3} vCount={3} />,
      <GridLinesCount key="b" hCount={2} vCount={3} />,
      <GridLinesCount key="c" hCount={3} vCount={2} />,
      <GridLinesCount key="d" hCount={1} vCount={3} />,
    ],
    correct: 0,
    rule: "Row index dictates the horizontal line count (row 1 has 1, row 2 has 2, row 3 has 3) while column index dictates vertical lines (1, 2, 3). The intersection is 3 horizontal and 3 vertical lines.",
  },

  // 13: Polygon Vertices minus Dots
  {
    id: 213,
    prompt: "Which geometric container preserves the internal dot relation?",
    type: "sequence",
    sequence: [
      <PolygonDotsInside key={0} sides={3} dots={2} />,
      <PolygonDotsInside key={1} sides={4} dots={3} />,
      <PolygonDotsInside key={2} sides={5} dots={4} />,
      <PolygonDotsInside key={3} sides={6} dots={5} />,
    ],
    options: [
      <PolygonDotsInside key="a" sides={7} dots={6} />,
      <PolygonDotsInside key="b" sides={7} dots={5} />,
      <PolygonDotsInside key="c" sides={8} dots={6} />,
      <PolygonDotsInside key="d" sides={6} dots={6} />,
    ],
    correct: 0,
    rule: "Exterior sides increase sequentially (3 -> 4 -> 5 -> 6 -> 7) and internal dots always equal sides minus 1 (7 sides with 6 dots).",
  },

  // 14: Diagonal Dot Wave
  {
    id: 214,
    prompt: "Which 3x3 array terminates the diagonal traversal of the dot wave?",
    type: "sequence",
    sequence: [
      <DotWaveGrid key={0} step={0} />,
      <DotWaveGrid key={1} step={1} />,
      <DotWaveGrid key={2} step={2} />,
      <DotWaveGrid key={3} step={3} />,
    ],
    options: [
      <DotWaveGrid key="a" step={4} />,
      <DotWaveGrid key="b" step={0} />,
      <DotWaveGrid key="c" step={2} />,
      <DotWaveGrid key="d" step={1} />,
    ],
    correct: 0,
    rule: "Dots illuminate along diagonal wavefronts across the 3x3 array from top-left (d=0) to bottom-right (d=4, isolating the bottom-right vertex).",
  },

  // 15: Nested Shapes Outer-Inner Shift
  {
    id: 215,
    prompt: "Determine the nested shape pair following the chain progression.",
    type: "sequence",
    sequence: [
      <NestedShapesTwo key={0} outer="circle" inner="square" />,
      <NestedShapesTwo key={1} outer="square" inner="tri" />,
      <NestedShapesTwo key={2} outer="tri" inner="diamond" />,
    ],
    options: [
      <NestedShapesTwo key="a" outer="diamond" inner="circle" />,
      <NestedShapesTwo key="b" outer="circle" inner="diamond" />,
      <NestedShapesTwo key="c" outer="square" inner="diamond" />,
      <NestedShapesTwo key="d" outer="tri" inner="circle" />,
    ],
    correct: 0,
    rule: "The inner shape of each frame promotes to the outer shape of the next frame, while the new inner shape follows the cycle: Circle -> Square -> Triangle -> Diamond -> Circle.",
  },

  // 16: Spoke Countdown
  {
    id: 216,
    prompt: "Which figure concludes the spoke elimination series?",
    type: "sequence",
    sequence: [
      <SpokeCountdown key={0} spokes={8} />,
      <SpokeCountdown key={1} spokes={6} />,
      <SpokeCountdown key={2} spokes={4} />,
      <SpokeCountdown key={3} spokes={2} />,
    ],
    options: [
      <SpokeCountdown key="a" spokes={0} />,
      <SpokeCountdown key="b" spokes={2} />,
      <SpokeCountdown key="c" spokes={4} />,
      <SpokeCountdown key="d" spokes={6} />,
    ],
    correct: 0,
    rule: "Opposing pairs of spoke lines are subtracted symmetrically (-2 spokes per panel), resulting in an empty circular rim (0 spokes).",
  },

  // 17: Corner Dot Shift
  {
    id: 217,
    prompt: "Which frame completes the clockwise perimeter cycle of the indicator dot?",
    type: "sequence",
    sequence: [
      <CornerDotSquare key={0} corner="tl" />,
      <CornerDotSquare key={1} corner="tr" />,
      <CornerDotSquare key={2} corner="br" />,
      <CornerDotSquare key={3} corner="bl" />,
    ],
    options: [
      <CornerDotSquare key="a" corner="tl" />,
      <CornerDotSquare key="b" corner="tr" />,
      <CornerDotSquare key="c" corner="br" />,
      <CornerDotSquare key="d" corner="bl" />,
    ],
    correct: 0,
    rule: "The marker dot traverses the four internal corners of the square in a clockwise trajectory: Top-Left -> Top-Right -> Bottom-Right -> Bottom-Left -> Top-Left.",
  },

  // 18: Tilting Beam Angular Step
  {
    id: 218,
    prompt: "Which balance beam orientation comes next in the uniform angular progression?",
    type: "sequence",
    sequence: [
      <TiltingBeam key={0} angle={-30} />,
      <TiltingBeam key={1} angle={0} />,
      <TiltingBeam key={2} angle={30} />,
      <TiltingBeam key={3} angle={60} />,
    ],
    options: [
      <TiltingBeam key="a" angle={90} />,
      <TiltingBeam key="b" angle={75} />,
      <TiltingBeam key="c" angle={-30} />,
      <TiltingBeam key="d" angle={45} />,
    ],
    correct: 0,
    rule: "The beam tilts clockwise by a uniform +30° step at each interval (-30° -> 0° -> +30° -> +60° -> +90° vertical orientation).",
  },

  // 19: Venn Region Shading Progression
  {
    id: 219,
    prompt: "Which Venn diagram follows the progressive region shading sequence?",
    type: "sequence",
    sequence: [
      <VennDiagram key={0} shaded="left" />,
      <VennDiagram key={1} shaded="mid" />,
      <VennDiagram key={2} shaded="right" />,
      <VennDiagram key={3} shaded="outer" />,
    ],
    options: [
      <VennDiagram key="a" shaded="all" />,
      <VennDiagram key="b" shaded="left" />,
      <VennDiagram key="c" shaded="mid" />,
      <VennDiagram key="d" shaded="right" />,
    ],
    correct: 0,
    rule: "Shading moves from left lobe to center intersection to right lobe, followed by both outer lobes combined, culminating in all three regions fully shaded.",
  },

  // 20: Arithmetic Domino Modulo Step
  {
    id: 220,
    prompt: "Which domino tile completes the numeric series for top and bottom cells?",
    type: "sequence",
    sequence: [
      <DominoTile key={0} top={1} bot={2} />,
      <DominoTile key={1} top={2} bot={4} />,
      <DominoTile key={2} top={3} bot={6} />,
      <DominoTile key={3} top={4} bot={1} />,
    ],
    options: [
      <DominoTile key="a" top={5} bot={3} />,
      <DominoTile key="b" top={5} bot={2} />,
      <DominoTile key="c" top={4} bot={3} />,
      <DominoTile key="d" top={6} bot={4} />,
    ],
    correct: 0,
    rule: "The top number increases by +1 each step (1 -> 2 -> 3 -> 4 -> 5). The bottom number increases by +2 modulo 7 (2 -> 4 -> 6 -> 1 -> 3).",
  },

  // 21: Circle Slices Partitioning
  {
    id: 221,
    prompt: "Identify the subsequent partitioned disk in this diameter division pattern.",
    type: "sequence",
    sequence: [
      <CircleSlices key={0} cuts={1} />,
      <CircleSlices key={1} cuts={2} />,
      <CircleSlices key={2} cuts={3} />,
    ],
    options: [
      <CircleSlices key="a" cuts={4} />,
      <CircleSlices key="b" cuts={3} />,
      <CircleSlices key="c" cuts={2} />,
      <CircleSlices key="d" cuts={1} />,
    ],
    correct: 0,
    rule: "Diameter division cuts increment by +1 per frame (1 cut = 2 sectors, 2 cuts = 4 sectors, 3 cuts = 6 sectors, 4 cuts = 8 sectors).",
  },

  // 22: 3x3 Matrix Pattern-Shape Hatching
  {
    id: 222,
    prompt: "Which figure logically completes the shape and hatching matrix?",
    type: "matrix",
    sequence: [
      <PatternShapeMatrix key={0} shape="circle" pattern="h" />,
      <PatternShapeMatrix key={1} shape="circle" pattern="v" />,
      <PatternShapeMatrix key={2} shape="circle" pattern="cross" />,
      <PatternShapeMatrix key={3} shape="square" pattern="h" />,
      <PatternShapeMatrix key={4} shape="square" pattern="v" />,
      <PatternShapeMatrix key={5} shape="square" pattern="cross" />,
      <PatternShapeMatrix key={6} shape="tri" pattern="h" />,
      <PatternShapeMatrix key={7} shape="tri" pattern="v" />,
    ],
    options: [
      <PatternShapeMatrix key="a" shape="tri" pattern="cross" />,
      <PatternShapeMatrix key="b" shape="square" pattern="cross" />,
      <PatternShapeMatrix key="c" shape="tri" pattern="h" />,
      <PatternShapeMatrix key="d" shape="circle" pattern="cross" />,
    ],
    correct: 0,
    rule: "Each row preserves the outer silhouette (circles, squares, triangles) while columns progress through horizontal, vertical, and composite cross-hatching.",
  },

  // 23: Perimeter Tumbling + Inner Shape Toggle
  {
    id: 223,
    prompt: "Which configuration preserves both corner position and central core toggle rules?",
    type: "sequence",
    sequence: [
      <PerimeterTumbling key={0} corner="tl" innerShape="circle" />,
      <PerimeterTumbling key={1} corner="tr" innerShape="square" />,
      <PerimeterTumbling key={2} corner="br" innerShape="circle" />,
      <PerimeterTumbling key={3} corner="bl" innerShape="square" />,
    ],
    options: [
      <PerimeterTumbling key="a" corner="tl" innerShape="circle" />,
      <PerimeterTumbling key="b" corner="tl" innerShape="square" />,
      <PerimeterTumbling key="c" corner="tr" innerShape="circle" />,
      <PerimeterTumbling key="d" corner="bl" innerShape="circle" />,
    ],
    correct: 0,
    rule: "The orbiting dot moves clockwise along the 4 corners, while the center shape alternates between circle and square. Next state is Top-Left with a circle.",
  },

  // 24: Hourglass Sand Transfer
  {
    id: 224,
    prompt: "Which hourglass shows the exact continuation of the particle conservation transfer?",
    type: "sequence",
    sequence: [
      <HourglassDots key={0} topDots={4} botDots={0} />,
      <HourglassDots key={1} topDots={3} botDots={1} />,
      <HourglassDots key={2} topDots={2} botDots={2} />,
      <HourglassDots key={3} topDots={1} botDots={3} />,
    ],
    options: [
      <HourglassDots key="a" topDots={0} botDots={4} />,
      <HourglassDots key="b" topDots={1} botDots={4} />,
      <HourglassDots key="c" topDots={0} botDots={3} />,
      <HourglassDots key="d" topDots={2} botDots={2} />,
    ],
    correct: 0,
    rule: "Total particles are conserved at 4: each frame decrements the top compartment by 1 and increments the bottom compartment by 1, leaving 0 top and 4 bottom.",
  },

  // 25: 3x3 Matrix Symbol Combination
  {
    id: 225,
    prompt: "Which compound glyph completes the symbolic synthesis in the final matrix cell?",
    type: "matrix",
    sequence: [
      <SymbolCombos key={0} frame="plus" symbol="cross" />,
      <SymbolCombos key={1} frame="plus" symbol="circle" />,
      <SymbolCombos key={2} frame="plus" symbol="dot" />,
      <SymbolCombos key={3} frame="square" symbol="cross" />,
      <SymbolCombos key={4} frame="square" symbol="circle" />,
      <SymbolCombos key={5} frame="square" symbol="dot" />,
      <SymbolCombos key={6} frame="tri" symbol="cross" />,
      <SymbolCombos key={7} frame="tri" symbol="circle" />,
    ],
    options: [
      <SymbolCombos key="a" frame="tri" symbol="dot" />,
      <SymbolCombos key="b" frame="tri" symbol="cross" />,
      <SymbolCombos key="c" frame="square" symbol="dot" />,
      <SymbolCombos key="d" frame="plus" symbol="dot" />,
    ],
    correct: 0,
    rule: "Rows establish outer enclosing geometries (cross-frame, square, triangle) while columns insert standard internal glyphs (cross, circle, dot). The final cell combines a triangle with an interior dot.",
  },
];

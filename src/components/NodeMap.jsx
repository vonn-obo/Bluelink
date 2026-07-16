import { motion } from "framer-motion";
import { CONFIG } from "@/config";

// Signature visual: Bluelink as a hub with services as linked nodes.
// With real services, each renders solid + "online". With none, a few
// dashed ghost slots show rather than inventing a fake service name.
const HUB = { x: 160, y: 160 };
const RADIUS = 128;
const EMPTY_SLOT_ANGLES = [-90, 30, 150];

function polar(angleDeg, radius) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: HUB.x + Math.cos(rad) * radius, y: HUB.y + Math.sin(rad) * radius };
}

export default function NodeMap() {
  const services = CONFIG.services;
  const angles =
    services.length > 0
      ? services.map((_, i) => -90 + (360 / services.length) * i)
      : EMPTY_SLOT_ANGLES;

  const nodes = angles.map((angle, i) => ({
    ...polar(angle, RADIUS),
    service: services[i] ?? null,
  }));

  return (
    <svg viewBox="0 0 320 320" className="h-auto w-full max-w-md" role="img" aria-label="Bluelink service network">
      {nodes.map((node, i) => (
        <motion.line
          key={`line-${i}`}
          x1={HUB.x}
          y1={HUB.y}
          x2={node.x}
          y2={node.y}
          stroke={node.service ? "var(--color-primary)" : "var(--color-border)"}
          strokeWidth="1.5"
          strokeDasharray={node.service ? "0" : "4 4"}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: "easeOut" }}
        />
      ))}

      {nodes.map((node, i) =>
        node.service ? (
          <motion.circle
            key={`pulse-${i}`}
            r="3"
            fill="var(--color-signal)"
            initial={{ cx: HUB.x, cy: HUB.y, opacity: 0 }}
            animate={{ cx: [HUB.x, node.x], cy: [HUB.y, node.y], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.2, delay: 1 + i * 0.3, repeat: Infinity, repeatDelay: 2 + services.length * 0.3, ease: "linear" }}
          />
        ) : null
      )}

      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, type: "spring" }}
        style={{ transformOrigin: `${HUB.x}px ${HUB.y}px` }}
      >
        <circle cx={HUB.x} cy={HUB.y} r="28" className="fill-primary" />
        <text x={HUB.x} y={HUB.y + 4} textAnchor="middle" className="fill-primary-foreground font-mono text-[9px] font-medium">
          LINK
        </text>
      </motion.g>

      {nodes.map((node, i) => (
        <motion.g
          key={`node-${i}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.7 + i * 0.1, type: "spring" }}
          style={{ transformOrigin: `${node.x}px ${node.y}px` }}
        >
          <circle
            cx={node.x}
            cy={node.y}
            r="18"
            className={node.service ? "fill-card stroke-primary" : "fill-card stroke-border"}
            strokeWidth="1.5"
            strokeDasharray={node.service ? "0" : "3 3"}
          />
          {node.service && <circle cx={node.x + 12} cy={node.y - 12} r="3" className="fill-signal" />}
          <text
            x={node.x}
            y={node.y + (node.service ? 30 : 32)}
            textAnchor="middle"
            className={node.service ? "fill-foreground font-mono text-[7px] font-medium" : "fill-muted-foreground font-mono text-[7px]"}
          >
            {node.service ? (node.service.shortLabel ?? node.service.name).toUpperCase() : "SOON"}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}

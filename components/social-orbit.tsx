"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiReact,
  SiPython,
  SiPrisma,
} from "react-icons/si";
import { IconType } from "react-icons";

const orbitConfig = [
  { icon: SiNextdotjs, orbit: 130, startAngle: 0, speed: 0.4 },
  { icon: SiNodedotjs, orbit: 130, startAngle: 120, speed: 0.4 },
  { icon: SiTypescript, orbit: 130, startAngle: 240, speed: 0.4 },
  { icon: SiReact, orbit: 72, startAngle: 60, speed: 0.65 },
  { icon: SiPython, orbit: 72, startAngle: 180, speed: 0.65 },
  { icon: SiPrisma, orbit: 72, startAngle: 300, speed: 0.65 },
];

function OrbitIcon({
  icon: Icon,
  orbit,
  startAngle,
  speed,
}: {
  icon: IconType;
  orbit: number;
  startAngle: number;
  speed: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const elapsed = useRef(0);

  useAnimationFrame((_, delta) => {
    elapsed.current += delta * 0.001;
    const angle = (startAngle * Math.PI) / 180 + elapsed.current * speed;
    x.set(Math.cos(angle) * orbit);
    y.set(Math.sin(angle) * orbit);
  });

  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.button
        whileHover={{ scale: 1.18 }}
        whileTap={{ scale: 0.9 }}
        className="w-11 h-11 rounded-xl bg-[#1c1c1c] border border-white/15 flex items-center justify-center"
        style={{
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.06), 0 4px 20px rgba(0,0,0,0.8), 0 0 20px 2px rgba(255,255,255,0.05)",
        }}
      >
        <Icon size={20} color="white" />
      </motion.button>
    </motion.div>
  );
}

function Ring({ size }: { size: number }) {
  return (
    <div
      className="absolute top-1/2 left-1/2 rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        transform: "translate(-50%, -50%)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: `inset 0 0 ${size / 5}px rgba(255,255,255,0.02), 0 0 ${size / 8}px rgba(255,255,255,0.02)`,
      }}
    />
  );
}

export function SocialOrbit() {
  return (
    <div
      className="relative mx-auto select-none"
      style={{ width: 320, height: 320 }}
    >
      <Ring size={144} />
      <Ring size={260} />

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-[14px] bg-[#1c1c1c] border border-white/20 flex items-center justify-center z-10"
        style={{
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.08), 0 8px 32px rgba(11,155, 49, 0.3), 0 0 40px 4px rgba(255,255,255,0.06)",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </motion.button>

      {/* Ícones orbitando */}
      {orbitConfig.map((item, index) => (
        <OrbitIcon key={index} {...item} />
      ))}
    </div>
  );
}

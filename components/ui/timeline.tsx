"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.4, 0, 0.2, 1] },
});

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      {/* Section header */}
      <div className="container mx-auto px-4 mb-8">
        <motion.span
          {...fadeUp(0)}
          className="inline-block text-xs font-semibold tracking-widest text-[#58D68D] uppercase mb-4"
        >
          Desenvolvimento
        </motion.span>

        {/* H2 — "Desenvolvimento" typo fixed (was "Desevolvimento") */}
        <motion.h2
          {...fadeUp(0.1)}
          id="timeline-heading"
          className="mb-4 bg-linear-to-r from-foreground via-amazon-dark to-amazon-highlight bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl"
        >
          Processo de{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-amazon-dark">
            Desenvolvimento
          </span>
        </motion.h2>

        <motion.p
          {...fadeUp(0.2)}
          className="text-foreground text-lg leading-relaxed mb-8"
        >
          O Smart Greenhouse integra sensores ESP32, visão computacional com Gemini IA
          e um gêmeo digital 3D para monitorar e otimizar cada aspecto do crescimento
          das plantas — temperatura, umidade, solo, pragas e doenças.
        </motion.p>
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start gap-10 pt-10 md:gap-10"
          >
            <div className="sticky top-40 z-40 flex max-h-fit w-full max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div
                className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#0a0a0a] border border-[#58D68D]/30 md:left-3"
                aria-hidden="true"
              >
                <div className="h-4 w-4 rounded-full bg-[#58D68D]/20 border border-[#58D68D]/50 p-2" />
              </div>
              <h3 className="hidden text-xl font-bold md:block md:pl-20 md:text-4xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pr-4 md:pl-4">
              <h3 className="mb-4 block text-left text-2xl font-bold md:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Animated progress line */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-8 top-0 w-0.5 overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-[#58D68D]/20 to-transparent to-99% mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8"
          aria-hidden="true"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-0.5 rounded-full bg-linear-to-t from-[#58D68D] from-0% via-[#1E8449] to-transparent to-99%"
          />
        </div>
      </div>
    </div>
  );
};
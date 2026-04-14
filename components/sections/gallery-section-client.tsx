"use client";

import { ParallaxScroll } from "../ui/parallax-scroll";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.4, 0, 0.2, 1] },
});

type MediaItem = { id: string; width: number; height: number };

export function GallerySectionClient({ images }: { images: MediaItem[] }) {
  return (
    <div id="gallery" className="relative z-20 mx-auto max-w-7xl py-20 lg:py-40">
      <img src="/image/t.webp" alt="" className="absolute pointer-events-none select-none -z-50 md:z-50 rotate-108" />
      <motion.span {...fadeUp(0)} className="inline-block text-xs font-semibold tracking-widest text-[#58D68D] uppercase mb-4">
        Galeria
      </motion.span>
      <motion.h2 {...fadeUp(0.1)} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        A Estufa em{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-amazon-dark">
          Imagens
        </span>
      </motion.h2>
      <motion.p {...fadeUp(0.2)} className="text-[#9CA3AF] text-lg leading-relaxed mb-8">
        Registro visual do projeto — da montagem do hardware à estufa em operação completa.
      </motion.p>

      {images.length > 0 && <ParallaxScroll images={images} />}
    </div>
  );
}
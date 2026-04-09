"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { CldImage } from "next-cloudinary";
import { cn } from "@/lib/utils";

type CloudinaryImage = {
  id: string;
  width: number;
  height: number;
};

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: CloudinaryImage[];
  className?: string;
}) => {
  const gridRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });

  const slowUp = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const fastUp = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const down = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const columns = [[], [], [], [], []] as CloudinaryImage[][];

  images.forEach((img, i) => {
    columns[i % 5].push(img);
  });

  return (
    <section className={cn("w-full", className)} ref={gridRef}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-7xl mx-auto gap-6 md:gap-10 py-20 md:py-40 px-4 md:px-5">
        {columns.map((col, colIndex) => {
          const y =
            colIndex === 1 || colIndex === 2
              ? down
              : colIndex === 0
                ? slowUp
                : fastUp;

          return (
            <div key={colIndex} className="grid gap-6 md:gap-10">
              {col.map((el, idx) => (
                <motion.div
                  key={colIndex + "-" + idx}
                  style={{ y }}
                  className="md:block hidden"
                >
                  <CldImage
                    src={el.id}
                    width={600}
                    height={600}
                    crop="fill"
                    format="auto"
                    quality="auto"
                    alt="Galeria estufa"
                    className="w-full aspect-square object-cover rounded-xl"
                  />
                </motion.div>
              ))}

              {col.map((el, idx) => (
                <div
                  key={"mobile-" + colIndex + "-" + idx}
                  className="block md:hidden"
                >
                  <CldImage
                    src={el.id}
                    width={600}
                    height={600}
                    crop="fill"
                    format="auto"
                    quality="auto"
                    alt="Galeria estufa"
                    className="w-full aspect-square object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};
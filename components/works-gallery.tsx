"use client";

import { useState } from "react";
import { VideoCard } from "./video-card";
import { CustomCursor } from "./custom-cursor";
import { cldVideo, cldVideoThumb } from "@/lib/cloudinary-client";

const projects = [
  {
    id: 1,
    title: "FASHION STUDIO",
    category: "BRANDING",
    year: "2024",
    publicId: "IMG_2706_tp5nyp",
  },
  {
    id: 2,
    title: "ARCHITECTURE FIRM",
    category: "DESIGN",
    year: "2024",
    publicId: "IMG_2708_ykpfrj",
  },
  {
    id: 3,
    title: "PRODUCT LAUNCH",
    category: "CREATIVE",
    year: "2024",
    publicId: "works/product_launch_def789",
  },
  {
    id: 4,
    title: "STUDIO VALE",
    category: "MARKETING",
    year: "2024",
    publicId: "works/studio_vale_ghi012",
  },
  {
    id: 5,
    title: "AUTOMOTIVE",
    category: "COMMERCIAL",
    year: "2024",
    publicId: "works/automotive_jkl345",
  },
].map((p) => ({
  ...p,
  thumbnail: cldVideoThumb(p.publicId),
  video: cldVideo(p.publicId),
}));

export function WorksGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <>
      <CustomCursor isActive={hoveredId !== null} />
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-4">
          {projects.map((project) => (
            <VideoCard
              key={project.id}
              project={project}
              isHovered={hoveredId === project.id}
              onHoverChange={(hovered: boolean) =>
                setHoveredId(hovered ? project.id : null)
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}
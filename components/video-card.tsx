"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface Project {
  id: number
  title: string
  category: string
  year: string
  thumbnail: string
  video: string
}

interface VideoCardProps {
  project: Project
  isHovered: boolean
  onHoverChange: (hovered: boolean) => void
}

export function VideoCard({ project, isHovered, onHoverChange }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => { })
    } else if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [isHovered])

  return (
    <div
      className={cn(
        "group relative rounded-4xl overflow-hidden",
        "cursor-pointer md:cursor-none",
        "transition-all duration-700 ease-in-out",
        "w-full md:h-125 aspect-16/10",
        isHovered
          ? "md:flex-2 shadow-2xl shadow-white/10"
          : "md:flex-[0.8] opacity-90",
      )}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
      onClick={() => onHoverChange(!isHovered)}
    >
      {/* Thumbnail Image */}
      <div className={cn("absolute inset-0 transition-opacity duration-700", isHovered ? "opacity-0" : "opacity-100")}>
        <img
          src={project.thumbnail || "/semimagem.png"}
          alt={project.title}
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            !isHovered && "",
          )}
        />
      </div>

      {/* Video */}
      <div className={cn("absolute inset-0 transition-opacity duration-700", isHovered ? "opacity-100" : "opacity-0")}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src={project.video} type="video/mp4" />
        </video>
      </div>

      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 p-8",
          "transition-all duration-700",
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        {/* Glassmorphic card */}
        <div
          className={cn(
            "relative backdrop-blur-xl bg-black/20 rounded-2xl p-6 border border-white/10",
            "shadow-2xl",
            "transition-all duration-700 ease-out",
            isHovered ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          <div className="space-y-1 text-left">
            <h3 className="text-white font-mono text-sm tracking-[0.3em] uppercase font-medium leading-relaxed">
              {project.title}
            </h3>
            <p className="text-white/80 font-mono text-xs tracking-[0.25em] uppercase leading-relaxed">
              {project.category}
            </p>
            <div className="pt-3 mt-3 border-t border-white/10">
              <p className="text-white/60 font-mono text-xs tracking-widest">{project.year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

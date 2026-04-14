import { v2 as cloudinary } from "cloudinary";
import { GallerySectionClient } from "./gallery-section-client";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const revalidate = 3600;

type MediaItem = { id: string; width: number; height: number };

async function getImages(): Promise<MediaItem[]> {
  const res = await cloudinary.api.resources({
    type: "upload",
    resource_type: "image",
    max_results: 100,
  });
  return res.resources.map((r: { public_id: string; width: number; height: number }) => ({
    id: r.public_id,
    width: r.width,
    height: r.height,
  }));
}

export async function GallerySection() {
  const images = await getImages();
  return <GallerySectionClient images={images} />;
}
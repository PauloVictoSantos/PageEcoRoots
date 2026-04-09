import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const revalidate = 3600;

type CloudinaryResource = {
  public_id: string;
  resource_type: "image" | "video";
  format: string;
  width: number;
  height: number;
  secure_url: string;
  asset_folder?: string;
  created_at: string;
};

export type TimelineFile = {
  id: string;
  name: string;
  kind: "image" | "video" | "pdf";
  url: string;
  thumbnailUrl: string;
};

export type TimelineWeek = {
  title: string;
  folder: string;
  files: TimelineFile[];
};

const PARENT_FOLDER = "timeline"; // pasta pai que contém as semanas

export async function GET() {
  try {
    const foldersRes = await cloudinary.api.sub_folders(PARENT_FOLDER);
    const weekFolders: { name: string; path: string }[] = foldersRes.folders;

    const weeks = await Promise.all(
      weekFolders.map(async (folder) => {
        // Uma única chamada — retorna imagens, PDFs e vídeos misturados
        const res = await cloudinary.api.resources_by_asset_folder(folder.path, {
          max_results: 100,
        });

        const files: TimelineFile[] = (res.resources as CloudinaryResource[]).map((r) => {
          // Vídeo
          if (r.resource_type === "video") {
            return {
              id: r.public_id,
              name: r.public_id.split("/").pop() ?? r.public_id,
              kind: "video",
              url: r.secure_url,
              thumbnailUrl: cloudinary.url(r.public_id, {
                resource_type: "video",
                format: "jpg",
                width: 600,
                height: 600,
                crop: "fill",
              }),
            };
          }

          // PDF (Cloudinary trata como resource_type "image" mas format "pdf")
          if (r.format === "pdf") {
            return {
              id: r.public_id,
              name: r.public_id.split("/").pop() ?? r.public_id,
              kind: "pdf",
              url: r.secure_url,
              thumbnailUrl: cloudinary.url(r.public_id, {
                resource_type: "image",
                format: "jpg",
                page: 1,
                width: 600,
                crop: "fill",
              }),
            };
          }

          // Imagem comum
          return {
            id: r.public_id,
            name: r.public_id.split("/").pop() ?? r.public_id,
            kind: "image",
            url: r.secure_url,
            thumbnailUrl: cloudinary.url(r.public_id, {
              width: 600,
              height: 600,
              crop: "fill",
              quality: "auto",
              fetch_format: "auto",
            }),
          };
        });

        return {
          title: formatWeekTitle(folder.name),
          folder: folder.path,
          files,
        };
      })
    );

    weeks.sort((a, b) => a.folder.localeCompare(b.folder, undefined, { numeric: true }));

    return NextResponse.json({ weeks });
  } catch (err) {
    console.error("Cloudinary timeline error:", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function formatWeekTitle(folderName: string): string {
  // "semana-1" -> "Semana 1"
  return folderName
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}
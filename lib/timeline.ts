export type DriveFile = {
  id: string;
  name: string;
  kind: "image" | "video" | "pdf" | "other";
  url: string;
  thumbnailUrl: string;
  directUrl: string; // pra compatibilidade com o componente antigo
  viewUrl: string;   // idem
};

export type WeekData = {
  title: string;
  files: DriveFile[];
};

export async function fetchWeeks(): Promise<WeekData[]> {
  const res = await fetch("/api/timeline", { cache: "force-cache" });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error ?? `HTTP ${res.status}`);
  }
  const data = await res.json();
  return data.weeks.map((w: { title: string; files: Array<{ id: string; name: string; kind: "image" | "video" | "pdf"; url: string; thumbnailUrl: string }> }) => ({
    title: w.title,
    files: w.files.map((f) => ({
      id: f.id,
      name: f.name,
      kind: f.kind,
      url: f.url,
      thumbnailUrl: f.thumbnailUrl,
      directUrl: f.url,
      viewUrl: f.url,
    })),
  }));
}
const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export function cldVideo(publicId: string) {
  // w_1080 = reduz largura (mantém proporção)
  // q_auto = qualidade automática (bem menor que original)
  // f_auto = formato moderno (webm no Chrome, mp4 no Safari)
  // vc_auto = codec automático (h264/vp9)
  return `https://res.cloudinary.com/${CLOUD}/video/upload/w_1080,q_auto,f_auto,vc_auto/${publicId}.mp4`;
}
export function cldVideoThumb(publicId: string, options?: { width?: number; height?: number; time?: string }) {
  const { width = 800, height = 1000, time = "2" } = options ?? {};
  // so_2 = pega o frame aos 2 segundos (evita frame preto inicial)
  // c_fill = crop preenchendo a área
  return `https://res.cloudinary.com/${CLOUD}/video/upload/so_${time},w_${width},h_${height},c_fill,q_auto,f_auto/${publicId}.jpg`;
}
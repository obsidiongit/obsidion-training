/**
 * Absolute path for files in `public/` when the app uses Next `basePath`
 * (e.g. static export embedded at /training/*).
 */
export function publicFile(path: string): string {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${prefix}${normalized}`;
}

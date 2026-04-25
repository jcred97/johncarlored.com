import { existsSync } from "node:fs";
import { join } from "node:path";

// Let cards and detail pages fall back gracefully when a cover image hasn't
// been added under public/ yet.
export function publicImageExists(src: string) {
  return existsSync(join(process.cwd(), "public", src.replace(/^\/+/, "")));
}

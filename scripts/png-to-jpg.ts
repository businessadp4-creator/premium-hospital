// Convert generated PNGs to JPG (photos compress far better) and normalize references
import { readdirSync, statSync, unlinkSync } from "fs";
import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";

const DIR = "/home/z/my-project/public/images";

for (const f of readdirSync(DIR)) {
  if (!f.toLowerCase().endsWith(".png")) continue;
  const src = `${DIR}/${f}`;
  const out = src.replace(/\.png$/i, ".jpg");
  await sharp(src).jpeg({ quality: 82, mozjpeg: true }).toFile(out);
  unlinkSync(src);
  console.log(`${f} -> ${out.split("/").pop()} (${Math.round(statSync(out).size / 1024)}KB)`);
}

// Normalize any /images/*.png references in source to .jpg
const files = [
  "src/components/home/sections-a.tsx",
  "src/app/layout.tsx",
];
for (const rel of files) {
  const p = `/home/z/my-project/${rel}`;
  const content = readFileSync(p, "utf8");
  const updated = content.replace(/\/images\/([a-z-]+)\.png/gi, "/images/$1.jpg");
  if (updated !== content) {
    writeFileSync(p, updated);
    console.log(`updated refs in ${rel}`);
  }
}
console.log("DONE");

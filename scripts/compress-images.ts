// Compress oversized photos in public/images with sharp
import { readdirSync, statSync, unlinkSync } from "fs";
import sharp from "sharp";

const DIR = "/home/z/my-project/public/images";
const files = readdirSync(DIR).filter(f => /\.(jpg|png)$/i.test(f));

for (const f of files) {
  const p = `${DIR}/${f}`;
  const size = statSync(p).size;
  if (size < 500 * 1024) { console.log(`ok ${f} ${Math.round(size / 1024)}KB`); continue; }
  const tmp = `${p}.tmp.jpg`;
  await sharp(p).rotate().resize({ width: 1800, withoutEnlargement: true }).jpeg({ quality: 78, mozjpeg: true }).toFile(tmp);
  // replace original (normalize extension to .jpg)
  const target = f.toLowerCase().endsWith(".png") ? p.replace(/\.png$/i, ".png") : p;
  if (f.toLowerCase().endsWith(".png")) {
    // keep png name but store compressed jpeg inside? No — write compressed jpeg as new .jpg and delete png
    const jpgPath = p.replace(/\.png$/i, ".jpg");
    await sharp(tmp).toFile(jpgPath);
    unlinkSync(tmp); unlinkSync(p);
    console.log(`compressed ${f} -> ${jpgPath.split("/").pop()} ${Math.round(statSync(jpgPath).size / 1024)}KB`);
  } else {
    await sharp(tmp).toFile(p);
    unlinkSync(tmp);
    console.log(`compressed ${f} ${Math.round(statSync(p).size / 1024)}KB`);
  }
}
console.log("DONE");

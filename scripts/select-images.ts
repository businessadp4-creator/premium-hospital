// Parse image-search JSON results, select best candidates, emit a download plan
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { execSync } from "child_process";

const JSON_DIR = "/home/z/my-project/scripts/img";
const IMG_DIR = "/home/z/my-project/public/images";

type Result = { original_url: string; caption?: string; source?: string; original_width?: string; original_height?: string };

const plans: Record<string, string> = {
  // name -> json file
  hero: "hero", team: "team", lobby: "lobby", room: "room", icu: "icu", ot: "ot",
  lab: "lab", imaging: "imaging", pharmacy: "pharmacy", emergency: "emergency",
  consult: "consult", checkup: "checkup", child: "child", wellness: "wellness",
  heart: "heart", senior: "senior",
};

function score(r: Result): number {
  const w = parseInt(r.original_width || "0", 10) || 0;
  const h = parseInt(r.original_height || "0", 10) || 0;
  let s = Math.min(w, 2000) / 100; // prefer wider
  const cap = (r.caption || "").toLowerCase();
  // penalize likely-bad sources/captions
  if (/cartoon|illustration|clip ?art|logo|drawing|vector/.test(cap)) s -= 500;
  if (/watermark|shutterstock|dreamstime|alamy|istock|getty|freepik|123rf/.test(cap) || /shutterstock|dreamstime|alamy|istock|gettyimages|freepik|123rf/.test(r.original_url.toLowerCase())) s -= 300;
  if (w < 500) s -= 200;
  if (h > w * 2.2) s -= 150; // very tall images are usually infographics/pins
  return s;
}

const downloadList: { url: string; out: string }[] = [];

for (const [name, file] of Object.entries(plans)) {
  const path = `${JSON_DIR}/${file}.json`;
  if (!existsSync(path)) { console.log(`MISSING ${file}`); continue; }
  try {
    const json = JSON.parse(readFileSync(path, "utf8"));
    if (!json.success || !json.results?.length) { console.log(`NO RESULTS for ${name}`); continue; }
    const sorted = [...json.results].sort((a, b) => score(b) - score(a));
    const best = sorted[0];
    console.log(`${name}: ${best.original_url}  [${best.original_width}x${best.original_height}] ${best.caption?.slice(0, 80)}`);
    downloadList.push({ url: best.original_url, out: `${IMG_DIR}/${name}.jpg` });
  } catch (e) {
    console.log(`ERR parsing ${name}: ${e}`);
  }
}

// Doctor portraits: pick 4 male + 4 female distinct
for (const [file, prefix, need] of [["doc_m1", "doctor-m", 4], ["doc_f1", "doctor-f", 4]] as const) {
  const path = `${JSON_DIR}/${file}.json`;
  if (!existsSync(path)) { console.log(`MISSING ${file}`); continue; }
  const json = JSON.parse(readFileSync(path, "utf8"));
  if (!json.success || !json.results?.length) { console.log(`NO RESULTS for ${file}`); continue; }
  const sorted = [...json.results].sort((a, b) => score(b) - score(a));
  let picked = 0;
  for (const r of sorted) {
    if (picked >= need) break;
    const w = parseInt(r.original_width || "0", 10) || 0;
    if (w < 300) continue;
    const cap = (r.caption || "").toLowerCase();
    if (/cartoon|illustration|vector|group|team/.test(cap)) continue;
    picked += 1;
    console.log(`${prefix}-${picked}: ${r.original_url} [${r.original_width}x${r.original_height}] ${r.caption?.slice(0, 80)}`);
    downloadList.push({ url: r.original_url, out: `${IMG_DIR}/${prefix}-${picked}.jpg` });
  }
}

writeFileSync("/home/z/my-project/scripts/img/downloads.json", JSON.stringify(downloadList, null, 2));
console.log(`\nPLAN: ${downloadList.length} images to download`);

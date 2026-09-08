// Download images per plan; print sizes
import { readFileSync } from "fs";
import { execSync } from "child_process";

const list = JSON.parse(readFileSync("/home/z/my-project/scripts/img/downloads.json", "utf8")) as { url: string; out: string }[];
for (const { url, out } of list) {
  try {
    execSync(`curl -sL --max-time 60 -o "${out}" "${url}"`, { stdio: "pipe", timeout: 70000 });
    const size = execSync(`stat -c%s "${out}"`).toString().trim();
    const type = execSync(`file -b --mime-type "${out}"`).toString().trim();
    console.log(`${out.split("/").pop()}: ${Math.round(Number(size) / 1024)}KB ${type}`);
  } catch (e) {
    console.log(`FAIL ${out}: ${e}`);
  }
}
console.log("DONE");

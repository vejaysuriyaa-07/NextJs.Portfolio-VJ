// Checks the static export against the resume: required text present, old claims gone.
// Run after `npm run build`.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";

const REQUIRED = [
  "Vejay Suriyaa Senguttuvan | USC MS ECE",
  "Master of Science in Electrical and Computer Engineering",
  "May 2027",
  "Course Producer",
  "In-Memory Computing and VLSI",
  "Camera ISP Pipeline",
  "RL Agent for Post-Route DRC Closure",
  "github.com/vejaysuriyaa-07/atpg-tpi-ppa",
  "github.com/vejaysuriyaa-07/rtl-live",
  "marketplace.visualstudio.com/items?itemName=vejaysuriyaa.rtl-live",
  "github.com/vejaysuriyaa-07/tt-camera-isp",
  "ieeexplore.ieee.org/document/10575000",
  "Best NSS Coordinator",
  "Write-up coming",
  "resume.pdf",
  "tile-glow",
  "data-countup",
  "Illustration",
  "Show details",
  "Before / after comparison",
  "data-tilt",
  "Circuit traces",
  "stuck-at coverage: 97.37–100% (6 circuits)",
  "coverage: 98.36% → 99.87%",
  "Scroll progress",
  "Command menu",
  "America/Los_Angeles",
  "verilog",
];

const FORBIDDEN = [
  "M.S. in Computer Engineering",
  "Aspiring DFT Engineer",
  "Design Verification and DFT",
  "Design verification and DFT",
  "DFT and VLSI portfolio",
  "In progress",
  "Published ·",
  "Done ·",
  "dynamic power",
  "-0.8 ns",
  "6,400",
  "Wallace tree",
  "Tessent",
  "Design Compiler",
  "PrimeTime",
  "VHDL",
  "28nm",
  "45nm",
  "300+",
  "Prototype Modules",
  "Embedded Systems & VLSI",
  "RTL-to-GDSII",
];

function files(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return files(path);
    return /\.(html|js)$/.test(name) ? [path] : [];
  });
}

// Page HTML plus the app's own chunks (tab contents only exist in JS).
const sources = [join(OUT, "index.html"), ...files(join(OUT, "_next/static/chunks/app"))];
const text = sources.map((f) => readFileSync(f, "utf8")).join("\n");

const missing = REQUIRED.filter((s) => !text.includes(s));
const found = FORBIDDEN.filter((s) => text.includes(s));

for (const s of missing) console.error(`missing:   ${s}`);
for (const s of found) console.error(`forbidden: ${s}`);

if (missing.length || found.length) {
  console.error(`FAIL: ${missing.length} missing, ${found.length} forbidden`);
  process.exit(1);
}
console.log(`PASS: ${REQUIRED.length} required present, ${FORBIDDEN.length} forbidden absent`);

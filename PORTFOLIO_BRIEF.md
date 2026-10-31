# Portfolio rework brief (for Claude Code)

Goal: make the portfolio tell the same story as my resume, in the same words, so a recruiter who clicks through from the resume sees one consistent person: a verification-minded ECE grad student who understands the full chip flow, builds his own tooling, teaches DFT, and uses AI tools seriously.

Resume source of truth: `public/resume.pdf`. Do not invent numbers, tools, or results that are not on the resume. If a section needs a metric I do not have, leave it out rather than guess.

## Step 0: read before changing anything
1. Read the whole repo. List every page, section and component, and what each currently says.
2. Compare that inventory against the resume and give me a short diff: what is outdated, what is missing, what contradicts the resume (wrong degree title, old projects, inflated claims).
3. Wait for my OK on the diff before editing.

## Target structure (one page, scroll, plus a Projects detail route if the framework already has one)

### Hero
- Name: Vejay Suriyaa Senguttuvan
- One line: MS ECE at USC (May 2027). Design Verification and DFT. Builds the tools he wishes existed.
- Second line (smaller): Test-first verification, Cadence Xcelium/Innovus, C++ ATPG tooling, RL applied to chip design, agentic AI workflows.
- Buttons: Resume (PDF), GitHub (github.com/vejaysuriyaa-07), LinkedIn (linkedin.com/in/vejay-suriyaa-a274b3201), Email (senguttu@usc.edu)

### About (3 short paragraphs max)
- Who: USC MS ECE, from Chennai, B.Tech ECE at SRM.
- How I work: golden model and test plan before RTL; understands spec to tapeout (RTL, verification, synthesis, DFT insertion, P&R, timing closure); ships with agentic AI coding workflows (Claude Code).
- Where it started: in-memory computing research at SRM (RRAM crossbars, SRAM compute-in-memory), which is where the interest in AI hardware came from.

### Projects (cards, in this order, each with tags, one-paragraph summary, 2 to 3 bullets lifted from the resume, GitHub link where one exists, and a status chip)
1. Camera ISP Pipeline for Tiny Tapeout (SKY130). Status: In progress, shuttle Nov 30 2026. Tags: Python, NumPy, Verilog, Cadence Xcelium, SKY130. Link: github.com/vejaysuriyaa-07/tt-camera-isp
2. RL Agent for Post-Route DRC Closure (AI for EDA). Status: In progress, EE 599 team project. Tags: Python, Tcl, Cadence Innovus, mflowgen, KLayout, SKY130.
3. Combinational ATPG Engine, Test Point Insertion, BIST Simulator and Scan Insertion. Status: Done (EE 658). Tags: C++17, Python, ISCAS-85. Link: github.com/vejaysuriyaa-07/atpg-tpi-ppa
4. RTL Live, VS Code Extension. Status: Published, v0.5.1. Tags: VS Code, Verilog, agentic AI workflow. Links: Marketplace listing, github.com/vejaysuriyaa-07/rtl-live
Pull the bullet text from the resume verbatim or lightly trimmed. No extra claims.

### Experience (timeline)
- Course Producer, EE 658 Diagnosis and Design of Reliable Digital Systems (graduate DFT), USC, Aug 2026 to present. Two bullets from the resume.
- Research Assistant, In-Memory Computing and VLSI, Prof. Mohanbabu A.'s lab, SRM IST Chennai (part-time), Jan 2025 to Jul 2025. Bullets from the resume.

### Skills (grouped exactly like the resume)
Verification and Test / HDL and Programming / AI and ML / AI-Native Development / EDA Tools. Use the resume's lines. No skill bars or percentages.

### Publication
- D. Manoj Kumar, R. Arthi, M. Gokulakrishnan, T. Praveen Kumar, S. Vejaysuriyaa, "A Food Wastage Reduction App based on Django Python Application," ICAAIC 2024, IEEE. Link: ieeexplore.ieee.org/document/10575000

### Leadership (one line each)
- ECE Senator, Viterbi Graduate Student Association, USC (Aug to Dec 2025)
- Head of Photography, Camogenics, SRM (2022 to 2024)
- Best NSS Coordinator (Institute Award), SRM (2022 to 2023)

### Footer
Email, GitHub, LinkedIn, resume PDF. Nothing else.

## Remove or fix
- Any "MS Computer Engineering" wording. Degree is MS Electrical and Computer Engineering.
- Any project not on the resume, unless it is clearly labelled as a side project (Posedge, Grove can stay under a small "Side projects" row if they already exist on the site, one line each, tagged "built with Claude Code").
- Any inflated claims: coverage percentages not on the resume, power reductions, "taped out" (it is a submission, not silicon yet), UVM, tools I have not used.
- Photography gallery can stay as its own small section at the bottom, not mixed into engineering projects.

## Design rules
- Keep the existing framework (Next.js) and the existing design exactly: same layout, components, colors, fonts and animations. This is a content rewrite, not a redesign.
- Hosting is GitHub Pages (already configured). Remove `netlify.toml` and any Netlify-specific redirects or plugins. Keep a `.nojekyll` file in the output. Confirm the Pages workflow builds.
- Every project card links to code or a demo. Cards with no link say "write-up coming".
- Wire the Resume button to `public/resume.pdf`.
- Update the `<title>` and meta description to: "Vejay Suriyaa Senguttuvan | Design Verification and DFT | USC MS ECE".

## Working style
- Make a plan with the file list first, then edit in small commits with plain commit messages (no Co-Authored-By line).
- Run the dev server and the build after each section and fix warnings before moving on.
- When done, give me a checklist of every page section with "matches resume: yes/no" and anything you were unsure about.

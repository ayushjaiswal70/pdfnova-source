# PDFNova — All-in-One PDF Toolkit & Interactive PDF Editor

A modern, privacy-first SaaS PDF Editor and 16-Tool PDF Suite built with **React 18**, **Vite 5**, **Tailwind CSS 3**, **pdf-lib**, **Mozilla PDF.js**, and **jsPDF**.

---

## 1. Project Structure

```text
pdfnova-toolkit/
├── api/
│   └── encrypt.js            # Optional Vercel serverless function for binary AES-256 QPDF encryption
├── src/
│   ├── services/
│   │   └── pdfEngine.js      # Core client-side PDF engine (Merge, Split, Compress, Convert, Organize, Watermark, Number)
│   ├── App.jsx               # Main SaaS Application, 16-Tool Workbench & Interactive Editor
│   ├── main.jsx              # React DOM entry point
│   └── index.css             # Tailwind CSS directives & custom scrollbar utilities
├── index.html                # SEO meta tags, Inter typography & root mount
├── package.json              # Stable, compatible dependencies (React 18, Vite 5, pdf-lib, pdfjs-dist, jspdf)
├── tailwind.config.js        # Dark mode ('class') and custom Violet/Blue SaaS palette
├── postcss.config.js         # PostCSS configuration
├── vite.config.js            # Code splitting for pdf-engine & vendor chunks
└── vercel.json               # Zero-config Vercel SPA & Serverless API routing
```

---

## 2. Implemented PDF Tools (All 16 Tools + Full Editor Workspace)

1. **Merge PDF Files**: Combine 2+ PDF files in any custom order using `PDFDocument.copyPages()`.
2. **Split PDF Pages**: Split by custom page ranges (`1-2, 4`), first/second half, or odd/even pages.
3. **Compress PDF**: Lossless PDF object stream optimization (`useObjectStreams: true`) plus Balanced (150 DPI) and Extreme (96 DPI) canvas re-encoding modes with before/after size comparison.
4. **PDF to JPG / PNG**: High-resolution `PDF.js` page rendering to downloadable PNG or JPG images.
5. **JPG / PNG to PDF**: Multi-image layout builder with A4 / US Letter and Portrait / Landscape support via `jsPDF`.
6. **Rotate PDF Pages**: Per-page or batch 90° / 180° / 270° clockwise rotation.
7. **Reorder & Delete Pages**: Visual slot organizer to move pages left/right or remove unwanted pages.
8. **Add Text & Annotations**: Custom typography, font size, and color placement directly onto PDF pages.
9. **Highlight & Draw on PDF**: Semi-transparent highlighter rectangles, underlines, callout boxes, and freehand ink signatures.
10. **Add Page Numbers**: Customizable header/footer page numbering (`Page X of Y`, `1 / N`, or numeric).
11. **Add Watermarks**: Diagonal (45°) or centered horizontal text watermarks with adjustable opacity.
12. **Password-Protect PDF**: Client-side SHA-256 verification digest & security envelope stamp, plus `/api/encrypt` serverless hook for binary AES-256 stream encryption via QPDF.
13. **Unlock PDF**: Authenticates authorized user passwords via the `PDF.js` password handler and reconstructs a clean, unencrypted PDF.
14. **Extract PDF Pages**: Interactive page selector to export chosen pages into a new standalone PDF.
15. **Organize & Preview PDF**: Full thumbnail grid inspector, metadata viewer, and live multi-page preview modal.
16. **Download Processed PDF**: Instant browser `Blob` download manager compatible with desktop and mobile browsers.

---

## 3. Local Setup Instructions

```bash
# 1. Unzip the project and navigate into the folder
unzip pdfnova-source.zip -d pdfnova-toolkit
cd pdfnova-toolkit

# 2. Install dependencies
npm install

# 3. Start the Vite development server
npm run dev

# 4. Run production build
npm run build
```

---

## 4. Deployment Steps for Vercel

1. **Via Vercel CLI**:
   ```bash
   npm i -g vercel
   vercel --prod
   ```
2. **Via GitHub / Vercel Dashboard**:
   - Push this repository to GitHub/GitLab/Bitbucket.
   - Click **Add New Project** in Vercel and import the repository.
   - Vercel automatically detects **Vite** (`npm run build`, output directory `dist`) using the included `vercel.json`.
   - Click **Deploy**.

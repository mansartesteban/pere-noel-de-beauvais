import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "./public/content/gallery";
const outputDir = "./public/content/gallery/thumbs";

// Crée le dossier thumbs s’il n’existe pas
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Extensions acceptées
const extensions = [".png", ".jpg", ".jpeg", ".webp"];

// Liste des fichiers à convertir
const files = fs.readdirSync(inputDir).filter((file) => {
  const ext = path.extname(file).toLowerCase();
  return extensions.includes(ext);
});

for (const file of files) {
  const baseName = path.parse(file).name;
  const outputPath = path.join(outputDir, baseName + ".webp");

  if (fs.existsSync(outputPath)) {
    console.log(`⏩ Skipped: ${file} (thumbnail already exists)`);
    continue;
  }

  const inputPath = path.join(inputDir, file);

  await sharp(inputPath)
    .resize({ width: 600 })
    .toFormat("webp", { quality: 80 })
    .toFile(outputPath);

  console.log(`✅ Generated: ${file} → thumbs/${baseName}.webp`);
}

import fs from "fs";
import path from "path";

// 📁 Dossier cible
const folderPath = path.resolve("./public/content/gallery");

// 📄 Lire tous les fichiers
const files = fs.readdirSync(folderPath);

const galleryRegex = /^gallery-(\d+)\.png$/i;
const alreadyNumbered = [];
const toRename = [];

files.forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  const match = file.match(galleryRegex);

  if (match) {
    alreadyNumbered.push(parseInt(match[1]));
  } else {
    toRename.push(file);
  }
});

// 🎲 Mélange aléatoire
toRename.sort(() => Math.random() - 0.5);

// 🧮 Numéro de départ
let counter = alreadyNumbered.length > 0 ? Math.max(...alreadyNumbered) + 1 : 1;

// 🪄 Renommage en forçant l'extension .png
toRename.forEach((file) => {
  const newName = `gallery-${counter}.png`;
  const oldPath = path.join(folderPath, file);
  const newPath = path.join(folderPath, newName);

  fs.renameSync(oldPath, newPath);
  console.log(`✅ ${file} → ${newName}`);
  counter++;
});

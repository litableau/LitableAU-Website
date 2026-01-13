import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "public/team/images";
const outputDir = "public/team/images-webp";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.readdirSync(inputDir).forEach(file => {
  if (!file.match(/\.(jpg|jpeg|png)$/i)) return;

  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(
    outputDir,
    file.replace(/\.(jpg|jpeg|png)$/i, ".webp")
  );

  sharp(inputPath)
    .webp({ quality: 75 })
    .toFile(outputPath)
    .then(() => console.log("Converted:", file))
    .catch(err => console.error("Error:", file, err));
});

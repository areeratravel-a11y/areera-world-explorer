import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputPath = "public/areera-logo.png";

async function buildIcons() {
  console.log("Reading base logo:", inputPath);
  const baseImg = sharp(inputPath);
  const metadata = await baseImg.metadata();
  console.log(`Original: ${metadata.width}x${metadata.height}, format: ${metadata.format}`);

  // Sizes to produce
  // 16x16, 32x32, 48x48, 180x180, 192x192, 512x512
  const sizes = [
    { name: "public/favicon-16x16.png", size: 16 },
    { name: "public/favicon-32x32.png", size: 32 },
    { name: "public/favicon-48x48.png", size: 48 },
    { name: "public/favicon.png", size: 48 },
    { name: "public/apple-touch-icon.png", size: 180 },
    { name: "public/android-chrome-192x192.png", size: 192 },
    { name: "public/android-chrome-512x512.png", size: 512 },
  ];

  const pngBuffers = {};

  for (const item of sizes) {
    const buf = await sharp(inputPath)
      .resize(item.size, item.size, {
        kernel: sharp.kernel.lanczos3,
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png({ compressionLevel: 9 })
      .toBuffer();

    fs.writeFileSync(item.name, buf);
    console.log(`Created ${item.name} (${item.size}x${item.size}) - ${buf.length} bytes`);
    pngBuffers[item.size] = buf;
  }

  // Create favicon.ico containing 16x16, 32x32, 48x48
  const icoSizes = [16, 32, 48];
  const icoFrames = icoSizes.map((s) => pngBuffers[s]);

  // ICO header: 6 bytes
  // 2 bytes reserved (0)
  // 2 bytes type (1 = icon)
  // 2 bytes count (icoSizes.length)
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(icoSizes.length, 4);

  // Each directory entry: 16 bytes
  const dirSize = 16 * icoSizes.length;
  let currentOffset = 6 + dirSize;

  const dirEntries = [];
  for (let i = 0; i < icoSizes.length; i++) {
    const size = icoSizes[i];
    const data = icoFrames[i];
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size === 256 ? 0 : size, 0); // width
    entry.writeUInt8(size === 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(data.length, 8); // image size
    entry.writeUInt32LE(currentOffset, 12); // image offset
    dirEntries.push(entry);
    currentOffset += data.length;
  }

  const icoBuffer = Buffer.concat([header, ...dirEntries, ...icoFrames]);
  fs.writeFileSync("public/favicon.ico", icoBuffer);
  console.log(`Created public/favicon.ico (${icoSizes.join(",")}) - ${icoBuffer.length} bytes`);
}

buildIcons().catch(console.error);

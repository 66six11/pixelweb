"use server";

const fs = require("fs");
const path = require("path");

export async function readFile(fliePath) {
  const publicDir = path.join(process.cwd(), "public");
  const filePath = path.join(publicDir, fliePath);

  try {
    const result = await fs.promises.readFile(filePath, "utf8");
    return result;
  } catch (err) {
    console.error("Error reading file:", err);
    return;
  }
}

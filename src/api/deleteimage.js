'use server';

const fs = require("fs");
const path = require("path");

export async function deleteImage(filePath) {
  // 获取绝对路径
  if(filePath==="./1.jpg"){return { success: true };}
  const fullPath = path.join(process.cwd(), 'public', filePath);

  // 检查 filePath 是否有效
  if (!filePath || typeof filePath !== "string") {
    throw new Error("无效的文件路径");
  }

  // 检查文件是否存在
  if (!fs.existsSync(fullPath)) {
    throw new Error("文件不存在");
  }

  // 删除文件
  fs.unlinkSync(fullPath);
  console.log(`文件已删除: ${fullPath}`);
  return { success: true };
}
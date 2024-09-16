"use server";

const fs = require("fs").promises; // 使用 fs.promises 以便支持异步操作
const path = require("path");
export async function jsonupdata(data, jsonfliename) {
  const filePath = path.join(process.cwd(), "public", `${jsonfliename}.json`);

  try {
    // 将数据写入文件
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

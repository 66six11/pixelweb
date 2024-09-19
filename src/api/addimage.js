"use server";
import { deleteImage } from "./deleteimage";
export async function addImage(formData, key, oldimage,imagepath,id) {
  const fs = require("fs");
  const path = require("path");
  const { Buffer } = require("buffer");

  // 检查 key 是否有效
  if (!key || typeof key !== "string") {
    throw new Error("无效的文件键");
  }

  // 检查 formData 是否为有效的 FormData 实例
  if (!(formData instanceof FormData)) {
    throw new Error("无效的表单数据");
  }

  const file = formData.get(key); // 获取文件

  if (!file) {
    throw new Error("文件未提供,检测formdata" + formData + "key" + key);
  }

  // 在这里可以增加文件类型检查，例如：
  const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"]; // 允许的文件类型
  if (!allowedTypes.includes(file.type)) {
    throw new Error("不支持的文件类型");
  }
  const extension = path.extname(file.name); // 获取文件扩展名// 使用 id 作为文件名，保留原始扩展名
  const filePath = path.join(process.cwd(), `public/${imagepath}`, `${id}${extension}`); // 指定文件保存路径

  // 创建目录（如果不存在的话）
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // 保存文件
  const buffer = await file.arrayBuffer();
  fs.writeFileSync(filePath, Buffer.from(buffer));

  console.log(`文件已保存至: ${filePath}`);
  if (oldimage) {
   await deleteImage(oldimage);
  }
  const Path = `./${imagepath}/${id}${extension}`; // 获取文件路径
  return { success: true, Path }; // 返回成功状态和文件路径
}

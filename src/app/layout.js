import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import ImageView from "@/components/ImageView";
const myFont = localFont({
  src: "./BoutiqueBitmap9x9_1.5.ttf",
  display: "swap",
});

export const metadata = {
  title: "方块像素画社区",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-cn" className={myFont.className}>
      <body className="bg-slate-100 dark:bg-slate-900 ">
        <Navbar />
        
        <div className=" fixed flex-col w-full h-full overflow-auto hiddenOverflow">
          <div className="w-4/5 mx-auto max-[450px]:px-1 grow text-black/60 dark:text-white/60 bg-white max-md:w-[95%] dark:bg-gray-800  px-[60px] pt-8  lg:pt-[5rem] max-lg:pb-[5rem] tracking-wider">
            {children}
            <div className="h-20" ></div>
          </div>
        </div>
        
      </body>
    </html>
  );
}

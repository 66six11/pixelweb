import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import ImageView from "@/components/ImageView";
import Editview from "@/components/Editview";

const myFont = localFont({
  src: "./BoutiqueBitmap9x9_1.5.ttf",
  display: "swap",
});

export const metadata = {
  title: "像素岛",
  description: "",
};

export default function RootLayout({ children }) {
  const title  = metadata.title;
  return (
    <html lang="zh-cn" className={myFont.className}>
      <body className="bg-slate-100 dark:bg-slate-900 text-black/60 dark:text-white/60">
        <Navbar title={title} />
        <ImageView>
        
        <div className=" fixed flex-col w-full h-full overflow-auto hiddenOverflow">
          <div className="w-4/5 mx-auto max-[450px]:px-1 grow  bg-white max-md:w-[95%] dark:bg-gray-800  px-[60px] pt-8  lg:pt-[5rem] max-lg:pb-[5rem] tracking-wider">
            {children}
            <div className="h-20" ></div>
          </div>
        </div>
        
        </ImageView>
      </body>
    </html>
  );
}

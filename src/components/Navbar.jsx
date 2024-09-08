'use client';


import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  return (
  <nav className="select-none w-full h-16 z-40 bg-white fixed flex  shadow-lg shadow-slate-200 dark:shadow-gray-900 items-center  dark:bg-slate-800  dark:text-slate-50 transition-all max-lg:bottom-0 max-lg:shadow-[0_-4px_6px_1px_rgb(0,0,0,0.1)] lg:top-0 ">
      <div className ="fixed flex items-center left-80 max-lg:hidden max-2xl:left-10 max-[2000px]:left-24">
        <div className="relative  aspect-square h-16">
          <Image src={"./logo.png"} alt="logo" fill />
        </div>
        <p className="relative left-6 max-2xl:hidden text-lg tracking-[.5em]">方块像素画社区</p>
      </div>

      <div className=" mx-auto flex items-center text-xl max-lg:text-sm max-[450px]:text-nowrap max-[450px]:text-xs max-[450px]:mx-2 max-[450px]:justify-between max-[450px]:w-full text-black/50 dark:text-white/50 ">
        <Link  href="/" className={`transition ease-out duration-300 mx-14 max-md:mx-8 max-[450px]:mx-3 hover:scale-125 ${pathname=== '/'? 'linkactive':''}`} >
          首页
        </Link>
        <Link href="/softwares"className={` transition ease-out duration-300 mx-14 max-md:mx-8 max-[450px]:mx-3 hover:scale-125 ${pathname=== '/softwares'? 'linkactive':''}`}>
          软件渠道
        </Link>
        <Link href="/courses" className={` transition ease-out duration-300 mx-14 max-md:mx-8 max-[450px]:mx-3 hover:scale-125 ${pathname=== '/courses'? 'linkactive':''}`}>
          教程指南
        </Link>
        <Link href="/wiki" className={` transition ease-out duration-300 mx-14 max-md:mx-8 max-[450px]:mx-3 hover:scale-125 ${pathname=== '/wiki'? 'linkactive':''}`}>
          像素百科
        </Link>
        <Link href="/about" className={` transition ease-out duration-300 mx-14 max-md:mx-8 max-[450px]:mx-3 hover:scale-125 ${pathname=== '/about'? 'linkactive':''}`}>
          关于
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

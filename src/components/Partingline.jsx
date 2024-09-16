'use client';

import React from "react";

const Partingline =React.forwardRef( function Partingline({props},ref) {
  return (
    <>
      <div ref={ref} className="bg-black/10 dark:bg-white/10 w-full h-[2px] my-3 lg:my-6 rounded-full"/>
    </>
  );
})
Partingline.displayName = "Partingline";
export default Partingline;

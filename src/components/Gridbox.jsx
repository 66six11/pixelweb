'use client';

function Gridbox({ children }) {
  return <div className="grid grid-cols-3 w-full max-[450px]:grid-cols-2 gap-x-3 gap-y-4 ">{children}</div>;
}
export default Gridbox;
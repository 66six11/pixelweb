'use client';

function Gridbox({ children, keyid }) {
  return <div keyid={keyid} className="grid grid-cols-3 w-full max-[450px]:grid-cols-2 gap-x-3 gap-y-4 ">{children}</div>;
}
Gridbox.displayName = "Gridbox";  
export default Gridbox;
'use client';

export default function Flexbox({ children,keyid }) {
    return <div keyid={keyid} className="flex flex-wrap justify-between gap-10">{children}</div>;
}
Flexbox.displayName = "Flexbox";
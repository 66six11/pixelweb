'use client';

export default function Flexbox({ children }) {
    return <div className="flex flex-wrap justify-between gap-10">{children}</div>;
}
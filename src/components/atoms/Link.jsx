import Link from "next/link";
export default function LinkNav({ href, children, active }) {
  return (
    <Link
      href={href}
      className={`text-white hover:text-zinc-300 p-1 cursor-pointer ${
        active ? "border-b border-white transition-all 30s" : ""
      }`}
    >
      {children}
    </Link>
  );
}

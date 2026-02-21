import Link from "next/link";
export default function LinkNav({ href, children }) {
  return (
    <Link
      href={href}
      className="text-white hover:text-zinc-300 p-1 cursor-pointer"
    >
      {children}
    </Link>
  );
}

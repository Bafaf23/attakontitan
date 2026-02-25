"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Icon from "../atoms/Icon";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function DropdownMenu() {
  const [isOpen, setIsopen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div className="inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setIsopen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-500/20 hover:border-orange-500 transition-colors text-white "
      >
        <Icon icon={faBars} className={"text-2xl"} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 w-screen h-screen bg-white dark:bg-slate-950 z-100 flex flex-col animate-in fade-in slide-in-from-top duration-300">
          <div className="flex justify-between items-center p-6 border-b border-slate-200 dark:border-slate-800">
            <span className="text-xl font-bold text-orange-500">
              Attack on Titan
            </span>
            <button
              onClick={() => setIsopen(false)}
              className="text-slate-900 dark:text-white p-2"
            >
              <Icon icon={faXmark} className="text-3xl" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            <Link
              href="/characters"
              className="text-3xl font-black text-slate-800 dark:text-slate-100 hover:text-orange-500 transition-colors uppercase tracking-widest"
              onClick={() => setIsopen(false)}
            >
              Personajes
            </Link>

            <Link
              href="/"
              className="text-3xl font-black text-slate-800 dark:text-slate-100 hover:text-orange-500 transition-colors uppercase tracking-widest"
              onClick={() => setIsopen(false)}
            >
              Inicio
            </Link>
          </nav>

          <div className="p-10 text-center text-slate-500 text-sm italic">
            "Entreguen sus corazones"
          </div>
        </div>
      )}
    </div>
  );
}

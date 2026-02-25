"use client";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center px-4  py-2 text-center">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 uppercase">
          Explore the universe of{" "}
          <span className="text-orange-500 underline decoration-4">
            Attack on Titan
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
          The definitive encyclopedia of Attack on Titan characters. Discover
          their lineages, species, occupations, and roles in the story.
        </p>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/characters"
            className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-orange-900/20"
          >
            See Characters
          </Link>

          <Link
            href="https://api.attackontitanapi.com"
            target="_blank"
            className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
          >
            API Documentation
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-5xl">
        <div className="p-6 bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm">
          <h3 className="text-orange-500 font-bold text-xl mb-2">Family</h3>
          <p className="text-sm text-slate-500">
            Trace the Ackermann, Reiss, and other bloodlines by accessing the
            character information.
          </p>
        </div>

        <div className="p-6 bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm">
          <h3 className="text-orange-500 font-bold text-xl mb-2">Species</h3>
          <p className="text-sm text-slate-500">
            Difference between humans, pure titans, and the nine titan shifters.
          </p>
        </div>

        <div className="p-6 bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm">
          <h3 className="text-orange-500 font-bold text-xl mb-2">State</h3>
          <p className="text-sm text-slate-500">
            Updated information on the life status of each warrior and civilian.
          </p>
        </div>
      </div>

      <div className="fixed top-0 left-0 -z-10 w-full h-full opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-500 blur-[120px] rounded-full"></div>
      </div>
    </section>
  );
}

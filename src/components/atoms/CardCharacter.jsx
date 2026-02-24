import Image from "next/image";

export default function CardCharacter({
  id,
  name,
  img,
  alias,
  birthplace,
  residence,
}) {
  return (
    <div className="border border-slate-600 shadow-lg overflow-hidden relative bg-zinc-900 text-white group rounded-md">
      {/* Contenedor de imagen con dimensiones para Next.js */}
      <div className="relative h-64 w-full">
        <Image
          src={img}
          alt={name}
          id={id}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/90 to-transparent">
        <div className="mb-2">
          <h2 className="text-xl font-bold uppercase tracking-wider">{name}</h2>
          <p className="text-green-400 text-sm italic">
            {alias && alias.length > 0
              ? Array.isArray(alias)
                ? alias[0]
                : alias
              : "Sin alias"}
          </p>
        </div>

        <div className="text-xs text-gray-300 flex justify-between border-t border-white/20 pt-2">
          <p>🏠 {residence}</p>
          <p>📍 {birthplace || "Sin definir"}</p>
        </div>
      </div>
    </div>
  );
}

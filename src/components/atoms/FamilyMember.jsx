"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function FamilyMember({ familyUrl }) {
  const [family, setFamily] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. Limpieza y Validación
  const cleanUrl = typeof familyUrl === "string" ? familyUrl.trim() : "";
  const isUrl = cleanUrl.startsWith("http");

  useEffect(() => {
    let isMounted = true; // Para evitar actualizar estados si el componente se desmonta

    if (!isUrl) {
      setLoading(false);
      return;
    }

    fetch(cleanUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Error en la respuesta");
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          // Según el JSON de Kenny, la data viene directa (data.name, data.img)
          setFamily(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Error en SIGACE fetch:", err);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [cleanUrl, isUrl]);

  // RENDERIZADO
  if (loading)
    return (
      <span className="text-xs text-slate-400 animate-pulse">
        Cargando familiar...
      </span>
    );

  if (isUrl && family && family.name) {
    return (
      <div className="flex flex-row items-center gap-2 p-1 pr-3 rounded-full w-fit border border-gray-400 dark:border-slate-100">
        <div>
          <Image
            src={family.img}
            alt={family.name}
            width={40}
            height={40}
            className="rounded-full object-cover bg-slate-700"
          />
        </div>
        <span className="text-slate-500 dark:text-slate-200 text-xs font-medium">
          {family.name}
        </span>
      </div>
    );
  }

  return (
    <div className="text-slate-500 italic text-xs bg-slate-500/30 px-3 py-1 rounded-full border border-dashed border-slate-500 w-fit flex justify-center items-center">
      {familyUrl}
    </div>
  );
}

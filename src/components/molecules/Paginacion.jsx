import { useState } from "react";

export default function Paginacion({ currentPage, totalPages, onPageChange }) {
  const [page, setPage] = useState(1);
  return (
    <div className="flex items-center justify-center gap-4 my-10 font-mono">
      {/* Botón Anterior */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border border-green-600 text-green-500 hover:bg-green-600 hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed uppercase text-xs font-bold skew-x--12deg"
      >
        <span className="inline-block skew-x-12deg">Anterior</span>
      </button>

      {/* Indicador de Página */}
      <div className="flex items-center gap-2">
        <span className="text-gray-500 text-xs">PAGINA</span>
        <span className="text-xl font-black text-black glow-green">
          {currentPage.toString().padStart(2, "0")}
        </span>
        <span className="text-gray-500 text-xs">/ {totalPages}</span>
      </div>

      {/* Botón Siguiente */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border border-green-600 text-green-500 hover:bg-green-600 hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed uppercase text-xs font-bold skew-x--12deg"
      >
        <span className="inline-block skew-x-12deg">Siguiente</span>
      </button>
    </div>
  );
}

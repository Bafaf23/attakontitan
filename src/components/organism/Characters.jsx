"use client";
import { useState, useEffect } from "react";
import Loading from "../atoms/Loading";
import CharacterContent from "../molecules/CharacterContent";
import Paginacion from "../molecules/Paginacion";
import useCharacter from "@/hooks/useCharacters";

export default function Characters() {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const { data, loading, error } = useCharacter(currentPage);
  const characters = data.results;
  const pageInfo = data.info;

  if (loading) return <Loading />;
  if (error)
    return (
      <p className="className=text-red-500 text-center">
        Error al cargar los personajes: {error.message}
      </p>
    );

  return (
    <>
      <CharacterContent characters={characters} />
      <Paginacion
        currentPage={currentPage}
        totalPages={pageInfo.pages || 1}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}

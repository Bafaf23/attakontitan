"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "@/components/atoms/Loading";
import Icon from "@/components/atoms/Icon";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function CharacterPageFull() {
  const { id } = useParams();
  const router = useRouter();

  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`https://api.attackontitanapi.com/characters/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <Loading />;
  if (!character)
    return <p className="text-center p-20">Personaje no encontrado.</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <Link
        href={"/characters"}
        className="mb-6 text-blue-600 hover:underline self-start"
      >
        ← Volver a la lista
      </Link>

      <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl w-full">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Image */}
          <Image
            src={character.img}
            width={200}
            height={200}
            className="rounded-xl w-full md:w-fit"
          />
          {/* datos 1 */}
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-6 ">{character.name}</h1>
            <div className="flex justify-between">
              <div className={`flex gap-3 text-sm font-medium italic`}>
                {character.species.map((specie, index) => {
                  return (
                    <span
                      key={index}
                      className={`px-3 py-0.5 rounded-full ${
                        specie == "Human"
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : "bg-red-100 text-red-700 border border-red-200"
                      }`}
                    >
                      {specie}
                    </span>
                  );
                })}
              </div>
              <div>
                <span className="text-red-500">
                  {" "}
                  <Icon icon={faHeart} />
                </span>
                {character.status}
              </div>
            </div>
            <div>
              <p className="text-gray-400 italic">
                Alias:{" "}
                <span className="text-black not-italic">
                  {character.alias && character.alias.length > 0
                    ? Array.isArray(character.alias)
                      ? character.alias[0]
                      : character.alias
                    : "Sin alias"}
                </span>
              </p>
              <p className="text-gray-400 italic">
                gender:{" "}
                <span className="text-black not-italic">
                  {character.gender}
                </span>
              </p>
              <p className="text-gray-400 italic">
                age:{" "}
                <span className="text-black not-italic">{character.age}</span>
              </p>
              <span>
                {character.relatives?.length > 0 ? (
                  character.relatives.map((rela, index) => (
                    <div
                      key={index}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium border border-slate-200 mt-1"
                    >
                      <span className="italic">{rela.family}:</span>{" "}
                      {rela.members}
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500 italic">
                    No family members are registered.
                  </p>
                )}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-2 flex flex-col md:flex-row gap-3">
          <p className="text-gray-400 italic">
            Occupation:{" "}
            <span className="text-black not-italic">
              {character.occupation}
            </span>
          </p>

          <span className="text-gray-400 italic">Groups:</span>
          <div>
            {character.groups?.length > 0 ? (
              character.groups.map((grup, index) => (
                <span
                  key={index}
                  className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-sm border border-blue-100"
                >
                  {grup.name}
                </span>
              ))
            ) : (
              <span className="text-sm text-slate-400 italic">
                No record found
              </span>
            )}
          </div>
          <span className="text-gray-400 italic">Roles:</span>
          <div className="flex gap-2 items-center">
            {character.roles?.length > 0 ? (
              character.roles.map((rol, index) => (
                <span
                  key={index}
                  className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-sm border border-blue-100"
                >
                  {rol}
                </span>
              ))
            ) : (
              <span className="text-sm text-slate-400 italic">
                No record found
              </span>
            )}
          </div>
        </div>
        <hr className="border border-gray-200 mt-4" />

        {/*  <div className="mt-4">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
            episodes
          </h3>
          <div className="">{character.episodes}</div>
        </div> */}
      </div>
    </div>
  );
}

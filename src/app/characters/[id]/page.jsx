"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "@/components/atoms/Loading";
import Icon from "@/components/atoms/Icon";
import { faHeart, faSackXmark } from "@fortawesome/free-solid-svg-icons";

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
      <button
        onClick={() => router.back()}
        className="mb-6 text-blue-600 hover:underline self-start"
      >
        ← Volver a la lista
      </button>

      <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl w-full">
        <div className="flex gap-3">
          <Image
            src={`${character.img}`}
            width={200}
            height={200}
            className="rounded-xl"
          />
          <div className="w-full">
            <h1 className="text-3xl font-bold mb-6 ">{character.name}</h1>
            <div className="flex justify-between">
              <p>{character.species}</p>{" "}
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
                    No se registran familiares.
                  </p>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-2 flex gap-3">
          <p className="text-gray-400 italic">
            Occupation:{" "}
            <span className="text-black not-italic">
              {character.occupation}
            </span>
          </p>

          <p className="text-gray-400 italic">
            Groups:{" "}
            <span className="text-black not-italic">
              {character.groups.map((grup) => grup.name)}{" "}
              <span className="text-gray-300">/</span>{" "}
              {character.groups.map((grup) => grup.sub_groups)}
            </span>
          </p>
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

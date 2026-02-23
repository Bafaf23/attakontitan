import Link from "next/link";
import CardCharacter from "../atoms/CardCharacter";
export default function CharacterContent({ characters }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {characters.map((character, index) => (
        <Link key={index} href={`/characters/${character.id}`}>
          <CardCharacter
            name={character.name}
            img={character.img}
            alias={character.alias}
            birthplace={character.birthplace}
            residence={character.residence}
          />
        </Link>
      ))}
    </div>
  );
}

import Icon from "../atoms/Icon";
import Link from "next/link";
import LinkNav from "../atoms/Link";
import { faFontAwesome, faShield } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <footer className="bg-emerald-950">
      <div className="text-2xl text-white p-2 flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/fr/0/07/Shingeki_no_Kyojin_%28anime%29_Logo.png"
          alt="logo"
          className="w-60 h-fit"
        />
      </div>
      <div className="flex justify-around items-center p-3">
        <div className="text-gray-400">
          <h2 className="text-xl text-white font-bold">Link de interes</h2>
          <div className="flex flex-col ">
            <LinkNav href={"https://instagram.com/bafaf03"}>
              {"Instagram"}
            </LinkNav>
            <LinkNav href={"https://github.com/Bafaf23"}>{"GitHub"}</LinkNav>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-white font-bold text-xl">Desarrollado con</h2>
          <ul className="text-gray-400">
            <li className="hover:text-gray-200">
              <Link href="https://tailwindcss.com/" target="_blank">
                {"TailwindCSS"}
              </Link>
            </li>
            <li className="hover:text-gray-200">
              <Icon icon={faFontAwesome}></Icon>
              <Link href="https://fontawesome.com/" target="_blank">
                {"FontaWesome"}
              </Link>
            </li>
            <li className="hover:text-gray-200">
              <Icon icon={faShield}></Icon>
              <Link href="https://www.attackontitanapi.com/" target="_blank">
                {"Attack on Titan API"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border w-30 rounded-2xl border-gray-500 flex justify-self-center"></div>
      <div className="flex justify-end p-2">
        <span className="bg-gray-700 p-2 text-white font-bold rounded-md">
          Desarrollado por
          <span className="italic">Bryant Facenda 2025</span>
        </span>
      </div>
    </footer>
  );
}

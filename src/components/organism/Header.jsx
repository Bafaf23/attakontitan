import { Children } from "react";
import BarradeBusqueda from "../molecules/BarraBusqueda";
import Nav from "../molecules/Nav";
export default function Header() {
  /* Links de menu de navegacion */
  const link = [
    {
      href: "/",
      children: "Inicio",
    },
    {
      href: "/characters",
      children: "Personaje",
    },
  ];

  return (
    <header className="bg-black text-white flex flex-col justify-around items-center p-1 border-b border-slate-800 ">
      <div className="flex">
        <div className="flex items-center">
          <img
            src="https://www.wallpaperflare.com/static/933/280/928/shingeki-no-kyojin-logo-attack-titans-wallpaper.jpg"
            alt="logo attack on titan"
            className="w-40 h-fit bg-cover"
          />
        </div>
        <div className="flex items-center gap-3">
          <Nav links={link}></Nav>
          <hr className="border border-white h-10 hidden md:block" />
          {/* serchs charater */}
          <div className="hidden md:block min-w-[300px]">
            <BarradeBusqueda className={""}></BarradeBusqueda>
          </div>
        </div>
      </div>
      <div className="w-full justify-center flex md:hidden">
        <BarradeBusqueda className={"w-full p-2"}></BarradeBusqueda>
      </div>
    </header>
  );
}

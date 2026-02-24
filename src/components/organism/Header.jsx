"use client";
import Nav from "../molecules/Nav";
import { usePathname } from "next/navigation";
import BtnTheme from "../atoms/BtnThme";
import { useTheme } from "@/context/ThemeContext";
export default function Header() {
  const { theme, toggleTheme } = useTheme();
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

  const linkEx = [
    {
      href: "https://www.attackontitanapi.com/",
      children: "Sobre la API",
      className: "text-orange-500",
    },
  ];

  const url = usePathname();

  return (
    <header className="bg-black text-white flex justify-around items-center p-1 border-b border-slate-800 ">
      <div></div>
      <div className="flex items-center">
        <div className="flex items-center">
          <img
            src="https://www.wallpaperflare.com/static/933/280/928/shingeki-no-kyojin-logo-attack-titans-wallpaper.jpg"
            alt="logo attack on titan"
            className="w-40 h-fit bg-cover"
          />
        </div>
        <div className="flex items-center gap-3">
          <Nav links={link} activePath={url}></Nav>
          <hr className="border border-white h-10" />
          <Nav links={linkEx} />
        </div>
      </div>
      <div className="p-2">
        <BtnTheme toggleTheme={toggleTheme} theme={theme}></BtnTheme>
      </div>
    </header>
  );
}

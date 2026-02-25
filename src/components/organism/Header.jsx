"use client";
import Nav from "../molecules/Nav";
import { usePathname } from "next/navigation";
import BtnTheme from "../atoms/BtnThme";
import { useTheme } from "@/context/ThemeContext";
import Icon from "../atoms/Icon";
import DropdownMenu from "../molecules/DropdownMenu";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsopen] = useState();

  /* Links de menu de navegacion */
  const link = [
    {
      href: "/",
      children: "Home",
    },
    {
      href: "/characters",
      children: "Character",
    },
  ];

  const linkEx = [
    {
      href: "https://www.attackontitanapi.com/",
      children: "About the API",
      className: "text-orange-500",
    },
  ];

  const url = usePathname();

  return (
    <header className="bg-black text-white flex  md:justify-around items-center justify-evenly  p-1 border-b border-slate-800 ">
      <div className="hidden md:inline-flex"></div>
      <div className="md:hidden">
        <DropdownMenu />
      </div>
      <div className="flex items-center">
        <div className="flex items-center">
          <img
            src="https://www.wallpaperflare.com/static/933/280/928/shingeki-no-kyojin-logo-attack-titans-wallpaper.jpg"
            alt="logo attack on titan"
            className="w-40 h-fit bg-cover"
          />
        </div>
        <div className="md:flex items-center gap-3 hidden">
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

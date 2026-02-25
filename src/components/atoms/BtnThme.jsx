"use client";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

export default function BtnTheme({ toggleTheme, theme }) {
  return (
    <button
      onClick={toggleTheme}
      className="hover:bg-gray-300/20 transition-colors p-2 rounded-md text-2xl"
    >
      {theme === "light" ? <Icon icon={faMoon} /> : <Icon icon={faSun} />}
    </button>
  );
}

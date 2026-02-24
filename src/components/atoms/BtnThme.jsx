"use client";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

export default function BtnTheme({ toggleTheme, theme }) {
  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? <Icon icon={faMoon} /> : <Icon icon={faSun} />}
    </button>
  );
}

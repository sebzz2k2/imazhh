import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar() {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => {
    setDark(!dark);
    dark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };
  return (
    <nav className="h-14 md:h-16">
      <div className="flex justify-between px-4 lg:px-16 md:px-12 py-3 lg:py-4 border-b-4 border-Very-Dark-Grayish-Blue dark:border-Light-Grayish-Blue ">
        <h1 className=" text-Very-Dark-Grayish-Blue dark:text-Light-Grayish-Blue font-bold text-xl md:text-2xl lg:text-3xl">
          Imazhh
        </h1>

        <button
          onClick={toggleTheme}
          className="text-Very-Dark-Grayish-Blue dark:text-Light-Grayish-Blue text-xl md:text-2xl lg:text-3xl hover:animate-spin"
        >
          {dark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

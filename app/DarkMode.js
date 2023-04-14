"use client";
import React from "react";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";

const DarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <MdDarkMode
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className=" text-white text-3xl cursor-pointer"
    />
  );
};

export default DarkMode;

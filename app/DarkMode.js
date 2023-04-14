"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";

const DarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <MdDarkMode
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className=" text-2xl cursor-pointer dark:text-white text-black "
    />
  );
};

export default DarkMode;

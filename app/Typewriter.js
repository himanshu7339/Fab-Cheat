"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = ({ text }) => {
  return (
    <Typewriter
      options={{
        strings: text,
        autoStart: true,
        loop: true,
      }}
    ></Typewriter>
  );
};

export default TypeWriter;

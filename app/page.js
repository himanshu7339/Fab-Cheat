import React from "react";
import TypeWriter from "./Typewriter";

const text = ["Your Hand Cheat Sheet for Programmers"]
const Home = () => {
  return (
    <div className="h-[100vh] bg-[#B0FFFF]">
      <div>
        
        <h3 className="text-center text-2xl font-extrabold p-10">
        <TypeWriter text={text}/>
        </h3>
      </div>
      <div>
        <h1 className="text-center text-9xl font-extrabold p-10">
          Take Refreace And Make Your Project Easy
        </h1>
      </div>
    </div>
  );
};

export default Home;

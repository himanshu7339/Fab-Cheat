import React from "react";
import TypeWriter from "./Typewriter";
import { GetAllPosts } from "@/utils/features";
import PostCard from "@/components/PostCard";

const text = ["Your Hand Cheat Sheet for Programmers"];
const Home = async () => {
  const posts = await GetAllPosts();

  return (
    <div className="h-[100%] bg-[#B0FFFF] dark:bg-black">
      <div>
        <h3 className="text-center text-2xl font-extrabold p-10">
          <TypeWriter text={text} />
        </h3>
      </div>
      <div>
        <h1 className="text-center text-9xl font-extrabold p-10">
          Take Refreace And Make Your Project Easy
        </h1>
      </div>

      <div className="text-center text-3xl p-4">Popular Cheat Sheet</div>

      <div className="grid grid-rows-3 grid-cols-4 p-5 gap-6">
        {posts.map((post)=>(
          <PostCard key={post.post_id} post={post}/>
        ))}
      </div>
    </div>
  );
};

export default Home;

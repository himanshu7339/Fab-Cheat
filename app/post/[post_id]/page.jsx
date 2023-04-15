import { GetSinglePost } from "@/utils/features";
import React from "react";

const SinglePost = async ({ params }) => {
  const post = await GetSinglePost(params.post_id);
  return <div> {post[0].title} </div>;
};

export default SinglePost;

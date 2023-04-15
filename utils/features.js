export const GetAllPosts = async()=>{
    const res = await fetch("http://localhost:3000/api/v1/posts");
    if(!res.ok) return new Error("Something went Wrong")
    return await res.json();
}
export const GetSinglePost = async(post_id)=>{
    const res = await fetch(`http://localhost:3000/api/v1/posts/${post_id}`);
    if(!res.ok) return new Error("Something went Wrong")
    return await res.json();
}
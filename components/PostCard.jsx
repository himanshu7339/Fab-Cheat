import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import image from "../assets/demo.jpg"
const PostCard = ({post}) => {
  return (
    <Link href={`http://localhost:3000/post/${post.post_id}`} className='postCard flex flex-col gap-4 '>
{/* <img src={post.image} alt={post.title} /> */}
<Image src={image} width={500} height={500}/>
<h1 className=''>{post.title}</h1>
<p>{post.category}</p>
    </Link>
  )
}

export default PostCard
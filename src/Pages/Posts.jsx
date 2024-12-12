
import { useEffect, useState } from "react";
import SinggalePost from "./SinggalePost";



const Posts = () => {
    let [Post,setPost]=useState([])

    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then(data=>setPost(data))
    })
    
    return (
        <div className=" container mx-auto flex justify-between flex-wrap bg-[#120e0e]">
          {
           Post.map((post,i)=> <SinggalePost key={i} post={post} />)
          }
        </div>
    );
};

export default Posts;
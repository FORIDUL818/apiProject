import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDtails = () => {
    let params=useParams()
    let [post,setPost]=useState([])
    useEffect(()=>{
fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(res=>res.json()).then(data=>setPost(data))
    },[])

    return (
        <div className=" container mx-auto flex justify-center">
            <div className=" w-[600px] bg-red-200 p-[30px] text-slate-900">
            <h1 className="text-[red]">ID: {post.id} </h1>
            <h1> Title: {post.title} </h1>
            <h1> BODY: {post.body} </h1>
            </div>
        </div>
    );
};

export default PostDtails;
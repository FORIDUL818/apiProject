import { Link } from "react-router-dom";


const SinggalePost = ({post}) => {
    let {id,title,body}=post;
  
    return (
        <div className=" w-[33%] mb-2 bg-[#fff]">
            <h1> {post.id} </h1>
            <h1> {post.title} </h1>
            <h1> {post.body} </h1>
           <div className=" w-full flex justify-center mt-3 mb-3 "> <Link className=" p-1 uppercase text-[20px] text-[#fff] rounded-md hover:bg-blue-500 block bg-[green] w-[50%] text-center" to={`/serviceLaout/postdetails/${post.id}`}>see more</Link></div>
        </div>
    );
};

export default SinggalePost;
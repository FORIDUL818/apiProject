import { useRef } from "react";


const Blog = () => {
    let myref=useRef()

    let chance=()=>{
        myref.current.style.background="#fff"
        myref.current.style.color="#000"
      

    }
    let chance1=()=>{
        myref.current.style.background="#000"
        myref.current.style.color="#fff"
       

    }
    return (
        <div>
            <button onClick={chance}>Submit</button>
            <button onClick={chance1}>Submit2</button>

        <div ref={myref} className=" h-screen ">
            <h1>hi my namei si</h1>
        </div>
        </div>
    );
};

export default Blog;
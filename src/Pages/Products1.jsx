import { useEffect, useState } from "react";


const Products1 = () => {
    let [use,setuse]=useState(null)

    useEffect(()=>{
        let demo= async ()=>{
        let res=await fetch("https://api.quotable.io/random")
        const data=await res.json();
        setuse(data)
        }
        demo()
        
    },[])
 
   
    return (
        <div className=" container mx-auto text-center  text-[32px] bg-gray-300 h-[300px]">
           <h1> {use?.content} </h1>
         <form>
         <button className=" bg-lime-600  rounded-lg text-[24px] p-2 ">click here</button>
         </form>
        </div>
    );
};
export default Products1;
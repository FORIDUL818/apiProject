import Axios from "axios";
import { useEffect, useState } from "react";
import SingleProducts from "./SingleProducts";
const Products2 = () => {
  let [data,setdata]=useState([])
  
      useEffect(()=>{
        Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=97e9bcc0babd43a9a3fe2f38eee2f9e2")
        .then((res)=>{
          console.log(res.data.articles)
            setdata(res.data.articles)
        })
      },[])
      
    return (
        <div className=" container mx-auto">
            
            <div className=" flex justify-between flex-wrap bg-slate-300">
               {
                data.map((res)=><SingleProducts key={res} res = {res}></SingleProducts>)
               }
            </div>
        </div>
    );
};

export default Products2;
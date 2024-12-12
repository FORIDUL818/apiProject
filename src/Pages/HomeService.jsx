import { useEffect, useState } from "react";
import SingleHomeService from "./SingleHomeService";


const HomeService = () => {
    let [product,setproduct]=useState([])

 useEffect(()=>{
   let  url = 'https://newsapi.org/v2/everything?q=keyword&apiKey=97e9bcc0babd43a9a3fe2f38eee2f9e2'
   fetch(url) 
   .then(res=>res.json())
   .then(data=>setproduct(data.articles))

 },[])
console.log(product)
    
   
    return (
        <div className=" container mx-auto bg-slate-50">
            {
                product.map((product)=><SingleHomeService key={product} product={product}/>)
            }
        </div>
    );
};

export default HomeService;
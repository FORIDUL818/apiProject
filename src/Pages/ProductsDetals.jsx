import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductsDetals = () => {
    let param=useParams()
     let id=param.id
    let [Product,setProduct]=useState([])

    useEffect(()=>{
        let ProductData=`https://dummyjson.com/products/${id}`
        fetch(ProductData)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    console.log(Product)
    return (
        <div className=" container mx-auto flex justify-center items-center bg-[#cacada]">
       <div className=" flex justify-between">
          <div className=" w-[48%] p-5 bg-slate-100 flex justify-center items-center text-[18px]">
           <div>
           <h1 className=" mb-2"> <span  className=" text-[20px] text-[indigo]"> discountPercentage : </span> {Product.id}</h1>
           <h1 className=" mb-2"> <span  className=" text-[20px] text-[indigo]"> title </span> {Product.title}</h1> 
          <h1 className=" mb-2"> <span  className=" text-[20px] text-[indigo]"> description : </span>  {Product.description}</h1>
           <h1 className=" mb-2"> <span  className=" text-[20px] text-[indigo]"> discountPercentage :</span> {Product.description} </h1>
           <h1 className=" mb-2"> <span  className=" text-[20px] text-[indigo]"> brand : </span> {Product.brand} </h1>
           <h1 className=" mb-2"> <span  className=" text-[20px] text-[indigo]"> category : </span> {Product.category} </h1>
           <h1 className=" mb-2"> <span  className=" text-[20px] text-[indigo]"> discountPercentage : </span> {Product.discountPercentage} </h1>
           <h1 className=" mb-2"> <span  className=" text-[20px] text-[indigo]"> price : </span> {Product.price} </h1>
           <h1 className=" mb-2"> <span  className=" text-[20px] text-[indigo]"> rating : </span> {Product.rating} </h1>
           <h1 className=" mb-2"> <span  className=" text-[20px] text-[indigo]"> stock : </span> {Product.stock} </h1>
           </div>
          </div>
      <div className=" w-[48%]" > <img className=" w-[600px] h-[400px]" src={Product.thumbnail} alt="" /></div>
       </div>
        </div>
    );
};

export default ProductsDetals;
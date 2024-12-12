import { useEffect, useState } from "react";
import Phone from "./Phone";

const Grosary = () => {
    let [phone,setphone]=useState([])

    useEffect(()=>{
        let PhoneData="https://dummyjson.com/products"
        fetch(PhoneData)
        .then(res=>res.json())
        .then(data=>setphone(data.products))
       
    },[])
    console.log(phone)
    return (
        <div className=" container mx-auto  bg-slate-100  flex justify-between flex-wrap p-8 ">
            {
                phone.map((phone)=><Phone key={phone} phone={phone}/>)
            }
        </div>
    );
};

export default Grosary;
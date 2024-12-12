import { useEffect, useState } from "react";
import Country from "./Country";



const Countrys = () => {

    let [Countrys, setContrys]= useState([])
    useEffect(()=>{
        let countryData="https://restcountries.com/v3.1/all"
         fetch(countryData)
         .then((res)=>res.json())
         .then((data)=>setContrys(data))
    },[])
    return (
        <div className="container mx-auto bg-[#dfe6e9] mt-5">
            <h1 className=" text-center text-[48px] p-1 bg-[#c2c2f7] text-[#fff] mb-[10px]">All Countryes: <span className=" text-[#ff4f4f]">{Countrys.length}</span> </h1>
            <div className=" w-full flex justify-between flex-wrap">

                {
                    Countrys.map((countrys,)=> <Country key={countrys} countrys={countrys}/>)
                }

            </div>
        </div>
    );
};

export default Countrys;
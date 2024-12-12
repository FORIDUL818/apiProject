import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Countrysdetails = () => {

    let param=useParams()
    let code=param.code;
    let [countryDetails,setCountryDetails]=useState([])

    useEffect(()=>{
        const countryData=`https://restcountries.com/v3.1/name/${code}`
        fetch(countryData)
        .then((res)=>res.json())
        .then((data)=>setCountryDetails(data))
    },[])

console.log(countryDetails[0])
    return (
        <div className=" container mx-auto flex justify-center bg-slate-300">
        <div>
        <img src={countryDetails[0]?.flags.png} className=" w-[600px] h-[300px] mt-10" alt="" />
        <div className="mt-5 mb-5 text-3xl">
          <h1 className=" text-red-600">Official Name: <span className=" text-[green]" >{countryDetails[0]?.name.official}</span> </h1>
          <h1 className=" text-red-600"> Common Name :<span className=" text-[green]" > {countryDetails[0]?.name.common}</span> </h1>
          <h1 className=" text-red-600"> Population: <span className=" text-[green]" >{countryDetails[0]?.population}</span> </h1>
          <h1 className=" text-red-600"> Capital : <span className=" text-[green]" >{countryDetails[0]?.capital}</span> </h1>
        </div>
           
        </div>
        </div>
    );
};

export default Countrysdetails;
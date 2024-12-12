import { Link } from "react-router-dom";


const Country = ({countrys}) => {
    let {capital, name, population,cca2} = countrys
    return (
        <div className=" text-[#ffff] w-[30%] bg-[#171616] mb-5 p-6  flex justify-center text-[24px]">
            <div>
            <h1>Name: <span className=" text-[#ede7f1]"> {name.common}</span>  </h1>
            <h1>Capital: <span className=" text-[#ede7f1]"> {capital} </span>  </h1>
            <h1 className="mb-5">Population: <span className=" text-[#ede7f1]"> {population} </span>  </h1>
            <Link to={`/serviceLaout/countrydetails/${cca2}`} className="  uppercase text-[24px] bg-[#cd84f1] p-2 rounded-lg hover:text-[#fff]">see more {cca2}</Link>
            </div>
        </div>
    );
};

export default Country;
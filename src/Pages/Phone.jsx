import { Link } from "react-router-dom";


const Phone = ({phone}) => {
    let {id,title,description,brand,category,discountPercentage,price,rating,stock,thumbnail,images}=phone;
    return (
        <div className=" w-[32%] p-3 mb-3">
            <img className=" w-[600px] h-[400px]" src={thumbnail} alt="" />
            <h1 className=" mt-2"> <span className=" text-[18px]  capitalize  text-[blue] pr-1">title :</span> {title}</h1>
            <h1> <span className=" text-[18px]  capitalize  text-[blue] pr-1">description :</span> {description}</h1>
            <h1 className="mb-4"> <span className=" text-[18px]  capitalize  text-[blue] pr-1">brand :</span> {brand}</h1>
           <Link className=" uppercase bg-orange-400 p-2 px-4 hover:bg-lime-50 rounded-md" to={`/productsTwomanu/grosary/productsDetals/${id}`}>Details here</Link>
        </div>
    );
};

export default Phone;
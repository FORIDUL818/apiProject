import { Link, NavLink } from "react-router-dom";


const ProductsManu = () => {
    return (
        <div className=" container mx-auto">
        <nav className=" bg-[#b3b9e3] text-[#922525] p-10 flex justify-between ">
        <div className=" text-[26px] ">
            <Link to="/registration/homeLaout/home"><span className=" text[36px] text-[red]">A</span>varege</Link>
        </div>
        <div className=" text-[20px]">
            <NavLink to="/products/products" className={({isActive})=>isActive?"text-[#000] text-[20px] uppercase pr-4":"text-[#ffff] uppercase pr-4"}>Qoutation</NavLink>
            <NavLink to="/products/products2"  className={({isActive})=>isActive?"text-[#000] text-[20px] uppercase pr-4":"text-[#ffff] uppercase pr-4"}>News</NavLink>
            <NavLink to="/productsTwomanu/grosary"className={({isActive})=>isActive?"text-[#000] text-[20px] uppercase pr-4":"text-[#ffff] uppercase pr-4"}>Products</NavLink>
           
        </div>
    
        </nav>
    </div>
    );
};

export default ProductsManu;
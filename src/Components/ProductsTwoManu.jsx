import { Link, NavLink } from "react-router-dom";

const ProductsTwoManu = () => {
    return (
        <div>
            <nav className=" container mx-auto  bg-[#e9593d] text-[#fff] p-6 flex justify-between">
                <div className=" text-[24px]">
                <Link to="/registration/homeLaout/home"><span className="  text-[indigo] text-[32]">A</span>varege</Link>
                </div>
                <div>
                <div className=" text-[20px]">
                <NavLink to="/productsTwomanu/grosary" className={({isActive})=>isActive?"text-[#000] text-[20px] uppercase pr-4":"text-[#ffff] uppercase pr-4"}>PRoducts</NavLink>
                <NavLink to="/productsTwomanu/HomeService"  className={({isActive})=>isActive?"text-[#000] text-[20px] uppercase pr-4":"text-[#ffff] uppercase pr-4"}> technology</NavLink>
                <NavLink to="/productsTwomanu/BeefService"className={({isActive})=>isActive?"text-[#000] text-[20px] uppercase pr-4":"text-[#ffff] uppercase pr-4"}>news</NavLink>
         
            </div>
                </div>
            </nav>
        </div>
    );
};

export default ProductsTwoManu;
import { Link, NavLink } from "react-router-dom";


const HomeManu = () => {
    return (
        <div className=" container mx-auto">
            <nav className=" bg-[blue] text-[#fff] flex justify-between p-4">
            <div className=" text-[26px] ">
                <Link to="/registration/homeLaout/home"><span className=" text[36px] text-[red]">A</span>varege</Link>
            </div>
            <div className=" text-[20px]">
                <NavLink to="/registration/homeLaout/home" className={({isActive})=>isActive?"text-[#000] text-[20px] uppercase pr-4":"text-[#ffff] uppercase pr-4"}>Home</NavLink>
                <NavLink to="/registration/homeLaout/about"  className={({isActive})=>isActive?"text-[#000] text-[20px] uppercase pr-4":"text-[#ffff] uppercase pr-4"}>About</NavLink>
                <NavLink to="/serviceLaout/service"className={({isActive})=>isActive?"text-[#000] text-[20px] uppercase pr-4":"text-[#ffff] uppercase pr-4"}>Service</NavLink>
                <NavLink to="/products/products"  className={({isActive})=>isActive?"text-[#000] text-[20px] uppercase pr-4":"text-[#ffff] uppercase pr-4"}>Blog</NavLink>
            </div>
            <div className=" uppercase mr-4 flex justify-between items-center">
                <Link to ="/"  className=" pr-4 text-orange-300">SignUp</Link>
                <Link to ="/registration/homeLaout/profile" className=" text-[red]">Profile</Link>
            </div>
            </nav>
        </div>
    );
};

export default HomeManu;
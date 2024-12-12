import { Link, NavLink } from "react-router-dom";


const ServiceManu = () => {
    return (
        <div className=" container mx-auto bg-amber-300">
            <nav className=" flex justify-between items-center  p-3">
                <div>
                    <Link to="/registration/homeLaout/home" className=" text-[26px] "><span className="text-[red] text-[32px]">A</span>varege</Link>
                </div>
                <div>
                    <NavLink to="/serviceLaout/service" className={({isActive})=>isActive?"text-[#000] text-[20px] uppercase pr-4":"text-[blue] uppercase pr-4"}>Users</NavLink>
                    <NavLink to="/serviceLaout/posts" className={({isActive})=>isActive?"text-[#000] text-[20px] uppercase pr-4":"text-[blue] uppercase pr-4"}>Posts</NavLink>
                    <NavLink to="/serviceLaout/foods" className={({isActive})=>isActive?"text-[#000] text-[20px] uppercase pr-4":"text-[blue] uppercase pr-4"}>Foods</NavLink>
                    <NavLink to="/serviceLaout/countryes" className={({isActive})=>isActive?"text-[#000] text-[20px] uppercase pr-4":"text-[blue] uppercase pr-4"}>Countryes</NavLink>
                    <NavLink to="/serviceLaout/weather" className={({isActive})=>isActive?"text-[#000] text-[20px] uppercase pr-4":"text-[blue] uppercase pr-4"}>Weather</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default ServiceManu;
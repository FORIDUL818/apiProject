import { Outlet } from "react-router-dom";
import HomeManu from "../Components/HomeManu";
import Footer from "../Components/Footer";


const HomeLaout = () => {
    return (
        <div>
           <HomeManu/>
           <Outlet/>
           <Footer/>
           
        </div>
    );
};

export default HomeLaout;
import { Outlet } from "react-router-dom";
import ServiceManu from "../Components/ServiceManu";
import Footer from "../Components/Footer";


const ServiceLaout = () => {
    return (
        <div>
            <ServiceManu/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default ServiceLaout;
import { Outlet } from "react-router-dom";
import ProductsTwoManu from "../Components/ProductsTwoManu";
import Footer from "../Components/Footer";


const ProductsTwoLaout = () => {
    return (
        <div>
           <ProductsTwoManu/>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default ProductsTwoLaout;
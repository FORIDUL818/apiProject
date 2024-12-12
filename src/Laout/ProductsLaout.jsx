import { Outlet } from "react-router-dom";
import ProductsMenu from "../Components/ProductsMenu"
import Footer from "../Components/Footer";
const ProductsLaout = () => {
    return (
        <div>
           <ProductsMenu/>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default ProductsLaout;
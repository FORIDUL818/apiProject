import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Landing from "./Landing";
import Login from "./Pages/Login";
import Ragistration from "./Pages/Ragistration";
import Home from "./Pages/Home";
import HomeLaout from "./Laout/HomeLaout";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Profile from "./Pages/Profile";
import ServiceLaout from "./Laout/ServiceLaout";
import Users from "./Pages/Users";
import Countryes from "./Pages/Countryes";
import Foods from "./Pages/Foods";
import Posts from "./Pages/Posts";
import Weather from "./Pages/Weather";
import ProductsLaout from "./Laout/ProductsLaout";
import Products1 from "./Pages/Products1";
import Products2 from "./Pages/Products2";
import Products3 from "./Pages/Products3";
import ProductsTwoLaout from "./Laout/ProductsTwoLaout";
import Grosary from "./Pages/Grosary";
import HomeService from "./Pages/HomeService";
import BeefService from "./Pages/BeefService";
import Details from "./Pages/Details";
import PostDtails from "./Pages/PostDtails";
import Countrysdetails from "./Pages/CountrysDetails";
import ProductsDetals from "./Pages/ProductsDetals";
import { ToastContainer } from 'react-toastify';
import ForgetPass from "./Components/ForgetPass";



const App = () => {
    const router =createBrowserRouter([
      
       {
          path:"/", element:<Landing/>
       },
       {
          path : "/login",element:<Login/>,
       },
       {
          path : "/registration",element:<Ragistration/>
       },
       {
         path: "/registration/homeLaout",element: <HomeLaout/>,
         children: [
            {
               path: '/registration/homeLaout/home',element:<Home/>
            },
            {
               path: '/registration/homeLaout/about',element:<About/>
            },
            {
               path: '/registration/homeLaout/blog',element:<Blog/>
            },
            
            {
               path: '/registration/homeLaout/profile',element:<Profile/>
            },
            
         ]
       },
       {
         path: "/login/homeLaout",element: <HomeLaout/>
       },
       {
         path: "/serviceLaout",element: <ServiceLaout/>,
         children:[
            {
               path:"/serviceLaout/details/:id",element:<Details/>
            },
            {
               path:"/serviceLaout/postdetails/:id",element:<PostDtails/>
            },
            {
               path:"productsTwomanu/grosary/productsDetails/:id",element:<ProductsDetals/>
            },
            {
               path:"/serviceLaout/countrydetails/:code",element:<Countrysdetails/>
            },
            {
               path: "/serviceLaout/service", element: <Users/>
            },
            {
               path: "/serviceLaout/posts", element: <Posts/>
            },
            {
               path: "/serviceLaout/countryes", element: <Countryes/>
            },
            {
               path: "/serviceLaout/foods", element: <Foods/>
            },
            {
               path: "/serviceLaout/weather", element: <Weather/>
            },
         ]
       },


       
      {
         path:"/products",element:<ProductsLaout/>,
         children:[
            {
               path:"/products/products",element:<Products1/>
            },
            {
               path:"/products/products2",element:<Products2/>
            },
            {
               path:"/products/products3",element:<Products3/>
            },
         ]
      },
      
      {
         path:"/productsTwomanu",element:<ProductsTwoLaout/>,
         children:[
            {
               path:"/productsTwomanu/grosary",element:<Grosary/>
            },
            {
               path:"/productsTwomanu/grosary/productsDetals/:id",element:<ProductsDetals/>
            },
            {
               path:"/productsTwomanu/HomeService",element:<HomeService/>
            },
            {
               path:"/productsTwomanu/BeefService",element:<BeefService/>
            },
         ]
      },
     {
      path:"/fogetPass",element:<ForgetPass/>
     }
      
    ])

  return (
    <div>
      <ToastContainer/>
     <RouterProvider router={router}/>
     
    </div>
  );
};

export default App;
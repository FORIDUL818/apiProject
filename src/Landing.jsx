import { Link, NavLink } from "react-router-dom";

import { useRef } from "react";


 
const Landing = () => {
  let darkref=useRef()
   let dark=()=>{
       darkref.current.style.background="#000"
       darkref.current.style.color="#fff"
   }
   let light=()=>{
       darkref.current.style.background="#a4b0be"
       darkref.current.style.color="#000"
   }
    return (
        <div  ref={darkref} className=" w-full h-screen  bg-[#a4b0be] fixed">
            <nav className="  text-[26px]  flex justify-between pt-3" >
              <div className=" w-[30%] text-center capitalize">  
                <Link to="/"> <span className=" text-[red] text-[32px]">A</span>varege</Link>
              </div>
            <div className=" flex justify-end items-center w-[70%] text-right mr-20 uppercase">
              
                <NavLink className=" pr-5" to="/login">login</NavLink>
             
                <NavLink to="/registration">Registration</NavLink>
            </div>
            <div className=" flex text-[18px]">
            </div>
            </nav>

          <div className=" w-[100%]  h-screen flex justify-center items-center">
          <div className=" w-[50%]">
              <h1 className=" text-[48px] mb-3  uppercase">wellcome to all visitors,</h1>
              <p> <span className="text-[50px] text-[red]">L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Sint eligendi amet nisi facilis placeat distinctio magni facere quia. Et doloribus quisquam vitae soluta quo perspiciatis natus quaerat expedita, eum temporibus officiis ducimus distinctio porro perferendis optio rem magni quas. Id quo iure quasi mollitia. Numquam placeat enim neque deleniti, totam dolorem accusamus laborum officiis, sed iste porro modi libero? Ducimus rerum nobis laudantium sint quidem ullam sit dolore temporibus repudiandae laborum, recusandae non, possimus aspernatur sequi blanditiis nihil provident facilis, assumenda reprehenderit. Ipsam architecto rerum illo minus corrupti, sed doloribus, perspiciatis dolorem laudantium quam nobis ut, non aperiam expedita neque!</p>
            </div>
          </div>
        </div>
    );
};

export default Landing;
import Lottie from "lottie-react";
import AboutAny from "../animation/Animation - 1700045763247.json"
const About = () => {
    return (
        <div className=" container mx-auto h-screen bg-slate-400 pt-[50px] p-20">
            <div className=" w-full  text-center uppercase text-[50px]  text-[#fff] mb-10">
                <h1>About us</h1>
            </div>
            <div className=" w-full  flex justify-between items-center p-1">
                <div className=" w-[49%] bg-[#f7efef]">
                   <h1 className=" uppercase text-[50px] "> details below</h1> 
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate nesciunt numquam totam laboriosam, deleniti provident eligendi porro cum sequi adipisci, epellendus velit! Dolorum obcaecati deleniti impedit officia quae possimus error  ea rerum placeat corrupti asperiores, amet vel culpa? Quidem, delectus consectetur explicabo assumenda facere eaque alias nemo commodi nobis, illum deserunt harum dignissimos amet repudiandae molestiae fugit iusto, a voluptate. Aliquid ut at consequatur aut perspiciatis molestias saepe pariatur, alias et accusamus quisquam maxime obcaecati corporis voluptatem ad! Minus consectetur assumenda maiores quo  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur, facilis ullam est ea! libero sed ipsam accusamus, eos vitae deserunt. Voluptas natus inventore modi voluptatibus! Laboriosam quas porro quos repudiandae nemo, sequi dolor non distinctio quibusdam ipsa nulla ab harum, maxime rerum adipisci eum alias explicabo voluptatem assumenda in et? Atque eum minus voluptatem fuga amet excepturi! Maiores quasi sequi quas in suscipit culpa, deserunt ratione aliquam. Ducimus consectetur molestiae, nihil repellendus suscipit sit. Corporis, voluptatem? Facilis minima libero, assumenda similique quos, dolor atque rem quisquam eligendi voluptate provident earum? Ipsa, quo veritatis modi ratione tenetur doloremque harum voluptate, nisi commodi necessitatibus   </p>
                </div>
                <div className=" w-[49%] bg-[green]"> 
                   <Lottie animationData={AboutAny}/>
                </div>
            </div>
        </div>
    );
};

export default About;
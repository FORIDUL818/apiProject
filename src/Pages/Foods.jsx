
import { useState } from "react";
import Food from "./Food";


const Foods = () => {
    const [search,setSearch]=useState("");
    const [myMeal,setMymeal]=useState();
    const searchMeal=(evt)=>{
        if(evt.key=="Enter"){
            let serchUrl=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
            fetch(serchUrl)
            .then(res=>res.json())
            .then((data)=>{
               setMymeal(data.meals)
            })
        }
       
    }
    return (
        <div >
            <div className=" container mx-auto bg-[#de833e] text-center p-10 text-[#fff] mt-1 "  >
                <h1 className=" uppercase text-[32px] text-[red] ">Search your Favorite Food</h1>
                <p className=" text-[20px] capitalize mb-3">Serarch your favorite Food and make your home </p>
                <input className=" mr-4  w-[50%] p-3 rounded-[20px] text-[#000]" type=" search" onChange={(e)=>setSearch(e.target.value)} value={search} onKeyDown={searchMeal} />

            </div>
              
                 <div className=" container mx-auto flex justify-between flex-wrap">
                 {
                       (myMeal==null)?<p>Not Found</p> : myMeal.map((res)=>{
                        return (
                            <Food data={res} key={res}/>
                        )
                       })
                    }
                 </div>
                
        </div>
    );
};
export default Foods;
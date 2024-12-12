import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Details = () => {
    let param=useParams([])

    let [users,setusers]=useState([]);

    useEffect(()=>{
            fetch(`https://jsonplaceholder.typicode.com/users/${param.id}`)
            .then(res=>res.json())
            .then(data=>setusers(data))
    },[])
   
    return (
        <div className=" container mx-auto bg-neutral-400 flex justify-center items-start pt-[150px] h-screen">
           <div className=" text-[32px]">
           <h1 className=" text-[rgb(255,0,0)] text-[px] ml-5   bg-[blue] w-[60px] rounded-[100%] text-center ">{users.id}</h1>
            <h1> NAME:<span className=" text-[green]"> {users.name}</span> </h1>
            <h1> City: <span className=" text-[green]">{users.address?.city}</span> </h1>
            <h1> Gmail: <span className=" text-[green]">{users.email}</span> </h1>
            <h1> zipcode: <span className=" text-[green]">{users.address?.zipcode}</span> </h1>
            <h1> Company bs: <span className=" text-[green]">{users.company?.bs}</span></h1>
            <h1> Company name: <span className=" text-[green]"> {users.company?.name}</span> </h1>
            <h1> Phone: <span className=" text-[green]">{users.phone}</span> </h1>
           </div>
        </div>
    );
};

export default Details;
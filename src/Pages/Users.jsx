import { useEffect, useState } from "react";
import User from "./User";

const Users = () => {
    let [users,setusers]=useState([])

     useEffect(()=>{
       let userurl="https://jsonplaceholder.typicode.com/users"
       fetch(userurl)
       .then(res=>res.json())
       .then(data=>setusers(data))
     },[])
     console.log(users)
   
    return (
        <div className=" container mx-auto bg-slate-300  flex justify-between flex-wrap ">
          {
           users.map((users)=><User key={users} users={users}/>)
          }
        </div>
    );
};

export default Users;
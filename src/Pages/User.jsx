import { Link } from "react-router-dom";


const User = ({users}) => {
    let {id,name,username, address,company,email}=users
    return (
        
        <div className=" w-[30%] bg-sky-300 mb-4 pl-5 p-5 mt-4">
            <h1> ID: {id}</h1>
            <h1> NAME: {name}</h1>
            <h1> USERNAME: {username}</h1>
            <h1> EMAIL: {email}</h1>
            <div className=" w-full bg-[green] p-3 text-[15px] mt-4 text-[#fff] hover:text-[red] hover:bg-[indigo] uppercase text-center"><Link  to={`/serviceLaout/details/${id}`}>See more{id}</Link></div>
        </div>
       
    );
};

export default User;
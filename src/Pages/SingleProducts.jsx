import { Link } from "react-router-dom";


const SingleProducts = ({res}) => {
    let {content,title,description,url,urlToImage}=res;
    return (
        <div className=" w-[31%] ">
            <img className=" mb-4 w-[500px] h-[300px]" src={urlToImage}/>
          <Link to={url} className=" uppercase bg-green-400 block w-[50%] text-center p-2 hover:bg-cyan-400 text-[#fff]">visite site</Link>
            <h1>
               <span className=" text-[24px] text-[indigo]">Title:</span> {title}
            </h1>
            <h1>
               <span className=" text-[24px] text-[indigo]">description:</span> {description}
            </h1>
            <h1 className=" mb-4">
             <span className=" text-[24px] text-[indigo]"> CONTENT: </span>{content}
            </h1>
        </div>
    );
};

export default SingleProducts;
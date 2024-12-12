import { Link } from "react-router-dom";


const SingleHomeService = ({product}) => {
   let {author,content,description,publishedAt,title,urlToImage,url}=product
    return (
        <div className=" flex justify-between flex-wrap">
        <div className=" w-[48%]">
        <h1> {author} </h1>
          <h1> {content} </h1>
          <h1> {description} </h1>
          <h1> {publishedAt} </h1>
          <h1> {title} </h1>
          <Link className=" uppercase text-[indigo] underline text-[20px]" to={url}>see Details</Link>
        </div>
        <div className=" w-[48%] mb-5">
        <img src={urlToImage} alt="" />
        </div>
        </div>
    );
};

export default SingleHomeService;
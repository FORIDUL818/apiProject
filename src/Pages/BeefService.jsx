import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BeefService = () => {
     let [nwes,setnwes]=useState([])
     useEffect(()=>{
          let newsUrl="https://newsapi.org/v2/everything?q=bitcoin&apiKey=97e9bcc0babd43a9a3fe2f38eee2f9e2"
          fetch(newsUrl)
          .then(res=>res.json())
          .then(data=>setnwes(data.articles))
     },[])
     console.log(nwes)
     return (
          <div className=' container mx-auto'>
               {
                    nwes.map((nwes)=><div key={nwes}>

                       <div className=' w-full flex justify-between flex-wrap bg-slate-200H'>
                        
                       <div className=' w-[48%] mb-5'>
                        <img src={nwes.urlToImage} alt="" />
                        </div>
                         <div className=' w-[48%]'>
                         <h1>{nwes.author}</h1>
                         <h1>{nwes.content}</h1>
                         <h1>{nwes.description}</h1>
                         <h1>{nwes.publishedAt}</h1>
                         <h1>{nwes.title}</h1>
                         <Link className=' uppercase text-[indigo] underline' to={nwes.url}>click here</Link>
                         </div>

                       </div>
                    </div>)
               }
          </div>
     );
};

export default BeefService;
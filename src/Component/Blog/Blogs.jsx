import { useEffect, useState } from "react";
import Blog from "./Blog";


const Blogs = () => {
    const [blogs, setblogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setblogs(data))
    },[])
    return (
        
        <div className=" flex w-[94%] mx-auto">
             <div className="bg-gray-300 container mx-auto">
           
            {
                blogs.map(blog=><Blog
               
               key={blog.id}     blog={blog}
                ></Blog>)
            }
        </div>
        <div className="bookmark w-2/6 bg-zinc-700">
            <bookMark></bookMark>
        </div>
        
        </div>

       
    );
};

export default Blogs;
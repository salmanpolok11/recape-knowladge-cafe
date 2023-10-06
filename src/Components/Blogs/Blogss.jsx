import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
   const [blogs, setBlogs] = useState ([])
 
    useEffect(() => {
       fetch('https://raw.githubusercontent.com/ProgrammingHero1/react-knowledge-cafe/main/public/blogs.json')
       .then(res => res.json())
       .then(data => setBlogs(data))
    },[])

  return (
    <div>
      <h1 className="text-2xl font-bold">Blogs: {blogs.length} </h1>

      {
          blogs.map(blog => <Blog 
             blog={blog} 
              key={blog.id}
             > </Blog>)
      }

    </div>
  );
};

export default Blogs;
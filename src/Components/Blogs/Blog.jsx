

import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog}) => {

  const {cover, title, author_img, author, posted_date, reading_time, hashtags} = blog;

  return (
    <div className="mb-20 mt-5">
            <img className=" w-full rounded-2xl" src={cover} alt="" />

            <div className="flex justify-between items-center mt-8 items-centernpm install react-icons --save">
                   <div className="flex items-center" >
                        <img className=" w-20" src={author_img} alt="" />
                         <div  className="ml-5">
                             <h1 className="text-2xl font-bold">{author}</h1>
                             <h2> { posted_date} </h2>
                         </div>
                   </div>

                   <div className=' items-center'>
                        <span className=" text-2xl">{reading_time} min red</span>
                        <button><FaBookmark className='ml-2 text-2xl text-red-500'></FaBookmark> </button>
                   </div>
            </div>
              
            <div>
            <h1 className=' text-3xl font-bold mt-2'>{title}</h1>
            </div>
    <div>
   <h1 className='mt-6 text-2xl'>
      {hashtags.map(hash => <span> #{hash}</span>)}
   </h1>
       
    </div>

    </div>
  );
};

export default Blog;
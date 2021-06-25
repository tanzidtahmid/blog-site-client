import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Blog from "../Blog/Blog"

const Blogs = () => {
    const history = useHistory();
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("https://protected-stream-62264.herokuapp.com/blogs")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    console.log(blogs)
    const handleBlogDetails =(id)=>{
        history.push(`blog/${id}`)
        console.log(id)
    }
    return (
        <div>
            <div>
                {blogs.length &&
                    <div className="flex shadow-lg p-3 my-2" style={{cursor: "pointer"}} onClick={()=>handleBlogDetails(blogs[0]._id)}>
                        <img className='flex-1' style={{ height: "600px", width: "450px" }} src={`data:image/png;base64,${blogs[0].image.img}`} alt="Red dot" />
                        <div className='pl-4 flex-1'>
                            <p>Featured</p>
                            <h4 className='text-7xl' >{blogs[0].title}</h4>
                            <p className='pt-16 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ipsum nobis. Incidunt molestiae, voluptate a ipsum tenetur libero distinctio dolore ratione maiores in? Temporibus dolor repellat ratione, optio maiores rem. Corrupti sit assumenda perferendis quidem repudiandae! Similique aspernatur incidunt officia eius praesentium voluptates debitis ex?</p>
                            <p className='pt-16'>Reads more than 3000+</p>
                        </div>
                    </div>
                }

            </div>
            <div className='mt-20'>
                <div className='flex flex-col justify-center items-center'>
                <h4>Popular</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 m-3'>
                    {
                        blogs.slice(2, 6).map(blog => <div style={{ height: "500px", width: "600px",cursor: "pointer"}} onClick={()=>handleBlogDetails(blog._id)}>

                            <div className="shadow-lg p-3 my-2 mx-10">
                                <div className='flex'>
                                    <h4 className='text-2xl' >{blog.title}</h4>
                                    <img className='flex-1' style={{ height: "200px", width: "200px" }} src={`data:image/png;base64,${blog.image.img}`} alt="Red dot" />
                                </div>
                                <div className='pl-4'>
                                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ipsum nobis. Incidunt molestiae, voluptate a ipsum tenetur libero distinctio dolore ratione maiores in? Temporibus dolor repellat ratione, optio maiores rem. Corrupti sit assumenda perferendis quidem repudiandae! Similique aspernatur incidunt officia eius praesentium voluptates debitis ex?</p>
                                    <p className=''>Reads more than 3000+</p>
                                </div>
                            </div>


                        </div>)
                    }
                </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                <h1 className='my-5'>Top Listed</h1>
                <div className='grid grid-cols-1 text-center md:grid-cols-3 gap-4'>

                    {
                        blogs.slice(9, blogs.length).map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                    }

                </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
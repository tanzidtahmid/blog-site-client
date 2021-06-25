import React, { useEffect, useState } from 'react';
import Shared from '../Shared/Shared'

const DeleteBlogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch("https://protected-stream-62264.herokuapp.com/blogs")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

    const handleClick = (id) =>{
        fetch(`https://protected-stream-62264.herokuapp.com/delete/${id}`,{
            method : "DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("deleted")
        })
    }
    return (
        <div className ='md:grid grid-cols-7'>
             <div className='md:col-span-1 p-3 bg-blue-200 '>
            <Shared></Shared>
            </div>
            <div className ='md:col-span-6 md:ml-3 p-6 bg-blue-200 '>
            {
                blogs.map(blog=> <div  className ='flex'>
                    <h1 className ='flex-1 w-16 h-12 my-2 bg-gray-100'>{blog.title}</h1>
                    <button onClick={()=>handleClick(blog._id)} className='my-2 pr-4 bg-gray-100'>Delete</button>
                </div> )
            }
            
        </div>
        </div>
    );
};

export default DeleteBlogs;
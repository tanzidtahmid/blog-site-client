import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shared from '../Shared/Shared'

const ReadBlog = () => {
    const { id } = useParams()
    // let id = paramiter.id;
    // console.log(paramiter.id)
    const [blog, setBlog] = useState([])
    useEffect(() => {
        fetch(`https://protected-stream-62264.herokuapp.com/singleManPd/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, []);
    console.log(blog)
    return (
        <div className =' md:grid grid-cols-7'>
            <div className='md:col-span-1 p-3 bg-blue-200 '>
            <Shared></Shared>
            </div>
            <div className ='md:col-span-6 md:ml-3 p-6 bg-blue-200 '>
            {blog.map(blogs =>
                <div style={{display:'flex',flexDirection:"column", justifyContent:'center', alignItems:'center'}}>
                    <h1>{blogs.title}</h1>
                    <img style={{ height: "400px", width: "550px" }} src={`data:image/png;base64,${blogs.image.img}`} alt="Red dot" />
                    <p>{blogs.content}</p>
                </div>)}
                </div>

        </div>
    );
};

export default ReadBlog;
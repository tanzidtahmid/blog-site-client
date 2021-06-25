import React from 'react';
import { useHistory } from 'react-router-dom';

const Blog = ({blog}) => {
    const history = useHistory();
    const handleBlogDetails = (id) =>{
        history.push(`blog/${id}`)
        console.log(id)
    }
    return (
        <div>
            
            <div className="h-80 w-72 shadow-lg mx-10" style={{cursor: "pointer"}} onClick={()=>handleBlogDetails(blog._id)}>
            <img style={{height:"260px", width:"287px"}} src={`data:image/png;base64,${blog.image.img}` }alt="Red dot" />
            <h4>{blog.title}</h4>
            </div>
        </div>
    );
};

export default Blog;
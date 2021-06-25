import React, { useState } from 'react';
import Shared from '../Shared/Shared'

const AddBlogs = () => {
    const [file, setFile] = useState(null)
    const [blogsInfo, setBlogsInfo] = useState({})
    const handleBlur = (e) => {
        const newBlogsInfo = { ...blogsInfo };
        newBlogsInfo[e.target.name] = e.target.value;
        setBlogsInfo(newBlogsInfo)
    }
    console.log(blogsInfo)
    const handleChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        var formdata = new FormData()
        formdata.append("file", file)
        formdata.append("title", blogsInfo.title)
        formdata.append("content", blogsInfo.content)
        console.log(formdata)
        fetch("https://protected-stream-62264.herokuapp.com/addBlogs", {
            method: "POST",
            body: formdata
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .then(error => console.error(error));

    }

    return (
        <div className='md:grid grid-cols-7'>
            <div className='md: col-span-1 p-3 bg-blue-200 '>
                <Shared></Shared>
            </div>
            {/* <div>
            </div> */}
            <div className =' md:col-span-6 md:ml-3 p-6 bg-blue-200  '>
                <div className="shadow-sm">
                    <form onSubmit={handleFormSubmit}>
                        <div className="flex">
                            <div>
                                <p>Title of The Blog</p>
                                <input type="text" name="title" onBlur={handleBlur} className='w-full mr-5 flex-1 h-10 border-2 border-red-500' />
                            </div>
                            <div className='ml-8'>
                                <p>Cover Image</p>
                                <input type="file" onChange={handleChange} name="title" className='w-full  flex-1 h-10' />
                            </div>
                        </div>
                        <p>Content of The Blog</p>
                        <textarea name="content" id="" onBlur={handleBlur} cols="30" rows="10" className='w-full border-2 border-red-500'></textarea>

                        <input type="submit" className='px-6 py-3 text-white bg-blue-600' value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlogs;
import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Shared = () => {
    const [signedInUser, setSignedInUser] = useContext(userContext);
    const [admins, setAdmin] = useState([]);
    const [isValid, setIsValid] = useState(false)
    useEffect(() => {
        fetch('https://protected-stream-62264.herokuapp.com/admins')
            .then(res => res.json())
            .then(data => setAdmin(data));
    }, []);

    const isAdmin = admins.find(admin => admin.email == signedInUser.email && admin.password == signedInUser.password)
    console.log(isAdmin)
    return (
        <div>
            <ul className ='flex md: md:flex-col  '>
                <li className='px-2'>
                    <Link to="/">Home</Link>
                </li>

                <li className='px-2'>
                    <Link to="/blogs">All Blogs</Link>
                </li>
            </ul >
            {isAdmin &&
                <ul className ='flex md: md:flex-col'>
                    <li className='px-2'>
                        <Link to="/addBlogs">Add Blogs</Link>
                    </li>
                    <li className='px-2'>
                        <Link to="/deleteBlogs">Delete Blogs</Link>
                    </li>
                </ul>}
        </div>
    );
};

export default Shared;
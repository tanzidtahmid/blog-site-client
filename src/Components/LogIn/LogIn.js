import React, { useContext, useEffect, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const LogIn = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }
    const history = useHistory();
    const location = useLocation()
    const [signedInUser, setSignedInUser] = useContext(userContext)
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [newUser, setNewUser] = useState(false)
    console.log(error)
    const handleBlur = (e) => {
        const newUser = { ...user }
        newUser[e.target.name] = e.target.value;
        setUser(newUser)

    }
    console.log(user)
    let { from } = location.state || { from: { pathname: "/" } };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newUser && user.name && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in 
                    var user1 = userCredential.user;
                    console.log(user1)
                    setError('')
                    setSuccess('Account Created Successfully')
                    let newLogedInUser= {...user}
                    setSignedInUser(newLogedInUser)
                    history.replace(from);
                    const json = JSON.stringify(newLogedInUser.email)
                    localStorage.setItem("blogUser",json)
                    
                    // fetch("https://protected-stream-62264.herokuapp.com/addAdmin", {
                    //     method: "POST",
                    //     body: signedInUser
                    // })
                    //     .then(response => response.json())
                    //     .then(data => console.log(data))
                    //     .then(error => console.error(error));
                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode)
                    console.log(errorMessage)
                    setError(errorMessage)
                    setSuccess('')
                    // ..
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in
                    var user1= userCredential.user;
                    console.log(user1)
                    let newLogedInUser= {...user}
                    setSignedInUser(newLogedInUser)
                    history.replace(from);
                    const json = JSON.stringify(newLogedInUser.email)
                    localStorage.setItem("blogUser",json)

                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode)
                    console.log(errorMessage)
                    setError(errorMessage)
                });

        }
    }
    console.log(signedInUser)
    return (
        <div className=' w-screen h-screen flex flex-col  items-center'>
            <form onSubmit={handleSubmit}>
                {newUser == false && <button onClick={() => setNewUser(true)}> Sign Up </button>}
                {newUser == true && <button onClick={() => setNewUser(false)}>LogIn</button>}
                <br />
                {newUser && <input type="name" name="name" className='h-10 w-64 my-4 shadow-lg border-2' required placeholder="Enter Your Name" onBlur={handleBlur} />}
                <br />
                <input type="email" name="email" className='h-10 w-64 my-4 shadow-lg border-2' required placeholder="Enter Your Email" onBlur={handleBlur} />
                <br />
                <input type="password" name="password" className='h-10 w-64 my-4 shadow-lg border-2' required placeholder="Enter Your Password" onBlur={handleBlur} />
                <br />
                {newUser == false && <input type="submit" value="LogIn" className='h-10 w-64 my-4 shadow-lg border-2' />}
                {newUser == true && <input type="submit" value="Sign Up" className='h-10 w-64 my-4 shadow-lg border-2' />}

            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}

        </div>
    );
};

export default LogIn;
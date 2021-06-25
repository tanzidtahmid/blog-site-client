import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import AddBlogs from './Components/AddBlogs/AddBlogs'
import Blogs from "./Components/Blogs/Blogs";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import ReadBlog from './Components/ReadBlog/ReadBlog'
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import DeleteBlogs from './Components/DeleteBlogs/DeleteBlogs'

export const userContext = createContext()


function App() {
const [signedInUser, setSignedInUser] = useState(userContext)

  return (
    <div >
      <userContext.Provider value={[signedInUser, setSignedInUser] }>
      <Router>
        <Switch>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <PrivateRoute path="/addBlogs">
            <AddBlogs></AddBlogs>
          </PrivateRoute>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/LogIn">
            <LogIn></LogIn>
          </Route>
          <PrivateRoute path="/blog/:id">
            <ReadBlog></ReadBlog>
          </PrivateRoute>
          <PrivateRoute path="/deleteBlogs">
            <DeleteBlogs></DeleteBlogs>
          </PrivateRoute>
        </Switch>
      </Router>

    </userContext.Provider>
    </div>

  );
}



export default App;

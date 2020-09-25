import React, { createContext, useState,  PrivateRoute } from 'react';
import Login  from './bootsrap/Login';
import Nav from './bootsrap/Nav';
import Book from './bootsrap/Book';
import Map from './bootsrap/Map';
import Form from './bootsrap/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,

  Link
} from "react-router-dom";



export const usercontext=createContext();

function App() {
  const[loggedin,setloggedin]=useState({});
  return (
    <usercontext.Provider value={[loggedin,setloggedin]} >
      <p>name:{loggedin.name}</p>
     <h1>HELLO</h1> 
    <Router>
      <Link to="/">Login</Link>
      <Link to="/book">Book</Link>
      <Link to="/map">Map</Link>
      <Link to="/form">form</Link>
      <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute  path="/book">
            <Book />
          </PrivateRoute >
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
        </Switch>

  

  

     <Nav></Nav>
     </Router>
    </usercontext.Provider>
   
  );
}

export default App;



  // {/* <ul>
  //   <li>
  //     <Link to="/public">Public Page</Link>
  //   </li>
  //   <li>
  //     <Link to="/protected">Protected Page</Link>
  //   </li>
  // </ul> */}


import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useHistory, useLocation } from 'react-router-dom';
import Footer from "../Footer/Footer";
import Home from "../Home";
import useAuth from "./../Hooks/useAuth";

const Register = () => {
   
     
    const { signInWithGoogle, createAccountWithGoogle,setUser , setIsLoading , updateName } = useAuth();

    const history= useHistory()
    const location = useLocation()
    const url= location.state?.from || "/homes"

const [name , setName] =useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')


const handleGetName=(e)=> {
    console.log(e.target.value);
   setName(e.target.value)
}

const handleGetEmail=(e)=> {
    console.log(e.target.value);
   setEmail(e.target.value)
}

const handleGetPassword=(e)=> {
    console.log(e.target.value);
   setPassword(e.target.value)
}



const handleRegistration=(e)=> {
    e.preventDefault();
    createAccountWithGoogle(email,password)
    .then((res) => {
      setIsLoading(true)
      updateName(name)
        setUser(res.user)
        history.push(url)
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // ..
      })
      
}


    
const handleGoogleLogin = () => {
        signInWithGoogle()
          .then((res) => 
            {
              setIsLoading(true)
              setUser(res.user)
              history.push(url)
            }
              )
          .catch((err) => console.log(err))
          .finally(() => {
            setIsLoading(false)
          })
      };
    

    return (
       <div  className="text-center">
           <Home/>
           <h2>This is register</h2>
           <Form onSubmit={handleRegistration}>
               <input type="text" className="m-2" onBlur={handleGetName}placeholder="name"/>
               <br/>
               <input type="email"  className="m-2" onBlur={handleGetEmail} placeholder="email"/>
               <br/>
               <input type="password"  className="m-2"  onBlur={handleGetPassword} placeholder="password"/>
               <br/>
               <input type="submit" placeholder="create"/>
               <br/>
           </Form>
           <button className="" onClick={handleGoogleLogin}>Google Sign In</button>
           <p> Already Signed Up ?<Link to="/login">Please Login</Link ></p>
           <Footer/>
       </div>
    );
};

export default Register;
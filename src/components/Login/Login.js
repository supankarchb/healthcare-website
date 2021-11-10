import React, { useState } from 'react';
import Home from '../Home';
import Footer from '../Footer/Footer';
import useAuth from '../Hooks/useAuth';
import { Link } from 'react-router-dom';
import { useHistory,useLocation } from 'react-router';

const Login = () => {
    const history= useHistory()
    const location = useLocation()
    const url= location.state?.from||"/homes"

    const {signInWithGoogle,loginWithEmailAndPassword} = useAuth();
    const [email,setEmail] = useState('')
    const [password,setPassword]= useState('')
        


    const handleGetEmail=(e)=> {
        console.log(e.target.value);
        setEmail(e.target.value)
    }
    const handleGetPassword=(e)=> {
        console.log(e.target.value);
       setPassword(e.target.value)
    }
const handleLoginWithEmailAndPassword=(e)=>{

    e.preventDefault();
    loginWithEmailAndPassword(email,password)
    .then((userCredential) => {
    
        const user = userCredential.user;
        history.push(url)
    
      })
     
}

console.log(signInWithGoogle);
    
    return (
        <div>
           <Home/>

           <h2>Please Login Here</h2>
         <from onSubmit={handleLoginWithEmailAndPassword}> 
      <input type="text" id="login" onBlur={handleGetEmail} name="login" placeholder="Please enter your email"/><br/>
      <input type="text" id="password" onBlur={handleGetPassword} class="m-2" name="login" placeholder="password"/><br/>
      <input type="submit" class="m-2 bg-primary text-white border-rounded" value="Log In"/>
      </from>
   

    <span><h5>New to here ?</h5><Link to="/register">Please register</Link> </span>

    <div><small>------------or------------</small></div>
    

    <div>
        <button onClick={signInWithGoogle} className="bg-warning m-2">Google Sign In</button>
        
        </div>
           <Footer></Footer>
            
        </div>
    );
};

export default Login;
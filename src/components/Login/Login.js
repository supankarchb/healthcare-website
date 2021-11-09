import React from 'react';
import Home from '../Home';
import Footer from '../Footer/Footer';
import useAuth from '../Hooks/useAuth';


const Login = () => {

    const {signInWithGoogle} = useAuth();
   

    // const {signInWithGoogle} = useFirebase();

console.log(signInWithGoogle);
    
    return (
        <div>
           <Home/>

           <h2>Please Login Here</h2>
           <form>
      <input type="text" id="login" class="fadeIn second m-2" name="login" placeholder="Please enter your email"/><br/>
      <input type="text" id="password" class="fadeIn third  m-2" name="login" placeholder="password"/><br/>
      <input type="submit" class="fadeIn fourth m-2 bg-primary text-white border-rounded" value="Log In"/>
    </form>

    <span><h5>New to here ?</h5><a href="!">Create an account</a></span>

    <div><small>------------or------------</small></div>
    

    <div>
        <button onClick={signInWithGoogle} className="bg-warning m-2">Google Sign In</button>
        
        </div>
           <Footer></Footer>
            
        </div>
    );
};

export default Login;
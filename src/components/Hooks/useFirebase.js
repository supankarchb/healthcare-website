import{getAuth,GoogleAuthProvider,signInWithEmailAndPassword,signInWithPopup,signOut,onAuthStateChanged,createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';
import {useEffect, useState} from "react";

import initializeAuthentication from '../Firebase/firebase.initialize';
initializeAuthentication();


 export const useFirebase = () =>{

    const[user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const auth = getAuth();
    

    const signInWithGoogle = () => {
    const googleProvider= new GoogleAuthProvider();

    
        signInWithPopup(auth,googleProvider)
        .then(res=>    
           {
                setUser(res.user);
              
           })
           .finally(()=> setIsLoading(false));
    }

    useEffect(()=>{

      const unsubscribed =  onAuthStateChanged(auth,user =>{

            if(user){

                setUser(user);
            }
            else{

                setUser({})
            }
            setIsLoading(false);
        });
        return()=> unsubscribed;
    }, []);
     
     
     const  createAccountWithGoogle =(email , password)=> {
     
         return createUserWithEmailAndPassword(auth, email, password)
     }
     
     
     const loginWithEmailAndPassword =(email,password)=> {
         return signInWithEmailAndPassword(auth, email, password)
     }
         
     
     const updateName= (name)=> {
       updateProfile(auth.currentUser, {
         displayName: name
       }).then(() => {
         const newUser={...user, displayName: name} 
        setUser(newUser)
         
         
       }).catch((error) => {
         
       });
     }

        const logOut=()=>{

            signOut (auth)
            .then(() => { });
        }    
    return {user,isLoading,setUser,signInWithGoogle,logOut,createAccountWithGoogle,
        loginWithEmailAndPassword,updateName}
    }

export default useFirebase;
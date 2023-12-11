import Header from "./Header"
import { netflixLogoBackground } from "../utils/constants"
import { useRef, useState } from "react";
import { validateSignIn,validateSignUp } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const navigate=useNavigate();
    const [isSignInUp,setSignInUp]=useState("Sign In");
    const [newSignUp,setNewSignUp]=useState("New to Netflix? Sign up now.");
    const [signUpFlag,setSignUpFlag]=useState(false);
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const [isValidMsg,setValidMsg]=useState(null);
    let msg=null;
    const submitHandler=(e)=>{
        e.preventDefault();
        if(isSignInUp==="Sign In"){
             msg=validateSignIn(email.current.value,password.current.value);
        }
        else{
             msg=validateSignUp(email.current.value,password.current.value,name.current.value);
        }
        setValidMsg(msg);
        if(msg===null){
            if(signUpFlag){
                createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
                .then((userCredential)=>{
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName:name.current.value
                      }).then(() => {
                        navigate("/browse");

                      }).catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setValidMsg(errorCode+" "+errorMessage);
                      });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setValidMsg(errorCode+" "+errorMessage);
                  });
            }
            else{
                signInWithEmailAndPassword(auth, email.current.value,password.current.value)
                .then((userCredential) => {
                  // Signed in 
                  const user = userCredential.user;
                  navigate("/browse");
                  console.log(user);
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setValidMsg(errorCode+" "+errorMessage);

                });
            }
        }

        }
    const toggleHandler=(e)=>{
        if(isSignInUp==="Sign In"){
            setSignInUp("Sign Up");
            setNewSignUp("Existing Customer? Sign In.");
            setSignUpFlag(true);
        }
        else{
            setSignInUp("Sign In");
            setNewSignUp("New to Netflix? Sign up now.");
            setSignUpFlag(false);


        }
    }
    return(
        <div>
            <div>
                <Header/>
                <img className="absolute h-screen w-screen"  src={netflixLogoBackground} alt="background-img"/>
            </div>
            <div>
                <form className="text-white rounded-md absolute p-[3rem] flex flex-col w-[26rem] bg-black my-36 mx-auto right-0 left-0 bg-opacity-80">
                    <div className="text-white text-3xl p-1 m-3 ">{isSignInUp}</div>
                    {signUpFlag && (<input ref={name} type="text" placeholder="Full Name" className="p-3 m-4 rounded-sm bg-gray-500 bg-opacity-60 outline-none"/>)}
                    <input ref={email} type="text" placeholder="Email address" className="p-3 m-4 rounded-sm bg-gray-500 bg-opacity-60 outline-none"/>
                    <input ref={password} type="password" placeholder="Password" className="p-3 m-4 rounded-sm bg-gray-500 bg-opacity-60 outline-none"/>
                    {isValidMsg!=null && <div className="m-1 p-3 text-red-600">{isValidMsg}</div>}

                    <button onClick={submitHandler}  className="rounded-sm m-4 p-3 bg-red-600">{isSignInUp}</button>
                    <div onClick={toggleHandler} className=" cursor-pointer rounded-sm m-1 p-3 text-white">{newSignUp}</div>
                </form>

            </div>
        </div>
        
    )
}
export default Login
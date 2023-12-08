import Header from "./Header"
import { netflixLogoBackground } from "../utils/constants"
import { useState } from "react";

const Login=()=>{
    const [isSignInUp,setSignInUp]=useState("Sign In");
    const [newSignUp,setNewSignUp]=useState("New to Netflix? Sign up now.");
    const [signUpFlag,setSignUpFlag]=useState(false);
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
                    {signUpFlag && (<input type="text" placeholder="Full Name" className="p-3 m-4 rounded-sm bg-gray-500 bg-opacity-60 outline-none"/>)}
                    <input type="text" placeholder="Email or phone number" className="p-3 m-4 rounded-sm bg-gray-500 bg-opacity-60 outline-none"/>
                    <input type="password" placeholder="Password" className="p-3 m-4 rounded-sm bg-gray-500 bg-opacity-60 outline-none"/>
                    <button  className="rounded-sm m-4 p-3 bg-red-600">{isSignInUp}</button>
                    <div onClick={toggleHandler} className=" cursor-pointer rounded-sm m-1 p-3 text-white">{newSignUp}</div>
                </form>

            </div>
        </div>
        
    )
}
export default Login
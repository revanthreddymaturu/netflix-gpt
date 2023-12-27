import { useState,useEffect } from "react"
import { netflixLogo, userlogo } from "../utils/constants"
import {  signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import {  useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser,removeUser} from "../utils/userSlice"
import {toggleGPTSearch} from "../utils/gptSlice"
const Header=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const showGptSearch=useSelector((store)=> store.gpt.showGptSearch);

    const user=useSelector((store)=>store.user);
    const [showDDFlag,setShowDDFlag]=useState(false);
    const mouseEnterHandler=()=>{
        setShowDDFlag(!showDDFlag);
    }
   const gptSearchHandler=()=>{
        dispatch(toggleGPTSearch());
   }
    const signoutHandler=()=>{
        signOut(auth).then(() => {
          }).catch((error) => {

          });
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}));
              navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");

            }
            
          });
          return ()=>unsubscribe();
    },[])
    return(
        <div>
        {(<div className=" flex w-[100%] justify-between absolute z-10 bg-gradient-to-b from-black">
           <img className="w-[11rem] p-3 ml-3" src={netflixLogo} alt="logo"/>
           <div className="rounded-xl self-center mr-6 " >
            {user && (
            <div className="flex gap-3">
            <button onClick={gptSearchHandler} className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 m-2 p-2 rounded-lg font-bold">{showGptSearch?"Home":"GPT Search"}</button>
            <img onClick={mouseEnterHandler}  className=" w-[3.5rem] cursor-pointer rounded-xl h-[3.5rem] p-2 self-center mr-6" src={userlogo} alt="userlogo"/>
            </div>
            )}
            {(showDDFlag && user) && <div className="absolute right-12 top-19 rounded-md  p-2 w-[11rem] text-white bg-black opacity-60 h-[3rem]">
            <div className="cursor-pointer " onClick={signoutHandler}>{user?.displayName+ " (Sign out)"}</div>
        </div>}
            </div>
       </div>)}
       
       </div>
    )
}
export default Header
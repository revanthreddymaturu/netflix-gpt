import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addUser,removeUser} from "../utils/userSlice"
const Body=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             
              const {uid,email,displayName} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}));
            } else {
                dispatch(removeUser());
            }
          });
    },[])
    const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/browse",
        element:<Browse/>
    },
    {
        path:"/",
        element:<Login/>
    }

    ])
    return(
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}
export default Body
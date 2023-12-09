import { netflixLogo } from "../utils/constants"

const Header=()=>{
    return(
        <div className="w-[100%] absolute z-10 bg-gradient-to-b from-black">
           <img className="w-[11rem] p-3" src={netflixLogo} alt="logo"/>
        </div>
    )
}
export default Header
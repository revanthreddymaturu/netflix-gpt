import { netflixLogoBackground } from "../utils/constants"
import GPTSearchComponent from "./GPTSearchComponent"

const GPTSearch=()=>{
    return(
        <div>
            <div className="absolute -z-10">
                <img className=" h-screen w-screen "  src={netflixLogoBackground} alt="background-img"/>
            </div>
            <GPTSearchComponent/>
        </div>

    )
}
export default GPTSearch;
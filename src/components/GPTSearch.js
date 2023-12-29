import { netflixLogoBackground } from "../utils/constants"
import GPTSearchComponent from "./GPTSearchComponent"
import GPTSearchResult from "./GPTSearchResult";

const GPTSearch=()=>{
    return(
        <div>
            <div className="fixed -z-10">
                <img className="object-cover h-screen w-screen "  src={netflixLogoBackground} alt="background-img"/>
            </div>
            <GPTSearchComponent/>
            <GPTSearchResult/>
        </div>

    )
}
export default GPTSearch;
import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import useTrailerVideo from "../hooks/useTrailerVideo";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse=()=>{
    useNowPlayingMovies();
    return(
        <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
        </div>
    )
}
export default Browse
import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";

const Browse=()=>{
    useNowPlayingMovies();
    useUpcomingMovies();
    useTopRatedMovies();
    usePopularMovies();
    const showGptSearch=useSelector((store)=> store.gpt.showGptSearch)
    return(
        <div>
        <Header/>
        {showGptSearch?<GPTSearch/>:(
        <>
        <MainContainer/>
        <SecondaryContainer/>
        </>
        )}
        
        
        </div>
    )
}
export default Browse
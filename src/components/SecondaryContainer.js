import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer=()=>{
    const nowPlayingList=useSelector((store)=> store.movie?.nowPlayingMovies)
    const popularList=useSelector((store)=> store.movie?.popularMovies)
    const upcomingList=useSelector((store)=> store.movie?.upcomingMovies)
    const topratedList=useSelector((store)=> store.movie?.topratedMovies)

    return(
        <div className="bg-black">
            <div className="-mt-32 relative z-20 ">
            <MovieList movieList={nowPlayingList} genre="Now Playing"/>
            <MovieList movieList={popularList} genre="Popular"/>
            <MovieList movieList={upcomingList} genre="Upcoming"/>
            <MovieList movieList={topratedList} genre="Top Rated"/>
        </div>
        </div>
        
    )
}
export default SecondaryContainer;
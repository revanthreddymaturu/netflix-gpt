import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
const MainContainer=()=>{
    const nowPlaying=useSelector((store)=>store.movie?.nowPlayingMovies)
    if(!nowPlaying) return;
    const mainMovie=nowPlaying[0];
    return(
        <div className="h-[25rem] bg-black md:h-screen md:bg-none">
            <VideoTitle title={mainMovie.original_title} overview={mainMovie.overview}/>
            <VideoBackground movieId={mainMovie.id}/>
           
        </div>
    )
}
export default MainContainer;
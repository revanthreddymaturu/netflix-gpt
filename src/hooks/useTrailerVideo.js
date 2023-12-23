import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../utils/movieSlice";
import { TMDB_API_Options } from "../utils/constants";
import { useEffect } from "react";

const useTrailerVideo=(movieId)=>{
    const dispatch=useDispatch();
        const getTrailerId=async ()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, TMDB_API_Options);
        const json=await data.json();

        const videoData=json?.results.filter((video)=> video.type==="Trailer");
        const trailer=videoData.length?videoData[0]:json.results[0];
        dispatch(addTrailerVideo(trailer));
        
    };
    useEffect(()=>{
        getTrailerId();
    },[])
    
}
export default useTrailerVideo;
import { useSelector } from "react-redux";
import { youtubeVideoLink } from "../utils/constants";
import useTrailerVideo from "../hooks/useTrailerVideo";
const VideoBackground=({movieId})=>{
    const trailer=useSelector((store)=>store.movie?.trailerVideo)
    useTrailerVideo(movieId);

    const link=youtubeVideoLink+trailer?.key+"?&autoplay=1&mute=1";
    return(
        <div className="w-screen bg-black  md:h-screen md:bg-none">
             <iframe className="w-screen pt-[2rem] md:h-screen md:pt-0 aspect-video"  src={link} title="Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
       
    )
}
export default VideoBackground;
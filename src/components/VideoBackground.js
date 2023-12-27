import { useSelector } from "react-redux";
import { youtubeVideoLink } from "../utils/constants";
import useTrailerVideo from "../hooks/useTrailerVideo";
const VideoBackground=({movieId})=>{
    const trailer=useSelector((store)=>store.movie?.trailerVideo)
    useTrailerVideo(movieId);

    const link=youtubeVideoLink+trailer?.key+"?&autoplay=1&mute=1";
    return(
        <div className="w-screen h-screen">
             <iframe className="w-screen h-screen aspect-video"  src={link} title="Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
       
    )
}
export default VideoBackground;
import { movieImgURL } from "../utils/constants"

const MovieCard=({movie})=>{
    if(movie.backdrop_path===null) return;
    const imgURL=movieImgURL+movie.backdrop_path;
    return(
        <div className="w-[11rem] md:w-[14rem] rounded-md">
            <img src={imgURL} title={movie.title} alt="Poster"/>
        </div>
    )
}
export default MovieCard;
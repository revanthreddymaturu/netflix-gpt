import { movieImgURL } from "../utils/constants"

const MovieCard=({movie})=>{
    const imgURL=movieImgURL+movie.backdrop_path;
    return(
        <div className="w-[14rem] rounded-md">
            <img src={imgURL} alt="Poster"/>
        </div>
    )
}
export default MovieCard;
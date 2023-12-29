import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSearchResult=()=>{
    const gpt=useSelector((store)=>store.gpt);
    const {listOfMovieNames,listOfMovies}=gpt;
    if(listOfMovieNames===null) return ;
    return(
        <div className="bg-black m-3 p-3 rounded-md bg-opacity-90">
            {listOfMovieNames.map((movieName,index)=> (<MovieList key={listOfMovies[index].id} movieList={listOfMovies[index]} genre={movieName}/>))}
        </div>
    )
}
export default GPTSearchResult;
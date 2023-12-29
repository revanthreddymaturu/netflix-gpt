 import {  useRef } from "react";
 import openai from "../utils/openai";
import { TMDB_API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMoviesGPT } from "../utils/gptSlice";
const GPTSearchComponent=()=>{
    const dispatch=useDispatch();
    const enteredText=useRef(null);
    const searchHandler=()=>{
        searchHandlerGPT();
    }
    const getMovieDetailsTMDB=async (movie)=>{
        const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", TMDB_API_Options);
        const json=await data.json();
        return json.results;
    }
    const searchHandlerGPT=async ()=>{
        const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      enteredText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      const movieNames=chatCompletion?.choices?.[0]?.message?.content?.split(",");
      const tmbdMoviePromises=movieNames.map(movieName=>getMovieDetailsTMDB(movieName)
      )
      const tmdbData=await Promise.all(tmbdMoviePromises);
      dispatch(addMoviesGPT({listOfMovies:tmdbData, listOfMovieNames:movieNames}));
    }   
    return(
        <div className="pt-[15%] flex justify-center">
            <form className="bg-black w-[50%] grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
            <input ref={enteredText} className="m-3 p-3 col-span-8 " type="text" placeholder="Enter the type of movies you would like to watch!"/>
            <button className="rounded-md m-3 p-3 col-span-4 text-white bg-red-700" onClick={searchHandler}>Search</button>
            </form>
        </div>
    )
}
export default GPTSearchComponent;
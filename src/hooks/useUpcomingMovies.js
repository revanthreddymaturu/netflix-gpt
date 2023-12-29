/* eslint-disable react-hooks/exhaustive-deps */
import { TMDB_API_Options } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addUpcomingMovies } from "../utils/movieSlice"
import { useEffect } from "react"
const useUpcomingMovies=()=>{
    const dispatch=useDispatch();
    const getUpcomingMovies=async ()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',TMDB_API_Options );
        const json=await data.json();
        dispatch(addUpcomingMovies(json.results));
    }
    useEffect(()=>{
        getUpcomingMovies();
    },[])
}
export default useUpcomingMovies;

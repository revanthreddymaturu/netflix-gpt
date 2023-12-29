import MovieCard from "./MovieCard"

const MovieList=({movieList,genre})=>{
    return(
        <div className="">
                <div className="text-md md:text-2xl text-white p-3 pb-2 px-14">{genre}</div>
                <div className="p-0 m-0  flex overflow-x-scroll ">
                    <div className="flex  gap-3 p-4 px-14">
                        {movieList && movieList.map((movie)=>{
                            return (
                            <MovieCard key={movie.id} movie={movie}/>
                            )
                        })}
                    </div>
                </div>
        </div>
       
    )
}
export default MovieList;
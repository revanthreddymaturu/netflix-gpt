 
const GPTSearchComponent=()=>{
    return(
        <div className="pt-[15%] flex justify-center">
            <form className="bg-black w-[50%] grid grid-cols-12">
            <input className="m-3 p-3 col-span-8 " type="text" placeholder="Enter the type of movies you would like to watch!"/>
            <button className="rounded-md m-3 p-3 col-span-4 text-white bg-red-700">Search</button>
            </form>
           
        </div>
    )
}
export default GPTSearchComponent;
const VideoTitle=(props)=>{
    const {title, overview}=props;
    return(
        <div className="w-screen aspect-video h-screen pt-[25%] px-14 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="text-lg w-1/2 py-6">{overview}</p>
            <div className="flex gap-4">
                <button className="bg-white hover:bg-opacity-80 text-black w-[6rem] p-2 flex items-center gap-1 rounded-sm justify-center	 ">
                    <img className="w-4"  src={require("../play-button-arrowhead.png")} alt="logo"/>
                    <h4 className="font-bold text-lg">Play</h4>
                </button>
                <button className="text-white w-[9rem] hover:bg-opacity-80 p-2 bg-gray-600 bg-opacity-50  flex items-center gap-1 rounded-sm justify-center">
                <img className="w-6" src={require("../info.png")} alt="logo"/>
                <h4 className="font-bold text-lg">More Info</h4>

                </button>
            </div>
        </div>
    )
}
export default VideoTitle;
import { createSlice } from "@reduxjs/toolkit";
const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        listOfMovies:null,
        listOfMovieNames:null
    },
    reducers:{
        toggleGPTSearch:(state,action)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addMoviesGPT:(state,action)=>{
            const {listOfMovieNames,listOfMovies}=action.payload;
            state.listOfMovies=listOfMovies;
            state.listOfMovieNames=listOfMovieNames;

        },
       
    }
})
export const {toggleGPTSearch,addMoviesGPT}=gptSlice.actions;
export default gptSlice.reducer;

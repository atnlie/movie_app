import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMovie, InitState} from "../../types/Types.api";

const initialState: InitState = {
    MyMovies: [],
}

const WatchListSlice = createSlice({
    name: 'MoviesWatchList',
    initialState: initialState,
    reducers: {
        addMovieList(state, action: PayloadAction<IMovie>){
            state.MyMovies.push(action.payload);
        },
        removeMovieList(state, action) {
            state.MyMovies.splice(action.payload,1);
        }
    }
})

export const { addMovieList, removeMovieList } = WatchListSlice.actions;
export default WatchListSlice.reducer;

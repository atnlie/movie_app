import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMovie, InitState} from "../../types/Types.api";
import {FindArrImovieById} from "../../helpers/Array";

const initialState: InitState = {
    MyMovies: [],
}

const WatchListSlice = createSlice({
    name: 'MoviesWatchList',
    initialState: initialState,
    reducers: {
        addMovieList(state, action: PayloadAction<IMovie>){
            if (FindArrImovieById(state.MyMovies, action.payload.id) !== undefined) {
                console.log('Udah ada');
                // toast
            } else {
                state.MyMovies.push(action.payload);
                //toast
            }
        },
        removeMovieList(state, action) {
            state.MyMovies.splice(action.payload,1);
            // toast
        }
    }
})

export const { addMovieList, removeMovieList } = WatchListSlice.actions;
export default WatchListSlice.reducer;

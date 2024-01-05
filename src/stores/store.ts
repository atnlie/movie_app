import {configureStore} from "@reduxjs/toolkit";
import watchListReducer from '../redux/WatchList/WatchListSlice';
export const store = configureStore({
    reducer: {
        watchList: watchListReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

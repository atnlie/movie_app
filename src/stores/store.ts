import {configureStore} from "@reduxjs/toolkit";
import watchListReducer from "../redux/WatchList/WatchListSlice";
import ToastSlicReducer from "../redux/Toast/ToastSlice";
export const store = configureStore({
    reducer: {
        watchList: watchListReducer,
        toastMessage: ToastSlicReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

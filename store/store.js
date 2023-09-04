import { configureStore } from "@reduxjs/toolkit";

import movieReducer from "./Reducer/movieReducer";
import tvReducer from "./Reducer/tvReducer";

export const store = configureStore({
    reducer: {
        movieReducer,
        tvReducer
    }
})
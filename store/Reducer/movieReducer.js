import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    page: 1,
    errors: []
}

export const movieReducer = createSlice({
    name: "tmdb",
    initialState,
    reducers: {
        addmovies: (state, action) => {
            state.movies = action.payload
        },
        adderrors: (state, action) => {
            state.errors.push(action.payload)
        },
        removeerrors: (state, action) => {
            state.movies = []
        },
        changepage: (state, action) => {
            state.page += action.payload
        }
    }
})

export default movieReducer.reducer;
export const { adderrors, addmovies, changepage, removeerrors } = movieReducer.actions
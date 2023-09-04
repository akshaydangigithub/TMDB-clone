import axios from "axios"
import { adderrors, addmovies } from "../Reducer/movieReducer";

export const asyncaddmovies = () => async (dispatch, getState) => {
    try {
        const { page } = getState().movieReducer;
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=223667d1239871fc4b6eeef8d0d6def8&page=${page}`
        );
        dispatch(addmovies(data.results));
    } catch (error) {
        dispatch(adderrors(error.response.data.status_message))
    }
}
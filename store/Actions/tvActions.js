import axios from "axios"
import { tvadderrors, addtvshows } from "../Reducer/tvReducer";

export const asyncaddtv = () => async (dispatch, getState) => {
    try {
        const { tvpage } = getState().tvReducer;
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/tv/popular?api_key=223667d1239871fc4b6eeef8d0d6def8&page=${tvpage}`
        );
        console.log(data);
        dispatch(addtvshows(data.results));
    } catch (error) {
        dispatch(tvadderrors(error.response.data.status_message))
    }
}
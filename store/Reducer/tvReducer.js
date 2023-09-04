import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tvshows: [],
    tvpage: 1,
    tverrors: []
}

export const tvReducer = createSlice({
    name: "tmdb",
    initialState,
    reducers: {
        addtvshows: (state, action) => {
            state.tvshows = action.payload
        },
        tvadderrors: (state, action) => {
            state.tverrors.push(action.payload)
        },
        tvremoveerrors: (state, action) => {
            state.tvshows = []
        },
        tvchangepage: (state, action) => {
            state.tvpage += action.payload
        }
    }
})

export default tvReducer.reducer;
export const { addtvshows, tvadderrors, tvremoveerrors, tvchangepage } = tvReducer.actions
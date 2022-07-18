import { createSlice } from "@reduxjs/toolkit";

export const MovieReducer = createSlice({
    name: 'movie',
    initialState: {
        details: {}
    },
    reducers: {
        getList: (state,action) => {
            state.details = action.payload
        }
    }
})

export const { list } = MovieReducer.actions

export default MovieReducer.reducer;
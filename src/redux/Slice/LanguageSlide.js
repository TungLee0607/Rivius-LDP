import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    language: localStorage.getItem("language")
        ? localStorage.getItem("language")
        : "en",
};

export const scheduleSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
            localStorage.setItem("language", action.payload);
        },
    },
});

export const { setLanguage } = scheduleSlice.actions;

export default scheduleSlice.reducer;
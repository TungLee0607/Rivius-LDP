import { configureStore } from "@reduxjs/toolkit";
import language from "./Slice/LanguageSlide";

export const store = configureStore({
    reducer: {
        language: language,
    },
});
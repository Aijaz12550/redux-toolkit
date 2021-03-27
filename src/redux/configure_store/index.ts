import { configureStore } from "@reduxjs/toolkit"
import testReducer from "../slices";

// let reducer = {
//     testReducer
// }

export const store = configureStore({
    reducer: testReducer,
})

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof testReducer>


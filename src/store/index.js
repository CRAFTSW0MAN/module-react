import { configureStore } from "@reduxjs/toolkit";
import bascetReducer from './reducers/bascet.js'

export default configureStore({
    reducer: {
        basket: bascetReducer
    }
})
import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './reducers/basket.js'
import userReducer from './reducers/form.js'

export default configureStore({
    reducer: {
        basket: basketReducer,
        user: userReducer,
    }
});
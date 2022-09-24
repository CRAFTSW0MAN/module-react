import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice ({
    name: 'user',
    initialState: {
        user: [],
        login: '',
        password: '',
        isAuth: false,
        
    },
    reducers: {
        creationAuth(state,action){
            state.user.push(action.payload);

        },
        input(state){
            state.isAuth = true;
        },
        exit(state){
            state.isAuth = false;
        },

    }
});

export const {creationAuth, input, exit} = userSlice.actions;
export default userSlice.reducer;
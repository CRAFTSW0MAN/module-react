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
        removeUser(state){
            // isAuth = false;
        },

    }
})

export const {creationAuth, removeUser} = userSlice.actions
export default userSlice.reducer
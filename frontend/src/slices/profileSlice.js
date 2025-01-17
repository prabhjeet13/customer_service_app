import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    token : localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
    user : localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
}

const profileSlice = createSlice({
    name : 'profile',
    initialState : initialState,
    reducers : {
        setToken(state,value) {
            state.token = value.payload;
        },
        setUser(state,value) {
            state.user = value.payload;
        }
    }
})

export const {setUser,setToken} = profileSlice.actions;
export default profileSlice.reducer;
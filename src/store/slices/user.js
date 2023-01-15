import { createSlice } from '@reduxjs/toolkit';

export const selectUser = state => state.user;

const initialState = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loadUser: (state, action) => {
            const newUser = {
                id: action.payload.user.$.id,
                name: action.payload.user.$.name,
            };
            state[action.payload.user.$.id] = newUser;
        },
    },
});

export const { loadUser } = userSlice.actions;

export default userSlice.reducer;

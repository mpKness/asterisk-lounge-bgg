import { createSelector, createSlice } from '@reduxjs/toolkit';

export const selectUser = state => state.user;

export const selectUsers = createSelector(selectUser, state => {
    return Object.keys(state).map(userID => state[userID]);
});

export const selectChosenUsers = createSelector(selectUser, state => {
    const users = []
    Object.keys(state).forEach(userID => {
        if (state[userID].chosen) {
            users.push(state[userID].name)
        }
    });
    return users;
});

const initialState = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loadUser: (state, action) => {
            const newUser = {
                id: action.payload.user.$.id,
                name: action.payload.user.$.name,
                chosen: true,
            };
            state[action.payload.user.$.id] = newUser;
        },
        chooseUser: (state, action) => {
            state[action.payload.userID].chosen = !state[action.payload.userID].chosen;
        },
    },
});

export const { loadUser, chooseUser } = userSlice.actions;

export default userSlice.reducer;

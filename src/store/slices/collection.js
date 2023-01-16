import { createSelector, createSlice } from '@reduxjs/toolkit';

export const selectCollection = state => state.collection;

export const selectCollectionByUsername = createSelector([selectCollection, (state, username) => username],
    (state, username) => {
        if (username && state[username] ) {
            return state[username];
        }
        return [];
    });

export const selectCollectionByUsernames = createSelector([selectCollection, (state, usernames) => usernames],
    (state, usernames) => {
        let newCollection = [];
        usernames.forEach(username => {
            if (username && state[username]) {
                newCollection = newCollection.concat(state[username]);
            }
        })
        return [... new Set(newCollection)];
    }
);
    
export const selectGameByUser = createSelector

const initialState = {};

export const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        loadCollection: (state, action) => {
            const items = action.payload.collection.items;
            const newCollection = [];
            items.item.forEach(item => {
                newCollection.push(item.$.objectid);
            });
            state[action.payload.username] = newCollection;
        },
    },
});

export const { loadCollection } = collectionSlice.actions;

export default collectionSlice.reducer;

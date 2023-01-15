import { createSelector, createSlice } from "@reduxjs/toolkit";

export const selectBoardgame = state => state.boardgame;

export const selectBoardgameByID = createSelector([selectBoardgame, (state, id) => id], 
    (state, id) => {
        if (state[id]) {
            return state[id];
        }
        return null;
    }
);

const initialState = {};

export const boardgameSlice = createSlice({
    name: 'boardgame',
    initialState,
    reducers: {
        loadBoardgames: (state, action) => {
            const boardgames = action.payload.boardgames.item;
            boardgames.forEach(boardgame => {
                state[boardgame.$.objectid] = {
                    id: boardgame.$.objectid,
                    image: boardgame.image[0],
                    thumbnail: boardgame.thumbnail[0],
                    name: boardgame.name[0]._,
                    maxPlayers: boardgame.stats[0].$.maxplayers,
                    minPlayers: boardgame.stats[0].$.minplayers,
                    maxPlaytime: boardgame.stats[0].$.maxplaytime,
                    minPlaytime: boardgame.stats[0].$.minplaytime,
                    rank: boardgame.stats[0].rating[0].ranks[0].rank[0].$.value,
                    ratingByUser: boardgame.stats[0].rating[0].$.value,
                    rating: boardgame.stats[0].rating[0].average[0].$.value,
                }
            });

        },
    },
});

export const { loadBoardgames } = boardgameSlice.actions;

export default boardgameSlice.reducer;

import { createSelector, createSlice } from '@reduxjs/toolkit';

export const selectOptions = state => state.options;

export const selectSpecificOption = createSelector([selectOptions, (state, option) => option],
    (state, option) => {
        return state[option]
    }
);

export const selectAllOptions = createSelector(selectOptions, state => {
    const options = {};

    if (state.own === 1) options.own = 1;
    if (state.rated === 1) options.rated = 1;
    if (state.played === 1) options.played = 1;
    if (state.trade === 1) options.trade = 1;
    if (state.want === 1) options.want = 1;
    if (state.wishlist === 1) options.wishlist = 1;
    if (state.wanttoplay === 1) options.wanttoplay = 1;
    if (state.minrating >= 1 && state.minrating <= 10) options.minrating = state.minrating;
    if (state.rating >= 1 && state.rating <= 10) options.rating = state.rating;
    if (state.minbggrating >= 1 && state.minbggrating <= 10) options.minbggrating = state.minbggrating;
    if (state.bggrating >= 1 && state.bggrating <= 10) options.bggrating = state.bggrating;
    if (state.minplays) options.minplays = state.minplays;
    if (state.maxplays) options.maxplays = state.maxplays;

    return options;
})

/**
 * Collection options, 1 = yes
 * 
 * own - return only games owned by user.
 * rated - return only games rated by the user.
 * played - return only games played by the user.
 * trade - return only games marked for trade by the user.
 * want - return only games marked want by the user.
 * wishlist - return only games on the users wishlist.
 * wanttoplay - return only games marked want to play by the user.
 * 
 * 1 - 10
 * minrating - return only games with a minimum rating by user.
 * rating - return only games with a max rating by user.
 * minbggrating - return only games with a min bgg rating.
 * bggrating - return only games with a max bgg rating.
 * 
 * number
 * minplays - return games with a minimum number of plays by user.
 * maxplays - return games with a maximum number of plays by user. 
 */

const initialState = {
    own: 1,
    rated: 0,
    played: 0,
    trade: 0,
    want: 0,
    wishlist: 0,
    wanttoplay: 0,
    minrating: 1,
    rating: 10,
    minbggrating: 1,
    bggrating: 10,
    minplays: null,
    maxplays: null,
};

export const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        setOption: (state, action) => {
            state[action.payload.option] = action.payload.value;
        },
    }
});

export const { setOption } = optionsSlice.actions;

export default optionsSlice.reducer;

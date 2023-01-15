import { getCollection } from "../services/bggCollection";
import { loadBoardgames } from "../store/slices/boardgames";
import { loadCollection } from "../store/slices/collection";

export const fetchCollectionByUsername = username => async (dispatch, getState) => {
    const results = await getCollection(username);
    dispatch(loadCollection({collection: results, username}))
    dispatch(loadBoardgames({ boardgames: results.items}))
}
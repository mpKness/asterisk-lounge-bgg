import { getUser } from "../services/bgg-user";
import { loadUser} from "../store/slices/user";

export const fetchUserByName = name => async (dispatch, getState) => {
    const result = await getUser(name);
    dispatch(loadUser(result))
}
import { getUser } from "../services/bggUser";
import { loadUser} from "../store/slices/user";

export const fetchUserByName = name => async (dispatch, getState) => {
    const result = await getUser(name);
    dispatch(loadUser(result))
}
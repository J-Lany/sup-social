import { usersAPI, authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = '/auth/SET_USER_DATA';
const TOGGLE_IS_FETCHING = '/auth/TOGGLE_IS_FETCHING';


const initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
}
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.data }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        default:
            return state;
    }
}

export const getCurrentUser = () => {
    return async (dispatch) => {
        let response = await usersAPI.getCurrentUser()
        if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data
            dispatch(setUserDAta(id, email, login, true))
        }

    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getCurrentUser())
        } else {
            let message = response.data.messages > 0 ? response.data.messages[0] : "Wrong email or password";
            dispatch(stopSubmit("login", { _error: message }))
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setUserDAta(null, null, null, false))
        }
    }
}


export const setUserDAta = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default authReducer;
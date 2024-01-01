import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

export const addPostActionCreator = (text) => ({ type: ADD_POST, text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })

export const getProfile = (userId) => {
    return async (dispatch) => {
        let data = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(data))
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(response.data))
    }
}

const initialState = {
    postsData: [
        {
            id: 1,
            message: "I'm good, thanks bro",
            likeCounts: 100500,
            avatar: "https://img.freepik.com/vecteurs-premium/illustration-vectorielle-femme-noire-portrait-image-avatar-fille-noire-affiche-du-mois-histoire-noirs_610881-10.jpg?w=2000"
        },
        {
            id: 2,
            message: "Hi! How are u? Duuuude",
            likeCounts: 1050,
            avatar: "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-and-hair-wearing-yellow-sweater-or-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
        },
        {
            id: 3,
            message: "It's my first post mfk!",
            likeCounts: 150,
            avatar: "https://img.freepik.com/vecteurs-premium/illustration-vectorielle-femme-noire-portrait-image-avatar-fille-noire-affiche-du-mois-histoire-noirs_610881-10.jpg?w=2000"
        },
    ],
    newPostText: "Let's writing",
    profile: null,
    status: "",
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.text,
                likeCounts: 0,
                avatar: "https://cdn1.vectorstock.com/i/1000x1000/50/65/avatar-female-vector-5945065.jpg"
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            };
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };
        case SET_USER_STATUS:
            return { ...state, status: action.status }
        default:
            return state;
    }
}

export default profileReducer
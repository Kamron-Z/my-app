import {authAPI} from "../../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_STATE = 'UPDATE-POST-STATE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        {
            id: 1,
            message: 'hi, my first post',
            likeCounter: 15
        },
        {
            id: 2,
            message: 'how are you?',
            likeCounter: 25
        },
        {
            id: 3,
            message: 'Amber',
            likeCounter: 5
        }
    ],
    newPostText: '',
    profileUser: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData,
                    {
                        id: 4,
                        message: state.newPostText,
                        likeCounter: 0
                    }],
            }
        case UPDATE_POST_STATE:
            return {
                ...state,
                newPostText: action.newPostText
            }

        case SET_USER_PROFILE: {
            return {
                ...state, profileUser: action.user
            }
        }
        default :
            return state
    }
}

export const addPostCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updatePostStateCreator = (text) => {
    return {
        type: UPDATE_POST_STATE,
        newPostText: text
    }
}

export const setUsersProfile = (user) => {
    return {
        type: SET_USER_PROFILE,
        user
    }
}

export const getProfile = (userId) => (dispatch)=> {
    authAPI.me(userId)
        .then(res => {
            dispatch(setUsersProfile(res.data))
        })
}

export default profileReducer
import {authAPI} from "../../api/api";

const SET_AUTH_USER = 'SET_AUTH_USER'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER: {
            return {
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

let setAuthCreator = (userId, email, login) => ({type: SET_AUTH_USER, data: userId, email, login})

export const getAuthUserData = () => (dispatch) => {
    authAPI.authUser()
        .then(res => {
            if (res.data.resultCode === 0) {
                let {id, email, login} = res.data.data
                dispatch(setAuthCreator({id, email, login}))
            }
        })
}


export default authReducer
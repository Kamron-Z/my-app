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

export let setAuthCreator = (userId, email, login) => ({type: SET_AUTH_USER, data: userId, email, login})


export default authReducer
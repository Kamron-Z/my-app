let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET_USERS'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let SET_TOTAL_COUNTER = 'SET_TOTAL_COUNTER'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCounter: 0,
    currentPage: 1
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNTER:
            return {
                ...state,
                totalUsersCounter: action.totalCount
            }
        default:
            return state
    }
}

export let followCreator = (userId) => ({type: FOLLOW, userId})

export let unFollowCreator = (userId) => ({type: UNFOLLOW, userId})

export let setUsersCreator = (users) => ({type: SET_USERS, users})

export let setCurrentPageCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export let setTotalCountCreator = (totalCount)=> ({ type: SET_TOTAL_COUNTER , totalCount })

export default userReducer
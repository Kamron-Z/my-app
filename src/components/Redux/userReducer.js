let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET_USERS'

let initialState = {
    users: [{
        id: 1,
        followed: false,
        fullName: 'Damir',
        status: 'I am good',
        location: {county: 'Uzbekiston', region: 'Samarkand'},
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEg7e95w0mQFIleibc4zyRrWNobQ4aFIuaQ&usqp=CAU',
    },
        {
            id: 2,
            followed: true,
            fullName: 'Axmad',
            status: 'I am good too',
            location: {county: 'Uzbekiston', region: 'Toshkent'},
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEg7e95w0mQFIleibc4zyRrWNobQ4aFIuaQ&usqp=CAU',
        },
        {
            id: 3,
            followed: true,
            fullName: 'Sunnat',
            status: 'I am super',
            location: {county: 'Uzbekiston', region: 'Samarkand'},
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEg7e95w0mQFIleibc4zyRrWNobQ4aFIuaQ&usqp=CAU',
        }]
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
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export let followCreator = (userId) => ({type: FOLLOW, userId})

export let unFollowCreator = (userId) => ({type: UNFOLLOW, userId})

export let setUsersCreator = (users) => ({type: SET_USERS, users})

export default userReducer
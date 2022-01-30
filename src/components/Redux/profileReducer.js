const ADD_POST = 'ADD-POST';
const UPDATE_POST_STATE = 'UPDATE-POST-STATE';

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
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let text = {
                id: 4,
                message: state.newPostText,
                likeCounter: 0
            }
            let copyState = {...state}
            copyState.postsData = [...state.postsData]
            copyState.postsData.push(text)
            copyState.newPostText = ''
            return copyState
        }
        case UPDATE_POST_STATE: {
            let copyState = {...state}
            copyState.newPostText = action.newPostText
            return copyState
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
export default profileReducer
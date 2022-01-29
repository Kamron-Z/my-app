const ADD_POST = 'ADD-POST';
const UPDATE_POST_STATE = 'UPDATE-POST-STATE';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let text = {
                id: 4,
                message: state.newPostText,
                likeCounter: 0
            }
            state.postsData.push(text)
            state.newPostText = ''
            return state
        case UPDATE_POST_STATE:
            state.newPostText = action.newPostText
            return state
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
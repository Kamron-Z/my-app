const ADD_DIALOGS = 'ADD-DIALOGS';
const UPDATE_DIALOGS_STATE = 'UPDATE-DIALOGS-STATE';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_DIALOGS:
            let text = {
                id: 5,
                message: state.newDialogsText
            }
            state.messageData.push(text)
            state.newDialogsText = ''
            return state
        case UPDATE_DIALOGS_STATE:
            state.newDialogsText = action.newPostText
            return state
        default :
            return state
    }
}

export const addDialogsCreator = () => {
    return {
        type: ADD_DIALOGS,
    }
}
export const updateDialogsCreator = (text) => {
    return {
        type: UPDATE_DIALOGS_STATE,
        newPostText: text
    };
}
export default dialogsReducer
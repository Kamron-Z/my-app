const ADD_DIALOGS = 'ADD-DIALOGS';
const UPDATE_DIALOGS_STATE = 'UPDATE-DIALOGS-STATE';

let initialState = {
    dialogsData: [
        {
            id: 1,
            name: 'Damir'
        },
        {
            id: 2,
            name: 'Axmad'
        },
        {
            id: 3,
            name: 'Fedya'
        }, {
            id: 4,
            name: 'Sunnat'
        }, {
            id: 5,
            name: 'Komron'
        }
    ],
    messageData: [
        {
            id: 1,
            message: 'hi'
        },
        {
            id: 2,
            message: 'How are you'
        },
        {
            id: 3,
            message: 'okay'
        }, {
            id: 4,
            message: 'hi'
        },

    ],
    newDialogsText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_DIALOGS:
        return  {
            ...state,
            newDialogsText: '',
            messageData : [...state.messageData, {id: 5, message: state.newDialogsText}],
        }
        case UPDATE_DIALOGS_STATE:
         return  {
             ...state,
             newDialogsText: action.newPostText
         }
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
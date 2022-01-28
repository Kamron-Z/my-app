const ADD_POST = 'ADD-POST';
const UPDATE_POST_STATE = 'UPDATE-POST-STATE';
const ADD_DIALOGS = 'ADD-DIALOGS';
const UPDATE_DIALOGS_STATE = 'UPDATE-DIALOGS-STATE';

let store = {
    _callSubscriber() {
        console.log('store changed')
    },
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
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
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let text = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likeCounter: 0
            }
            this._state.profilePage.postsData.push(text)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_POST_STATE) {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber(this._state)
        } else {
            if (action.type === UPDATE_DIALOGS_STATE) {
                this._state.dialogsPage.newDialogsText = action.newPostText
                this._callSubscriber(this._state)
            } else {
                if (action.type === ADD_DIALOGS) {
                    let text = {
                        id: 5,
                        message: this._state.dialogsPage.newDialogsText
                    }
                    this._state.dialogsPage.messageData.push(text)
                    this._state.dialogsPage.newDialogsText = ''
                    this._callSubscriber(this._state)
                }
            }
        }
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

export default store

window.store = store
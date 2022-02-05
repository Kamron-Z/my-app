import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
        },
        sidebar: {}
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}

export default store

window.store = store
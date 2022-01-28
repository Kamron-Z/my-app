
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
        }
    },

    subscribe (observer) {
        this._callSubscriber = observer
    },
    getState(){
        return this._state
    },

    dispatch(action){
        if(action.type === 'ADD-POST') {
            let text = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likeCounter: 0
            }
            this._state.profilePage.postsData.push(text)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-POST-STATE') {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber(this._state)
        }
    }
}

export default store

window.store = store

let store = {
    _rerender() {
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
        this._rerender = observer
    },
    getState(){
        return this._state
    },
    addPostStore  ()  {
        let text = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likeCounter: 0
        }
        this._state.profilePage.postsData.push(text)
        this._state.profilePage.newPostText = ''
        this._rerender(this._state)
    },
    updatePostState (newPostText) {
        this._state.profilePage.newPostText = newPostText
        this._rerender(this._state)
    }
}

export default store
window.store = store
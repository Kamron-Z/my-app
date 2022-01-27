let rerender = () => {
    console.log('store changed')
}

let store = {
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
}

export let addPostStore = () => {
    let text = {
        id: 4,
        message: store.profilePage.newPostText,
        likeCounter: 0
    }
    store.profilePage.postsData.push(text)
    store.profilePage.newPostText = ''
    rerender(store)
}

export let updatePostState = (newPostText) => {
    store.profilePage.newPostText = newPostText
    rerender(store)
}

export const subscribe = (observer) => {
    rerender = observer
}

export default store
window.store = store
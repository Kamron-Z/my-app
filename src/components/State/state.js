let renderApp = () => {
    console.log('state changed')
}

let state = {
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
        newPostState: ''
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
        newDialogState: ' ok'
    }
}

export let updatePostState = (update) => {
    state.profilePage.newPostState = update
    renderApp(state)
}

export let addPost = () => {
    let text = {
        id: 4,
        message: state.profilePage.newPostState,
        likeCounter: 0
    }
    state.profilePage.postsData.push(text)
    state.profilePage.newPostState = ''
    renderApp(state)
}

export let updateDialogState = (element) => {
    state.dialogsPage.newDialogState = element
    renderApp(state)
}

export let addDialog = () => {
    let text = {
        id: 4,
        message: state.dialogsPage.newDialogState
    }
    state.dialogsPage.messageData.push(text)
    state.dialogsPage.newDialogState = ''
    renderApp(state)
}

// subscribe < app = state >
export let subscribe = (observer) => {
    renderApp = observer
}

export default state
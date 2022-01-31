const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:let newPost = {
            id: state.posts.length + 1,
            message: action.text,
            likesCount: Math.round(Math.random() * 1000)
        };        state.posts.newPostText = ''
            state.posts.push(newPost);
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state
        default : return state;
    }
    if (action.type === ADD_POST) {

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.text;
    }

    return state;
}
export default profileReducer();
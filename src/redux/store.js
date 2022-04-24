import { rerenderEntireTree } from "../index";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import sidebarReducer from "./sidebar_reducer";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const NEW_MESSAGE_BODY = "NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [{ id: 1, message: "Hi,Victor", likesCount: "23" }],
      newPostText: "",
    },
    dialogsPage: {
      messages: [{ id: 1, message: "Say Hi to Victor!" }],
      dialogs: [
        {
          id: 1,
          name: "Victor",
          img: (
            <img
              src="https://i.pinimg.com/474x/59/95/18/5995186a3da28eef8906f5d3878c76c2.jpg"
              alt="🐑"
            />
          ),
        },
        {
          id: 2,
          name: "Adam",
          img: (
            <img
              src="https://i.pinimg.com/474x/59/95/18/5995186a3da28eef8906f5d3878c76c2.jpg"
              alt="🐑"
            />
          ),
        },
        {
          id: 3,
          name: "Vitalij",
          img: (
            <img
              src="https://i.pinimg.com/474x/59/95/18/5995186a3da28eef8906f5d3878c76c2.jpg"
              alt="🐑"
            />
          ),
        },
        {
          id: 4,
          name: "Vov4yk",
          img: (
            <img
              src="https://i.pinimg.com/474x/59/95/18/5995186a3da28eef8906f5d3878c76c2.jpg"
              alt="🐑"
            />
          ),
        },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  subscribe(observer) {},
  _callSubscriber(state) {
    rerenderEntireTree(state);
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export const addPostActionCreator = (text) => {
  let adoptedText = text;
  return {
    type: ADD_POST,
    text: adoptedText,
  };
};
export const onPostChangeActionCreator = (text) => {
  let postText = text;
  return {
    type: UPDATE_NEW_POST_TEXT,
    text: postText,
  };
};

export const newMessageBodyActionCreator = (body) => {
  let messageBody = body;
  return {
    type: NEW_MESSAGE_BODY,
    body: messageBody,
  };
};
export const sendMessageActionCreator = (body) => {
  let messageText = body;
  return {
    type: SEND_MESSAGE,
    body: messageText,
  };
};
export default store;
window.store = store;

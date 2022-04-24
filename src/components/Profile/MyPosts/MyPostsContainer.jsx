import React from "react";
import { addPostActionCreator } from "../../../redux/store";
import { onPostChangeActionCreator } from "../../../redux/store";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();
  let addPost = (text) => {
    if (text) {
      props.store.dispatch(addPostActionCreator(text));
    }
  };
  let onPostChange = (text) => {
    props.store.dispatch(onPostChangeActionCreator(text));
    // let action = onPostChangeActionCreator(text);
    // props.dispatch(action);
  };
  return (
    <MyPosts
      onPostChange={onPostChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;

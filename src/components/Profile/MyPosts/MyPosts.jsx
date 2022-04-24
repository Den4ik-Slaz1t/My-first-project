import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likeCounts={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPostClick = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };
  let onPostChangeAction = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text);
  };
  return (
    <div className={c.postsBlock}>
      <h2>My Posts</h2>
      <div>
        <div>
          <form action={"#"}>
            <input
              type={"text"}
              onChange={onPostChangeAction}
              placeholder={"What`s your story for today"}
              ref={newPostElement}
              value={props.newPostText}
              className={c.textInput}
            />
          </form>
        </div>
        <div>
          <button onClick={onAddPostClick} className={c.button}>
            Add new story➡
          </button>
        </div>
      </div>
      <div className={c.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;

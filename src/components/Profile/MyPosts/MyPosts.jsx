import React from 'react';
import c from './MyPosts.module.css'
import Post from './Post/Post.jsx'
// import {updateNewPostText} from "./redux/state";
import {addPostActionCreator} from "../../../redux/state";
import {onPostChangeActionCreator} from "../../../redux/state";


const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likeCounts={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        if (text) {
            props.dispatch(addPostActionCreator(text))
        }
    }
    let onPostChange = () => {

        let text = newPostElement.current.value;
        props.dispatch(onPostChangeActionCreator(text))
    }
    return (
        <div className={c.postsBlock}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <form action={'#'}>
                        <input type={'text'} onChange={onPostChange} placeholder={'What`s your story for today'} ref={newPostElement} value={props.newPostText}
                               className={c.textInput}/>
                    </form>
                </div>
                <div>
                    <button onClick={addPost} className={c.button}>Add new story➡</button>
                </div>
            </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    )
}
// <form action="#">
//      <br><br><br>
//         <button className="button">story➡</button>
// </form>
export default MyPosts;
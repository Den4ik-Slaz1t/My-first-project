import React from 'react';
import c from './Post.module.css'

const Post = (props) => {
    
    return(
      <div className={c.item}>
        <img src="https://i.pinimg.com/474x/59/95/18/5995186a3da28eef8906f5d3878c76c2.jpg" alt="🐑" />
        {props.message}
        <div>
          <span>Like</span> {props.likeCounts}
          </div>
      </div>
    )  
}
export default Post;
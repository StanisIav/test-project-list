import React, { useState } from 'react';
import MyButton from './Form/MyButton';
import PostItem from './PostItem';


const PostList = ({ postuu, remove }) => {

    if (postuu.length == 0) {
        return <div>
            <h1 style={{ textAlign: "center", color: "green" }}>
                Посты не найдены
            </h1>
        </div>
    }

    return (
       <ul> 
            {postuu.map(post => 
                    <PostItem id={post.id} title={post.title} body={post.body} remove={remove} post={post} key={post.id}/> 
               )}
        </ul> 
    );
}

export default PostList;
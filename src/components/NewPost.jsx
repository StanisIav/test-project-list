import React from "react";

    const NewPost = (props) => {

        let posts = [
            {index: 1, text: 'Яблоко'},
            {index: 2, text: 'Мандарин'},
            {index: 3, text: 'Банан'},
            {index: 4, text: 'Кокос'},
            {index: 5, text: 'Груша'}
        ];

         

        return(
            <ul>
                {posts.map( post => <Posting key={post.toString()} post={{index: post.index, text: post.text}}/>)}
            </ul>
        );        
    }

    const Posting = (props) => {
        return(
        <div className="post">
        <div className="post__content">
            <strong>{props.post.index}</strong><br/>
            <span style={{ fontSize: '30px'}}>{props.post.text}</span>
        </div>
        <div className="post__btn">
            <button>Удалить</button>
        </div>
    </div>
    );
    }

export default NewPost;

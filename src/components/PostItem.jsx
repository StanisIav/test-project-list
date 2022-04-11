import React from "react";
import MyButton from "./Form/MyButton";
import { useNavigate  } from 'react-router-dom';

const PostItem = (props) => {
const navigate = useNavigate();

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.id}</strong><br />
                <span>{props.title}{props.body}</span>
            </div>
            <div className="post__btn">
                <MyButton
                    onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>
                <MyButton onClick={() => navigate(`/${props.id}`)}>
                    Перейти
                </MyButton>
            </div>
        </div>
    );
}


export default PostItem; 
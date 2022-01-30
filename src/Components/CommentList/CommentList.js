import React, {useState, useEffect} from "react";
import './CommentList.css';
import {Comment} from "../Comment/Comment";

export function CommentList({commentList, reply, setCommentList, currentUser}) {
    return (
        <div>
        {commentList.map(comment => <Comment reply={reply} key={comment.id} comment={comment} 
        setCommentList={setCommentList} currentUser={currentUser}></Comment>)}
        </div> )
    

}

import React, {useState, useEffect} from "react";
import './CommentList.css';
import {Comment} from "../Comment/Comment";

export function CommentList({commentList, reply, setCommentList, currentUser, id, setId, isDelete, setIsDelete}) {

    const delID = isDelete.map(c => c.id);
    const passedComm = commentList.filter(c => !delID.includes(c.id)); 

    return (
        <div>
        {passedComm.map(comment => <Comment isDelete={isDelete} setIsDelete={setIsDelete} setId={setId} id={id} reply={reply} 
        key={comment.id} comment={comment} setCommentList={setCommentList} currentUser={currentUser}></Comment>)}
        </div> )
    

}

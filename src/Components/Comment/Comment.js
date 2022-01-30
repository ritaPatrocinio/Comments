import React, {useState, useEffect} from 'react';
import './Comment.css';
import {CommentList} from "../CommentList/CommentList";
import { NewComment } from '../NewComment/NewComment';

export function Comment({comment, reply, setCommentList, currentUser}) {

    const [liked, setLiked] = useState(false);
    const [clickedReply, setClickedReply] = useState(false);
    const [commentReplies, setCommentReplies] = useState(reply ? [] : comment.replies);

    const Like = () =>{
        setLiked(true);
    }

    const unLike = () =>{
        setLiked(false);
    }

    const Reply = () => {
        setClickedReply(!clickedReply)
    }
    
    const render = () => {
        return (
            <div>
            <div className="Border">
                <div className='Like'>
                    <button onClick={Like}>+</button>
                    <p className='Like'>{liked ? comment.score +1 : comment.score}</p>
                    <button onClick={unLike}>-</button>
                </div>
                <div className='Section'>
                <div className='UserSection'>
                    {/* <img src={comment.user.image.png} alt="img"></img> */}
                    <h6 className='styleUser'>{comment.user.username}</h6>
                    <p className='styleDate'>{comment.createdAt}</p>
                    <button className='Reply' onClick={Reply}>Reply</button>
                    {comment.username === currentUser.username ? 
                    <div>
                    <button className='Reply' onClick={Reply}>Edit</button>
                    <button className='Reply' onClick={Reply}>Delete</button>
                    </div> : '' }
                </div>
                <br></br>
                <p className='flex'>{comment.content}</p>
                </div>
            </div>
            <div className='Line'>
            {clickedReply ? <NewComment setClickedReply={setClickedReply} currentUser={currentUser} replyCom={comment} 
            newThread={false} setCommentList={setCommentList} setCommentReplies={setCommentReplies}></NewComment> : ''}
            
            <CommentList setCommentList={setCommentList} currentUser={currentUser} reply={true} 
            commentList={commentReplies} ></CommentList>
            </div>
            </div>
        )
    }
    return (
        <div>
        {reply ? <div className="CommentR">{render()} </div> : <div className="Comment"> {render()}</div>}
        </div>
    )
}

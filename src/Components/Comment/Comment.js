import React, {useState, useEffect} from 'react';
import './Comment.css';
import {CommentList} from "../CommentList/CommentList";
import {NewComment} from '../NewComment/NewComment';
import {PopUp} from '../PopUp/PopUp';


export function Comment({comment, reply, setCommentList, currentUser, id, setId, isDelete, setIsDelete}) {

    const [liked, setLiked] = useState(false);
    const [clickedReply, setClickedReply] = useState(false);
    const [commentReplies, setCommentReplies] = useState(reply ? [] : comment.replies);
    const [edit, setEdit] = useState(false);
    const [commentContent, setCommentContent] = useState(comment.content);
    const [editedCom, setEditedCom] = useState(comment.content);
    const [showPopUp, setShowPopUp] = useState(false);

    const Like = () => {
        setLiked(true);
    }
    const unLike = () => {
        setLiked(false);
    }
    const Reply = () => {
        setClickedReply(!clickedReply)
    }
    const Edit = () => {
        setEdit(true);
    }
    const handleChange = e => {
        setEditedCom(e.target.value)
    }
    const Submit = () => {
        setCommentContent(editedCom);
        setEdit(false);
    }
    const Cancel = () => {
        setEdit(false);
        setEditedCom(comment.content);
    }
    const Delete = () => {
        setShowPopUp(true);
    }
    
    const render = () => {
        return (
            <div>
            <div className="Border">
                <div className='Like'>
                    <button className='LikesBut' onClick={Like}>+</button>
                    <p className='Like'>{liked ? comment.score +1 : comment.score}</p>
                    <button className='LikesBut UnLikesBut' onClick={unLike}>-</button>
                </div>
                <div className='Section'>
                <div className='UserSection'>
                    <img src={require('../../' + comment.user.image.png.replace('./', ''))} alt="img"></img>
                    <h6 className='styleUser'>{comment.user.username}</h6>
                    <p className='styleDate'>{comment.createdAt}</p>
                    <div className='ActionsDiv'>
                        {comment.user.username === currentUser.username ? 
                        <div className='EditDelDiv'>
                        <div className='ReplyDiv'>
                            <svg className='iconReply' width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>
                            <button className='Reply' onClick={Edit}>Edit</button>
                        </div>
                        <div className='ReplyDiv'>
                            <svg className='iconReply' width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>
                            <button className='Reply Delete' onClick={Delete}>Delete</button>
                        </div>
                        </div> : '' }
                        <div className='ReplyDiv'>
                            <svg className='iconReply' width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>
                            <button className='Reply' onClick={Reply}>Reply</button>
                        </div>
                    </div>
                </div>
                <br></br>
                {comment.user.username === currentUser.username && edit ?
                <div>
                <textarea className='textAreaEdit' onChange={handleChange} value={editedCom} placeholder="write comment" name="w3review" rows="4" cols="110"></textarea>
                <button className="SendBut Submit" onClick={Submit}>Update</button>
                <button className="SendBut Cancel" onClick={Cancel}>Cancel</button></div> : 
                <p className='flex'>{commentContent}</p> }
                
                </div>
            </div>
            <div className='Line'>
            {clickedReply ? <NewComment setId={setId} id={id} setClickedReply={setClickedReply} currentUser={currentUser} replyCom={comment} 
            newThread={false} setCommentList={setCommentList} setCommentReplies={setCommentReplies}></NewComment> : ''}
            
            <CommentList isDelete={isDelete} setIsDelete={setIsDelete} setId={setId} id={id} setCommentList={setCommentList} 
            currentUser={currentUser} reply={true} commentList={commentReplies} ></CommentList>
            </div>
            </div>
        )
    }


    return (
        <div>
        {reply ? <div className="CommentR">{render()} </div> : <div className="Comment"> {render()}</div>}
        {showPopUp ? <PopUp setShowPopUp={setShowPopUp} comment={comment} isDelete={isDelete} setIsDelete={setIsDelete}></PopUp> : ''}
        </div>
        )
    }

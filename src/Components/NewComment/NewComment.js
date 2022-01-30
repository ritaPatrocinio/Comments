import React from "react";
import { useState } from "react/cjs/react.development";
import './NewComment.css';


export function NewComment({currentUser, newThread, setCommentList, replyCom, setClickedReply, setCommentReplies}) {
    const [newCom, setNewCom] = useState('');
    const [id, setId] = useState(5)

    const handleChange = e => {
        setNewCom(e.target.value)
    }

    const Send = () => {
        if(newCom.trim() === ''){
            return
        }
          if (newThread){
            const newC =  {
            "id": id,
            "content": newCom,
            "createdAt": "1 min ago",
            "score": 0,
            "user": currentUser,
            "replies": []
          } 
            setCommentList((prev) => [...prev, newC]); 
        } 
        else {
            const newC = {
            "id": id,
            "content": newCom,
            "createdAt": "1 min ago",
            "score": 0,
            "replyingTo": replyCom.username,
            "user": currentUser,
            "replies": []
          }
        //   const replyID =  replyCom.replies ?  replyCom.id : replyCom.replyingToId;

          setCommentReplies((prev) => { setClickedReply(false); return [...prev, newC]});
            // const replyC = prev.filter(c => c.id === replyID);
            
            // return prev.push(newC); 
         
    };
        setNewCom('');
        setId(id +1);
    }

    const render = () =>{
        return (
            <div className="flex">
                {/* <img src={comment.user.image.png} alt="img"></img>  */}
               <textarea onChange={handleChange} value={newCom} placeholder="write comment" name="w3review" rows="4" cols="110"></textarea>
               <button className="SendBut" onClick={Send}>Send</button>
            </div>
        ) 
    }

        return (
            <div >
                {newThread ? <div className="BorderN">{render()}</div> : <div className="BorderReply">{render()}</div>}
            </div>
        )
}

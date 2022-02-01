import React, {useState, useEffect} from 'react';
import './App.css';
import data from './data.json';
import {CommentList} from "./Components/CommentList/CommentList";
import {NewComment} from "./Components/NewComment/NewComment";

function App() {
const [currentUser, setCurrentUser] = useState(data.currentUser);
const [commentList, setCommentList] = useState(data.comments);
const [id, setId] = useState(5);
const [isDelete, setIsDelete] = useState([]);

  return (
    <div className="App">
      <br></br>
      <CommentList isDelete={isDelete} setIsDelete={setIsDelete} setId={setId} id={id} reply={false} commentList={commentList} 
      setCommentList={setCommentList} currentUser={currentUser} ></CommentList>
      <NewComment isDelete={isDelete} setIsDelete={setIsDelete} setId={setId} id={id} replyCom={{}} newThread={true} 
      setCommentList={setCommentList} currentUser={currentUser}></NewComment>
      <br></br>
    </div>
  );
}

export default App;

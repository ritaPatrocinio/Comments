import React, {useState, useEffect} from 'react';
import './App.css';
import data from './data.json';
import {CommentList} from "./Components/CommentList/CommentList";
import {NewComment} from "./Components/NewComment/NewComment";

function App() {
const [currentUser, setCurrentUser] = useState(data.currentUser);
const [commentList, setCommentList] = useState(data.comments);

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <br></br>
      {/* <img src='./logo.svg'></img> */}
      <CommentList reply={false} commentList={commentList} setCommentList={setCommentList} currentUser={currentUser}></CommentList>
      <NewComment replyCom={{}} newThread={true} setCommentList={setCommentList} currentUser={currentUser}></NewComment>
      <br></br>
    </div>
  );
}

export default App;

import React from "react";
import './PopUp.css';


export function PopUp({isDelete, setIsDelete, comment, setShowPopUp}) {

    const Delete = () => {
        setIsDelete((prev) => [...prev, comment]);
    }
    

    return (
        <div className="modal">
            <div className="modal_content">
                <p>Delete Comment</p>
                <p>Are you sure you want to delete this comment?</p>
                <br></br>
                <button className="SendBut Submit DeleteBut" onClick={Delete}>Yes,delete</button>
                <button className="SendBut Cancel NO" onClick={() => setShowPopUp(false)}>No, cancel</button>
            </div>
        </div>
    )
}

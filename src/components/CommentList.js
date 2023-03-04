import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'


function CommentList(props) {
  const user = useContext(NoteContext);

  return (
    <div className='comment-box'>
        <div className='comment-box1'>
           <img src={user.state.userImage} alt="user" /><div>{props.comments}</div>
        </div>
        <i className="bi bi-x-circle-fill"
        onClick={()=>props.delComHandler(props.id)}></i>
    </div>
  )
}

export default CommentList

import React, { useState , useContext } from 'react';
import CommentList from './CommentList';
import NoteContext from '../context/notes/NoteContext';



function PostDisplay(props) {
    const user = useContext(NoteContext);

    const {image,like,caption} = props.post;

    const[commentInput,setCommentInput]=useState('');
    
    const[commentList,setCommentList]=useState([]); // comment Array


    const delComment =(key)=>{
        const updatedComList = commentList.filter((comment,i)=>{
           return key !== i
        })
        setCommentList(updatedComList)


    }
    
    const commentArray = commentList.map((comments,i)=>{
        return (
        
          <CommentList comments={comments} 
          key={i}
          id={i} 
          delComHandler={delComment}/>
        )

    })

    const OnChangeHandler = (e) => {
        setCommentInput(e.target.value)
    }

    const addComment = ()=>{
        setCommentList([...commentList,commentInput])
        
        setCommentInput("")
        
    }

       
    

  return (
        <div className="post-conatiner">

            <div className="user-name ">
                <div className='userName-container'>
                    <img className='userName-icon' src={user.state.userImage} alt='user'/>
                    <span><b>{user.state.userName}</b></span>
                </div>
                <i className="bi bi-trash" onClick={()=>{props.postDelete(props.post.id)}}></i>
            </div>

            <div className='post-image'>
                <img src={image}  alt="..."/>   
            </div>

            <div className="actionContainer">
                <i className="bi bi-heart-fill" onClick={()=>{props.onSelect(props.post.id)}}> {like}</i>
                <i className="bi bi-chat-right-dots">  {commentList.length}</i>
                {/* <i className="bi bi-share"></i> */}
            </div>

            <div className="caption-container">
                <span className='userName'><b>{user.state.userName}:</b></span>
                <span>{caption}</span>
            </div>

            <div className="comment-container">
                <img className='userName-icon' src={user.state.userImage} alt='user'/>
                <input className="comment-input" type="text" placeholder="Add a Comment..." aria-label=".form-control-sm example"
                name='comment'
                onChange={OnChangeHandler}
                 value={commentInput}
                 />
                <i className="bi bi-plus-circle-fill"
                onClick={addComment}></i>
            </div>
           
            
            <div className="comment-list">
                {commentArray}
            </div>
            
        
        </div>
  )
}

export default PostDisplay

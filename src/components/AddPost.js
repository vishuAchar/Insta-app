import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NoteContext from '../context/notes/NoteContext';

function AddPost(props) {

    //data from the post
    const items = {
        image:"",
        caption:"",
        like:0,
    };

    const user = useContext(NoteContext)

    //input form AddPost
    const [userReg,setUserReg] = useState(items);
    const navigate = useNavigate();

    //
    const OnChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserReg({...userReg, [name] : value })
    }

    const OnClickHandler = (e) => {
        e.preventDefault();
        props.onSubmit(userReg);
        setUserReg(items);
        navigate('/viewPost')
    }
  return (
    <>
    <h3>Welcome {user.state.userName} !! </h3>
    <h4>Please add a Picture and caption  </h4>
    <div className="inputa">
        <div className="input-groupa">
            {/* <span className="input-group-text">Images Url</span> */}
            <input type="text" 
            placeholder='Enter Image Url..'
            className="imageInput" 
            aria-label="Text input with segmented dropdown button"
            name='image'
            onChange={OnChangeHandler}
            value={userReg.image}/>
            
        </div>
        <div className="input-groupa">
            {/* <span className="input-group-text">Caption</span> */}
            <input type="text" 
            placeholder='Enter Caption..'
            className="imageInput" 
            aria-label="Text input with segmented dropdown button"
            name='caption'
            onChange={OnChangeHandler}
            value={userReg.caption}/>
        </div>
        <button type="button" 
        className="add-button"
        onClick={OnClickHandler}>Add</button>
    </div>
    </>
  )
}

export default AddPost

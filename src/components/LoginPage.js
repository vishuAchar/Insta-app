import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NoteContext from '../context/notes/NoteContext';

function LoginPage() {
    const userDetails = {
        userName:"",
        userEmail:"",
        userImage:"",
    }
    const [user,setUser] = useState(userDetails);
    const {state,setState} = useContext(NoteContext);
    const navigate = useNavigate();
    
    //userLoginHandler
    const userInputHandler=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user,[name]:value})
    }
    

    const OnLoginHandler =(e)=>{
        e.preventDefault();
        if(user.userName ==="" || user.userImage ==="")
        alert("Please Enter both inputs!")
        else{
        setState(user);
        navigate('/addPost')
        }
    }


  return (
    <div className='input-login'>

         <div className="input-groupLogin">
            <label htmlFor="inputuserName" className="form-login">User Name</label>
            <input type="text" name = "userName" className="form-loginInput" id="inputuserName"
                placeholder='Enter user name'
                onChange={userInputHandler}
                value={user.userName}
                />
        </div>

        {/* <div className="input-groupLogin">
            <label htmlFor="inputEmail" className="form-login">Email</label>
            <input type="email" name='userEmail' className="form-loginInput" id="inputEmail"
                placeholder='Enter your email here'
                onChange={userInputHandler}
                value={user.userEmail}
                />
        </div> */}

        <div className="input-groupLogin">
            <label htmlFor="inputImage" className="form-login">User Image Url</label>
            <input type="text" name='userImage' className="form-loginInput" id="inputImage"
                placeholder='Enter your image url here'
                onChange={userInputHandler}
                value={user.userImage}
                />
        </div>

        {/* <div className="input-groupLogin">
        <label htmlFor="inputGroupFile02" className="form-login">Upload User Avatar</label>
            <input type="file" name='userImage' className="form-loginInput" id="inputGroupFile02"
            onChange={userInputHandler}
            value={user.userImage}
            />
        </div> */}

        <button type="button" 
        className="add-button"
        onClick={OnLoginHandler}
        >Log In</button>

    </div>
  )
}

export default LoginPage

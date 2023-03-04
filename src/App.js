import { useState} from 'react';
import './App.css';
import AddPost from './components/AddPost';
import LoginPage from './components/LoginPage';
import NavBar from './components/NavBar';
import PostList from './components/PostList';
import NoteState from './context/notes/NoteState';
import {  Routes, 
          Route
        } from 'react-router-dom';

function App() {
  

  const [postList,setPostList] = useState([]);


  const getData = (data) =>{
    setPostList([...postList,{id:new Date().getTime().toString(),...data}])
  }


  const likeSelect =(index)=>{
  let updatedList = postList.map((list)=>{
    if(index===list.id){
      list.like++;
    }
    return list
  })
  setPostList(updatedList);
  }


  const delSelect=(index)=>{
    const updatedPostList = postList.filter((post,i)=>{
      return index !== post.id
    })
    setPostList(updatedPostList);  
  }

  return (
    <div className='App'>
    <NoteState>
    <NavBar />
    <Routes>
      <Route path="/" element={<LoginPage/>}/>

      <Route path="/addPost" element={<AddPost onSubmit={getData}/>}/>

      <Route path="/viewPost" element={<PostList 
          postList={postList}
          likeSelect={likeSelect}
          delSelect={delSelect}
        />}/>
 
    </Routes>
    </NoteState>  
    </div>
  );
}

export default App;

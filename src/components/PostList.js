import React from 'react'
import PostDisplay from './PostDisplay';

function PostList(props) {

  const likeHandler=(id)=>{
    props.likeSelect(id);
  }

  const delPost = (data) =>{
    props.delSelect(data);


  }

    const renderPostList = props.postList.map((list,i)=>{
        return (
          // console.log('render',list,i)
          <PostDisplay 
          post={list}
          key={i} 
          onSelect={likeHandler}
          postDelete={delPost}/>
        )

    })

  return (
    <div>
      {renderPostList}
    </div>
  )
}

export default PostList

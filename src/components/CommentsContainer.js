import React from 'react'
import Comment from "./Comments"

function CommentsContainer({ comments }) {

  return (
    <div>
      <h2>{comments.length} Comments</h2>

      {comments.map(commentList => 
      <Comment key={commentList.id} comment={commentList}/>
      )}
      

    </div>
  )
}

export default CommentsContainer


// <Answer>=========================================================================================</>
// import React from 'react'
// import Comment from './Comments'

// function CommentsContainer({ comments }) {
//   return (
//     <div>
//         <h2>{comments.length} Comments</h2>

//         {comments.map(commentObj => 
//         <Comment key={commentObj.id} comment={commentObj} />)}

//     </div>
//   )
// }

// export default CommentsContainer
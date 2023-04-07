
import React from 'react'

function Comments({ comment }) {
  return (
    <div>
      <h2>{comment.user}</h2>
      <p>{comment.comment}</p>
      {/* <button>{comment.upvotes} 👍</button>
      <button>{comment.downvotes} 👎</button> */}
    </div>
  )
}

export default Comments


// <Answer>=========================================================================================</>
// import React from 'react'

// function Comments({ comment }) {
//   return (
//     <div>
//       <h3>{comment.user}</h3>
//       <div>{comment.comment}</div>
//     </div>
//   )
// }

// export default Comments
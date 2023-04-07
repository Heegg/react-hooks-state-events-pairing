import React, { useState } from 'react'

function LikeButtons({ upvotes, downvotes }) {

  const [ upNumber, setUpNumber ] = useState(upvotes) 
  const [ downNumber, setDownNumber ] = useState(downvotes)
  

  function handleUpvotes() {
    setUpNumber(upNumber + 1)
  }

  function handleDownvotes() {
    setDownNumber(downNumber + 1)
  }

  return (
    <>
        <p>
        <button onClick={handleUpvotes}>{upNumber} 👍</button>
        <button onClick={handleDownvotes}>{downNumber} 👎</button>
        </p>
    </>
  )
}

export default LikeButtons


// <Answer>=========================================================================================</>
// import React from 'react'
// import { useState } from 'react'

// function LikeButtons({ upvotes, downvotes }) {

//     const [ upNumber, setUpNumber ] = useState(upvotes)
//     const [ downNumber, setdownNumber ] = useState(downvotes)
    
//     // These functions were replaced by changeNumber
//     // const addOneToUp = () => {
//     //     setUpNumber(upNumber + 1)
//     // }
   
//     // const addOneToDown = () => {
//     //     setDownVotesCount(downNumber + 1)
//     // }

//     const changeNumber = (like = true) => {
//         if (like) {
//             setUpNumber(upNumber + 1)
//         } else {
//             setdownNumber(downNumber + 1)
//         }
//     }

//   return (
//     <div>
//         <p>
//             <button onClick={() => changeNumber()}>{upNumber}👍</button>
//             <button onClick={() => changeNumber(false)}>{downNumber}👎</button>
//         </p>
//     </div>
//   )
// }

// export default LikeButtons
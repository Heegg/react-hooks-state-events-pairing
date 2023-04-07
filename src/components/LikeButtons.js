import React from 'react'

function LikeButtons({ upvotes, downvotes }) {
  return (
    <>
        <p>
        <button>{upvotes} 👍</button>
        <button>{downvotes} 👎</button>
        </p>
        <p><button>Hide Comments</button></p>
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
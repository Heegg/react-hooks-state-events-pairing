import React from 'react'

function InfoSection({ title, views, createdAt }) {
  return (
    <div>
      <h3>{title}</h3>
      {views} Views | Uploaded {createdAt}
    </div>
  )
}

export default InfoSection



// <Answer>=========================================================================================</>
// import React from 'react'

// function InfoSection({ header, number, date }) {
//   return (
//     <div>
//       <h3>{header}</h3>
//       <p>{number} Views | Uploaded {date}</p>
//     </div>
//   )
// }

// export default InfoSection
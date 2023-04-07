import video from "../data/video.js";
import Video from "./Video.js"
import InfoSection from "./InfoSection.js"
import LikeButtons from "./LikeButtons.js"
import CommentsContainer from "./CommentsContainer.js"
import { useState } from "react";


function App() {
  console.log("Here's your data:", video);

  const [ isHide, setIsHide ]= useState(true)

  const handleHideClick = () => {
    setIsHide(!isHide)
  }

  return (
    <div className="App">
      <Video 
      embedUrl={video.embedUrl}/>
      <InfoSection 
      title={video.title} views={video.views} createdAt={video.createdAt} header="React Today and " />
      <LikeButtons 
      upvotes={video.upvotes} downvotes={video.downvotes}/>
        <button onClick={handleHideClick}>
          { isHide ? "Hide" : "Show" } Comments
        </button>
      <hr />
        {isHide ? <CommentsContainer comments={video.comments}/> : null}
      <CommentsContainer 
      comments={video.comments}/>
    </div>
  );
}

export default App;


// <Start>=========================================================================================</>
// import video from "../data/video.js";

// function App() {
//   console.log("Here's your data:", video);

//   return (
//     <div className="App">
//       <iframe
//         width="919"
//         height="525"
//         src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//         frameBorder="0"
//         allowFullScreen
//         title="Thinking in React"
//       />
//     </div>
//   );
// }

// export default App;


// <Answer>=========================================================================================</>
// https://www.youtube.com/watch?v=BebGlh11NOw
// https://www.youtube.com/watch?v=P-T-Hw0XyIo

// import { useState } from "react";
// import videoData from "../data/video.js";
// import Video from './Video'
// import InfoSection from "./InfoSection.js";
// import LikeButtons from "./LikeButtons.js";
// import CommentsContainer from "./CommentsContainer.js";


// function App() {
  
//     const [ isHideComment, setIsHideComment ] = useState(true)

//     const handleClick = () => {
//       setIsHideComment(!isHideComment)
//      }


//   return (
//     <div className="App">
//       <Video embedUrl={videoData.embedUrl} title={videoData.title} />
//       <InfoSection header={videoData.title} number={videoData.views} date={videoData.createdAt} />
//       <LikeButtons upvotes={videoData.upvotes} downvotes={videoData.downvotes} />
//             <button onClick={handleClick}>
//               { isHideComment ? "Hide" : "Show" } Comments
//             </button>
//             <hr />

//             {isHideComment ? <CommentsContainer comments={videoData.comments}/> : null} 

//       <CommentsContainer comments={videoData.comments} />
//       </div>
//   );
// }

// export default App;


// import React from "react";
// import "./Post.css";

// function Post() {
//   return (
//     <div className="post">
//       <div className="post__avatar">{/* 프로필 이미지 삽입 구역 */}</div>
//       <div className="post__body">
//         <div className="post__header">
//           <div className="post__headerText">
//             <h3>
//               Jiwon <span>{/* 검증 표시 마크 */}</span>
//             </h3>
//           </div>
//           <div className="post__headerDescription">
//             <p>어쩌고 저쩌고</p>
//           </div>
//         </div>
//         <img src="img/코딩.webp"></img>
//         <div className="post__footer"></div>
//       </div>
//     </div>
//   );
// }
// export default Post;

import React, { forwardRef } from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
// import Icon from "@mui/material/Icon";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

const Post = forwardRef(({ displayName, username, time, text }, ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post__avatar">
        {" "}
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Stack>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              <span className="post__headerSpecial"> {username}</span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
            <p>{time}</p>
          </div>
        </div>
        <img src="/img/코딩.webp" alt="" />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
});

export default Post;

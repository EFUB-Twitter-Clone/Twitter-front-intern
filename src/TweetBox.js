// import React from "react";
// import "./TweetBox.css";
// // import { Avatar, Button } from "@material-ui/core";

// function TweetBox() {
//   return (
//     <div className="tweetBox">
//       <form>
//         <div className="tweetBox__input">
//           {/* 프로필 사진 삽입 부분 */}
//           <input placeholder="What's happenning?" type="text" />
//         </div>
//         <input
//           className="tweetBox__imageInput"
//           placeholder="Enter image URL"
//           type="text"
//         />
//         <button className="tweetBox__tweetButton">Tweet</button>
//       </form>
//     </div>
//   );
// }

// export default TweetBox;

import React, { useState } from "react";
import "./TweetBox.css";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import GifIcon from "@mui/icons-material/Gif";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>

        <div className="tweet__icons">
          {" "}
          <div className="tweet__icon">
            <AddPhotoAlternateIcon />
            <GifIcon />
            <SentimentSatisfiedAltIcon />
          </div>
          <Button
            onClick={sendTweet}
            type="submit"
            className="tweetBox__tweetButton"
          >
            Tweet
          </Button>{" "}
        </div>
      </form>
    </div>
  );
}

export default TweetBox;

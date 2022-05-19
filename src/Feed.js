import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import { useState } from "react";

function Feed() {
  // 게시글 작성된 시간 설정

  const [timer, setTimer] = useState("00:00:00");

  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTimer(`${hours}:${minutes}:${seconds}`);
  };
  const startTimer = () => {
    setInterval(currentTimer, 1000);
  };

  startTimer();

  //게시글 작성
  const [posts, setPosts] = useState([]);
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* post */}
      <Post
        displayName="sonny jw"
        username="ssssangha"
        text="i'm working now"
        time={timer}
      />
    </div>
  );
}

export default Feed;

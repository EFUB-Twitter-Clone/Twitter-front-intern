import { useCallback, useState } from "react";
import "./TodoInsert.css";
import React from "react";
import Avatar from "@mui/material/Avatar";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import GifIcon from "@mui/icons-material/Gif";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <div className="TodoInsert">
      <form onSubmit={onSubmit}>
        <div className="TodoInsert__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          <input
            placeholder="what's in your mind?"
            value={value}
            onChange={onChange}
          />
        </div>

        <div className="TodoInsert__icons">
          <div className="TodoInsert__icon">
            <AddPhotoAlternateIcon />
            <GifIcon />
            <SentimentSatisfiedAltIcon />
          </div>

          <button className="TodoInsert__Button" type="submit">
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoInsert;

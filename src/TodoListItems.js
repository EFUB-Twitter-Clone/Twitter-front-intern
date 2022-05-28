import { useState } from "react";
import "./TodoListItem.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const TodoListItem = ({ todo, onRemove }) => {
  return (
    <div className="TodoListItem">
      <div className="TodoListItem__avatar">
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Stack>
      </div>
      <div className="TodoListItem__body">
        <div className="TodoListItem__header">
          <div className="TodoListItem__headerText">
            <h3>
              {todo.id}
              <span className="TodoListItem__headerSpecial">
                {todo.nickname} {todo.createdDate}
              </span>
            </h3>
          </div>
          <div className="TodoListItem__headerDescription">
            <p>{todo.content}</p>{" "}
          </div>

          <div className="TodoListItem__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />{" "}
            <div className="remove" onClick={() => onRemove(todo.id)}>
              <DeleteForeverIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;

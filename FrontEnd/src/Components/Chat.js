import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import MicOutlinedIcon from "@material-ui/icons/MicOutlined";

function Chat() {
  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar />
        <div className='chat__headerInfo'>
          <h3>Room Name</h3>
          <p>Last Seen</p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
        </div>
      </div>
      <div className='chat__body'>
        <p className='chat__message'>
          <span className='chat__name'>Kishan</span>
          This is a message
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat__message'>
          <span className='chat__name'>Kishan</span>
          This is a message
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat__message chat__receiver'>
          <span className='chat__name'>Kishan</span>
          This is a message
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>

        <p className='chat__message chat__receiver'>
          <span className='chat__name'>Kishan</span>
          This is a message
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className='chat__footer'>
        <SentimentSatisfiedOutlinedIcon />
        <form>
          <input placeholder='Type the message' />
          <button type='submit'> Send a Message</button>
        </form>
        <MicOutlinedIcon />
      </div>
    </div>
  );
}

export default Chat;

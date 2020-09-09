import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

function sidebarChat() {
  return (
    <div className='sidebarChat'>
      <Avatar />
      <div className='sidebarChat__info'>
        <h2>Room Name</h2>
        <p>This the last message</p>
      </div>
    </div>
  );
}

export default sidebarChat;

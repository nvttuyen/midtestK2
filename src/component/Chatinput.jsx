import React from "react";

export default function Chatinput() {
  return (
    <div className="inputChat">
      <input type="text" placeholder="type your message" />
      <div className="send">
        <i class="fa fa-paperclip"></i>
        <input type="file" style={{ display: "none" }} id="file" />
        <button>Send</button>
      </div>
    </div>
  );
}

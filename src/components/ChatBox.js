import React from "react";
import { FaVideo, FaPhone, FaRegWindowClose } from "react-icons/fa";
const ChatBox = (props) => {
  const closeChat = () => {
    props.closeChat();
  };
  return (
    <>
      {props.state ? (
        <div className="chat">
          <div className="chat_header">
            <div className="chat_first">
              <div className="chat_header_img">
                <img
                  src={props.current.image ? props.current.image : ""}
                  alt="user"
                />
              </div>
              <div className="chat_header_name">
                {props.current.name ? props.current.name : ""}
              </div>
            </div>
            <div className="chat_second">
              <FaVideo className="chat_icons" />
              <FaPhone className="chat_icons" />
              <FaRegWindowClose className="chat_icons" onClick={closeChat} />
            </div>
          </div>
          <div className="chat_body">
            <div className="chat_left">
              <p className="msg">Lorem ipsum dolor sit</p>
            </div>
            <div className="chat_right">
              <p className="msg">Lorem, ipsum </p>
            </div>
            <div className="chat_left">
              <p className="msg">Lorem ipsum dolor sit</p>
            </div>
            <div className="chat_right">
              <p className="msg">Lorem, ipsum </p>
            </div>
          </div>
          <div className="chat_footer">
            <input type="text" className="chat_input" placeholder="Aa" />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ChatBox;

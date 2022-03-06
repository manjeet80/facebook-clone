import React, { useState } from "react";

const ChatBar = (props) => {
  const [state, setState] = useState([
    { id: 1, image: "/Images/feroz1.jpg", name: "Sanjeet" },
    { id: 2, image: "/Images/ahmed1.jpg", name: "Sandeep" },
    { id: 3, image: "/Images/ahsan1.jpg", name: "Sanjay" },
    { id: 4, image: "/Images/babar1.jpg", name: "Ranjeet" },
    { id: 5, image: "/Images/fawad1.jpg", name: "Rahul" },
    { id: 6, image: "/Images/feroz1.jpg", name: "Pardeep" },
    { id: 7, image: "/Images/imrankhan1.jpg", name: "Amit" },
    { id: 8, image: "/Images/ahsan1.jpg", name: "Sumit" },
    { id: 9, image: "/Images/ahmed1.jpg", name: "Sanjeet" },
    { id: 10, image: "/Images/babar1.jpg", name: "Pardeep" },
  ]);
  const openChat = (active) => {
    props.openChat(active);
  };
  return (
    <div className="chatbar">
      {state.map((active) => (
        <div
          className="chatbar_list"
          key={active.id}
          onClick={() => openChat(active)}
        >
          <div className="chatbar_list_img">
            <img src={active.image} alt="user" />
            <span className="status"></span>
          </div>
          <div className="chatbar_list_name">{active.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBar;

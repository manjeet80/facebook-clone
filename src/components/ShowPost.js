import React, { useState } from "react";
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt } from "react-icons/fa";
const ShowPost = () => {
  const [state, setstate] = useState([
    {
      id: 1,
      userImg: "/Images/feroz1.jpg",
      name: "Sanjeet",
      time: "2h",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,",
      postImg: "/Images/feroz1.jpg",
    },
    {
      id: 2,
      userImg: "/Images/ahmed1.jpg",
      name: "Sandeep",
      time: "5h",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,",
      postImg: "/Images/ahmed1.jpg",
    },
    {
      id: 3,
      userImg: "/Images/ahsan1.jpg",
      name: "Sahil",
      time: "8h",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,",
      postImg: "/Images/ahsan1.jpg",
    },
    {
      id: 4,
      userImg: "/Images/fawad1.jpg",
      name: "Sagar",
      time: "9h",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,",
      postImg: "/Images/fawad1.jpg",
    },
  ]);
  return (
    <div className="show">
      {state.map((post) => (
        <div key={post.id} className="empty">
          <div className="show_header">
            <div className="show_img">
              <img src={post.userImg} alt="user" />
            </div>
            <div className="show_name">
              {post.name} <div className="date">{post.time}</div>
            </div>
          </div>
          <div className="show_body">
            <div className="show_body_text">{post.text}</div>
            <div className="show_body_img">
              <img src={post.postImg} alt="user" />
            </div>
          </div>
          <div className="show_reactions">
            <span className="reactions">
              <FaRegThumbsUp /> <span className="reactions_text">Like</span>
            </span>
            <span className="reactions">
              <FaRegCommentAlt />{" "}
              <span className="reactions_text">Comments</span>
            </span>
            <span className="reactions">
              <FaShareAlt /> <span className="reactions_text">Share</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowPost;

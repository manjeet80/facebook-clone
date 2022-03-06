import React from "react";
import { FaVideo, FaRegFileImage, FaRegGrinAlt } from "react-icons/fa";
const Create = () => {
  return (
    <div className="create">
      <div className="create_first">
        <div className="create_img">
          <span>
            <img src="/Images/feroz1.jpg" alt="user" />
          </span>
        </div>
        <div className="create_input">
          <input
            type="text"
            className="create_search"
            placeholder="Manjeet what are your mind ?"
          />
        </div>
      </div>
      <div className="create_second">
        <span className="create_second_icon">
          <FaVideo className="redColor" />{" "}
          <span className="text">Live Video</span>
        </span>
        <span className="create_second_icon">
          <FaRegFileImage className="greenColor" />{" "}
          <span className="text">Photo / Video</span>
        </span>
        <span className="create_second_icon">
          <FaRegGrinAlt className="orangeColor" />{" "}
          <span className="text">Felling</span>
        </span>
      </div>
    </div>
  );
};

export default Create;

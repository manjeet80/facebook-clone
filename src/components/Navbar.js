import React from "react";
import {
  FaFacebook,
  FaSearch,
  FaHome,
  FaFontAwesomeFlag,
  FaUsers,
  FaVideo,
  FaGamepad,
  FaPlus,
  FaFacebookMessenger,
  FaBell,
  FaCaretDown,
} from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_first">
        <div className="navbar_logo">
          <FaFacebook className="navbar_fb_logo" />
        </div>
        <div className="navbar_search">
          <input
            type="text"
            className="navbar_searchbar"
            placeholder="Search Facebook"
          />
          <FaSearch className="navbar_search_logo" />
        </div>
      </div>
      <div className="navbar_middle">
        <span className="middle_Icon">
          <FaHome className="Icons" />
        </span>
        <span className="middle_Icon">
          <FaFontAwesomeFlag className="Icons" />
          <span className="navbar_notify">3</span>
        </span>
        <span className="middle_Icon">
          <FaVideo className="Icons" />
          <span className="navbar_notify">10</span>
        </span>
        <span className="middle_Icon">
          <FaUsers className="Icons" />
          <span className="navbar_notify">22</span>
        </span>
        <span className="middle_Icon">
          <FaGamepad className="Icons" />
          <span className="navbar_notify">8</span>
        </span>
      </div>
      <div className="navbar_last">
        <span className="navbar_last_Icon">
          <FaPlus />
        </span>
        <span className="navbar_last_Icon">
          <FaFacebookMessenger />
        </span>
        <span className="navbar_last_Icon">
          <FaBell />
        </span>
        <span className="navbar_last_Icon">
          <FaCaretDown />
        </span>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";

const SideBar = () => {
  const [state, setState] = useState([
    { id: 1, image: "/Images/feroz1.jpg", name: "Flutter Development" },
    { id: 2, image: "/Images/ahmed1.jpg", name: "PHP Development" },
    { id: 3, image: "/Images/babar1.jpg", name: "React Native Development" },
    { id: 4, image: "/Images/fawad1.jpg", name: "Node js Development" },
    { id: 5, image: "/Images/imrankhan1.jpg", name: "Vue JS Development" },
    { id: 6, image: "/Images/ahsan1.jpg", name: "React Development" },
  ]);
  return (
    <div className="sidebar">
      {state.map((info) => (
        <div className="sidebar_list" key={info.id}>
          <div className="sidebar_img">
            <img src={info.image} alt="Group image" />
          </div>
          <div className="sidebar_name">{info.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;

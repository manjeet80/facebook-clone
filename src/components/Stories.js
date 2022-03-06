import React, { useState } from "react";

const Stories = () => {
  const [state, setState] = useState([
    { id: 1, image: "/Images/feroz1.jpg", name: "Flutter Development" },
    { id: 2, image: "/Images/ahmed1.jpg", name: "PHP Development" },
    { id: 3, image: "/Images/babar1.jpg", name: "React Native Development" },
    { id: 4, image: "/Images/fawad1.jpg", name: "Node js Development" },
  ]);
  return (
    <div className="stories">
      {state.map((story) => (
        <div className="stories_col" key={story.id}>
          <div className="stories_body">
            <img src={story.image} alt="stories" />
            <div className="stories_overlay">
              <div className="stories_overlay_img">
                <img src={story.image} alt="image" />
              </div>
              <div className="stories_body_name">{story.name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;

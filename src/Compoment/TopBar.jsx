import React from "react";

const TopBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search"></div>
        <div className="items">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item">
            <div className="counter">1</div>
          </div>

          <div className="item">
            <img
              src="https://picsum.photos/200"
              alt=""
              className="avatar"
              width="100px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

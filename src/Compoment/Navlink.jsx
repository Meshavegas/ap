import React from "react";
import { Link } from "react-router-dom";

const Navlink = () => {
  const links = [
    { name: "Nos Formations", route: "/etablisement" },
    { name: "Home" },
    { name: "About Us" },
    { name: "Contact" },
  ];
  return (
    <React.Fragment>
      {links.map((Link, val) => {
        return (
          <div key={val}>
            <div className="px-3 text-left md:cursor-pointer">
              <h1 className="py-7">{Link.name}</h1>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Navlink;

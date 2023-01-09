import { Link } from "react-router-dom";
import React from "react";

const Button = () => {
  return (
    <Link to="/login">
      <div className="bg-[#2563eb] text-white px-6 py-2 rounded-full">
        Connexion
      </div>
    </Link>
  );
};

export default Button;

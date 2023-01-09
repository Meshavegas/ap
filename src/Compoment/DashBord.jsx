import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import "../styles/sidebar.scss";
// import { AuthContext } from "../../context/AuthContext";
const DashBord = () => {
  const navitage = useNavigate();
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">E-Learning </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">PRINCIPAL</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <span>Tableau de bord</span>
            </li>
          </Link>
          <p className="title">LISTES</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <span>Utilisateurs</span>
            </li>
          </Link>
          <Link to="/compte" style={{ textDecoration: "none" }}>
            <li>
              <span>Compte</span>
            </li>
          </Link>
          <Link to="/transactions">
            <li>
              <span>Transactions</span>
            </li>
          </Link>
          <p className="title">UTILE</p>
          <Link to="/statistique" style={{ textDecoration: "none" }}>
            <li>
              <span>Stats</span>
            </li>
          </Link>
          <p className="title">SERVICE</p>

          <Link to="/log" style={{ textDecoration: "none" }}>
            <li>
              <span>Logs</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/profil" style={{ textDecoration: "none" }}>
            <li>
              <span>Profile</span>
            </li>
          </Link>
          <li
          // onClick={() => {
          //   dispatch({ type: "LOGOUT" });
          //   console.log("log out");
          //   navitage("/login");
          // }}
          >
            <span>Deconnecter</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBord;

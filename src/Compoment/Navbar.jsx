import React, { useState } from "react";
import logo from "../assets/logo.png";
import Button from "./Button";
import Navlink from "./Navlink";
import {
  Link,
  Route,
  useParams,
  BrowserRouter,
  Routes,
} from "react-router-dom";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white max-w-full px-10 mt-5 md:mt-0">
      <div className="flex items-center font-medium justify-between md:px-10">
        <div className="z-50 p-1 md:w-auto w-full flex justify-between">
          <img src={logo} alt="logo" className="md:curor-pointer h-10" />
          <div
            className="text-3xl md:hidden flex items-center justify-center"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/etablisement">
            <li>Etablissements</li>
          </Link>
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        <ul
          className={`
              md:hidden bg-white absolute h-full bottom-0 left-0 py-24 px-8 w-full
              duration-500 ${open ? "left-0" : "left-[-100%]"}
              `}
        >
          <li>
            <a href="" className="py-7 px-3 inline-block">
              Home
            </a>
          </li>
          <Navlink />
          <div className="py-5 flex">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
}

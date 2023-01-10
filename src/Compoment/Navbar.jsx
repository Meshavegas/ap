import React, { useState } from "react";
import logo from "../assets/logo.png";
import Button from "./Button";
import Navlink from "./Navlink";
import { Link as Lien } from "react-scroll";
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
    <nav className="bg-white max-w-full px-10 mt-5 md:mt-0 xl:mt-5 lg:mt-5 z-10">
      <div className="flex items-center font-medium justify-between md:px-10">
        <div className="z-50 p-1 md:w-auto w-full flex justify-between">
          <Link to="/">
            <img src={logo} alt="logo" className="md:curor-pointer h-10" />
          </Link>
          <div
            className="text-3xl md:hidden flex items-center justify-center"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <Link to="/">
            <li className="curor-pointer">Accueil</li>
          </Link>
          <Link to="#">
            <Lien to="about" smooth={true} duration={700}>
              <li className="curor-pointer">A Propos</li>
            </Lien>
          </Link>
          <Link to="#">
            <Lien to="contact" smooth={true} duration={700}>
              <li>Contacts</li>
            </Lien>
          </Link>
          <Link to="/etablisement">
            <li>Visiter l'etablissement</li>
          </Link>
        </ul>
        <div className="md:block hidden md:flex lg:flex xl:flex xl:items-center ">
          <Button />
          <Link to='/login' className='border-blue-500 border text-blue-500 px-6 py-2 w-auto rounded-full flex ml-3'>Inscription</Link>
        </div>
        <ul
          className={`
              md:hidden bg-white absolute h-full bottom-0 left-0 py-24 px-8 w-full
              duration-500 ${open ? "left-0" : "left-[-100%]"}
              `}
        >
          <div className="grid grid-cols-1 gap-y-10 pl-3 mt-5">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/etablisement">
              <li>About Us</li>
            </Link>
            <Link to="/etablisement">
              <li>Contacts</li>
            </Link>
            <Link to="/etablisement">
              <li>Visiter l'etablissement</li>
            </Link>
            <div className="py-5 flex">

              <Link to="/login" className='border-blue-500 border text-blue-500 px-6 py-2 w-auto rounded-full flex ml-3'>Inscription</Link>
            </div>
          </div>

        </ul>
      </div>
    </nav>
  );
}

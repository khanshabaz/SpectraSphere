import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [active, SetActive] = useState("Home");

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <a href="https://spectrasphere.netlify.app/">
        <img
          src={logo}
          alt="spectraspherebank"
          className="w-[240px] h-[65px] object-contain cursor-pointer"
        />
      </a>
      <span className="text-gradient sm:inline-block font-poppins font-semibold text-[25px] hidden text-white ss:leading-[100.8px] leading-[75px] cursor-pointer">
        SpectraSphere
      </span>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => SetActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 rigth-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none  flex  justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-4"}`}
                onClick={() => SetActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

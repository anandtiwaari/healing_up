import React, { useState } from "react";
import healingLogo from "../assets/Healing_up_log.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);

  // Define a common set of styles for the hover state
  const linkHoverStyles =
    "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  return (
    <nav className="bg-[#d3a37f] border-gray-200 dark:bg-[#d3a37f]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <div
          className="image_wrapper h-[50px] w-[50px] rounded-md"
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        >
          <img
            src={healingLogo}
            className="h-full w-full rounded-md"
            alt="Flowbite Logo"
          />
        </div>

        {/* Hamburger menu button */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={navigationMenuOpen}
          onClick={() => setNavigationMenuOpen(!navigationMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation links */}
        <div
          className={`${
            navigationMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-[#d3a37f] md:dark:bg-[#d3a37f] dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 dark:text-white ${linkHoverStyles} ${
                    isActive && "underline"
                  }`
                }
                aria-current="page"
                onClick={() => {
                  setNavigationMenuOpen(false);
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 dark:text-white ${linkHoverStyles} ${
                    isActive && "underline"
                  }`
                }
                aria-current="page"
                onClick={() => {
                  setNavigationMenuOpen(false);
                }}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 dark:text-white ${linkHoverStyles}`}
              >
                Join Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 dark:text-white ${linkHoverStyles}`}
              >
                Book a session
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

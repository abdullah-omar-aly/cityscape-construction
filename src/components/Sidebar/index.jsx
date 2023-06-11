"use client";

import pageSections from "@/data/sections";
import React from "react";
import { FacebookIcon, InstgramIcon, MobileIcon, TwitterIcon } from "@/icons";
import { Link } from "react-scroll";

const NavigationLink = ({ children, sectionId }) => {
  return (
    <li>
      <Link
        className={`cursor-pointer block uppercase hover:bg-main-primary px-4 py-3 transition-colors duration-300 bg-main-black} `}
        activeClass="active-link"
        to={sectionId}
        spy={true}
        smooth={true}
        offset={-70}
        duration={200}
      >
        {children}
      </Link>
    </li>
  );
};

const Sidebar = ({ isSidebarVisible }) => {
  return (
    <div
      className={`fixed -left-80 top-16 w-80 h-screen bg-main-black z-50 text-white xl:hidden transition-transform duration-300 ${
        isSidebarVisible ? "translate-x-80" : ""
      }
          `}
    >
      <div className="flex flex-col justify-between h-full">
        <nav className="sidebar-nav">
          <ul className=" flex flex-col ">
            {pageSections.map((section, ind) => {
              return (
                <NavigationLink key={ind} sectionId={section.sectionId}>
                  {section.sectionName}
                </NavigationLink>
              );
            })}
          </ul>
        </nav>

        <div className="xl:hidden flex justify-between items-center px-4 mb-20">
          <div className=" flex justify-center">
            <span className="hover:text-main-primary p-2 text-lg">
              <TwitterIcon />
            </span>
            <span className="hover:text-main-primary p-2 text-lg">
              <InstgramIcon />
            </span>
            <span className="hover:text-main-primary p-2 text-lg">
              <FacebookIcon />
            </span>
          </div>
          <div className="flex items-center">
            <span className="pr-2 text-main-primary">
              <MobileIcon />
            </span>
            <span>1-300-123-123</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

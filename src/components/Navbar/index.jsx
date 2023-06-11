"use client"

import React, { useState } from "react";
import { useEffect } from "react";
import pageSections from "@/data/sections";
import Image from "next/image";
import { BarsIcon, MobileIcon } from "@/icons";
import { Link, animateScroll as scroll } from "react-scroll";

const NavigationLink = ({ children, sectionId }) => {
    return (
   
        <li>
            <Link
                className={`transition-colors duration-300 lg:hover:text-main-primary uppercase text-base cursor-pointer text-white`}
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
    )
}


const Navbar = ({isSidebarVisible , showSidebar , hideSidebar}) => {
    const [nav, setNav] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset === 0) {
                setNav(false)
            } else {
                setNav(true)
            }
        })

    }, [])


    return (
        <header className={` bg-main-black drop-shadow-sm shadow-white z-50  ${nav ? "xl:bg-main-black" : "xl:bg-transparent"}  text-white fixed top-0 w-screen transition-colors duration-300`}>
            <div className="container max-w-screen-2xl flex justify-between items-center h-16 xl:flex-row-reverse text-lg">

                <div>
                    <button
                        className="text-white text-2xl cursor-pointer xl:hidden"
                        onClick={() => isSidebarVisible ? hideSidebar() : showSidebar()}
                    >
                        <BarsIcon />
                    </button>

                    <div className="hidden xl:flex xl:items-center">
                        <span className="pr-2 text-main-primary">
                            <MobileIcon />
                        </span>
                        <span>1-300-123-123</span>
                    </div>
                </div>
                <nav className="main-nav">
                    <ul className="gap-5 hidden xl:flex">

                        {
                            pageSections.map((section, ind) => {
                                return (
                                    <NavigationLink key={ind} sectionId={section.sectionId} >{section.sectionName}</NavigationLink>
                                )
                            })
                        }

                    </ul>
                </nav>

                <div>
                    <div className="">
                        <Image src="/logo.png" alt=""
                            //   layout="responsive"
                            // objectFit="contain"
                            // fill={true}
                            // style={{objectFit: "contain" }}
                            width={200}
                            height={40}
                        />
                    </div>

                </div>

            </div>
        </header>
    );
};

export default Navbar;



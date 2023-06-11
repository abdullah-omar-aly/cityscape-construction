import { FacebookIcon, InstgramIcon, TwitterIcon } from "@/icons";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-gray-900 flex  justify-center items-center py-3 "
      style={{ backgroundColor: "#212122" }}
    >
      <div className=" flex justify-center items-center text-main-primary lg:text-white">
        <a href="#" className="p-2 text-lg">
          <TwitterIcon />
        </a>
        <a href="#" className="p-2 text-lg">
          <InstgramIcon />
        </a>
        <a href="#" className="p-2 text-lg">
          <FacebookIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

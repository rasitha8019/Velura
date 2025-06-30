import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logoo} className="mb-5 w-32" alt="" />
          <p className="w-full md-w-2/3 text-gray-600">
            Velura is a modern fashion destination that blends elegance with
            everyday style. Discover curated collections that elevate your
            wardrobe with timeless pieces, bold trends, and effortless charm—all
            crafted for the confident, style-conscious you.
          </p>
        </div>
        <div>
          <p className="text-x1 font-medium mb-5">COMPANY</p>
          <ul className="flex-flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Deivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex-flex-col gap-1 text-gray-600">
            <li> +91 98765 43210</li>
            <li> support@velura.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr></hr>
        <p className="py-5 text-sm text-center">
          Copyright 2025@ velura.com- All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

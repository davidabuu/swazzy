import { Menu } from "@material-ui/icons";
import React from "react";
const Navbar = () => {
  return (
    <div className="flex justify-around items-center w-full py-6">
      <h1 className="font-bold text-yellow-500 text-3xl">Kally Media Group</h1>
      <ul className="items-center justify-around hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Contract</li>
      </ul>
      <div className="md:hidden">
        <Menu className="text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;

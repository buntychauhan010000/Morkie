import React from "react";
import { navlink } from "./Helper";

function NavItems() {
  return (
    <>
      {navlink.map((item, index) => (
        <li
          key={index}
          className="font-Saira font-bold text-gray-300 hover:text-white text-xl"
        >
          <a href="#">{item.name}</a>
        </li>
      ))}
    </>
  );
}

export default NavItems;

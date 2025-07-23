import React from "react";
import { navlink } from "./Helper";

function NavItems({ closeMenu }) {
  return (
    <>
      {navlink.map((item, index) => (
        <li
          key={index}
            onClick={closeMenu} // 👈 Close the menu when clicked
          className="font-Saira font-bold text-gray-300 hover:text-white text-xl"
        >
          <a href={item.href}>{item.name} </a>
        </li>
      ))}
    </>
  );
}

export default NavItems;

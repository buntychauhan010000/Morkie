import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import PrimaryButton from "./PrimaryButton";
import { HiMenu, HiX } from "react-icons/hi";
import NavItems from "./NavItems";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-14">
          <img src={logo} alt="Logo" className="w-40" />

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex gap-8 ml-10">
            <NavItems />
          </ul>
        </div>
        {/* Desktop Buttons */}
        <div className="hidden sm:flex gap-4 items-center">
          <button className="bg-light-blue px-6 py-2  md:px-8 md:py-2 text-xl md:text-2xl font-Saira font-bold rounded-lg text-white">
            $5000
          </button>
          <PrimaryButton label="Connect Wallet" />
        </div>

        {/* Mobile Hamburger Toggle (Only when menu is closed) */}
        {!isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-white text-3xl"
          >
            <HiMenu />
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <article className="lg:hidden top-0 left-0 w-full h-dvh bg-purple-dark flex flex-col items-center justify-start space-y-6 px-6 py-8">
          {/* Close Button Inside */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-4xl"
          >
            <HiX />
          </button>

          {/* Nav Links */}
          <ul className="flex flex-col gap-6 items-center">
            <NavItems closeMenu={() => setIsMenuOpen(false)} />
          </ul>

          {/* Buttons */}
          <div className="flex flex-col gap-4 items-center">
            <button className="bg-light-blue px-10 py-2 text-2xl font-Saira font-bold rounded-lg text-white">
              $5000
            </button>
            <PrimaryButton label="Connect Wallet" />
          </div>
        </article>
      )}
    </nav>
  );
}

export default Navbar;

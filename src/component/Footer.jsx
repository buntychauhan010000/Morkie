import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/img/logo.png";

function Footer() {
  return (
    <footer id="docs" className="container px-3 mx-auto py-8">
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-4">
        {/* Brand Section */}
        <div className="md:col-span-1">
          <div className="mb-4">
            <img src={logo} alt="Logo" className="w-40" />
          </div>
          <p className="text-sm text-gray-300 mb-4">
            Morkie is an NFT-FI platform designed to make NFTs accessible to
            everyone.
          </p>
          <div className="flex gap-4 text-lg">
            <FaInstagram className="hover:text-purple-400 cursor-pointer" />
            <FaFacebookF className="hover:text-purple-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-purple-400 cursor-pointer" />
          </div>
        </div>

        {/* Links Section */}
        <div className="md:col-span-3">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-8">
            {/* Morkie Links */}
            <div className="sm:w-1/3">
              <h3 className="font-semibold text-white mb-3 font-Saira">
                Morkie
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>About</li>
                <li>Contact</li>
                <li>Support</li>
                <li>List on Morkie</li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="sm:w-1/3">
              <h3 className="font-semibold text-white mb-3 font-Saira">
                Resources
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Docs</li>
                <li>Invest</li>
                <li>Taiko</li>
                <li>Brandkit</li>
              </ul>
            </div>

            {/* Community Links */}
            <div className="sm:w-1/3">
              <h3 className="font-semibold text-white mb-3 font-Saira">
                Community
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Twitter</li>
                <li>Telegram</li>
                <li>Discord</li>
                <li>Galxe</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>© Copyright 2024, All Rights Reserved by Morkie</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <span className="hover:text-purple-400 cursor-pointer">Terms</span>
          <span className="hover:text-purple-400 cursor-pointer">
            Privacy Policy
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

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
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-purple-400 cursor-pointer" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-purple-400 cursor-pointer" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-purple-400 cursor-pointer" />
            </a>
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
                <li>
                  <a href="#about" className="hover:text-purple-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-purple-400">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#support" className="hover:text-purple-400">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#list-on-morkie" className="hover:text-purple-400">
                    List on Morkie
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="sm:w-1/3">
              <h3 className="font-semibold text-white mb-3 font-Saira">
                Resources
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#docs" className="hover:text-purple-400">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="#invest" className="hover:text-purple-400">
                    Invest
                  </a>
                </li>
                <li>
                  <a href="#taiko" className="hover:text-purple-400">
                    Taiko
                  </a>
                </li>
                <li>
                  <a href="#brandkit" className="hover:text-purple-400">
                    Brandkit
                  </a>
                </li>
              </ul>
            </div>

            {/* Community Links */}
            <div className="sm:w-1/3">
              <h3 className="font-semibold text-white mb-3 font-Saira">
                Community
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://telegram.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://galxe.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400"
                  >
                    Galxe
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>© Copyright 2024, All Rights Reserved by Morkie</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#terms" className="hover:text-purple-400">
            Terms
          </a>
          <a href="#privacy-policy" className="hover:text-purple-400">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

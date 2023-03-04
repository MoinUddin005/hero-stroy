import React from "react";
import { Link } from "react-router-dom";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
const Header = () => {
  return (
    <div>
      <nav>
        <div class="container mx-auto">
          <div class="flex justify-between">
            <div class="flex space-x-4">
              <span className="flex items-center py-5 px-2  text-xl font-bold">
                <img className="h-5 " src="../../../public/images/{.png" />
                <Link to="/">Finsweet</Link>
              </span>
            </div>

            <div class="hidden md:flex items-center space-x-1">
              <ul>
                <li>
                <Link to="about">About</Link>
                </li>
              </ul>
            </div>

            <div class="md:hidden flex items-center">
            <ul>
                <li>
                <Link to="about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

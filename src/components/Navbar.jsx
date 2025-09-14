import React from "react";

function Navbar() {
  return (
    <div className="sticky top-0 flex h-16 w-full items-center justify-between bg-gray-800 px-4 lg:px-10">
      <a
        href="https://weather-app-five-orcin-17.vercel.app/"
        className="text-xl font-semibold text-white lg:text-2xl"
      >
        Weather.com
      </a>
      <div className="flex gap-4 text-white">
        <a href="https://github.com/hussain-jawaid" className="">
          GitHub
        </a>
        <a href="#">Portfolio</a>
      </div>
    </div>
  );
}

export default Navbar;

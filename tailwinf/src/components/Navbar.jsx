import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="flex flex-row justify-between p-6 bg-red-400 text-white">
        <div className="flex text-base">
          <span className="p-2 font-bold">Kalvium</span>
          <span className="p-2 text-green-200">About Us</span>
          <span className="p-2 text-green-200">Contacts</span>
          <span className="p-2 text-green-200">Courses</span>
        </div>
        <div className="border-2 border-white py-2 px-4 rounded-md">
          <span>Login</span>
        </div>
      </nav>
    </>
  );
}

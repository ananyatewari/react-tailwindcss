import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="m-20 flex flex-col items-start">
        <button className="font-medium rounded-lg bg-blue-500 p-3 text-white m-4">
          Button One
        </button>
        <button className="rounded-lg bg-red-200 m-4 p-3 w-10/12 text-left border-red-600 border-2 text-red-700">
          <span className="p-1 font-bold">Alert!</span>
          This is awesome!
        </button>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-row shadow-2xl rounded-md">
          <span>
            <img
              src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg"
              alt=""
              className="h-12 m-3"
            />
          </span>
          <span>
            <div className="m-3">Kalvium Store</div>
            <div className="text-gray-500 m-3">You have a new course!</div>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
}

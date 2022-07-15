import React from "react";
import {  useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-base-100">
        <h3 className="text-6xl text-neutral md:text-7xl lg:text-8xl">404</h3>
        <h5 className="text-2xl text-neutral md:text-7xl lg:text-3xl">
          {" "}
          Page not found!
        </h5>
        <h5 className="text-2xl text-neutral md:text-7xl lg:text-3xl">
          {" "}
          Sorry, we couldn't find the page you are looking for.
        </h5>

        <button
          className="focus:outline-none mt-3 text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
          onClick={async () => {
            navigate("/");
          }}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center">
    <div className="text-center m-auto">
      <h1 className="mb-4 text-6xl font-semibold text-orange-500">404</h1>
      <p className="mb-4 text-lg text-gray-600">
        Oops! Looks like you're lost.
      </p>
      <div className="animate-bounce">
        <svg
          className="mx-auto h-16 w-16 text-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </div>
      <Link to="/home">
        <p className="mt-4 text-gray-600 hover:text-orange-500">
          Click me to go Home
        </p>
      </Link>
    </div>
    </div>
  );
};

export default NotFound;

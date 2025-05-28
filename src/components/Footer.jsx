import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TechStore. All rights reserved.
        </p>
        <div className="mt-2 sm:mt-0 flex space-x-4">
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-blue-600 transition"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-blue-600 transition"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-blue-600 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

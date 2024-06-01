import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer
        className="bg-gray-900 text-gray-400 py-8 "
        style={{ borderTop: `1px solid gray` }}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="space-y-4">
            <div className="flex items-center">
              {/* <MountainIcon className="h-6 w-6 mr-2" /> */}
              <span className="text-gray-50 font-bold">
                Healing Up-Mental Health Initiative
              </span>
            </div>
            <p>&copy; 2024 Healing up. All rights reserved.</p>
          </div>
          <div className="space-x-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-300"
              prefetch={false}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-300"
              prefetch={false}
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-300"
              prefetch={false}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

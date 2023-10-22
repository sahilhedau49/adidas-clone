import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-950 py-20 text-slate-300 text-center">
      <div>
        <ul className="flex text-xl gap-8 justify-center">
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Store Locator</Link>
          </li>
          <li>
            <Link>FAQs</Link>
          </li>
          <li>
            <Link>News</Link>
          </li>
          <li>
            <Link>Careers</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
        </ul>
      </div>
      <h3 className="mt-4 text-slate-500">Design by Sahil Hedau</h3>
    </div>
  );
};

export default Footer;

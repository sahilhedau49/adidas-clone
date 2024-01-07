import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-950 py-20 text-slate-300 text-center md:py-6">
      <div className="flex place-content-center gap-10">
        <ul className="flex text-xl gap-10 justify-center md:flex-col md:text-sm md:gap-2">
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Store Locator</Link>
          </li>
          <li>
            <Link>FAQs</Link>
          </li>
        </ul>
        <ul className="flex text-xl gap-10 justify-center md:flex-col md:text-sm md:gap-2">
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
      <h3 className="mt-6 text-slate-500">
        Developed by {` `}
        <a href="https://github.com/sahilhedau49" className="underline">
          Sahil Hedau
        </a>
        {` 🔗`}
      </h3>
    </div>
  );
};

export default Footer;

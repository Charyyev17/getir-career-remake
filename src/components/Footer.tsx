import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full h-full flex flex-col mt-20 px-4 lg:px-10 xl:px-16 2xl:px-40 bottom-0 left-0 bg-[#5538ab] text-white">
      <div className="w-full h-2/3 mt-8 lg:mt-0 py-8 border-b flex flex-col lg:flex-row justify-between">
        <Link href="/" className="flex items-center 2xl:justify-center gap-3">
          <span className="font-semibold text-4xl text-[#ffd300]">getir</span>
          <span className="font-semibold text-md text-white py-1 px-3 bg-[#472e92] rounded-3xl">
            careers
          </span>
        </Link>

        <div className="flex items-center gap-8 mt-8 xl:mt-0">
          <h3 className="font-bold text-2xl">Follow Us</h3>
          <div className="flex gap-5">
            <Link href="/about">
              <FontAwesomeIcon
                icon={faFacebook}
                color="white"
                size="lg"
                className="hover:scale-125 hover:shadow-md transition-all duration-300"
              />
            </Link>
            <Link href="/about">
              <FontAwesomeIcon
                icon={faInstagram}
                color="white"
                size="lg"
                className="hover:scale-125 hover:shadow-md transition-all duration-300"
              />
            </Link>
            <Link href="/about">
              <FontAwesomeIcon
                icon={faLinkedin}
                color="white"
                size="lg"
                className="hover:scale-125 hover:shadow-md transition-all duration-300"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full h-1/3 flex flex-col md:flex-row md:items-center justify-between my-8">
        <div className="flex items-center gap-8 ">
          <div className="flex uppercase gap-3 xl:gap-5">
            <Link
              className="text-white font-semibold uppercase hover:text-[#ffd300] transition duration-300"
              href="/"
            >
              Blog
            </Link>
            <Link
              className="text-white font-semibold uppercase hover:text-[#ffd300] transition duration-300"
              href="/"
            >
              Technology
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-8 mt-4 md:mt-0">
          <div className="flex uppercase gap-3 xl:gap-5">
            <Link
              className="text-white font-semibold uppercase hover:text-[#ffd300] transition duration-300"
              href="/"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-white font-semibold uppercase hover:text-[#ffd300] transition duration-300"
              href="/"
            >
              Terms Of Use
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faBars,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Navbar = () => {
  const links = [
    { name: "· Office Jobs", url: "/" },
    { name: "Blog", url: "/" },
    { name: "Technology", url: "/" },
  ];

  const [open, setOpen] = useState(false);
  const [storeJobs, setStoreJobs] = useState(false);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="z-40 w-full fixed top-0 left-0 py-2 bg-[#5538ab] text-white shadow-sm transition-all duration-150"
      >
        <div className="h-[70px] flex items-center justify-between px-4 lg:px-10 xl:px-16 2xl:px-40 mx-auto">
          {/*LOGO */}
          <Link href="/" className="flex items-center justify-center gap-3">
            <span className="font-semibold text-4xl text-[#ffd300]">getir</span>
            <span className="font-semibold text-md text-white py-1 px-3 bg-[#472e92] rounded-3xl">
              careers
            </span>
          </Link>

          {/*LINKS */}
          <div className="hidden md:flex gap-8 items-center">
            {links.map((link) => (
              <Link
                href={link.url}
                key={link.name}
                onMouseEnter={() => setStoreJobs(false)}
                className="text-white font-semibold uppercase hover:text-[#ffd300] transition duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/"
              onMouseEnter={() => setStoreJobs(true)}
              className="flex gap-2 items-center justify-center text-white font-semibold uppercase hover:text-[#ffd300] transition duration-300"
            >
              Store Jobs
              <FontAwesomeIcon icon={faChevronDown} className="" />
            </Link>
          </div>

          <FontAwesomeIcon
            icon={faBars}
            color="white"
            size="lg"
            className="hover:text-[#9271f5] cursor-pointer md:hidden transition-all duration-300"
            onClick={() => setOpen(!open)}
          />
        </div>
        {storeJobs && (
          <div
            onMouseLeave={() => setStoreJobs(false)}
            className="fixed bg-white right-40 top-16 flex flex-col gap-3 p-3 px-5 rounded"
          >
            <p className="text-[#5538ab] cursor-pointer uppercase font-medium border-b pb-2 hover:text-[#ffd300] hover:border-[#ffd300] hover:translate-x-2 transition-all duration-300">
              Italy
            </p>
            <p className="text-[#5538ab] cursor-pointer uppercase font-medium border-b pb-2 hover:text-[#ffd300] hover:border-[#ffd300] hover:translate-x-2 transition-all duration-300">
              United States
            </p>
            <p className="text-[#5538ab] cursor-pointer uppercase font-medium border-b pb-2 hover:text-[#ffd300] hover:border-[#ffd300] hover:translate-x-2 transition-all duration-300">
              United Kingdom
            </p>
            <p className="text-[#5538ab] cursor-pointer uppercase font-medium border-b pb-2 hover:text-[#ffd300] hover:border-[#ffd300] hover:translate-x-2 transition-all duration-300">
              Germany
            </p>
            <p className="text-[#5538ab] cursor-pointer uppercase font-medium border-b pb-2 hover:text-[#ffd300] hover:border-[#ffd300] hover:translate-x-2 transition-all duration-300">
              Netherlands
            </p>
            <p className="text-[#5538ab] cursor-pointer uppercase font-medium hover:text-[#ffd300] hover:border-[#ffd300] hover:translate-x-2 transition-all duration-300">
              France
            </p>
          </div>
        )}
      </motion.div>
      {open && (
        <div className="z-[9999] fixed w-full h-screen flex items-center justify-center top-0 left-0 backdrop-blur-md">
          <motion.div
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden bg-white w-full h-64 flex flex-col justify-center gap-4 m-10 pt-10 rounded-md shadow-xl"
          >
            <h1 className="absolute top-0 left-0 m-4 text-[#5538ab] text-lg font-bold uppercase">Menu</h1>
            <FontAwesomeIcon
              icon={faXmark}
              color="#dc2626"
              size="lg"
              className="absolute top-0 right-0 m-4 cursor-pointer hover:text-red-400 transition-all"
              onClick={() => setOpen(!open)}
            />
            {links.map((link) => (
              <Link
                href={link.url}
                key={link.name}
                className="text-[#5538ab] uppercase hover:text-[#ffd300] border-b font-medium text-lg pl-4 pb-2 hover:translate-x-2 transition duration-300"
                onClick={() => setOpen(!open)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

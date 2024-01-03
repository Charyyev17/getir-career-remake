"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const WhereWeWork = () => {
  const countries1 = [
    {
      id: 1,
      cities: ["Istanbul (HQ)", "Ankara", "Izmir"],
      img: "/images/tur.png",
    },
    {
      id: 2,
      cities: ["Berlin", "Dusseldorf", "Munich"],
      img: "/images/ger.png",
    },
  ];
  const countries2 = [
    {
      id: 1,
      cities: ["Amsterdam"],
      img: "/images/ned.png",
    },
    {
      id: 2,
      cities: ["London"],
      img: "/images/uk.png",
    },
  ];
  const countries3 = [
    {
      id: 1,
      cities: ["Chicago, IL", "New York, NY"],
      img: "/images/usa.png",
    },
    {
      id: 2,
      cities: ["Bangalore"],
      img: "/images/ind.png",
    },
  ];

  return (
    <div className="w-full lg:h-screen block lg:flex items-center justify-center gap-10 lg:gap-20 pt-20 lg:pt-0 px-4 lg:px-10 xl:px-16 2xl:px-40 mt-72 md:mt-40 lg:mt-0 relative overflow-hidden">
      <div className="w-1/2 z-10 px-4 lg:px-0 lg:mt-0 hidden lg:flex flex-col gap-12">
        <div className="flex gap-16">
          {countries1.map((country) => (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              key={country.id}
              className="flex items-center gap-3 w-[180px] h-32 rounded-md group"
            >
              <div className="relative h-32 flex items-center justify-center -rotate-12 group-hover:rotate-0 group-hover:opacity-5 transition-all duration-300">
                <Image
                  src={country.img}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
              <div className="hidden group-hover:flex flex-col gap-2 absolute ml-7">
                {country.cities.map((city, id) => (
                  <div key={id} className="flex gap-2">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      color="#5538ab"
                      className="mt-1"
                    />
                    <h1 className="font-semibold text-sm text-[#5538ab] border-b border-[#5538ab]">
                      {city}
                    </h1>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex pl-20 gap-16">
        {countries2.map((country) => (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              key={country.id}
              className="flex items-center gap-3 w-[180px] h-32 rounded-md group"
            >
              <div className="relative h-32 flex items-center justify-center rotate-[10deg] group-hover:rotate-0 group-hover:opacity-5 transition-all duration-300">
                <Image
                  src={country.img}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
              <div className="hidden group-hover:flex flex-col gap-2 absolute ml-7">
                {country.cities.map((city, id) => (
                  <div key={id} className="flex gap-2">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      color="#5538ab"
                      className="mt-1"
                    />
                    <h1 className="font-semibold text-sm text-[#5538ab] border-b border-[#5538ab]">
                      {city}
                    </h1>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex gap-24">
        {countries3.map((country) => (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              key={country.id}
              className="flex items-center gap-3 w-[180px] h-32 rounded-md group"
            >
              <div className="relative h-32 flex items-center justify-center -rotate-[25deg] group-hover:rotate-0 group-hover:opacity-5 transition-all duration-300">
                <Image
                  src={country.img}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
              <div className="hidden group-hover:flex flex-col gap-2 absolute ml-7">
                {country.cities.map((city, id) => (
                  <div key={id} className="flex gap-2">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      color="#5538ab"
                      className="mt-1"
                    />
                    <h1 className="font-semibold text-sm text-[#5538ab] border-b border-[#5538ab]">
                      {city}
                    </h1>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="px-4 lg:px-0 z-10 lg:w-1/2 flex flex-col gap-3">
        <div className="xl:flex hidden absolute top-14 2xl:top-14 right-[450px] 2xl:right-[600px]">
          <Image
            src="/images/arrow2opp.png"
            alt=""
            width={1000}
            height={1000}
            className="w-[90px] h-[120px] rounded-md -rotate-[35deg]"
          />
          <p className="text-xl font-bold text-[#ffd300] mt-4 pl-4">
            Hover Over!
          </p>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-extrabold text-4xl md:text-6xl lg:text-8xl text-[#5538ab]"
        >
          <span className="text-[#ffd300]">Where</span> We Work
        </motion.h1>
        <motion.p
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-20 border border-[#ffd300]"
        ></motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[#5538ab] mt-3"
        >
          Across continents, our diverse office teams operate efficiently in
          strategically chosen, centrally located offices.
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[#5538ab]"
        >
          These offices, meticulously established in 11 major cities worldwide,
          facilitate collaborative and skilled work environments.
        </motion.h3>
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/about"
            className="mt-4 uppercase flex items-center justify-center w-[135px] lg:w-[160px] xl:w-[170px] text-center font-semibold lg:text-lg xl:text-xl bg-[#ffd300] text-[#5538ab] px-4 py-2 lg:px-6 lg:py-3 rounded-md border border-[#faf0be] hover:bg-transparent hover:text-lg hover:shadow-[1px_3px_25px_rgb(0,0,0,0.2)] hover:shadow-[#ffd300] transition-all duration-300"
          >
            Apply now
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default WhereWeWork;

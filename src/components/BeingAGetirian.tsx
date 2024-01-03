"use client";

import React from "react";
import { motion } from "framer-motion";
import { values } from "@/data";
import Image from "next/image";

const BeingAGetirian = () => {
  return (
    <div className="h-screen w-full flex flex-col gap-10 lg:gap-20 items-center justify-center mt-48 md:mt-60 lg:mt-72 2xl:mt-48 px-4 lg:px-10 xl:px-16 2xl:px-40">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center gap-2"
      >
        <h2 className="text-4xl lg:text-5xl xl:text-7xl font-extrabold text-[#5538ab]">
          Being A Getirian
        </h2>
        <h3 className="text-2xl lg:text-3xl xl:text-3xl font-bold text-[#ffd300]">
          Our Values
        </h3>
      </motion.div>

      <div className="w-full">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full grid grid-rows-3 2xl:grid-rows-2 grid-flow-col gap-2 md:gap-8"
        >
          {values.map((value) => (
            <div
              key={value.id}
              className="2xl:w-[380px] h-72 flex flex-col items-center justify-center text-center bg-[#5d3ebc] border border-b-4 border-b-[#ffd300] p-2 lg:p-10 xl:p-12 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 "
            >
              <Image
                src={value.img}
                alt=""
                width={1000}
                height={1000}
                className="w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] rounded-md object-cover"
              />
              <h3 className="font-semibold text-white md:text-xl mt-3 mb-2">
                {value.title}
              </h3>
              <p className="font-medium text-white text-xs">{value.subtitle}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BeingAGetirian;

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Technology = () => {
  return (
    <div className="w-full h-screen block lg:flex items-center justify-center gap-10 lg:gap-20 pt-20 lg:pt-0 px-4 lg:px-10 xl:px-16 2xl:px-40 mt-32 xl:mt-36 2xl:mt-16 relative overflow-visible">
      <div className="px-4 lg:px-0 lg:w-1/2 z-10 flex flex-col gap-3 md:gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-extrabold text-4xl lg:text-6xl xl:text-7xl text-[#5538ab]"
        >
          Create <span className="text-[#ffd300]">Global</span> Impact
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[#5538ab]"
        >
          Data and technology have been central to our vision since day one. We
          harness their powers to achieve efficiency in our operations, and they
          play a key role in reducing food waste, lowering our carbon footprint,
          and improving urban life in the communities we serve.
        </motion.h3>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[#5538ab]"
        >
          We are invested in building a robust and integrated technology and
          data infrastructure to drive future growth and innovation.
        </motion.h3>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Link
            href="/about"
            className="uppercase mt-2 flex items-center justify-center w-[135px] lg:w-[170px] xl:w-[190px] text-center font-semibold lg:text-lg xl:text-xl bg-[#ffd300] text-[#5538ab] px-4 py-2 lg:px-6 lg:py-3 rounded-md border border-[#faf0be] hover:bg-transparent hover:text-lg hover:shadow-[1px_3px_25px_rgb(0,0,0,0.2)] hover:shadow-[#ffd300] transition-all duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
      <div className="z-10 px-4 lg:px-0 mt-8 lg:mt-0 lg:w-1/2 flex flex-col gap-3">
        <div className="flex gap-3 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center gap-5 md:gap-3 w-1/2 h-60 border border-[#5538ab] rounded-md md:p-6"
          >
            <Image
              src="/images/techno1.png"
              alt=""
              width={1000}
              height={1000}
              className="w-[50px] md:w-[80px] h-[50px] md:h-[80px] rounded-md object-cover"
            />
            <h1 className="font-semibold text-xs md:text-xl text-[#5538ab]">
              API calls / minute
            </h1>
            <span className="font-extrabold text-4xl md:text-5xl text-[#5538ab]">1M</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center gap-5 md:gap-3 w-1/2 h-60 border border-[#5538ab] rounded-md md:p-6"
          >
            <Image
              src="/images/techno2.png"
              alt=""
              width={1000}
              height={1000}
              className="w-[50px] md:w-[80px] h-[50px] md:h-[80px] rounded-md object-cover"
            />
            <h1 className="font-semibold text-xs md:text-xl text-[#5538ab]">
              Orders till date
            </h1>
            <span className="font-extrabold text-4xl md:text-5xl text-[#5538ab]">500M</span>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-3 md:w-full h-60 border border-[#5538ab] rounded-md p-6"
        >
          <Image
            src="/images/techno3.png"
            alt=""
            width={1000}
            height={1000}
            className="w-[80px] h-[80px] rounded-md object-cover"
          />
          <h1 className="font-semibold text-xs md:text-xl text-[#5538ab]">
            Raised in our last round
          </h1>
          <span className="font-extrabold text-5xl text-[#5538ab]">$786M</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Technology;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const GetriMean = () => {
  return (
    <div className="w-full flex items-center justify-center mt-10 md:mt-0 px-4 lg:px-10 xl:px-16 2xl:px-40">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20">
        <div className="md:w-1/2 flex flex-col gap-1">
          <motion.h3
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl lg:text-5xl xl:text-7xl font-extrabold text-[#5538ab] pb-6"
          >
            Getir Means <span className="text-[#ffd300]">Bring</span> 
          </motion.h3>
          <motion.p
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-medium text-[#5538ab]"
          >
            In Turkish, the word ‘getir’ means bring - and bringing <span className="text-[#ffd300]">happiness</span> is
            what we do. We provide high-quality, fresh groceries, delivered
            sustainably in minutes.
          </motion.p>
          <motion.p
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-medium text-[#5538ab] pt-2"
          >
            To achieve this, we’ve built our business model on the principles of
            operational excellence, speed, and trust.
          </motion.p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/getirmean.jpeg"
            alt=""
            width={1000}
            height={1000}
            className="md:w-[600px] md:h-[450px] rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default GetriMean;

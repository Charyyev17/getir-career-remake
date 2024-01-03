"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center px-4 lg:px-10 xl:px-16 2xl:px-40">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20">
        <div className="md:w-1/2">
          <Image
            src="/images/aboutus.jpeg"
            alt=""
            width={1000}
            height={1000}
            className="md:w-[600px] md:h-[450px] rounded-md object-cover"
          />
        </div>
        <div className="md:w-1/2 flex flex-col gap-1">
          <motion.h3
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl lg:text-5xl xl:text-7xl font-extrabold text-[#5538ab]"
          >
            About Us
          </motion.h3>
          <motion.h3
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl lg:text-2xl xl:text-3xl font-bold text-[#ffd300] pb-3 lg:pb-6"
          >
            Our Story
          </motion.h3>
          <motion.p
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-medium text-[#5538ab]"
          >
            Founded in 2015 in Istanbul, we set out with a simple mission to
            build a service we wanted to use ourselves. Eight years on and we’re
            present in 8 more countries - France, Germany, Italy, the
            Netherlands, Portugal, Spain, United Kingdom, and USA - delivered
            more than 200 million orders, and acquired a number of other
            ultra-fast companies such as Block, Frichti, Gorillas, and Weezy.
          </motion.p>
          <motion.p
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="my-2 w-20 border border-[#ffd300]"
          >
          </motion.p>
          <motion.p
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-medium text-[#5538ab]"
          >
            Today we’re on a mission to free up time for the moments that
            matter, delivering happiness to local communities, and enabling
            everyone to live life to the fullest.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

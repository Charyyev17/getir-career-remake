"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="h-screen w-full flex gap-8 items-center justify-between px-4 lg:px-10 xl:px-16 2xl:px-40">
      <div className="flex flex-col md:w-2/3 gap-4 pt-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col relative"
        >
          <h1 className="font-extrabold text-[#5538ab] text-5xl sm:text-7xl md:text-5xl lg:text-7xl xl:text-8xl mt-2">
            Grow your <span className="text-[#ffd300]">career</span> with Getir
          </h1>
          <Image
            src="/images/line.png"
            alt=""
            width={1000}
            height={1000}
            className="w-[330px] h-[10px] hidden xl:flex absolute left-0 bottom-[94px]"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-medium text-[#5538ab] text-base md:text-lg pr-10"
        >
          As the pioneers of the ultra-fast grocery delivery industry, we put
          the future of shopping at our customer’s fingertips.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="h-screen hidden md:flex gap-3 pb-10"
      >
        <div className="h-full relative flex flex-col justify-end">
          <Image
            src="/images/arrow2.png"
            alt=""
            width={1000}
            height={1000}
            className="absolute top-36 right-10 lg:right-16 w-[90px] h-[120px] rounded-md rotate-[15deg]"
          />
          <Image
            src="/images/hero2.jpeg"
            alt=""
            width={1000}
            height={1000}
            className="w-[350px] h-3/5 rounded-md object-cover"
          />
        </div>
        <div className="h-full flex flex-col justify-end gap-3">
          <Image
            src="/images/hero.jpeg"
            alt=""
            width={1000}
            height={1000}
            className="w-[350px] h-2/4 rounded-md object-cover"
          />
          <Image
            src="/images/hero3.jpg"
            alt=""
            width={1000}
            height={1000}
            className="w-[350px] h-1/3 rounded-md object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}

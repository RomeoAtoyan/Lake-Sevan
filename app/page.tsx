"use client";
import wallpaper from "@/public/wallpaper.jpg";
import logo from "@/public/lake_sevan_logo_v2.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="relative min-h-screen h-full">
      {/* Background */}
      <Image
        src={wallpaper}
        alt="Lake Sevan background"
        fill
        priority
        quality={100}
        className="object-cover"
      />

      {/* Dark veil */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 min-h-screen flex items-center justify-center px-6"
      >
        <div className="text-center text-white max-w-2xl">
          {/* Title */}
          {/* <h1 className="font-dynalight text-8xl md:text-9xl font-semibold mb-6">
            Lake Sevan
          </h1> */}

          <Image
            src={logo}
            alt="Lake Sevan background"
            priority
            quality={100}
            className="object-contain aspect-square h-auto max-w-[250px] mx-auto"
          />

          {/* Subtitle */}
          <p className="tracking-[0.4em] uppercase text-sm md:text-base text-white/80 mb-12 font-medium">
            A Taste of the Caucasus
          </p>

          {/* Divider */}
          <div className="w-40 h-[2px] mx-auto bg-white/50 mb-12" />

          {/* Status */}
          <p className="text-2xl md:text-3xl font-medium mb-14 uppercase">
            Opening Soon
          </p>

          {/* Address */}
          <div className="text-base md:text-lg tracking-wide">
            <p className="mb-1 font-medium">Wilrijk · Antwerp</p>
            <p className="text-white/65">Belgium</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;

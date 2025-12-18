"use client";
import wallpaper from "@/public/wallpaper.jpg";
import logo from "@/public/lake_sevan_logo_v2.svg";
import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden">
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
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 min-h-screen flex items-center justify-center px-6"
      >
        <div className="text-center text-white max-w-2xl">
          <Image
            src={logo}
            alt="Lake Sevan Logo"
            priority
            quality={100}
            className="object-contain aspect-square h-auto max-w-[200px] mx-auto mb-8"
          />

          <h1 className="text-7xl md:text-8xl font-bold mb-4 opacity-90">404</h1>

          <p className="tracking-[0.3em] uppercase text-lg md:text-xl text-white/90 mb-8 font-medium">
            Page Not Found
          </p>

          <p className="text-white/70 mb-12 max-w-md mx-auto">
            The flavors you are looking for seem to have wandered off. Let's get you back to the main course.
          </p>

          {/* Divider */}
          <div className="w-24 h-[1px] mx-auto bg-white/30 mb-12" />

          {/* Home Link */}
          <Link
            href="/"
            className="inline-block px-10 py-4 border border-white/40 hover:border-white text-white tracking-[0.2em] uppercase text-sm transition-all duration-300 bg-white/5 hover:bg-white/10 backdrop-blur-sm"
          >
            Return Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

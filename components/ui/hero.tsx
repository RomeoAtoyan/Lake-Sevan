import React from "react";

const Hero = () => {
  return (
    <div className="relative z-0 flex flex-col items-center justify-center p-12 text-white">
      <h1 className="uppercase text-6xl mb-4 font-medium">Menu</h1>

      <div className="grid grid-cols-3 gap-x-6 gap-2 mb-10">
        <p className="font-semibold">Xorovac</p>
        <p className="font-semibold">Xorovac</p>
        <p className="font-semibold">Xorovac</p>
        <p className="font-semibold">Xorovac</p>
        <p className="font-semibold">Xorovac</p>
        <p className="font-semibold">Xorovac</p>
      </div>
      <div className="h-[1px] w-[300px] bg-[length:8px_1px] bg-repeat-x bg-center bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
    </div>
  );
};

export default Hero;

import React from "react";

const Item = () => {
  return (
    <article className="relative z-0 aspect-[3/4] max-w-[220px] w-full bg-black flex items-start justify-start pt-4 pl-4">
      <img
        className="absolute inset-0 w-full h-full object-cover z-[-1] opacity-55"
        src="https://images.immediate.co.uk/production/volatile/sites/30/2020/01/retro-cocktails-b12b00d.jpg"
        alt=""
      />
      <h1 className="text-white text-3xl uppercase font-normal">Xorovac</h1>
    </article>
  );
};

export default Item;

import React from "react";

const Item = () => {
  return (
    <article className="relative z-0 aspect-[3/4] max-w-[220px] border w-full bg-black flex items-start justify-start pt-4 pl-4">
      <img
        className="absolute inset-0 w-full h-full object-cover z-[-1] opacity-55"
        src="https://img.freepik.com/premium-photo/armenian-bbq-excellence-khorovats-grilled-delight_1077802-12812.jpg"
        alt=""
      />
      <h1 className="text-white text-3xl uppercase font-normal">Xorovac</h1>
    </article>
  );
};

export default Item;

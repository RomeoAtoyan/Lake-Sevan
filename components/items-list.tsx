import React from "react";
import Item from "./item";

const ItemsList = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 pb-12">
      {Array.from({ length: 5 }).map((_, i) => (
        <Item key={i} />
      ))}
    </div>
  );
};

export default ItemsList;

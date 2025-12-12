"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MenuItem from "@/components/menu-item";

interface MenuCategoryProps {
  items: {
    name: string;
    description: string;
    price: any;
    image?: string;
    comment?: string;
  }[];
  isDrinks?: boolean;
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800";

const MenuCategory = ({ items, isDrinks = false }: MenuCategoryProps) => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const toggleItem = (name: string) => {
    if (isDrinks) return;
    setOpenItemId(openItemId === name ? null : name);
  };

  return (
    <div
      className={
        isDrinks
          ? "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 w-full"
          : "flex flex-col items-start gap-4 w-full"
      }
    >
      {items.map((item) => (
        <div
          key={item.name}
          className={`w-full ${!isDrinks ? "cursor-pointer" : ""}`}
          onClick={() => toggleItem(item.name)}
        >
          <MenuItem
            item={item}
            icon={
              !isDrinks && (
                <motion.div
                  animate={{ rotate: openItemId === item.name ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-[#d4b672] flex-shrink-0" />
                </motion.div>
              )
            }
          />

          <AnimatePresence>
            {!isDrinks && openItemId === item.name && (
              <motion.div
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden w-full"
              >
                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                  {/* Using regular img tag as we are using external placeholder URLs */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image || DEFAULT_IMAGE}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default MenuCategory;

import React from "react";
import { LanguageSelector } from "@/components/ui/language-selector";

const Page = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-center font-dynalight text-6xl mb-4 text-[#e0e0e0]">
        Lake Sevan
      </h1>
      <div className="max-w-4xl mx-auto flex flex-col items-center pt-8">
        <h1 className="text-4xl font-light tracking-wide uppercase mb-8">
          Menu
        </h1>
        <LanguageSelector />
      </div>
    </div>
  );
};

export default Page;

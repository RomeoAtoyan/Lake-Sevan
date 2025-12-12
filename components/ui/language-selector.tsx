"use client";

import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

type Language = "EN" | "NL" | "RU" | "AM";

export const LanguageSelector = () => {
  const router = useRouter();

  // Create a mapping for locales if needed, but they seem to match the type directly (lowercase usually)
  const handleLanguageChange = (lang: Language) => {
    router.push(`/menu/${lang.toLowerCase()}`);
  };

  return (
    <div className="flex items-center gap-3">
      {/* EN - United Kingdom */}
      <button
        onClick={() => handleLanguageChange("EN")}
        className={cn(
          "w-8 h-8 rounded-md overflow-hidden border-2 transition-all border-transparent opacity-70 hover:opacity-100 hover:scale-110"
        )}
        title="English"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="flag-icons-gb"
          viewBox="0 0 640 480"
        >
          <path fill="#012169" d="M0 0h640v480H0z" />
          <path
            fill="#FFF"
            d="M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
          />
          <path
            fill="#C8102E"
            d="M424 286l216 163v31h-45L352 322 109 480H64l246-160L68 141l-.9.1L0 191v-36l252-192h50l-246 195 244 182L516 0h53L363 154l.5-.4L424 286z"
          />
          <path fill="#FFF" d="M260 0h120v480H260zM0 170h640v140H0z" />
          <path fill="#C8102E" d="M280 0h80v480h-80zM0 200h640v80H0z" />
        </svg>
      </button>

      {/* NL - Netherlands */}
      <button
        onClick={() => handleLanguageChange("NL")}
        className={cn(
          "w-8 h-8 rounded-md overflow-hidden border-2 transition-all border-transparent opacity-70 hover:opacity-100 hover:scale-110"
        )}
        title="Nederlands"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="flag-icons-nl"
          viewBox="0 0 640 480"
        >
          <path fill="#21468b" d="M0 0h640v480H0z" />
          <path fill="#fff" d="M0 0h640v320H0z" />
          <path fill="#ae1c28" d="M0 0h640v160H0z" />
        </svg>
      </button>

      {/* RU - Russia */}
      <button
        onClick={() => handleLanguageChange("RU")}
        className={cn(
          "w-8 h-8 rounded-md overflow-hidden border-2 transition-all border-transparent opacity-70 hover:opacity-100 hover:scale-110"
        )}
        title="Русский"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="flag-icons-ru"
          viewBox="0 0 640 480"
        >
          <path fill="#fff" d="M0 0h640v480H0z" />
          <path fill="#0039a6" d="M0 160h640v320H0z" />
          <path fill="#d52b1e" d="M0 320h640v160H0z" />
        </svg>
      </button>

      {/* RU - Russia */}
      <button
        onClick={() => handleLanguageChange("AM")}
        className={cn(
          "w-8 h-8 rounded-md overflow-hidden border-2 transition-all border-transparent opacity-70 hover:opacity-100 hover:scale-110"
        )}
        title="Հայերեն"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="flag-icons-am"
          viewBox="0 0 640 480"
        >
          <path fill="#D90012" d="M0 0h640v480H0z" />
          <path fill="#0033A0" d="M0 160h640v320H0z" />
          <path fill="#F2A800" d="M0 320h640v160H0z" />
        </svg>
      </button>
    </div>
  );
};

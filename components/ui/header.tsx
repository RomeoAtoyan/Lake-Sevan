import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="p-4 w-full grid grid-cols-3 items-center">
      <div className="flex">
        <Sheet>
          <SheetTitle className="sr-only">Menu</SheetTitle>

          <SheetTrigger asChild>
            <Menu color="white" size={24} />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-[300px] px-6 py-8 bg-black text-white"
          >
            <div className="mb-10">
              <h1 className="uppercase text-6xl mb-4 font-medium">LOGO</h1>
              <p className="text-[9px] tracking-[0.3em] text-neutral-400 mt-2">
                PROVENANCE
              </p>
            </div>

            <nav className="flex flex-col space-y-5 text-[15px]">
              <button className="text-left hover:text-neutral-300">
                ГЛАВНАЯ
              </button>
              <button className="text-left hover:text-neutral-300">
                О НАС
              </button>
              <button className="text-left hover:text-neutral-300">МЕНЮ</button>
              <button className="text-left hover:text-neutral-300">
                ДОСТАВКА
              </button>
              <button className="text-left hover:text-neutral-300">
                КАЛЬЯНЫ
              </button>
              <button className="text-left hover:text-neutral-300">
                МЕРОПРИЯТИЯ
              </button>
              <button className="text-left hover:text-neutral-300">
                КОНТАКТЫ
              </button>
            </nav>

            <div className="flex items-center gap-4 mt-10">
              <button className="h-9 w-9 rounded-full bg-white flex items-center justify-center">
                <img src="/icons/telegram.svg" className="h-5 w-5" />
              </button>
              <button className="h-9 w-9 rounded-full bg-white flex items-center justify-center">
                <img src="/icons/vk.svg" className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-10 text-xs text-neutral-400">
              Номер телефона:{" "}
              <span className="text-white font-medium">+7 (499) 450 85 40</span>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex justify-center">
        <h1 className="text-2xl font-thin text-white">Logo</h1>
      </div>

      <div></div>
    </div>
  );
};

export default Header;

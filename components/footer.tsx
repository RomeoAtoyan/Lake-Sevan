import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-white py-16 px-12 border-t border-white/20">
      <div className="flex justify-between gap-16">
        <div className="space-y-5">
          <h1 className="text-3xl font-bold tracking-wider">KAIF</h1>
          <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400">
            Provenance
          </p>

          <nav className="pt-6 space-y-3">
            <a className="block text-sm hover:text-neutral-300 cursor-pointer">
              Главная
            </a>
            <a className="block text-sm hover:text-neutral-300 cursor-pointer">
              О нас
            </a>
            <a className="block text-sm hover:text-neutral-300 cursor-pointer">
              Меню
            </a>
            <a className="block text-sm hover:text-neutral-300 cursor-pointer">
              Доставка
            </a>
            <a className="block text-sm hover:text-neutral-300 cursor-pointer">
              Кальяны
            </a>
          </nav>
        </div>

        <div className="space-y-6 text-sm">
          <div>
            <h2 className="text-neutral-400 text-xs mb-1">Адрес</h2>
            <p className="font-medium">Большая Дмитровка, 13</p>
          </div>

          <div>
            <h2 className="text-neutral-400 text-xs mb-1">Номер телефона</h2>
            <p className="font-medium">+7 (499) 450 85 40</p>
          </div>

          <div>
            <h2 className="text-neutral-400 text-xs mb-1">Время работы</h2>
            <p className="font-medium">ВС–ЧТ c 14:00 до 00:00</p>
            <p className="font-medium">ПТ–СБ c 14:00 до 05:00</p>
          </div>

          <div className="pt-4 text-xs text-neutral-500 leading-relaxed">
            <p>ООО “КАЙФ”</p>
            <p>ИНН 9710083865</p>
            <p>ОГРН 1207700205790</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

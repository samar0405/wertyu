"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../images/logo.svg";
import Phone from "../images/phone.svg";
import Mail from "../images/mail.svg";
import Ktg from "../images/ktg.svg";
import Search from "../images/search.svg";
import User from "../images/user.svg";
import Like from "../images/like.svg";
import Korzinka from "../images/korzinka.svg";
import Hamburger from "../images/burger.svg";
import Call from "../images/call.svg";

const links = [
  { path: "/", title: "Oсновной" },
  { path: "/products", title: "Продукты" },
  { path: "/contact", title: "Контакты" },
  { path: "/payment", title: "Оплата и Доставка" },
  { path: "/news", title: "Новости" },
  { path: "/about", title: "О нас" },
];

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="fixed z-30 w-full">
        <div className="bg-[#1F1D14]">
          <div className="max-w-[1280px] mx-auto py-[12px] flex justify-between items-center">
            <div className="flex items-center gap-[36px]">
              <LogoSection />
              <NavLinks />
            </div>
            <ContactInfo />
            <button
              className="lg:hidden p-2"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Image src={Hamburger} alt="Menu" className="text-[#fff]" />
            </button>
          </div>
        </div>
        <SearchSection />
      </header>
      {sidebarOpen && <Overlay onClick={() => setSidebarOpen(false)} />}
      <MobileSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
};

const LogoSection = () => (
  <div className="flex">
    <Image src={Logo} alt="Logo" />
    <h1 className="text-[#fff] opacity-[0.9] font-semibold text-[24px]">
      Sport <br />
      Market
    </h1>
  </div>
);

const NavLinks = () => (
  <div className="hidden lg:flex gap-[30px]">
    {links.map((item, index) => (
      <Link
        href={item.path}
        key={index}
        className="text-[#fff] opacity-[0.8] text-[14px] font-normal"
      >
        {item.title}
      </Link>
    ))}
  </div>
);

const ContactInfo = () => (
  <div className="hidden lg:flex items-center justify-center gap-[30px]">
    <div className="flex items-center">
      <Image src={Phone} alt="Phone" />
      <p className="text-[#fff] flex items-center gap-1 opacity-[0.8] text-[16px]">
        <span className="text-xs">+998 (90)</span> 565-85-85
      </p>
    </div>
    <div className="flex items-center">
      <Image src={Mail} alt="Mail" />
      <p className="text-[#fff] opacity-[0.8] text-[14px]">info@gmail.com</p>
    </div>
  </div>
);

const SearchSection = () => (
  <div className="bg-[#fff]">
    <div className="max-w-[1280px] mx-auto flex gap-3 justify-between items-center flex-wrap">
      <div className="py-[15px] flex gap-[12px] flex-wrap">
        <button className="bg-[#1F1D14] text-[#fff] flex py-[15px] px-[40px] rounded-[5px] gap-2 ">
          <Image src={Ktg} alt="Katalog" />
          Каталог
        </button>
        <div className="flex bg-[#F2F2F2] rounded-[5px] justify-between h-[53px] max-w-[502px]">
          <input
            type="text"
            placeholder="Поиск"
            className="outline-none bg-[#F2F2F2] pl-5 rounded-[5px] flex-grow"
          />
          <Image src={Search} alt="Search" className="mr-5" />
        </div>
      </div>
      <div className="flex gap-4">
        <IconButton src={User} alt="User" />
        <IconButton src={Like} alt="Like" />
        <button className="bg-[#F2F2F2] text-[#111] flex py-[15px] px-[40px] rounded-[5px] gap-2">
          <Image src={Korzinka} alt="Korzinka" />
          Корзина
        </button>
      </div>
    </div>
  </div>
);

const IconButton = ({ src, alt }) => (
  <div className="bg-[#F2F2F2] flex items-center justify-center p-[13px] rounded-[5px]">
    <Image src={src} alt={alt} />
  </div>
);

const Overlay = ({ onClick }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
    onClick={onClick}
  ></div>
);

const MobileSidebar = ({ sidebarOpen, setSidebarOpen }) => (
  <div
    className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform ${
      sidebarOpen ? "translate-x-0" : "translate-x-full"
    } lg:hidden`}
  >
    <div className="p-4">
      <button
        className="text-black mb-4"
        onClick={() => setSidebarOpen(false)}
        aria-label="Close sidebar"
      >
        Закрывать
      </button>
      <div className="flex flex-col gap-4">
        {links.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            className="text-black text-[14px] font-normal"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <ContactInfoMobile />
      </div>
    </div>
  </div>
);

const ContactInfoMobile = () => (
  <>
    <div className="flex items-center mb-4">
      <Image src={Call} alt="Call" />
      <p className="text-black flex items-center gap-1 text-[16px]">
        +998 (90) 565-85-85
      </p>
    </div>
    <div className="flex items-center">
      <Image src={Mail} alt="Mail" />
      <p className="text-black text-[14px]">info@gmail.com</p>
    </div>
  </>
);

export default Header;

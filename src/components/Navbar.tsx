"use client";
import TRS_Logo from "../assets/TRS-Block-Black-WhiteTEXT.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex-center mx-auto h-12 rounded-full border bg-white/60 pt-1 px-2 pl-4 shadow-[5px_5px_30px_rgba(190,190,190,0.15),-5px_-5px_30px_rgba(255,255,255,0.15)] backdrop-blur-md">
      <div className="flex w-full justify-between items-center gap-6">
        <a className="flex w-full items-center justify-start gap-2" href="/">
          <div className="flex-center w-fit">
            <Image
              alt="Tech Resume Services Logo"
              width="36"
              height="36"
              src={TRS_Logo}
              className="rounded-lg"
            />
          </div>
        </a>
        <span className="text-md font-bold tracking-wider text-nowrap">Tech Resume Services</span>

        <div className="hidden h-5 border-r border-gray-200 sm:block "></div>

        <div className="hidden w-full items-center justify-end gap-4 px-4 sm:flex">
          <a
            className="text-sm text-[#444240] hover:underline"
            href="/"
          >
            Home
          </a>
          <a
            className="text-sm text-[#444240] hover:underline"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-sm text-[#444240] hover:underline"
            href="#pricing"
          >
            Pricing
          </a>
          <a
            className="text-sm text-[#444240] hover:underline"
            href="#faq"
          >
            FAQ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

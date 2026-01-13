import { useState } from "react";
import BrandLogo from "../atoms/BrandLogo";
import avatar from "../../img/icons/avatar.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-black">
      <div
        className="
          h-[72px]
          flex
          items-center
          px-4
          md:px-10
        "
      >
        <BrandLogo />
        <div className="hidden md:flex items-center gap-8 ml-12 text-[16px] font-medium text-white">
          <span className="cursor-pointer hover:text-gray-300">Series</span>
          <span className="cursor-pointer hover:text-gray-300">Film</span>
          <span className="cursor-pointer hover:text-gray-300">
            Daftar Saya
          </span>
        </div>

        {open && (
          <div className="md:hidden bg-black border-t border-[#2F3334] px-4">
            <div className="flex justify-around py-3 text-[16px] md-text-sm text-white font-medium">
              <span className="cursor-pointer hover:text-gray-300">Series</span>
              <span className="cursor-pointer hover:text-gray-300">Film</span>
              <span className="cursor-pointer hover:text-gray-300">
                Daftar Saya
              </span>
            </div>
          </div>
        )}

        <div className="ml-auto flex items-center gap-3">
          <div
            className="ml-auto flex items-center gap-2 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <img
              src={avatar}
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}

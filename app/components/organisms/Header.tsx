"use client";
import { BsCart2 } from "react-icons/bs";
import NavLinks from "../molecules/NavLinks";
import SearchInput from "../molecules/SearchInput";
import Image from "next/image";
import { FaChevronDown, FaList } from "react-icons/fa";
import BreadCrumbs from "../molecules/BreadCrumbs";
import Logo from "@/public/Logo.png";
import CustomSwitch from "../atoms/Switch";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Header() {
  const [isClicked, setClicked] = useState(false);
  return (
    <div className=" flex pt-[20px] lg:pt-[70px] w-full flex-col justify-center items-center">
      <div className="flex lg:flex-row flex-col gap-y-4 justify-start">
        <div className="justify-between items-center flex">
          {" "}
          <Image
            src={Logo}
            className=" flex lg:hidden pl-2 "
            alt={"App logo"}
          />
          <button
            className="flex lg:hidden"
            onClick={() => setClicked(!isClicked)}
          >
            <GiHamburgerMenu className="w-8 h-8 text-primary/90 mr-2" />
          </button>
        </div>
        <div
          className={` ${
            isClicked ? "flex " : "hidden "
          } lg:hidden w-full mb-2 h-[200px] border-2 rounded-lg border-primary flex-col items-center justify-center`}
        >
          <NavLinks className="flex gap-y-2 flex-col items-center justify-start" />
          <div className="relative pt-2 items-center pr-2 pl-14 mr-10">
            <BsCart2 className="w-6 h-6 text-primary" />
            <div className="w-[18px] h-[18px] text-[12px] absolute left-[72px] bottom-[10px] rounded-full flex justify-center bg-[#62C3C6]/30 text-primary">
              1
            </div>
          </div>
          <button className="text-[#045A5C] hidden lg:flex bg-[#ECFEAA] ml-6 px-10 py-5 h-[33px] justify-center items-center rounded-[24px_0_24px_0] w-[120px]">
            Anmelden
          </button>
        </div>
        <SearchInput bg={""} className={""} />
        <NavLinks className="hidden lg:flex justify-center" />
        <div className="relative hidden lg:flex items-center pr-2 pl-14">
          <BsCart2 className="w-6 h-6 text-primary" />
          <div className="w-[18px] h-[18px] text-[12px] absolute left-[72px] bottom-[10px] rounded-full flex justify-center bg-[#62C3C6]/30 text-primary">
            1
          </div>
        </div>
        <button className="text-[#045A5C] hidden lg:flex bg-[#ECFEAA] ml-6 px-10 py-5 h-[33px] justify-center items-center rounded-[24px_0_24px_0] w-[120px]">
          Anmelden
        </button>
      </div>
      <div className="w-full flex lg:pt-[90px] pt-[20px] justify-start lg:pl-0 pl-3 lg:justify-between items-start">
        <BreadCrumbs />
        <div className="text-[14px] hidden lg:flex flex-col items-center">
          <p className="text-[#365758] mb-2">GKV mit Kostenübernahme?</p>
          <button className="w-[223px] py-1 text-[#045A5C] rounded-[24px_0_24px_0] border-[#62C3C6] border-2">
            Preisoptionen
          </button>
        </div>
      </div>
      <div className="flex justify-center lg:justify-between items-center w-full lg:pt-[45px]">
        <Image src={Logo} className="hidden lg:flex" alt={"App logo"}></Image>
        <div className="flex items-center gap-x-4 ">
          <SearchInput bg={"819191"} className={" hidden lg:flex"} />
          <button className="h-[34px] flex items-center gap-x-2 text-[#365758] font-semibold rounded-md bg-[#62C3C6]/30 px-3 ">
            Sortieren nach <FaChevronDown className=" text-[#62C3C6] w-5 h-5" />
          </button>
          <div className="w-auto flex h-[34px] items-center gap-x-2 text-[#365758] font-semibold rounded-md bg-[#62C3C6]/30 px-3 ">
            Verfügbarkeit
            <CustomSwitch className="text-black" defaultChecked size="small" />
          </div>
          <div className="bg-[#62C3C6]/30 px-3 hidden md:flex h-[34px] rounded-md items-center">
            <FaList className="w-[24px] h-[24px] text-[#365758]" />
          </div>
        </div>
      </div>
    </div>
  );
}

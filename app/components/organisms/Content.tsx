"use client";

import { Divider } from "@mui/material";
import { GoChevronDown } from "react-icons/go";
import { useState } from "react";
import CheckBoxList from "../molecules/CheckBoxList";
import CustomSlider from "../molecules/RangeSliders";
import GenFilter from "../molecules/GenFilter";
import { IoClose } from "react-icons/io5";
import MedCard from "../molecules/MedCard";
import PaginationNew from "../atoms/Pagination";

export default function Content() {
  const ItemList = [
    {
      name: "ADREXpharma",
    },
    {
      name: "Aurora",
    },
    {
      name: "Avaay",
    },
    {
      name: "Bedrocan",
    },
    {
      name: "Cannamedical",
    },
  ];
  const GenList1 = [{ name: "Indica" }, { name: "Sativa" }, { name: "Hybrid" }];
  const GenList2 = [{ name: "bestrahlt" }, { name: "nicht bestrahlt" }];
  const [isClicked, setClicked] = useState(false);
  const [filterButton, setFilterButton] = useState(false);
  return (
    <div className="w-full flex-col lg:flex-row lg:flex flex-grow justify-between lg:px-0 px-4 pt-2 lg:pt-[64px]">
      <button
        onClick={() => setFilterButton(!filterButton)}
        className="text-[24px] lg:hidden mb-1 flex items-start justify-center w-full bg-[#62C3C6]/10 text-[#045A5C] font-semibold rounded-sm"
      >
        Filter
      </button>
      <div
        className={`${
          filterButton ? "flex " : "hidden "
        } justify-center md:absolute lg:relative z-10 bg-white/90 lg:justify-start px-4 lg:px-0 md:w-[400px] lg:w-[250px] lg:flex flex-col gap-y-[30px] lg:h-[1322px]`}
      >
        <p className="hidden text-[24px] lg:flex justify-center w-full bg-[#62C3C6]/10 text-[#045A5C] font-semibold rounded-sm">
          Filter
        </p>
        <CustomSlider name={"Presis"} symbol={"€"} />
        <Divider className="bg-[#62C3C6]/30 h-[2px] w-full border-none" />
        <div>
          <button
            onClick={() => setClicked(!isClicked)}
            className="flex w-full items-center justify-between"
          >
            <p className="text-[#365758] text-[18px] font-semibold flex items-center justify-center ml-8 w-full">
              Hersteller
            </p>
            <GoChevronDown
              className={
                !isClicked
                  ? "rotate-180 ease-in-out w-8 h-8 text-[#62C3C6]"
                  : " w-8 h-8 text-[#62C3C6]"
              }
            />
          </button>
          <div className={isClicked ? "" : "hidden"}>
            <CheckBoxList List={ItemList} />
            <button className="w-full py-1 mt-[20px] text-[#045A5C] rounded-[24px_0_24px_0] border-[#ECFEAA] border-2">
              mehr anzeigen
            </button>
          </div>
          <Divider className="bg-[#62C3C6]/30 h-[2px] w-full border-none mt-[30px]" />
        </div>
        <CustomSlider name={"THC Gehalt"} symbol={"%"} />
        <Divider className="bg-[#62C3C6]/30 h-[2px] w-full border-none" />
        <CustomSlider name={"CBD Gehalt"} symbol={"%"} />
        <Divider className="bg-[#62C3C6]/30 h-[2px] w-full border-none" />
        <div className="w-full">
          <p className="text-[#365758] mb-[18px] text-[18px] font-semibold flex justify-center items-center">
            Genetik
          </p>
          <GenFilter List={GenList1} />
        </div>
        <Divider className="bg-[#62C3C6]/30 h-[2px] w-full border-none" />
        <div className="w-full">
          <p className="text-[#365758] mb-[18px] text-[18px] font-semibold flex justify-center items-center">
            Bestrahltung
          </p>
          <GenFilter List={GenList2} />
        </div>
        <Divider className="bg-[#62C3C6]/30 h-[2px] w-full border-none" />
        <div>
          <button className="flex w-full items-center justify-between">
            <p className="text-[#365758] text-[18px] font-semibold flex justify-center w-full ml-8 items-center">
              Terpene
            </p>
            <GoChevronDown className="w-8 h-8 text-[#62C3C6]" />
          </button>
          <Divider className="bg-[#62C3C6]/30 h-[2px] w-full border-none mt-[20px]" />
        </div>
        <div className="flex items-center gap-x-1  justify-center">
          <IoClose className="text-primary w-5 h-5" />
          alle Filter zurücksetzen
        </div>
      </div>
      <div className="lg:w-[970px] flex flex-col h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 items-center justify-center lg:justify-between">
          <MedCard mid={""} />
          <MedCard mid={""} />
          <MedCard mid={""} />
          <MedCard mid={"green"} />
          <MedCard mid={"green"} />
          <MedCard mid={"green"} />
          <MedCard mid={""} />
          <MedCard mid={""} />
          <MedCard mid={""} />
        </div>
        <div className="">
          <PaginationNew />
        </div>
      </div>
    </div>
  );
}

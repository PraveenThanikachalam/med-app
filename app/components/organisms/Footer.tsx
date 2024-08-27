import ActiveImg from "@/public/Primary-Logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#1A8D91] flex flex-col lg:flex-row h-[500px] lg:h-[200px] mt-6 lg:mt-[130px] w-full">
      <div className="flex gap-y-2 mt-[30px] lg:mt-[90px] ml-4 lg:ml-14 text-[14px] lg:text-[12px] text-white/50 flex-col">
        <p>AGB</p>
        <p>Impressum</p>
        <p>Datenschutz</p>
      </div>
      <div className="lg:ml-[140px] ml-4 flex flex-col gap-y-6 text-[#FFFFFF] mt-[40px]">
        <div className="flex gap-x-8">
          <div className="flex gap-x-1 items-center">
            <Image
              src={ActiveImg}
              className="w-[10px] text-[#045A5C] h-[16px]"
              alt={""}
            />
            <Link className=" font-lighter text-white" href="">
              Rezept einlösen
            </Link>
          </div>
          <div className="flex gap-x-1 items-center">
            <Image
              src={ActiveImg}
              className="w-[10px] text-[#045A5C] h-[16px]"
              alt={""}
            />
            <Link className=" font-lighter text-white" href="">
              Live Bestand{" "}
            </Link>
          </div>
        </div>

        <div className="flex gap-x-8">
          <div className="flex gap-x-1 items-center">
            <Image
              src={ActiveImg}
              className="w-[10px] text-[#045A5C] h-[16px]"
              alt={""}
            />
            <Link className=" font-lighter text-white" href="">
              Videosprechstunde{" "}
            </Link>
          </div>
          <div className="flex gap-x-1 items-center">
            <Image
              src={ActiveImg}
              className="w-[10px] text-[#045A5C] h-[16px]"
              alt={""}
            />
            <Link className=" font-lighter text-white" href="">
              FAQs{" "}
            </Link>
          </div>
          <div className="flex gap-x-1 items-center">
            <Image
              src={ActiveImg}
              className="w-[10px] text-[#045A5C] h-[16px]"
              alt={""}
            />
            <Link className=" font-lighter text-white" href="">
              Kontakt{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex md:gap-x-16 lg:gap-x-0 mt-[40px]">
        <div className="flex flex-col gap-y-3 ml-[20px] lg:ml-[80px] ">
          <p className="text-white/50 text-[12px]">Standort</p>
          <p className="font-semibold text-white text-[16px] leading-5">
            Bergstraße 49 - 57 <br /> 69469 Weinheim <br /> (3 Glocken Quartier)
          </p>
        </div>
        <div className="lg:ml-[50px] ml-[20px] flex flex-col gap-y-3">
          <p className="text-white/50 text-[12px]">Telefon</p>
          <p className="font-semibold text-white text-[16px] leading-5">
            0223 545 5250{" "}
          </p>
        </div>
        <div className="flex flex-col gap-y-2 lg:ml-[50px] ml-[20px]">
          <p className="text-white/50 text-[12px]">Öffnungszeiten</p>
          <div>
            <p className="text-[12px] text-white/50">Mo-Fr</p>
            <p className="font-semibold mt-1 text-white text-[16px] leading-5">
              09:00 – 18:00 Uhr{" "}
            </p>
          </div>
          <div>
            <p className="text-[12px] text-white/50">Sa</p>
            <p className="font-semibold text-white mt-1 text-[16px] leading-5">
              09:00 – 14:00 Uhr{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

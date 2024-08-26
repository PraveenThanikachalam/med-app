import Link from "next/link";
import Image from "next/image";
import React from "react";
import ActiveImg from "@/public/Primary-Logo.png";
import InactiveImg from "@/public/Inactive-Logo.png";

const Links: Array<LinkTypes> = [
  { name: "Rezept einlösen", href: "#" },
  { name: "Live Bestand", href: "#" },
  { name: "Videosprechstunde", href: "#" },
  { name: "FAQs", href: "#" },
  { name: "Kontakt", href: "#" },
];

export default function NavLinks({ className }: { className: string }) {
  return (
    <ul className={className + ` flex items-center gap-x-2 `}>
      {Links.map((link) => (
        <li className="flex lg:pl-6 gap-x-1 items-center" key={link.name}>
          {link.name == "Rezept einlösen" ? (
            <div className="flex gap-x-1 items-center">
              <Image
                src={ActiveImg}
                className="w-[10px] text-[#045A5C] h-[16px]"
                alt={""}
              />
              <Link className=" font-bold text-[#045A5C]" href={link.href}>
                {link.name}
              </Link>
            </div>
          ) : (
            <div className="flex gap-x-1 items-center">
              <Image src={InactiveImg} className="w-[10px] h-[16px]" alt={""} />
              <Link className="font-normal  text-[#045A5C]" href={link.href}>
                {link.name}
              </Link>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

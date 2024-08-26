import Link from "next/link";

export default function BreadCrumbs() {
  const Links: Array<LinkTypes> = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "Livebestand",
      href: "#",
    },
    {
      name: "Cannabis Blüten",
      href: "#",
    },
  ];
  return (
    <div className="lg:flex justify-start items-center hidden gap-x-2 md:gap-x-5">
      {Links.map((items) => (
        <div className="flex" key={items.name}>
          {items.name == "Cannabis Blüten" ? (
            <div className="flex text-primary" key={null}>
              <Link
                className="font-bold text-[16px] text-[#045A5C]"
                href={items.href}
              >
                {items.name}
              </Link>
            </div>
          ) : (
            <div className="flex gap-x-2 md:gap-x-5 text-[#62C3C6]" key={null}>
              <Link href={items.href} className="text-[16px]">
                {items.name}
              </Link>
              <p className="text-[#62C3C6] text-[16px] font-semibold">&rarr;</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

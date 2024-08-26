import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

export default function Pagination() {
  return (
    <div className="flex items-center justify-center lg:justify-end mt-8 space-x-6">
      <HiOutlineArrowNarrowLeft className="w-6 h-6 text-[#62C3C6]" />
      <ul className="flex space-x-6 text-[#045A5C] text-lg font-semibold">
        <li className="cursor-pointer">1</li>
        <li className="cursor-pointer">2</li>
        <li className="cursor-pointer">3</li>
        <li>...</li>
        <li className="cursor-pointer">12</li>
      </ul>
      <HiOutlineArrowNarrowRight className="w-6 h-6 text-[#62C3C6]" />
    </div>
  );
}

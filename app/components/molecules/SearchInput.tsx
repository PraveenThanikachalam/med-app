import { FiSearch } from "react-icons/fi";

export default function SearchInput({
  bg,
  className,
}: {
  bg: string;
  className: string;
}) {
  return (
    <div
      className={className + " flex outline-none items-center focus:outline-0"}
    >
      <input
        type="text"
        placeholder={`Suchen`}
        className={`w-[340px] py-2 h-[34px] px-4 rounded-l-full ${
          bg ? ` bg-[#819191]/10 ` : ` bg-[#EEF7F7]`
        } outline-none placeholder:text-[#62C3C6]`}
      />
      <div
        className={` ${
          bg ? " bg-[#819191]/10 " : " bg-[#EEF7F7] "
        }  py-[6px] px-4 h-[34px] rounded-r-full`}
      >
        <FiSearch className="text-primary w-5 h-5 font-bold " />
      </div>
    </div>
  );
}

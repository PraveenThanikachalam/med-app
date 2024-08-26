export default function GenFilter({ List }: { List: Array<FilterTypes> }) {
  return (
    <div className="flex w-full justify-center gap-x-3 md:gap-x-0 lg-justify-between ">
      {List.map((item) =>
        item.name == "Indica" || item.name == "bestrahlt" ? (
          <button
            className="bg-[#62C3C6] w-auto px-4 py-1 text-white rounded-md"
            key={item.name}
          >
            {item.name}
          </button>
        ) : (
          <button
            className="bg-[#62C3C6]/30 w-auto text-[#045A5C] px-2 py-1 rounded-md"
            key={item.name}
          >
            {item.name}
          </button>
        )
      )}
    </div>
  );
}

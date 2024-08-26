const GreenChip = () => {
  return (
    <div className="flex justify-between pt-5 px-5">
      <div className="w-[120px] h-[20px] text-[12px] text-[#0D7052] p-1 justify-center items-center gap-x-1 rounded-full flex bg-[#0D7052]/5">
        {" "}
        <div className="w-[4px] h-[4px] bg-[#0D7052] rounded-full"></div>
        <p className="font-light">sofort lieferbar</p>
      </div>
      <div className="w-[50px] h-[20px] text-[12px] text-[#0D7052] p-1 justify-center items-center gap-x-1 rounded-full flex bg-[#0D7052]/5">
        <p className="font-light">Neu</p>
      </div>
    </div>
  );
};

const RedChip = () => {
  return (
    <div className="flex justify-start pt-5 pl-5">
      <div className="w-[120px] h-[20px] text-[12px] text-[#A10C0C] p-1 justify-center items-center gap-x-1 rounded-full flex bg-[#A10C0C]/5">
        {" "}
        <div className="w-[4px] h-[4px] bg-[#A10C0C] rounded-full"></div>
        <p className="font-light">nicht lieferbar</p>
      </div>
    </div>
  );
};

export { GreenChip, RedChip };

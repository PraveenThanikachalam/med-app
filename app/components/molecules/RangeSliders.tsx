import CustomizedSlider from "../atoms/Slider";

export default function CustomSlider(props: SliderContent) {
  return (
    <div className="flex items-center gap-y-[16px] pt-0 lg:pt-[10px] relative flex-col justify-center">
      <p className="text-[#365758] w-full justify-center items-center flex text-[18px] font-semibold">
        {props.name}
      </p>
      <CustomizedSlider unit={props.symbol} />
    </div>
  );
}

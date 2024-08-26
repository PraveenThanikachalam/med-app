import CustomizedCheckbox from "../atoms/CheckBoxInput";

export default function CheckBoxList({ List }: { List: Array<checkList> }) {
  return (
    <div className="pt-[18px] flex flex-col gap-y-2">
      {List.map((item) => (
        <CustomizedCheckbox key={item.name} label={item.name} />
      ))}
    </div>
  );
}

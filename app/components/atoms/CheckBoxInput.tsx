import * as React from "react";
import { styled } from "@mui/material/styles";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import { IoMdCheckmark } from "react-icons/io";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 5,
  width: 20,
  height: 20,
  display: "flex",
  alignItems: "center",
  borderColor: "#62C3C6",
  borderStyle: "solid",
  borderWidth: "1px",
  backgroundColor: "#ffffff",
}));

const BpCheckedIcon = styled(BpIcon)({
  borderWidth: "0",
  backgroundColor: "#eff9f9",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex",
});

function BpCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      className="p-0"
      disableRipple
      color="default"
      checkedIcon={
        <BpCheckedIcon>
          <IoMdCheckmark className="text-[#62C3C6]" size={20} /> {}
        </BpCheckedIcon>
      }
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

export default function CustomizedCheckbox({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-x-3 justify-start w-full">
      <BpCheckbox />
      <label className="text-[#365758] text-[20px]">{label}</label>
    </div>
  );
}

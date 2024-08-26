"use client";
import * as React from "react";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import SliderImage from "@/public/SliderThumb.png";
import Image from "next/image";

const minDistance = 10;

const CustomSlider = styled(Slider)(({ theme }) => ({
  color: "#62C3C6",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: "transparent",
    boxShadow: "none",
    outline: "none",
    border: "none",
    "&:hover, &:focus, &:active": {
      boxShadow: "none",
      outline: "none",
    },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-track": {
    height: 7,
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d0edee",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 7,
  },
}));

interface ThumbComponentProps extends React.HTMLAttributes<unknown> {}

function ThumbComponent(props: ThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <Image src={SliderImage} className="w-[15px] h-[20px]" alt={""} />
    </SliderThumb>
  );
}

export default function CustomizedSlider({ unit }: { unit: string }) {
  const [value1, setValue1] = React.useState<number[]>([20, 37]);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue1([Math.min(newValue, value1[1] - minDistance), value1[1]]);
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue1([value1[0], Math.max(newValue, value1[0] + minDistance)]);
  };

  return (
    <div className="w-full">
      <CustomSlider
        slots={{ thumb: ThumbComponent }}
        getAriaLabel={(index) =>
          index === 0 ? "Minimum price" : "Maximum price"
        }
        value={value1}
        onChange={handleChange}
        defaultValue={[20, 40]}
        disableSwap
      />
      <div className="flex gap-x-2 w-full">
        <input
          type="text"
          className="w-full bg-[#819191]/10 rounded-full px-2 text-[#365758]"
          onChange={handleMinChange}
          value={`${value1[0]} ${unit}`}
        />
        <p className="text-[#585555] text-[20px]">-</p>
        <input
          type="text"
          className="w-full bg-[#819191]/10 rounded-full px-2 text-[#365758]"
          onChange={handleMaxChange}
          value={`${value1[1]} ${unit}`}
        />
      </div>
    </div>
  );
}

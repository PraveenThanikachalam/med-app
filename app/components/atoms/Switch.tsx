"use client";
import { alpha, styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const CustomSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#62C3C6",
    "&:hover": {
      backgroundColor: alpha("#62C3C6", theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#62C3C6",
  },
}));

export default CustomSwitch;

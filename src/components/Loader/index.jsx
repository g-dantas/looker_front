import React from "react";
import "./style.css";
import { Stack } from "@mui/material";
import { ReactComponent as Icon } from "../../assets/images/icon.svg";

const Loader = () => {
  return (
    <Stack
      alignItems="center"
      sx={{
        position: "fixed",
        background: "linear-gradient(72deg, #131A32 0%, rgba(19, 26, 50, 0.00) 100%)",
        backgroundColor: "black",
        inset: 0,
        zIndex: 10,
      }}
    >
      <div className="circle">
        <div className="wave"></div>
      </div>
      <Icon
       style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />
    </Stack>
  );
};

export default Loader;

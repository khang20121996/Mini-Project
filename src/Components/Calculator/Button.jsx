import { Button } from "@mui/material";
import React from "react";

ButtonComponent.propTypes = {};

function ButtonComponent({ onClick, width, variant, value }) {
  const handleClick = (value) => {
    onClick(value);
  };

  return (
    <Button
      sx={{ width: { width }, height: "60px", fontSize: "24px" }}
      variant={variant}
      onClick={() => handleClick(value)}
    >
      {value}
    </Button>
  );
}

export default ButtonComponent;

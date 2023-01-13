import { Box, Button, ButtonGroup, TextField } from "@mui/material";
import React, { useState } from "react";
import ButtonComponent from "./Button";

Calculator.propTypes = {};

function Calculator(props) {
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState("");

  const handleChangeResult = (e) => {};
  const calculationList = ["+", "-", "*", "/", "%"];

  const handleClick = (value) => {
    setResult((prevValues) => {
      if (calculationList.includes(value)) return `${prevValues} ${value} `;
      return `${prevValues}${value}`;
    });

    setShowResult((prevValues) => prevValues + value);
  };

  const handleClearResult = () => {
    setShowResult("");
    setResult("");
  };

  const handleShowResult = () => {
    let output = eval(result);
    setResult(output);
    setShowResult(output);
  };

  return (
    <Box sx={{ margin: "100px auto", width: "600px" }}>
      <TextField
        id="outlined-basic"
        label=""
        variant="outlined"
        fullWidth
        value={showResult}
        onChange={handleChangeResult}
      />

      <ButtonComponent
        onClick={handleClearResult}
        variant={"outlined"}
        width={"150px"}
        value={"AC"}
      />
      <ButtonComponent
        onClick={handleClick}
        variant={"outlined"}
        width={"150px"}
        value={"+/-"}
      />
      <ButtonComponent
        onClick={handleClick}
        variant={"outlined"}
        width={"150px"}
        value={"%"}
      />
      <ButtonComponent
        onClick={handleClick}
        variant={"contained"}
        width={"150px"}
        value={"/"}
      />
      <ButtonComponent
        onClick={handleClick}
        variant={"outlined"}
        width={"150px"}
        value={7}
      />
      <ButtonComponent
        onClick={handleClick}
        variant={"outlined"}
        width={"150px"}
        value={8}
      />
      <ButtonComponent
        onClick={handleClick}
        variant={"outlined"}
        width={"150px"}
        value={9}
      />
      <ButtonComponent
        onClick={handleClick}
        variant={"contained"}
        width={"150px"}
        value={"*"}
      />
      <ButtonComponent
        onClick={handleClick}
        variant={"outlined"}
        width={"150px"}
        value={4}
      />
      <ButtonComponent
        onClick={handleClick}
        variant={"outlined"}
        width={"150px"}
        value={5}
      />
      <ButtonComponent
        onClick={handleClick}
        variant={"outlined"}
        width={"150px"}
        value={6}
      />
      <ButtonComponent
        onClick={handleClick}
        variant={"contained"}
        width={"150px"}
        value={"-"}
      />
      <ButtonComponent
        onClick={handleClick}
        variant={"outlined"}
        width={"150px"}
        value={1}
      />
      <ButtonComponent
        onClick={handleClick}
        variant={"outlined"}
        width={"150px"}
        value={2}
      />
      <ButtonComponent
        onClick={handleClick}
        variant={"outlined"}
        width={"150px"}
        value={3}
      />
      <ButtonComponent
        onClick={handleClick}
        variant={"contained"}
        width={"150px"}
        value={"+"}
      />
      <ButtonComponent
        onClick={handleClick}
        variant={"outlined"}
        width={"300px"}
        value={"0"}
      />
      <ButtonComponent
        onClick={handleClick}
        variant={"outlined"}
        width={"150px"}
        value={"."}
      />
      <ButtonComponent
        onClick={handleShowResult}
        variant={"contained"}
        width={"150px"}
        value={"="}
      />
    </Box>
  );
}

export default Calculator;

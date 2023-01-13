import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";
import styled from "@emotion/styled";

InputFiled.propTypes = {};

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },

  "& label": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      color: "white",
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },

  "& input:valid": {
    color: "white",
  },
});

function InputFiled(props) {
  const { label, form, name, unit } = props;
  const { control, formState } = form;

  const hasError = formState.errors[name];

  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: true }}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => {
        return (
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <FormHelperText
              sx={{ color: "white", fontSize: "24px", marginBottom: "8px" }}
              id="outlined-weight-helper-text"
            >
              {label} ({unit})
            </FormHelperText>

            <CssTextField
              error={!!hasError}
              helperText={formState.errors[name]?.message}
              label={label}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              type="number"
              id="custom-css-outlined-input"
            />
          </FormControl>
        );
      }}
    />
  );
}

export default InputFiled;

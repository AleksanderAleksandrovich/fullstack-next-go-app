"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  OutlinedInputProps,
} from "@mui/material";
import React, { useId, useState } from "react";

type InputPasswordProps = Omit<OutlinedInputProps, "error"> & {
  error?: string;
};

const InputPassword = ({ error, ...props }: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const id = useId();

  const handlePasswordVisibilityIcon = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const inputId = `${id}-outlined-adornment-password`;
  const isError = Boolean(error);

  return (
    <FormControl variant="outlined" sx={{ width: 300 }} error={isError}>
      <InputLabel htmlFor={inputId}>Password</InputLabel>
      <OutlinedInput
        {...props}
        id={inputId}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handlePasswordVisibilityIcon}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
      {isError && <FormHelperText error={isError}>{error}</FormHelperText>}
    </FormControl>
  );
};

export default InputPassword;

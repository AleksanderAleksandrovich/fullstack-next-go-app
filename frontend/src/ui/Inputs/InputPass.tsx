"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { InputHTMLAttributes, forwardRef,useId } from "react";
import { FieldValues, UseControllerProps } from "react-hook-form";

type InputPasswordProps = InputHTMLAttributes<HTMLInputElement> &
  UseControllerProps<FieldValues>;

const InputPassword = forwardRef(function InputPassword(
  props: InputPasswordProps & { Errors?: string },
  ref: React.ForwardedRef<unknown>
) {
  const { Errors, value, onChange, onBlur } = props;
  const [showPassword, setShowPassword] = React.useState(false);

  const id= useId()
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <FormControl variant="outlined" sx={{ width: 300 }} error={!!Errors}>
      <InputLabel htmlFor={`${id}outlined-adornment-password`}>Password</InputLabel>
      <OutlinedInput
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        inputRef={ref}
        id={`${id}outlined-adornment-password`}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
      {Errors && <FormHelperText error={!!Errors}>{Errors}</FormHelperText>}
    </FormControl>
  );
});

export default InputPassword;

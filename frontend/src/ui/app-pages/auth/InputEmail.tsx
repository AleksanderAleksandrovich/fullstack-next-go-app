import { Box, TextField, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { FormFields } from "./types";

export default function InputEmail() {
  const formMethods = useFormContext<FormFields>();

  const errorMessage = formMethods.formState.errors.email?.message;
  const isError = Boolean(errorMessage);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography>Введите почту</Typography>
      <Controller
        control={formMethods.control}
        name="email"
        rules={{ required: "Поле обязательно к заполнению" }}
        render={({ field }) => (
          <TextField
            error={isError}
            id="outlined-required"
            label="Email"
            sx={{ width: 300 }}
            helperText={errorMessage}
            {...field}
          />
        )}
      />
    </Box>
  );
}

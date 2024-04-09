"use client";
import InputPassword from "@/ui/Inputs/InputPass";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
  repeatPassword?: string;
};
const Page = () => {
  const {
    getValues,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: { email: "", password: "", repeatPassword: "" },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const confirmPasswordValidation = (value?: string) => {
    if (value !== watch().password) {
      return "Пароли не совпадают";
    }
    return true;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>Введите почту</Typography>
          <Controller
            rules={{ required: "Введите почту" }}
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                error={!!errors.email?.message}
                id="outlined-required"
                label="Email"
                sx={{ width: 300 }}
                helperText={errors.email?.message}
                {...field}
              />
            )}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>Введите пароль</Typography>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Введите пароль",
              minLength: { value: 8, message: "Минимум 8 символов" },
            }}
            render={({ field }) => (
              <InputPassword {...field} Errors={errors.password?.message} />
            )}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>Повторите пароль</Typography>
          <Controller
            name="repeatPassword"
            control={control}
            rules={{
              required: "Повторите пароль",
              minLength: { value: 8, message: "Минимум 8 символов" },
              validate: confirmPasswordValidation,
            }}
            render={({ field }) => (
              <InputPassword
                {...field}
                Errors={errors.repeatPassword?.message}
              />
            )}
          />
        </Box>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <Typography>
            У вас есть аккаунт? <Link href={"/login"}>Войти</Link>
          </Typography>
          <Button
            variant="contained"
            disabled={
              !watch("email") ||
              !watch("password") ||
              !watch("repeatPassword") ||
              !!errors.email?.message ||
              !!errors.password?.message ||
              !!errors.repeatPassword?.message
            }
            type="submit"
          >
            Зарегистрироваться
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Page;

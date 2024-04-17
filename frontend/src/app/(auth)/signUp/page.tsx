"use client";
import InputEmail from "@/ui/app-pages/auth/InputEmail";
import InputPassword from "@/ui/app-pages/auth/InputPass";
import { DevTool } from "@hookform/devtools";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
  repeatPassword: string;
};

export default function Page() {
  const formMethods = useForm<Inputs>({
    mode: "onTouched",
    defaultValues: { email: "", password: "", repeatPassword: "" },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const confirmPasswordValidation = (value?: string) => {
    if (value !== formMethods.getValues("password")) {
      return "Пароли не совпадают";
    }
    return true;
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <InputEmail />

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
              control={formMethods.control}
              rules={{
                required: "Введите пароль",
                minLength: { value: 8, message: "Минимум 8 символов" },
              }}
              render={({ field: { ref, ...restField } }) => (
                <InputPassword
                  {...restField}
                  inputRef={ref}
                  error={formMethods.formState.errors.password?.message}
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
            <Typography>Повторите пароль</Typography>
            <Controller
              name="repeatPassword"
              control={formMethods.control}
              rules={{
                required: "Повторите пароль",
                minLength: { value: 8, message: "Минимум 8 символов" },
                validate: confirmPasswordValidation,
              }}
              render={({ field: { ref, ...restField } }) => (
                <InputPassword
                  {...restField}
                  inputRef={ref}
                  error={formMethods.formState.errors.repeatPassword?.message}
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
            <Typography>
              У вас есть аккаунт? <Link href={"/login"}>Войти</Link>
            </Typography>
            <Button
              variant="contained"
              disabled={!formMethods.formState.isValid}
              type="submit"
            >
              Зарегистрироваться
            </Button>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
}

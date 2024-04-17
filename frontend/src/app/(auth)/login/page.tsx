"use client";
import InputEmail from "@/ui/app-pages/auth/InputEmail";
import InputPassword from "@/ui/app-pages/auth/InputPass";
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
};

export default function Page() {
  const formMethods = useForm<Inputs>({
    mode: "onTouched",
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
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
            <Typography>
              Забыли пароль? <Link href={"/forgotPassword"}>Восстановить</Link>{" "}
              <Link href={"/signUp"}>Зарегистрироваться</Link>
            </Typography>
            <Button
              variant="contained"
              disabled={!formMethods.formState.isValid}
              type="submit"
            >
              Войти
            </Button>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
}

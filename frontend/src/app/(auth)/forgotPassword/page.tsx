"use client";
import InputEmail from "@/ui/app-pages/auth/InputEmail";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
type Inputs = {
  email: string;
};

export default function Page() {
  const formMethods = useForm<Inputs>({
    mode: "onTouched",
    defaultValues: { email: "" },
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
            <Typography>
              Есть аккаунт? <Link href={"/login"}>Войти</Link>
              <Link href={"/signUp"}>Зарегистрироваться</Link>
            </Typography>
            <Button
              variant="contained"
              disabled={!formMethods.formState.isValid}
              type="submit"
            >
              Восстановить
            </Button>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
}

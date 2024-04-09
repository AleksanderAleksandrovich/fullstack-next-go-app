"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";

const pathNames: Record<string, string> = {
  "/signUp": "Регистрация",
  "/login": "Авторизация",
  "/forgotPassword": "Восстановление пароля",
};
export default function AuthLayot({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  const pathName = usePathname();

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Открыть</Button>
      <Dialog
        maxWidth="sm"
        fullWidth
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {pathNames[pathName]}
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

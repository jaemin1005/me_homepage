"use client";

import {
  Alert,
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Snackbar,
  SnackbarCloseReason,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";
import { openWindow } from "../../../utils/open_window";

export function ProfileCard({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const clickHomeIcon = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const clickEmailBtn = async () => {
    await navigator.clipboard.writeText("ghkdwoals1005@gmail.com");
    handleClick();
  };

  const clickGitHubIcon = () => {
    openWindow("https://github.com/jaemin1005");
  };

  return (
    <>
      <Card
        className="max-w-80 bg-[linear-gradient(0deg,rgba(235,217,217,0)_0%,rgba(41,141,146,0.2)_100%)] 
            backdrop-blur-lg rounded-md mt-36 sticky top-36"
      >
        <CardHeader
          avatar={<Avatar alt="avartar" src="/avartar.jpeg" />}
          title="Hwang Jae Min"
          subheader="ghkdwoals1005@gmail.com"
        />
        <CardContent>{children}</CardContent>
        <CardActions>
          <IconButton onClick={clickHomeIcon}>
            <HomeOutlinedIcon />
          </IconButton>
          <IconButton onClick={clickEmailBtn}>
            <MailOutlineIcon />
          </IconButton>
          <IconButton onClick={clickGitHubIcon}>
            <GitHubIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="success"
          icon={<ContentCopyIcon className="text-[#B6AFAF]" />}
          sx={{
            background:
              "linear-gradient(270.47deg, #131414 4.33%, #395554 91.41%)",
          }}
          className="rounded-3xl"
        >
          Email Copy Success
        </Alert>
      </Snackbar>
    </>
  );
}

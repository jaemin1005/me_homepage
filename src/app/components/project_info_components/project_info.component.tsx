import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export function ProjectInfo({
  title,
  url,
  skills,
}: {
  title: string;
  url: string;
  skills: string[];
}) {
  return (
    <div className="relative w-[300px] rounded-[20px] aspect-[1/1.2] shadow-md shadow-black hover:shadow-lg hover:shadow-black">
      <ImageButton
        focusRipple
        className="w-full h-full rounded-[20px]"
      >
        <ImageSrc
          style={{ backgroundImage: `url(${url})` }}
          className="rounded-[20px] h-full"
        />
        <ImageBackdrop className="MuiImageBackdrop-root rounded-[20px] h-full" />
        <Image>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            sx={(theme) => ({
              position: "relative",
              p: 4,
              pt: 2,
              pb: `calc(${theme.spacing(1)} + 6px)`,
            })}
          >
            {title}
            <ImageMarked className="MuiImageMarked-root" />
          </Typography>
        </Image>
      </ImageButton>
      <div className="absolute bottom-0 left-0 right-0 mx-3 mb-3 grid grid-cols-3 gap-2">
        {skills.map((value, idx) => (
          <Chip
            key={idx}
            label={value}
            variant="outlined"
            className="text-[#B6AFAF] border-2 font-semibold border-[#B6AFAF] shadow-md shadow-black"
          />
        ))}
      </div>
    </div>
  );
}

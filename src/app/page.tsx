"use client";

import { Chart } from "./components/chart.component";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { GitHub } from "./components/github.component";
import { ProfileCard } from "./components/profile_card.component";
import { Me } from "./components/me.component";

const darkTheme = createTheme({
  palette: {
    mode: "dark", // 다크 모드 활성화
    primary: {
      main: "#298D92",
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#B6AFAF", // 기본 아이콘 색상
          "&:hover": {
            color: "#298D92", // 호버 시 아이콘 색상
          },
        },
      },
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="grid grid-cols-12 bg-custom-gradient bg-background">
        <div className="flex flex-col self-center justify-center col-span-8">
          <Me/>
          <GitHub />
        </div>
        <div className="col-span-4">
          <ProfileCard />
        </div>
      </div>
    </ThemeProvider>
  );
}

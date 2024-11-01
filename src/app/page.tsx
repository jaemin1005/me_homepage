"use client";

import { Chart } from "./components/chart.component";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { GitHub } from "./components/github.component";

const darkTheme = createTheme({
  palette: {
    mode: "dark", // 다크 모드 활성화
    primary: {
      main: "#298D92",
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="grid grid-cols-12 bg-custom-gradient">
        <div className="flex flex-col self-center justify-center col-span-8">
          <GitHub />
        </div>
      </div>
    </ThemeProvider>
  );
}

"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { GitHub } from "./components/github.component";
import { ProfileCard } from "./components/profile_card.component";
import { Me } from "./components/me.component";
import { useEffect, useRef, useState } from "react";
import { MeProfileCardBody } from "./components/profile_body_components/me_profile_card_body";
import { GitHubProfileCardBody } from "./components/profile_body_components/github_profile_card_body";

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
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];
  const [profileBody, setProfileBody] = useState(<MeProfileCardBody />);

  useEffect(() => {
    // observer를 이용하여 세션마다 감지한다.
    // https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex(
              (ref) => ref.current === entry.target
            );

            switch (index) {
              case 0:
                setProfileBody(<MeProfileCardBody />);
                break;

              case 1:
                setProfileBody(<GitHubProfileCardBody />);
                break;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    // 각 ref에 observe
    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    // 언마운트 시 observe 해제
    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="grid grid-cols-12 bg-custom-gradient bg-background">
        <div className="flex flex-col self-center justify-center col-span-8">
          <section ref={sectionRefs[0]}>
            <Me />
          </section>
          <section ref={sectionRefs[1]}>
            <GitHub />
          </section>
        </div>
        <div className="col-span-4">
          <ProfileCard>{profileBody}</ProfileCard>
        </div>
      </div>
    </ThemeProvider>
  );
}

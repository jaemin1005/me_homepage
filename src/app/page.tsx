"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { GitHub } from "./components/github_components/github.component";
import { ProfileCard } from "./components/profile_card_components/profile_card.component";
import { Me } from "./components/me_components/me.component";
import { useEffect, useRef, useState } from "react";
import { MeProfileCardBody } from "./components/profile_card_components/me_profile_card_body";
import { GitHubProfileCardBody } from "./components/profile_card_components/github_profile_card_body";
import { Project } from "./components/project_info_components/project.component";
import { SkillsInfo } from "./components/\bskill_components/skills_info.component";
import { SkillProfileCardBody } from "./components/profile_card_components/skill_profile_card_body";
import { ProjectProfileCardBody } from "./components/profile_card_components/project_profile_card_body";

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
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
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
                setProfileBody(<SkillProfileCardBody />);
                break;

              case 2:
                setProfileBody(<GitHubProfileCardBody />);
                break;
              
              case 3:
                setProfileBody(<ProjectProfileCardBody/>);
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
      <div className="flex justify-center lg:justify-around bg-custom-gradient bg-background">
        <div className="flex flex-col self-center justify-center 2xl:w-4/6 w-[95%] w-max-[1200px]">
          <section ref={sectionRefs[0]}>
            <Me />
          </section>
          <section ref={sectionRefs[1]}>
            <SkillsInfo />
          </section>
          <section ref={sectionRefs[2]}>
            <GitHub />
          </section>
          <section ref={sectionRefs[3]} className="min-h-screen mb-9">
            <Project />
          </section>
        </div>
        <div className="hidden 2xl:block w-1/5 max-w-[400px] min-x-[300px]">
          <ProfileCard>{profileBody}</ProfileCard>
        </div>
      </div>
    </ThemeProvider>
  );
}

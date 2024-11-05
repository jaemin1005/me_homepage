import { Breadcrumbs, Button } from "@mui/material";
import { useState } from "react";
import { ProjectInfo } from "./project_info.component";
import { ProjectModal } from "./project_modal.component";
import { ProjectInfo as IProjectInfo } from "../../../../interfaces/project_info.interface";
import {
  BOOK_MANAGEMENT,
  FAST_EXCEl_TO_JSON,
  HOME_PAGE,
  NO_GUI_CLUB,
  OPEN_PORT_CHECK,
  TEAM_GG,
  THEME_MAP,
  WHISPER_IN_A_BOTTLE,
} from "./project_info_objects";

type Select = "Single" | "Team";

const SINGLE = "Single";
const TEAM = "Team";

export function Project() {
  const [select, setSelect] = useState<Select>("Single");
  const [open, setOpen] = useState<boolean>(false);

  const [selectProject, setSelectProject] = useState<IProjectInfo | null>(null);

  const SINGLE_PROJECTS = [
    THEME_MAP,
    FAST_EXCEl_TO_JSON,
    HOME_PAGE,
    OPEN_PORT_CHECK,
    NO_GUI_CLUB,
  ];

  const TEAM_PROJECTS = [BOOK_MANAGEMENT, WHISPER_IN_A_BOTTLE, TEAM_GG];

  const handleClick = (select: Select) => {
    setSelect(select);
  };

  const handleClickProjectInfoCallback = (idx: number) => {
    if (select === "Single") {
        setSelectProject(SINGLE_PROJECTS[idx]);
    } else {
        setSelectProject(TEAM_PROJECTS[idx]);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full h-full mt-28">
      <Breadcrumbs>
        <Button
          onClick={() => handleClick(SINGLE)}
          color={select === SINGLE ? "primary" : "inherit"}
          className="text-sm font-semibold"
        >
          {SINGLE}
        </Button>
        <Button
          onClick={() => handleClick(TEAM)}
          color={select === TEAM ? "primary" : "inherit"}
          className="text-sm font-semibold"
        >
          {TEAM}
        </Button>
      </Breadcrumbs>
      <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {select === "Single"
          ? SINGLE_PROJECTS.map((project, idx) => (
              <div key={idx} onClick={() => {
                handleClickProjectInfoCallback(idx);
              }}>
                <ProjectInfo
                  title={project.name}
                  skills={project.skills}
                  url={project.imageUrl}
                />
              </div>
            ))
          : TEAM_PROJECTS.map((project, idx) => (
              <ProjectInfo
                key={idx}
                title={project.name}
                skills={project.skills}
                url={project.imageUrl}
              />
            ))}
      </div>
      {selectProject && (
        <ProjectModal
          modalControl={{ open, handleClose }}
          projectInfo={selectProject}
        />
      )}
    </div>
  );
}

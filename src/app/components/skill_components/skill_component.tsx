import { useState } from "react";
import { language } from "./objects/language_objects";
import { webFramwork } from "./objects/web_frameworks.object";
import { SkillBarChart } from "./skills_info.component";
import { SkillChart } from "../../../../interfaces/skill.interface";
import { SkillSelect } from "./skills_container.component";
import { Typography } from "@mui/material";

export function Skill() {
  const arr = [language, webFramwork];
  const [select, setSelect] = useState<SkillChart>(arr[0]);

  const clickCallback = (skillChart: SkillChart) => {
    setSelect(skillChart);
  };

  return (
    <div className="min-h-screen pt-28">
      <Typography variant="h5" className="text-[#B6AFAF] font-bold">
        skill
      </Typography>
      <div className="flex flex-col sm:flex-row mt-3 w-full">
        <SkillSelect
          skillCharts={arr}
          selectName={select.name}
          clickCallback={clickCallback}
        ></SkillSelect>
        <div className=" w-full">
          <SkillBarChart skillChart={select} />
        </div>
      </div>
    </div>
  );
}

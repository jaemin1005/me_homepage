import { Button } from "@mui/material";
import { SkillChart } from "../../../../interfaces/skill.interface";

export function SkillSelect({
  skillCharts,
  selectName,
  clickCallback,
}: {
  skillCharts: SkillChart[];
  selectName: string;
  clickCallback: (skillChart: SkillChart) => void
}) {
  return (
    <div className="w-[400px] flex flex-row sm:flex-col">
      {skillCharts.map((value, idx) => (
        <Button
          key={idx}
          className={`normal-case ${
            selectName === value.name
              ? "text-[#298D92]"
              : "text-[#B6AFAF]"
          }`  
        }
        onClick={() => {clickCallback(value)}}
        >
          {value.name}
        </Button>
      ))}
    </div>
  );
}

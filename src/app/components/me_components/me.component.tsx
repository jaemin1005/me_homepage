import { useState } from "react";
import { MeDetail } from "./me_detail.component";
import {
  DRIVING_FORCE_ME,
  PLANNING_SKILL,
  PROBLEM_SOLVING_SKILL,
  RECORD_ME,
} from "./me_info_objects";
import { MePieChart } from "./pie_chart.component";
import { MeMain } from "./me_main.component";

export function Me() {
  const ME_DATA = [
    DRIVING_FORCE_ME,
    RECORD_ME,
    PROBLEM_SOLVING_SKILL,
    PLANNING_SKILL,
  ];

  const [meInfo, setMeInfo] = useState<MeInfo | null>(null);

  return (
    <div className="w-full min-h-screen flex flex-col box-border">
      <div className="flex flex-col flex-grow w-full items-center gap-10 sm:flex-row sm:gap-x-10 overflow-auto py-10">
        <div className="flex-shrink-0">
          <MePieChart meInfos={ME_DATA} setMeInfo={setMeInfo} />
        </div>
        <div className="flex-grow overflow-auto">
          {meInfo !== null ? <MeDetail meInfo={meInfo} /> : <MeMain />}
        </div>
      </div>
    </div>
  );
}

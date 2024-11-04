import {
  SelectMeProvider,
  useMeState,
} from "../../../context/select_me.context";
import { MeDetail } from "./me_components/me_detail.component";
import {
  COMMUNICATION_ME,
  DRIVING_FORCE_ME,
  PLANNING_SKILL,
  PROBLEM_SOLVING_SKILL,
} from "./me_components/me_info_objects";
import { MePieChart } from "./me_components/pie_chart.component";
import { MeContainer } from "./me_container.component";

export function Me() {
  return (
    <SelectMeProvider>
      <div className="w-full h-screen pt-36 flex flex-col">
        <h4
          className="font-inter font-bold text-6xl tracking-[0.1em] 
           text-[#8F9795] py-0 text-wrap"
        >
          IT's ME
        </h4>
        <h1
          className="font-inter font-bold text-8xl tracking-[0.1em] 
           bg-gradient-to-r from-[#8F9795] to-[#5EA196] text-transparent 
           bg-clip-text overflow-hidden"
        >
          HOMEPAGE
        </h1>
        <div className="flex flex-col w-full h-full items-center gap-x-10 sm:flex-row">
          <div className="flex-shrink-0">
            <MePieChart />
          </div>
          <MeDetail />
        </div>
      </div>
    </SelectMeProvider>
  );
}

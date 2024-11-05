import {
  SelectMeProvider,
} from "../../../../context/select_me.context";
import { MeDetail } from "./me_detail.component";
import { MePieChart } from "./pie_chart.component";

export function Me() {
  return (
    <SelectMeProvider>
      <div className="w-full h-screen min-h-min pt-36 flex flex-col">
        <h4
          className="font-inter font-bold text-6xl tracking-[0.1em] 
           text-[#8F9795] py-0 text-wrap"
        >
          IT's ME
        </h4>
        <h1
          className="font-inter font-bold text-8xl tracking-[0.1em] 
           bg-gradient-to-r from-[#8F9795] to-[#5EA196] text-transparent 
           bg-clip-text overflow-hidden hidden sm:block"
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

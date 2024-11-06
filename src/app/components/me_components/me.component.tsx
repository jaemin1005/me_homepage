import { SelectMeProvider } from "../../../../context/select_me.context";
import { MeDetail } from "./me_detail.component";
import { MePieChart } from "./pie_chart.component";

export function Me() {
  return (
    <SelectMeProvider>
      <div className="w-full min-h-screen flex flex-col box-border">
        <div className="pt-36 flex-shrink-0">
          <h4 className="font-inter font-bold text-6xl text-[#8F9795] text-wrap leading-none my-0">
            {"IT's ME"}
          </h4>
          <h1 className="font-inter font-bold text-8xl leading-none my-0 bg-gradient-to-r from-[#8F9795] to-[#5EA196] text-transparent bg-clip-text overflow-hidden hidden sm:block">
            HOMEPAGE
          </h1>
        </div>
        <div className="flex flex-col flex-grow w-full items-center gap-10 sm:flex-row sm:gap-x-10 overflow-auto py-10">
          <div className="flex-shrink-0">
            <MePieChart />
          </div>
          <div className="flex-grow overflow-auto">
            <MeDetail />
          </div>
        </div>
      </div>
    </SelectMeProvider>
  );
}

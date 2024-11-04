import { SelectRepoProvider } from "../../../context/select_repo.context";
import { Chart } from "./chart.component";
import { GitHubInfo } from "./github_info.component";

export function GitHub() {
  return (
    <div className="w-full h-screen pt-52 relative">
      <SelectRepoProvider>
        <Chart />
        <GitHubInfo />
      </SelectRepoProvider>
    </div>
  );
}

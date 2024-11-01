import { Chart } from "./chart.component";
import { GitHubInfo } from "./github_info.component";

export function GitHub(){
    return (
        <div className="w-full h-screen px-20 pt-52">
            <Chart/>
            <GitHubInfo/>
        </div>
    )    
}
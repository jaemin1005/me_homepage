import { BarChart, barElementClasses } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { SkillChart } from "../../../../interfaces/skill.interface";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

// const labels: string[] = [
//   "숙련도",
//   "프로젝트 속도",
//   "문제 해결",
//   "성능",
//   "복잡도",
// ];
// const lData: number[] = [42, 24, 56, 45, 3];
// const rData: number[] = [57, 7, 19, 16, 22];
//const colors: string[] = ["#006BD6", "#EC407A", "#FFAB40", "#66BB6A"];
const colors = [
  "#175154","#1C6569","#22797D","#288D92","#2DA0A6","#33B4BA","#38C8CF"
];
export function SkillBarChart({ skillChart }: { skillChart: SkillChart }) {
  const [selectRow, setSelectRow] = useState<number>(0);

  useEffect(() => {
    setSelectRow(0);
  }, [skillChart]);

  return (
    <div className="w-full">
      <BarChart
        sx={(theme) => ({
          [`.${barElementClasses.root}`]: {
            fill: theme.palette.background.paper,
            strokeWidth: 2,
          },
          [`.MuiBarElement-series-0_id`]: {
            stroke: colors[6],
          },
          [`.MuiBarElement-series-1_id`]: {
            stroke: colors[3],
          },
          [`.MuiBarElement-series-2_id`]: {
            stroke: colors[0],
          },
          [`.MuiBarElement-series-3_id`]: {
            stroke: colors[3],
          },
          [`.MuiBarElement-series-4_id`]: {
            stroke: colors[1],
          },
          [`.${axisClasses.root}`]: {
            [`.${axisClasses.tick}, .${axisClasses.line}`]: {
              stroke: "#B6AFAF",
              strokeWidth: 3,
            },
            [`.${axisClasses.tickLabel}`]: {
              fill: "#B6AFAF",
            },
          },
          border: "1px solid rgba(0, 0, 0, 0.1)",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
          backgroundSize: "35px 35px",
          backgroundPosition: "20px 20px, 20px 20px",
          ...theme.applyStyles("dark", {
            borderColor: "rgba(255,255,255, 0.1)",
            backgroundImage:
              "linear-gradient(rgba(255,255,255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255, 0.1) 1px, transparent 1px)",
          }),
        })}
        xAxis={[{ scaleType: "band", data: skillChart.rows }]}
        series={skillChart.makeChartdatas()}
        colors={colors}
        className="w-full h-[300px]"
        onAxisClick={(e, d) => {
          if (d && d.dataIndex !== undefined) setSelectRow(d.dataIndex);
        }}
      />
      <Typography variant="subtitle1" className="mt-10 font-bold">
        {skillChart.rows[selectRow]}
      </Typography>
      <Typography variant="body1" className="text-[#B6AFAF] w-full">
        {skillChart.explain[selectRow]}
      </Typography>
    </div>
  );
}

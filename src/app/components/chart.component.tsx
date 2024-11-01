"use client";

import { useMemo } from "react";
import { useGitState } from "../../../context/git_state.context";
import { LineChart } from "@mui/x-charts";
import { useDrawingArea, useXScale, useYScale } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";

const ratios = [0.2, 0.8, 0.6, 0.5];

const LoadingReact = styled("rect")({
  opacity: 0.2,
  fill: "lightgray",
});

const LoadingText = styled("text")(({ theme }) => ({
  stroke: "none",
  fill: theme.palette.text.primary,
  shapeRendering: "crispEdges",
  textAnchor: "middle",
  dominantBaseline: "middle",
}));

// https://mui.com/x/react-charts/styling/
// 공식문서를 통해, 로딩 시 보여주는 UI 구현
function LoadingOverlay() {
  const xScale = useXScale<"band">();
  const yScale = useYScale();
  const { left, width, height } = useDrawingArea();

  const bandWidth = xScale.bandwidth();

  const [bottom, top] = yScale.range();

  return (
    <g>
      {xScale.domain().map((item, index) => {
        const ratio = ratios[index % ratios.length];
        const barHeight = ratio * (bottom - top);

        return (
          <LoadingReact
            key={index}
            x={xScale(item)}
            width={bandWidth}
            y={bottom - barHeight}
            height={height}
          />
        );
      })}
      <LoadingText x={left + width / 2} y={top + height / 2}>
        Loading data ...
      </LoadingText>
    </g>
  );
}

export function Chart() {
  const gitData = useGitState();

  // 날짜별 커밋 수를 계산하는 함수
  const dataset = useMemo(() => {
    const commitsByMonth: { [key: string]: number } = {};

    gitData.forEach((repo) => {
      repo.commits.forEach((commit) => {
        // 커밋 날짜를 YYYY-MM 형식으로 변환하여 월별로 분리
        const month = new Date(commit.create_at || "")
          .toISOString()
          .slice(0, 7);
        commitsByMonth[month] = (commitsByMonth[month] || 0) + 1;
      });
    });

    // 날짜별로 정렬된 데이터셋 생성
    // 문자열 날짜(YYYY-MM)가 올바른 순서로 정렬됨
    return Object.keys(commitsByMonth)
      .sort() 
      .map((month) => ({
        month,
        commits: commitsByMonth[month],
      }));
  }, [gitData]);

  return (
    <>
      {dataset.length == 0 ? (
        <LineChart
          loading
          xAxis={[
            { scaleType: 'band', data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] },
          ]}
          sx={(theme) => ({
            border: '1px solid rgba(0, 0, 0, 0.1)',
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
            backgroundSize: '35px 35px',
            backgroundPosition: '20px 20px, 20px 20px',
            ...theme.applyStyles('dark', {
              borderColor: 'rgba(255,255,255, 0.1)',
              backgroundImage:
                'linear-gradient(rgba(255,255,255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255, 0.1) 1px, transparent 1px)',
            }),
          })}
          series={[]}  
          slots={{ loadingOverlay: LoadingOverlay }}
          height={300}
          margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
        />
      ) : (
        <LineChart
          dataset={dataset}
          yAxis={[{ dataKey: "commits" }]}
          xAxis={[{ dataKey: "month", scaleType: "band" }]}
          sx={(theme) => ({
            border: '1px solid rgba(0, 0, 0, 0.1)',
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
            backgroundSize: '35px 35px',
            backgroundPosition: '20px 20px, 20px 20px',
            ...theme.applyStyles('dark', {
              borderColor: 'rgba(255,255,255, 0.1)',
              backgroundImage:
                'linear-gradient(rgba(255,255,255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255, 0.1) 1px, transparent 1px)',
            }),
          })}
          series={[{ dataKey: "commits" }]}
          height={300}
          margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
          //grid={{ vertical: true, horizontal: true }}
        />
      )}
    </>
  );
}

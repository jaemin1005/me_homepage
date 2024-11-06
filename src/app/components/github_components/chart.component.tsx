"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useGitState } from "../../../../context/git_state.context";
import { LineChart } from "@mui/x-charts";
import { useDrawingArea, useXScale, useYScale } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { useRepoState } from "../../../../context/select_repo.context";
import RefreshIcon from "@mui/icons-material/Refresh";
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
  const { name, setName } = useRepoState();

  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<string>("");

  const targetTime = new Date();
  targetTime.setDate(targetTime.getDate() + 1);
  targetTime.setHours(0, 10, 0, 0);

  useEffect(() => {
    // 타켓 시간 00:10:00 설정
    // 람다 이벤트 트리거가 00:10:00 호출된다.
    const targetTime = new Date();
    targetTime.setDate(targetTime.getDate() + 1);
    targetTime.setHours(0, 10, 0, 0);

    const calculateTimeRemaining = () => {
      const now = new Date();
      const diff = targetTime.getTime() - now.getTime();

      const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(
        2,
        "0"
      );

      const minutes = String(
        Math.ceil((diff % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");

      setTimeRemaining(`업데이트 남은 시간: ${hours}시간 ${minutes}분`);
    };

    calculateTimeRemaining();

        // 다음 분까지 남은 시간 계산
    const now = new Date();
    const millisecondsUntilNextMinute =
      (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    const timeout = setTimeout(() => {
      calculateTimeRemaining();

      const interval = setInterval(() => {
        calculateTimeRemaining();
      }, 60000);

      return () => clearInterval(interval);
    }, millisecondsUntilNextMinute);

    return () => clearTimeout(timeout);
  }, []);

  // 날짜별 커밋 수를 계산하는 함수
  const dataset = useMemo(() => {

    if(gitData === undefined) return [];

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
        xAxis: month,
        commits: commitsByMonth[month],
      }));
  }, [gitData]);

  // 선택된 월의 일일 데이터셋
  const dailyDataset = useCallback(() => {
    if (!selectedMonth && !name && !gitData) return [];

    const commitsByDay: { [key: string]: number } = {};

    if (name) {
      const repo = gitData.find((repo) => repo.name === name);
      if (repo === undefined) return [];

      repo.commits.forEach((commit) => {
        const commitDate = new Date(commit.create_at || "");
        const day = commitDate.toISOString().slice(0, 10);
        commitsByDay[day] = (commitsByDay[day] || 0) + 1;
      });
    } else {
      gitData.forEach((repo) => {
        repo.commits.forEach((commit) => {
          const commitDate = new Date(commit.create_at || "");
          const commitMonth = commitDate.toISOString().slice(0, 7);

          if (commitMonth === selectedMonth) {
            const day = commitDate.toISOString().slice(0, 10);
            commitsByDay[day] = (commitsByDay[day] || 0) + 1;
          }
        });
      });
    }

    return Object.keys(commitsByDay)
      .sort()
      .map((day) => ({
        xAxis: day,
        commits: commitsByDay[day],
      }));
  }, [gitData, selectedMonth, name]);

  const clickRefreshBtn = () => {
    setName(undefined);
    setSelectedMonth(null);
  };

  return (
    <>
      {dataset.length == 0 ? (
        <LineChart
          loading
          xAxis={[
            {
              scaleType: "band",
              data: ["A", "B", "C", "D", "E", "F", "G", "H"],
            },
          ]}
          sx={(theme) => ({
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
          series={[]}
          slots={{ loadingOverlay: LoadingOverlay }}
          height={240}
        />
      ) : (
        <div className="relative">
          <LineChart
            dataset={name || selectedMonth ? dailyDataset() : dataset}
            yAxis={[{ dataKey: "commits" }]}
            xAxis={[
              { dataKey: "xAxis", scaleType: "band", tickPlacement: "middle" },
            ]}
            sx={(theme) => ({
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
              "& .MuiAreaElement-root": {
                fill: "url(#area-gradient)", // 정의한 그라데이션을 참조
              },
            })}
            series={[
              {
                dataKey: "commits",
                area: true,
                valueFormatter: (value) => `${value} commits `,
              },
            ]}
            height={240}
            margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
            //grid={{ vertical: true, horizontal: true }}
            onAxisClick={(event, d) => {
              if (selectedMonth === null && name === undefined && d)
                setSelectedMonth(dataset[d.dataIndex!]?.xAxis || null);
            }}
            className="relative"
          >
            <defs>
              <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(15, 140, 140, 0.5)" />
                <stop offset="100%" stopColor="rgba(15, 140, 140, 0)" />
              </linearGradient>
            </defs>
          </LineChart>
          {(name || selectedMonth) && (
            <IconButton
              onClick={() => {
                clickRefreshBtn();
              }}
              className="absolute top-3 right-3"
            >
              <RefreshIcon />
            </IconButton>
          )}
          <div className="absolute -top-5 right-0 text-gray-600 text-sm">
            {timeRemaining}
          </div>
        </div>
      )}
    </>
  );
}

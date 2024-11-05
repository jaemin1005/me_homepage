import { PieItemIdentifier, PieValueType } from "@mui/x-charts";
import { PieChart } from "@mui/x-charts/PieChart";
import { useEffect, useState } from "react";
import {
  RECORD_ME,
  DRIVING_FORCE_ME,
  PLANNING_SKILL,
  PROBLEM_SOLVING_SKILL,
} from "./me_info_objects";
import { useMeState } from "../../../../context/select_me.context";

export function MePieChart() {
  const ME_DATA = [
    DRIVING_FORCE_ME,
    RECORD_ME,
    PROBLEM_SOLVING_SKILL,
    PLANNING_SKILL,
  ];

  const colors = [
    "#36BC9B",
    "#2EA184",
    "#26866E",
    "#1E6B58",
    "#175042",
    "#0F352C",
    "#071A16",
  ];

  const { setMeInfo } = useMeState();

  const [highlightedItem, setHighlightedItem] =
    useState<PieItemIdentifier | null>(null);
  const valueFormatter = (item: { value: number }) => `${item.value}%`;

  const clickPieBlock = (
    _: React.MouseEvent<SVGPathElement, MouseEvent>,
    pieItemIdentifier: PieItemIdentifier
  ) => {
    if (pieItemIdentifier.dataIndex === highlightedItem?.dataIndex) {
      setMeInfo(undefined);
      setHighlightedItem(null);
    } else {
      setMeInfo(ME_DATA[pieItemIdentifier.dataIndex]);
      setHighlightedItem(pieItemIdentifier);
    }
  };

  return (
    <PieChart
      sx={{
        "& .MuiPieArc-root": {
          transition: "transform 0.3s ease-in-out",
        },
        "& .MuiPieArc-root:hover": {
          transform: "scale(1.1)", // 호버 시 약간 확대
          filter: "brightness(1.5)", // 밝기를 더 높여줌
        },
      }}
      series={[
        {
          //   data: [
          //     { id: 0, value: 60, label: "실행력", color: "#36BC9B" },
          //     { id: 1, value: 20, label: "커뮤니케이션", color: "#2EA184" },
          //     { id: 2, value: 10, label: "학습", color: "#26866E" },
          //     { id: 3, value: 10, label: "", color: "#1E6B58" },
          //   ],
          data: ME_DATA.slice(0, 8).map((data, idx) => {
            return {
              id: idx,
              value: data.percent,
              label: data.title,
              color: colors[idx],
            };
          }),
          innerRadius: 80,
          outerRadius: 100,
          paddingAngle: 5,
          cornerRadius: 5,
          startAngle: -45,
          endAngle: 225,
          cx: 80,
          highlightScope: {
            fade: "global",
            highlight: "item",
          },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          valueFormatter,
        },
      ]}
      highlightedItem={highlightedItem}
      onItemClick={clickPieBlock}
      width={330}
      height={300}
      slotProps={{
        legend: {
          labelStyle: {
            fontFamily: "Arial, sans-serif", // 원하는 폰트 패밀리
            fontSize: "14px", // 폰트 크기
            fontWeight: "bold", // 폰트 두께
            fill: "#B6AFAF", // 폰트 색상
          },
        },
      }}
    />
  );
}

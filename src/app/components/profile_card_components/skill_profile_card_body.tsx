import { Typography } from "@mui/material";

export function SkillProfileCardBody() {
  return (
    <>
      <Typography variant="subtitle2">Comment</Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        제가 프로젝트에 적용해 온 언어 및 프레임워크를 평가한 지표입니다. 각
        항목에 대해 1위, 2위, 3위로 순위를 매겼으며, 이를 통해 각 기술의 강점과
        약점을 파악하고 향후 프로젝트에 어떻게 활용할지를 고민하고 있습니다.
        현재는 쿠버네티스와 AWS ECS를 학습하여 클라우드 기반의 컨테이너 관리에
        대한 이해를 높이고 있으며, Deno 2.0을 기존의 Node.js와 비교하여
        테스트하고 있습니다.
      </Typography>
    </>
  );
}

import { Typography } from "@mui/material";

export function SkillProfileCardBody() {
  return (
    <>
      <Typography variant="subtitle2">Comment</Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        제가 실제로 프로젝트에 적용해본 언어와 프레임워크, 기술들입니다. 현재는
        쿠버네티스와 AWS ECS를 배우고 있으며, DENO 2.0을 테스트하고 있습니다.
      </Typography>
    </>
  );
}

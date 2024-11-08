import { Typography } from "@mui/material";

export function SkillProfileCardBody() {
  return (
    <>
      <Typography variant="subtitle2">Comment</Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        제가 지금까지 사용하면서 프로젝트에 적용해온 
        언어 및 프레임워크를 평가해본 지표들입니다. 각 1, 2, 3등 순위를 매겨
        나눠놓았습니다. 지금 현재 학습하고 있는 것은 쿠버네티스와 AWS ECS를 학습하고 있습니다.
        또한 DENO 2.0을 기존의 NodeJs의 차이를 비교하면서 테스트하고 있습니다. 
      </Typography>
    </>
  );
}

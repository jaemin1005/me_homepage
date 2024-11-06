import { Typography } from "@mui/material";

export function ProjectProfileCardBody() {
  return (
    <>
      <Typography variant="subtitle2">Comment</Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        개인 프로젝트는 모든 프론트엔드 및 백엔드가 AWS에 배포되어 있는
        상태입니다. 팀 프로젝트의 경우, 배포가 완료되지 않은 부분들은 영상으로
        대체하여 설명하였습니다. 이를 통해 프로젝트의 기능과 결과물을 효과적으로
        시연할 수 있도록 하였습니다.
      </Typography>
    </>
  );
}

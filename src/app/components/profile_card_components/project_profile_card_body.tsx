import { Typography } from "@mui/material";

export function ProjectProfileCardBody() {
  return (
    <>
      <Typography variant="subtitle2">Comment</Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        개인 프로젝트는 모든 프론트엔드와 백엔드가 AWS에 배포되어 있으며, 이를
        통해 실제 운영 환경에서의 성능과 안정성을 검증할 수 있었습니다. 팀
        프로젝트의 경우, 배포가 완료되지 않은 기능들은 영상으로 대체하여
        설명하였습니다. 현재 진행하고 있는 작업은 THEME MAP 프로젝트의 리팩토링
        작업과 기능 개선, 추가를 하고 있습니다.
      </Typography>
    </>
  );
}

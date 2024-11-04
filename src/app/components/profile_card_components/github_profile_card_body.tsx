import { Typography } from "@mui/material";

export function GitHubProfileCardBody() {
  return (
    <>
      <Typography variant="subtitle2">Comment</Typography>
      {/* <Typography variant="body2" sx={{ color: "text.secondary" }}>
        Click on the graph. It will change to a daily view.
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        Click on the repository. The commits from that repository will be
        reflected in the graph.
      </Typography> */}
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        저의 GitHub 활동을 시각화한 그래프입니다. 그래프에서 활동을 직접
        확인해보세요. 각 레포지토리 및 그래프를 클릭하면 상세한 활동 내용을
        확인할 수 있습니다. 이 모든 데이터가 모여서 저의 개발 여정을 한눈에
        보여주는 역할을 하고 있습니다.
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        <br />
        P.S
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        그래프는 일일 단위로 자동으로 업데이트 됩니다.
      </Typography>
    </>
  );
}

import { Chip, Typography } from "@mui/material";

export function MeProfileCardBody() {
  const CHIPS_NAME = ["계획력", "실행력", "도전정신", "커뮤니케이션"];

  return (
    <>
      <Typography variant="subtitle2" className="mb-2">Comment</Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        저에 대한 소개는 간단하게 작성하였지만, 저에 대해 더 알고 싶으시면 내용을 참고해 주세요. 
        <b> 파이 차트를 클릭</b>해보세요. 저에 대한 장점과 단점을 단편적으로 알 수 있습니다. 
        글을 통해 구체적으로 장점이 무엇인지 단점을 어떻게 해결했는지 적었습니다.
      </Typography>
      {/* <div className="flex gap-x-1 gap-y-2 flex-wrap">
        {CHIPS_NAME.map((value, idx) => 
          <Chip key={idx} label={value} variant="outlined" />
        )}
      </div> */}
    </>
  );
}
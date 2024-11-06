import { Box, Typography } from "@mui/material";

export function MeProfileCardBody() {
  return (
    <>
      <Typography variant="subtitle2" className="mb-2">
        Comment
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        저에 대한 소개는 간단하게 작성하였지만, 저에 대해 더 알고 싶으시면&nbsp;
        <Box
          component="span"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            cursor: "pointer",
          }}
        >
          파이 차트를 클릭
        </Box>
        &nbsp;해보세요. 저에 대한 장점과 단점에 대해 알 수 있습니다. 개발자로서
        장점이 무엇인지 단점을 어떻게 해결했는지 중점으로 작성하였습니다.
      </Typography>

      {/* <div className="flex gap-x-1 gap-y-2 flex-wrap">
        {CHIPS_NAME.map((value, idx) => 
          <Chip key={idx} label={value} variant="outlined" />
        )}
      </div> */}
    </>
  );
}

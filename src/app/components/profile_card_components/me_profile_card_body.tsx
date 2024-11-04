import { Chip, Typography } from "@mui/material";

export function MeProfileCardBody() {
  const CHIPS_NAME = ["계획력", "실행력", "도전정신", "커뮤니케이션"];

  return (
    <>
      <Typography variant="subtitle2" className="mb-2">Read Me</Typography>
      <div className="flex gap-x-1 gap-y-2 flex-wrap">
        {CHIPS_NAME.map((value, idx) => 
          <Chip key={idx} label={value} variant="outlined" />
        )}
      </div>
    </>
  );
}

import { Typography } from "@mui/material";

export function MeDetail({ meInfo }: { meInfo: MeInfo }) {
  return (
    <>
      <div className="w-full scrollbar-hidden overflow-y-scroll">
        {/* <h1 className="font-inter font-bold text-2xl text-[#298D92] leading-none my-0">
          {meInfo.title}
        </h1> */}
        <Typography variant="subtitle1" className="font-bold">
          {meInfo.title}
        </Typography>
        {/* <p
          className="font-inter font-bold text-lg text-[#B6AFAF] hover:text-[#e0dddd] max-w-[550px] text-justify"
          dangerouslySetInnerHTML={{ __html: meInfo.body }}
        ></p> */}
        <Typography
          variant="body1"
          className="max-w-[550px] text-justify  text-[#B6AFAF]"
        >
          {meInfo.body}
        </Typography>
      </div>
    </>
  );
}

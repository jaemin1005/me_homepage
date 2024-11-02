import { Button } from "@mui/material";

export function MeContainer({
  title,
  tags,
}: {
  title?: string;
  tags: string[];
}) {
  return (
    <>
      {title ? (
        <p className="mt-3 mb-1 font-bold text-xl leading-[29px] text-[#B6AFAF]">
          {title}
        </p>
      ) : <div className="mt-2"></div>}
      <div className="flex gap-x-2">
        {tags.map((value, idx) => (
          <Button key={idx} variant="outlined">
            {value}
          </Button>
        ))}
      </div>
    </>
  );
}

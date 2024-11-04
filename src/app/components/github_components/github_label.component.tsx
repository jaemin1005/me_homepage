import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { openWindow } from "../../../../utils/open_window";

export function GitHubLabel({
  title,
  createAt,
  url,
  callBack,
}: {
  title: string;
  createAt: string;
  url: string;
  callBack?: () => void;
}) {
  return (
    <div
      className="group w-full sm:w-80 h-12 flex justify-between items-center py-4 px-2 rounded-lg bg-[#65817F] bg-opacity-50 cursor-pointer transition-transform active:scale-95"
      onClick={() => {
        if (callBack) callBack();
      }}
    >
      <div className="overflow-hidden">
        <p className="text-sm text-[#B6AFAF] leading-relaxed text-nowrap overflow-hidden group-hover:text-white">
          {title}
        </p>
        <p className="text-xs font-bold text-[#352C2C] leading-3">{createAt}</p>
      </div>
      <IconButton
        aria-label="git_hub"
        size="large"
        onClick={(e) => {
          e.stopPropagation();
          openWindow(url);
        }}
      >
        <GitHubIcon />
      </IconButton>
    </div>
  );
}

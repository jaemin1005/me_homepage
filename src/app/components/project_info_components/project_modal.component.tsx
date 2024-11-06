import { Card, CardMedia, Chip, Modal, Tooltip } from "@mui/material";
import { ProjectInfo } from "../../../../interfaces/project_info.interface";
import { Button } from "@mui/material";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import EditNoteIcon from "@mui/icons-material/EditNote";
import PublicIcon from "@mui/icons-material/Public";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { openWindow } from "../../../../utils/open_window";

interface ModalControlProps {
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%", // 유동적인 너비 설정
  bgcolor: "background.paper",
  pb: 3,
};

export function ProjectModal({
  modalControl,
  projectInfo,
}: {
  modalControl: ModalControlProps;
  projectInfo: ProjectInfo;
}) {
  return (
    <Modal
      open={modalControl.open}
      onClose={modalControl.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card
        sx={{ ...style }}
        className="bg-[linear-gradient(0deg,rgba(235,217,217,0)_0%,rgba(41,141,146,0.2)_100%)]
            shadow-md shadow-black backdrop-blur-sm md:w-[500px] h-2/3 rounded-[20px] overflow-y-scroll scrollbar-hidden"
      >
        {/* <CardHeader title={projectInfo.name} /> */}
        <CardMedia
          component="img"
          image={projectInfo.imageUrl}
          alt={projectInfo.name}
          className="object-fill w-full rounded-t-[20px]"
        />
        <section className="mx-4">
          <h3 className="my-2 font-semibold text-xl">SKILL</h3>
          <div className="grid flex-wrap grid-cols-4 gap-2">
            {projectInfo.skills.map((value, idx) => (
              <Tooltip
                key={idx}
                title={value}
                arrow
                placement={idx < 4 ? "top" : "bottom"}
              >
                <Chip
                  label={value}
                  variant="outlined"
                  className="text-[#B6AFAF] border-2 font-semibold border-[#B6AFAF] shadow-md shadow-black hover:text-[#298D92] hover:border-[#298D92] cursor-pointer"
                />
              </Tooltip>
            ))}
          </div>
          <h3 className="mt-3 mb-2 font-semibold text-xl">URL</h3>
          <div className="grid grid-cols-4 gap-x-2">
            {projectInfo.publishUrl && (
              <Button
                variant="outlined"
                startIcon={<PublicIcon />}
                className="border-[#af516d] text-[#af516d] hover:text-[#298D92] hover:border-[#298D92] whitespace-nowrap"
                onClick={() => {
                  openWindow(projectInfo.publishUrl!);
                }}
              >
                배포
              </Button>
            )}
            {projectInfo.videoUrl && (
              <Button
                variant="outlined"
                startIcon={<YouTubeIcon />}
                className="border-[#af516d] text-[#af516d] hover:text-[#298D92] hover:border-[#298D92] whitespace-nowrap"
                onClick={() => {
                  openWindow(projectInfo.videoUrl!);
                }}
              >
                영상
              </Button>
            )}
            {projectInfo.reviewUrl && (
              <Button
                variant="outlined"
                startIcon={<ImportContactsIcon />}
                className="border-[#8ac55c] text-[#8ac55c] hover:text-[#298D92] hover:border-[#298D92] whitespace-nowrap"
                onClick={() => {
                  openWindow(projectInfo.reviewUrl!);
                }}
              >
                정보
              </Button>
            )}
            {projectInfo.notedUrl && (
              <Button
                variant="outlined"
                startIcon={<EditNoteIcon />}
                className="border-[#b7c656] text-[#b7c656] hover:text-[#298D92] hover:border-[#298D92] whitespace-nowrap"
                onClick={() => {
                  openWindow(projectInfo.notedUrl!);
                }}
              >
                개발 일지
              </Button>
            )}
            {projectInfo.githubUrl && (
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                className="border-[#6287c6] text-[#6287c6] hover:text-[#298D92] hover:border-[#298D92] whitespace-nowrap"
                onClick={() => {
                  openWindow(projectInfo.githubUrl!);
                }}
              >
                깃 허브
              </Button>
            )}
          </div>
          <h3 className="mt-3 mb-1 font-semibold text-xl">개요</h3>
          <p>{projectInfo.body}</p>
        </section>
      </Card>
    </Modal>
  );
}

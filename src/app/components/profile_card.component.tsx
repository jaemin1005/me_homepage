import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export function ProfileCard() {
  return (
    <Card
      className="max-w-80 bg-[linear-gradient(0deg,rgba(235,217,217,0)_0%,rgba(41,141,146,0.2)_100%)] 
            backdrop-blur-lg rounded-md mt-36"
    >
      <CardHeader
        avatar={<Avatar alt="avartar" src="/avartar.jpeg" />}
        title="Hwang Jae Min"
        subheader="ghkdwoals1005@gmail.com"
      />
      <CardContent>
        <Typography variant="subtitle2">Readme</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <HomeOutlinedIcon />
        </IconButton>
        <IconButton>
          <MailOutlineIcon />
        </IconButton>
        <IconButton>
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

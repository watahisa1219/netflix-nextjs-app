import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const PlayButton = ({ onClick }) => {
  return (
    <div style={{color: "black"}}>
      <Button
        variant="contained"
        color="inherit"
        onClick={onClick}
        >
      <PlayArrowIcon />
        Play
      </Button>
    </div>
  );
}

export default PlayButton;
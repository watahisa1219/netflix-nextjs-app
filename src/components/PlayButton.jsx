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
  // return (
  //   <Button
  //     color="inherit"
  //     variant="contained"
  //     startIcon={
  //       <PlayArrowIcon
  //         sx={{
  //           fontSize: {
  //             xs: "24px !important",
  //             sm: "32px !important",
  //             md: "40px !important",
  //           },
  //         }}
  //       />
  //     }
  //     {...others}
  //     sx={{
  //       px: { xs: 1, sm: 2 },
  //       py: { xs: 0.5, sm: 1 },
  //       fontSize: { xs: 18, sm: 24, md: 28 },
  //       lineHeight: 1.5,
  //       fontWeight: "bold",
  //       whiteSpace: "nowrap",
  //       textTransform: "capitalize",
  //       ...sx,
  //     }}
  //     onClick={() => navigate(`/${MAIN_PATH.watch}`)}
  //   >
  //     Play
  //   </Button>
  // );

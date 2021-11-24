import { Divider } from "@mui/material";
import { styled } from "@mui/material";
import { Paper } from "@mui/material";

function DividerHorizontal() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    padding: theme.spacing(1),
    backgroundColor: "black",
    marginLeft: "80px",
  }));

  return (
    <Item>
      <Divider
        orientation="horizontal"
        color="white"
        width="90%"
        justifyContent="center"
        alignItems="center"
        flexItem
      ></Divider>
    </Item>
  );
}

export default DividerHorizontal;

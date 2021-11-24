import * as React from "react";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import mainImg from "../images/main.jpg";
import warmpizza from "../images/warmpizza.jpeg";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
  backgroundColor: "black",
  color: "white",
  paddingTop: "0px",
  padding: "0 0 0 0",
  width: "100%",
}));

function FormRow(props) {
  const { amountOfItems } = props;
  return (
    <>
      <Item>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Header amountOfItems={amountOfItems} />
          <Box
            sx={{
              width: "100%",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${mainImg})`,
                ackgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "92vh",
                width: "100%",
              }}
            ></div>

            <div className="mainMiddleCont">
              <div className="warmPizzaImgCont">
                <img src={warmpizza} id="warmpizza" />
              </div>
              <div className="pizzaText">
                <a>Real Italian</a>
                <div>
                  <a style={{ color: "green", paddingRight: "20px" }}>Pizza</a>
                  <a> & </a>
                  <a style={{ color: "red", paddingLeft: "20px" }}>Pasta</a>
                </div>
                <Link to="/Menu">
                  <button type="button" id="mainOrdernowBtn">
                    ORDER NOW
                  </button>
                </Link>
              </div>
            </div>
          </Box>
        </Box>
      </Item>
    </>
  );
}

function MainCard(props) {
  const { amountOfItems } = props;
  return <FormRow amountOfItems={amountOfItems} />;
}

export default MainCard;

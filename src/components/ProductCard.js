import * as React from "react";

//import mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

//note to sensor.. we use static/media... if we delete the import it wont work even tho they are never read.
import Pizza from "../images/Pizza.png";
import Pasta from "../images/Pasta.png";
import Drink from "../images/Soda.png";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: "center",
  fontSize: "15px",
  alignItems: "flex-end",
  color: "white",
  backgroundColor: "black",
  boxShadow: "white",
}));

export default function ProductCard(props) {
  const { product, onAdd } = props;
  return (
    <Card class="cardStyling">
      <CardMedia
        style={{
          height: "70%",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <CardMedia
          style={{
            height: "100px",
            width: "auto",
            marginLeft: "20%",
            marginBottom: "-15px",
          }}
          component="img"
          image={product.image}
          alt={product.dish}
        />
        <Item>
          <CardContent
            style={{ height: "50%", display: "flex", flexDirection: "column" }}
          >
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              textAlign="center"
            >
              {product.title + " " + "-"} {"$" + product.price}
            </Typography>
            <Divider
              orientation="horizontal"
              style={{ background: "white" }}
              flexItem
            ></Divider>
            <Typography variant="body" componet="div">
              {product.description}
            </Typography>
          </CardContent>
        </Item>
      </CardMedia>
      <CardActions
        style={{
          justifyContent: "center",
          alignContent: "center",
          marginTop: "30px",
          height: "50px",
        }}
      >
        <Fab
          onClick={() => onAdd(product)}
          class={product.dish + "addButton"}
          size="small"
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </CardActions>
    </Card>
  );
}

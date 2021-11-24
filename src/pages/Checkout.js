import React from "react";
import { useState, useEffect } from "react";

//import MUI
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

//import components
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import ShoppingCart from "../components/ShoppingCart";
import Modal from "../components/PaymentModal";

//imort dummyData
import { getProducts } from "../dummyData/menuData";

export default function Checkout(props) {
  const { cartItems, onAdd, onRemove, amountOfItems } = props;

  const Title = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: "left",
    alignItems: "flex-end",
    backgroundColor: "black",
    color: "white",
  }));

  const Title2 = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: "right",
    backgroundColor: "black",
    color: "white",
  }));

  const [products, setproducts] = useState([]);

  useEffect(() => {
    let response = getProducts();
    setproducts(response);
  }, []);

  return (
    <>
      <Header amountOfItems={amountOfItems} />

      <div class="checkOutContainer">
        <div className="menuCont">
          <div className="menuItem">
            <Title>
              <h2 class="hideOnMobile">Items:</h2>
            </Title>
          </div>
          <div className="menuItem">
            <Title2>
              <h2 class="hideOnMobile">Price:</h2>
            </Title2>
          </div>
        </div>

        <div container class="menCont">
          <div class="menuItem">
            <ShoppingCart
              onAdd={onAdd}
              onRemove={onRemove}
              cartItems={cartItems}
            />
          </div>
        </div>
      </div>
      <div class="checkOutContainer2">
        <Grid container>
          <Grid>
            <Title md={6}>
              <h2>Thirsty?</h2>
            </Title>
          </Grid>
        </Grid>
      </div>
      <div class="fixPadding">
        <div className="menuCont">
          {products
            .filter((product) => product.id > 16)
            .map((product) => (
              <div className="menuItem" item key={product.id}>
                <ProductCard onAdd={onAdd} product={product} />{" "}
              </div>
            ))}
        </div>
      </div>

      <Grid container justifyContent="center" marginBottom="100px">
        <Grid>
          <Modal
            class="checkoutButton"
            varitant="outlined"
            size="large"
            cartItems={cartItems}
          />
        </Grid>
      </Grid>
    </>
  );
}

import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Button } from "@mui/material";

type AddToCartButtonProps = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

export default function AddToCartButton({ onClick }: AddToCartButtonProps) {
  return (
    <div className="add-to-cart-button">
      <Button variant="contained" color="primary" onClick={onClick}>
        <ShoppingCartIcon
          className="add-to-cart-button-icon"
          style={{ fontSize: "26px" }}
        />
        ADD TO CART
      </Button>
    </div>
  );
}

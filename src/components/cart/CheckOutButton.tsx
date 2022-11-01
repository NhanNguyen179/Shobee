import  OrangeButton  from "../reusableComponents/ButtonOrange";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Button } from "@mui/material";
export default function CheckOutButton() {
  return (
    <div className="checkout-button">
      <Button variant="contained" color="primary">
        <ShoppingCartIcon
          className="checkout-button-icon"
          style={{ fontSize: "26px" }}
        />
        Proceed to check out
      </Button>
    </div>
  );
}

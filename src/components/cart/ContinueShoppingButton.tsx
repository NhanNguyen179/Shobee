import { NavLink } from "react-router-dom";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import { GrayButton } from "../reusableComponents/ButtonGray";
import { Button } from "@mui/material";

export default function ContinueShoppingButton() {
  return (
    <div className="continue-shopping-button">
      <NavLink to="/">
        <Button variant="contained" color="primary">
          <KeyboardReturnIcon
            className="continue-shopping-button-icon"
            style={{ fontSize: "26px" }}
          />
          Continue Shopping
        </Button>
      </NavLink>
    </div>
  );
}

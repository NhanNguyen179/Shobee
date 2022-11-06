import { useContext } from "react";
import { AppContext } from "../../context/Context";
import ContinueShoppingButton from "./ContinueShoppingButton";
import NoProductInCart from "./NoProductInCart";
import ProductInCart from "./ProductInCart";
import CartContainer from "./CartContainer";
import TotalInCart from "./TotalInCart";
import ShopCart from "../ShopCart";

const Cart = () => {
  const { state } = useContext(AppContext);
  const CartContents = () => {
    if (state.products[0] == null) {
      return <NoProductInCart />;
    } else {
      return (
        <div>
          <ProductInCart />
          <hr />
          {/* <div className="total-in-cart">
            <TotalInCart />
            <ContinueShoppingButton />
          </div> */}
        </div>
      );
    }
  };

  return (
    <CartContainer>
      <CartContents />
    </CartContainer>
  );
};

export default Cart;

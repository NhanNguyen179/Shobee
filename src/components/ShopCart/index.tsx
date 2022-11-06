import { Button, useMediaQuery } from "@material-ui/core";
import { stat } from "fs";
import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/Context";
import EachItemInCartBiggerScreen from "../cart/EachItemInCartBiggerScreen";
import EachItemInCartMobile from "../cart/EachItemInCartMobile";

import { Types } from "../../context/Reducers";
import styled from "styled-components";
import CheckOutButton from "../cart/CheckOutButton";
import Invoice from "../../view/Invoice";
import { useHistory } from "react-router-dom";
type Props = {
  shopId?: string;
  listProductShop?: any;
};
const ShopCart = ({ shopId, listProductShop }: Props) => {
  const isMobile = useMediaQuery("(max-width:599px)");
  const history = useHistory();
  const { dispatch, setInvoice } = useContext(AppContext);
  const handleChangeQuantity_TextField = (id: string, payload: string) => {
    dispatch({
      type: Types.QuantityChange_TextField,
      payload: { id, quantity: payload },
    });
  };

  const handleUpdateQuantity_TextField = (
    id: string,
    quantity: string,
    price: number
  ) => {
    dispatch({
      type: Types.QuantitySet_TextField,
      payload: { id, quantity },
    });
    dispatch({
      type: Types.TotalQuantitySet_TextField,
      payload: { id, quantity },
    });
    dispatch({
      type: Types.SubTotalSet_TextField,
      payload: { id, price, quantity },
    });
    dispatch({
      type: Types.PreviousQuantitySet,
      payload: { id, quantity },
    });
    if (quantity === "0") {
      deleteProduct(id, quantity, price);
    }
  };

  const handleUpdateQuantity_DropDown = (
    id: string,
    quantity: string,
    price: number,
    payload: unknown
  ) => {
    dispatch({
      type: Types.QuantitySet_DropDown,
      payload: { id, quantity: payload },
    });
    dispatch({
      type: Types.TotalQuantitySet_DropDown,
      payload: { id, quantity },
    });
    dispatch({
      type: Types.SubTotalSet_DropDown,
      payload: { id, price, quantity },
    });
    dispatch({
      type: Types.PreviousQuantitySet,
      payload: { id, quantity },
    });
    if (payload === "0") {
      deleteProduct(id, payload, price);
    }
  };

  const deleteProduct = (id: string, quantity: string, price: number) => {
    dispatch({
      type: Types.Delete,
      payload: { id },
    });
    dispatch({
      type: Types.Decrease,
      payload: { quantity },
    });
    dispatch({
      type: Types.SubTotalDecrease,
      payload: { price, quantity },
    });
  };
  const payItem = () => {
    setInvoice(listProductShop);
    history.push("./bill/1");
  };
  return (
    <>
      <WrapShopCardItem>
        <b>Name Shop: {shopId} </b>
        {listProductShop?.map((productInCart: any) => (
          <div key={productInCart.id}>
            <hr />
            {isMobile ? (
              <EachItemInCartMobile
                category={productInCart.category}
                id={productInCart.id}
                image={productInCart.image} 
                quantity={productInCart.quantity}
                price={productInCart.price}
                name={productInCart.name}
                currentQuantity={productInCart.currentQuantity}
                button={productInCart.button}
                handleChangeQuantity_TextField={handleChangeQuantity_TextField}
                handleUpdateQuantity_TextField={handleUpdateQuantity_TextField}
                handleUpdateQuantity_DropDown={handleUpdateQuantity_DropDown}
                deleteProduct={deleteProduct}
                shopId={productInCart.shopId}
              />
            ) : (
              <EachItemInCartBiggerScreen
                category={productInCart.category}
                id={productInCart.id}
                image={productInCart.image}
                quantity={productInCart.quantity}
                price={productInCart.price}
                name={productInCart.name}
                currentQuantity={productInCart.currentQuantity}
                button={productInCart.button}
                handleChangeQuantity_TextField={handleChangeQuantity_TextField}
                handleUpdateQuantity_TextField={handleUpdateQuantity_TextField}
                handleUpdateQuantity_DropDown={handleUpdateQuantity_DropDown}
                deleteProduct={deleteProduct}
                shopId={productInCart.shopId}
              />
            )}
          </div>
        ))}
        <Button onClick={payItem}> Thanh toan </Button>
      </WrapShopCardItem>
    </>
  );
};
export default ShopCart;
const WrapShopCardItem = styled.div`
  min-width: 1000px;
  min-height: 300px;
  background-color: green;
  border-top: 1px solid #3e3e3e;
  margin-top: 10px;
  border-radius: 10px;
`;

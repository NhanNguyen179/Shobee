import { useState, useContext } from "react";
import * as React from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/Context";
import { Types } from "../../context/Reducers";
import { ProductData } from "../../data/ProductData";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import NotFoundPage from "../NotFoundPage";
import ProductViewContainer from "./ProductViewContainer";
import ImageView from "./ImageView";
import DescriptionView from "./DescriptionView";
import orderApi from "../../api/orderApi";
type Params = {
  id: string;
};

export default function ProductView() {
  const { id } = useParams<Params>();
  const thisProduct = ProductData.find((prod) => prod.id === id)!;
  const [reviews, setReviews] = React.useState<any>();
  React.useEffect(() => {
    // Update the document title using the browser API
    const fetch = async () => {
    };
    fetch();
  }, []);
  const isMobile = useMediaQuery("(max-width:599px)");

  const { dispatch } = useContext(AppContext);

  const AddProduct = () => {
    dispatch({
      type: Types.Add,
      payload: {
        id: thisProduct.id,
        name: thisProduct.name,
        price: thisProduct.price,
        image: thisProduct.image,
        quantity: quantityState.quantity,
        button: false,
        previousQuantity: quantityState.quantity,
        currentQuantity: quantityState.quantity,
        category: thisProduct.category,
      },
    });
    dispatch({
      type: Types.Increase,
      payload: {
        quantity: quantityState.quantity,
      },
    });
    dispatch({
      type: Types.SubTotalIncrease,
      payload: {
        price: thisProduct.price,
        quantity: quantityState.quantity,
      },
    });
  };

  const [quantityState, setQuantityState] = useState<{
    quantity: string;
    name: string;
  }>({
    quantity: "1",
    name: "quantity",
  });

  if (thisProduct && isMobile) {
    return (
      <ProductViewContainer>
        <ImageView
          category={thisProduct?.category}
          image={thisProduct?.image}
          name={thisProduct?.name}
        />
        <DescriptionView
          name={thisProduct?.name}
          description={thisProduct?.description}
          price={thisProduct?.price}
          id={thisProduct?.id}
          quantityState={quantityState}
          setQuantityState={setQuantityState}
          quantity={quantityState.quantity}
          AddProduct={AddProduct}
        />
      </ProductViewContainer>
    );
  } else if (thisProduct && !isMobile) {
    return (
      <ProductViewContainer>
        <Grid
          container
          style={{
            justifyContent: "space-between",
            width: "100%",
            margin: "0px auto",
          }}
        >
          <Grid item xs={12} sm={6} style={{ flexBasis: "45%" }}>
            <ImageView
              category={thisProduct?.category}
              image={thisProduct?.image}
              name={thisProduct?.name}
            />
          </Grid>
          <Grid item xs={12} sm={6} style={{ flexBasis: "55%" }}>
            <DescriptionView
              name={thisProduct?.name}
              description={thisProduct?.description}
              price={thisProduct?.price}
              id={thisProduct?.id}
              quantityState={quantityState}
              setQuantityState={setQuantityState}
              quantity={quantityState.quantity}
              AddProduct={AddProduct}
            />
          </Grid>
        </Grid>
      </ProductViewContainer>
    );
  } else {
    return (
      <div style={{ maxWidth: "1280px", margin: "0px auto" }}>
        <NotFoundPage />
      </div>
    );
  }
}

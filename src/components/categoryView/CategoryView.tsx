import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "./ProductList";
import NotFoundPage from "../NotFoundPage";
import productFunction from "../../api/productFunction";
import { Container } from "@material-ui/core";

type Params = {
  categoryId: string;
};

export default function CategoryPage() {
  const { categoryId } = useParams<Params>();
  const [products, setProducts] = useState<any>();

  const fetch = async () => {
    const respone: any = await productFunction.getProduct(categoryId);
    setProducts(respone.data);
  };

  React.useEffect(() => {
    fetch();
  }, []);

  if (products)
    return (
      <Container fixed>
        <ProductList products={products} />
      </Container>
    );
  else
    return (
      <div style={{ maxWidth: "1280px", margin: "0px auto" }}>
        <NotFoundPage />
      </div>
    );
}

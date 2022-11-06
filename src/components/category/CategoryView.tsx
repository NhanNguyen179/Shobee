import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../productList/ProductList";
import productFunction from "../../api/productFunction";
import { Container } from "@material-ui/core";
import NoResultPage from "../NoResultPage";
import Loading from "../Loading";

type Params = {
  categoryId: string;
};

export default function CategoryPage() {
  const { categoryId } = useParams<Params>();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  React.useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      const respone: any = await productFunction.getProducts(categoryId);
      console.log(respone);
      setProducts(respone.data);
    };
    fetch().then(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        {products.length === 0 ? (
          <NoResultPage />
        ) : (
          <Container fixed style={{ marginTop: "100px" }}>
            <ProductList products={products} />
          </Container>
        )}
      </>
    );
  }
}

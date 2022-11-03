import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "../../data/ProductData";
import ProductListPaper from "../reusableComponents/ProductListPaper";
import ProductListContainer from "../reusableComponents/ProductListContainer";
import productFunction from "../../api/productFunction";

type Params = {
  categoryName: string;
};

type sortProps = {
  sortState: { sort: string; name: string };
};

export default function ProductList({ sortState }: sortProps) {
  function FormRow({ sortState }: sortProps) {
    const { categoryName } = useParams<Params>();
    var selectedProduct: any[] = [];

    const [sortedProduct, setSortedProduct] = useState<any[]>([]);
    const [products, setProducts] = React.useState<any>();

    useEffect(() => {
      async function fetchData() {
        // You can await here
        const responeGetProvince: any =
          await productFunction.getProductByCategoryId(categoryName);
        setProducts(responeGetProvince.data);
        console.log("ResponseData", responeGetProvince);
        setSortedProduct(responeGetProvince.data);

        // ...
      }
      fetchData();
      console.log("sortState",sortState)
      // if (sortState.sort === "Best selling") {
      //   setSortedProduct(
      //     products?.data?.sort((a: any, b: any) => b.price - a.price)
      //   );
      // } else if (sortState.sort === "Price, high to low") {
      //   setSortedProduct(
      //     products?.data?.sort((a: any, b: any) => b.price - a.price)
      //   );
      // } else if (sortState.sort === "Price, low to high") {
      //   setSortedProduct(
      //     products?.data?.sort((a: any, b: any) => a.price - b.price)
      //   );
      // } else {
      //   setSortedProduct(
      //     ProductData.sort(function (a, b) {
      //       if (a.name < b.name) {
      //         return -1;
      //       }
      //       if (a.name > b.name) {
      //         return 1;
      //       }
      //       return 0;
      //     })
      //   );
      // }
    }, []);
    console.log("sort", sortedProduct);
    sortedProduct?.forEach((product) => {
      selectedProduct?.push(
        <ProductListPaper
          key={product.id}
          id={product.id}
          category={categoryName}
          name={product.name}
          image={product.imageUrl}
          price={product.price}
        />
      );
    });

    return <React.Fragment>{selectedProduct}</React.Fragment>;
  }

  return (
    <ProductListContainer>
      <FormRow sortState={sortState} />
    </ProductListContainer>
  );
}

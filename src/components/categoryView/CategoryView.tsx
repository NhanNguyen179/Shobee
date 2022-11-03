import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CategoryData } from "../../data/CategoryData";
import SortSelect from "./SortSelect";
import ProductList from "./ProductList";
import NotFoundPage from "../NotFoundPage";
import productFunction from "../../api/productFunction";
import orderApi from "../../api/orderApi";

type Params = {
  categoryName: string;
};

export default function CategoryPage() {
  const { categoryName } = useParams<Params>();
  const [products, setProducts] = React.useState<any>();
  React.useEffect(() => {
    // Update the document title using the browser API
    const fetch = async () => {
      const responeGetProvince: any =
        await productFunction.getProductByCategoryId(categoryName);
      setProducts(responeGetProvince.data);
      console.log(responeGetProvince.data);
      // const temp: any = await orderApi.getReviewByProductId();
    };
    fetch();
  }, []);

  var selectedCategory: any[] = [];

  const [sortState, setSortState] = useState<{
    sort: string;
    name: string;
  }>({
    sort: "Best selling",
    name: "sort",
  });

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const name = event.target.name as keyof typeof sortState;
    setSortState({
      ...sortState,
      [name]: event.target.value,
    });
  };

  products?.map((item: any) => {
    return (
      <div key={item.name}>
        <div className="category-name">{item.name}</div>
        <p className="category-description">{item.price}</p>
      </div>
    );
  });

  if (products)
    return (
      <div style={{ maxWidth: "1280px", margin: "0px auto" }}>
        {selectedCategory}
        <SortSelect onChange={handleChange} value={sortState.sort} />
        <ProductList sortState={sortState} />
      </div>
    );
  else
    return (
      <div style={{ maxWidth: "1280px", margin: "0px auto" }}>
        <NotFoundPage />
      </div>
    );
}

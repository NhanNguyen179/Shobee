import React from "react";
import { useParams } from "react-router-dom";
import ProductListContainer from "./products/ProductListContainer";

type Params = {
  query: string;
};

export default function SearchResults() {
  var selectedCategory: any[] = [];

  const { query } = useParams<Params>();

  return (
    <div style={{ maxWidth: "1280px", margin: "0px auto" }}>
      <div className="search-results-text">
        {selectedCategory.length} RESULTS FOR '{query.toUpperCase()}'
      </div>
      <ProductListContainer>
        <React.Fragment>{selectedCategory}</React.Fragment>
      </ProductListContainer>
    </div>
  );
}

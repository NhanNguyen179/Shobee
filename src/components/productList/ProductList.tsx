import ProductListPaper from "./ProductListPaper";
import ProductListContainer from "./ProductListContainer";

const ProductList = ({ products }: any) => {
  return (
    <ProductListContainer>
      {products.map((product: any) => (
        <ProductListPaper
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.imageUrl}
        />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;

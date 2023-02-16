import { useSelector } from "react-redux";
import ProductsItem from "./ProductItem";

const Products = ({ start, end }) => {
  const products = useSelector((state) => state.products.products);

  return (
    <>
      <div className="col-12">
        <div className="section-wrapper">
          <div className="row justify-content-center mb-15-none">
            {products.slice(start, end).map((product) => (
              <ProductsItem
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;

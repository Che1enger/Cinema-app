import ProductCard from "./ProductCard";

const ProductsList = ({ products }) => (
    <div className="cards">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          src={product.src}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );

  export default ProductsList;
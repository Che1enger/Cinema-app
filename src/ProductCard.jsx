const ProductCard = ({ src, name, price }) => (
    <div className="products">
      <div className="img"><img src={src} alt={name} /></div>
      <div className="name_price">
        <div className="namemarket">{name}</div>
        <div className="pricemarket">from {price}</div>
      </div>
    </div>
  );
  export default ProductCard;
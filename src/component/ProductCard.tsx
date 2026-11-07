import '../styles/ProductCard.css';

interface Props {
  title: string;
  price: number;
  image: string;
  category: string;
}

function ProductCard({title, price, image, category}: Props) {
  return (
  <div className="product-card">
    <img className="product-imagen" src={image} alt={title} />
    <div>
      {price > 50 && (
        <span className="etiqueta-alto-valor">Activo de Alto Valor</span>
      )}
    </div>
    <h3>{title}</h3>
    <p>{category}</p>
    <p>{price}$</p>
  </div>
  );
}

export default ProductCard;
import { Link } from 'react-router-dom';
import { Product, toDollars } from '../lib';

type Props = {
  product: Product;
};

export function CardComponent({ product }: Props) {
  return (
    <Link to={`details/${product.productId}`}>
      <div className="card-container">
        <div className="card">
          <img
            src={product.imageUrl}
            alt="product image"
            className="card-image"
          />
          <div className="card-body">
            <p className="card-title">{product.name}</p>
            <p className="card-price">{toDollars(product.price)}</p>
            <p className="card-description">{product.shortDescription}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

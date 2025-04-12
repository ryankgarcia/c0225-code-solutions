import { Link } from 'react-router-dom';
import { Product, toDollars } from '../lib';

type Props = {
  product: Product;
};

export function CardComponent({ product }: Props) {
  return (
    <Link to={`details/${product.productId}`}>
      <div>
        <img src={product.imageUrl} alt="product image" />
        <p>{product.name}</p>
        <p>{toDollars(product.price)}</p>
        <p>{product.shortDescription}</p>
      </div>
    </Link>
  );
}

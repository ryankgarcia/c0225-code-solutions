import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Product, readProduct } from '../lib';

export function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData(id: number) {
      try {
        const data = await readProduct(id);
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (productId) {
      getData(+productId);
      setIsLoading(true);
    }
  }, [productId]);

  function handleAddToCart() {
    alert(`Added ${product?.name} to cart!`);
    navigate('/');
  }

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    return (
      <div>
        Error Loading Catalog:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="container">
      <div className="p-6">
        <div className="flex flex-wrap">
          <div className="flex-grow flex-1 px-4">
            <Link to="/" className="back-to-catalog">
              &lt; Back to catalog
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap mb-4">
          <div className="w-full sm:w-1/2 md:w-2/5 px-4">
            <img
              src={product?.imageUrl}
              alt={product?.name}
              className="card-image"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-3/5 px-4 my-12">
            <h2 className="card-title">{product?.name}</h2>
            <h5 className="card-price">{product?.price}</h5>
            <p className="card-description">{product?.shortDescription}</p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="flex-grow max-w-full flex-1 px-4">
            <p className="whitespace-pre-wrap">{product?.longDescription}</p>
          </div>
        </div>
        <button
          className="border border-gray-3000 rounded py-1 px-3 mx-10"
          onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

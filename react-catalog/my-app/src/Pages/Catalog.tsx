import { useEffect, useState } from 'react';
import { CardComponent } from '../Components/CardComponent';
import { Product, readCatalog } from '../lib';

export function Catalog() {
  const [items, setItems] = useState<Product[]>([]);
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadCatalog() {
      try {
        const values = await readCatalog();
        setItems(values);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadCatalog();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <>
      {items.map((product) => (
        <CardComponent key={product.productId} product={product} />
      ))}
    </>
  );
}

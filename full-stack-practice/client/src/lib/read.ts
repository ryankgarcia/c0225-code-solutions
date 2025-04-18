export type Product = {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  shortDescription: string;
  longDescription: string;
};

export async function readCatalog(): Promise<Product[]> {
  const res = await fetch('/api/catalog');
  if (!res.ok) {
    throw new Error(`Response status: ${res.status}`);
  }
  const json = (await res.json()) as Product[];
  return json;
}

export async function readProduct(
  productId: number
): Promise<Product | undefined> {
  const res = await fetch(`/api/catalog/${productId}`);
  if (!res.ok) {
    throw new Error(`Error`);
  }
  const json = (await res.json()) as Product;
  return json;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  photo: string;
  sizes: Record<string, number>;
  price: number;
  volume?: string;
}

export interface ProductCardProps {
  products: Product[];
}

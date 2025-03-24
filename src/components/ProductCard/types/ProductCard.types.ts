export interface Product {
  id: string;
  name: string;
  description: string;
  photo: string;
  sizes: Record<string, number>;
  price: number;
  volume?: string;
  isNew?: boolean;
  badgeInfo?: string;
}

export interface ProductCardProps {
  products: Product[];
}

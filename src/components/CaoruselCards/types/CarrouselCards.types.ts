export interface Product {
  id: string;
  name: string;
  description: string;
  photo: string;
  sizes: Record<string, number>;
}

export interface CarrouselCardsProps {
  products: Product[];
  width: string;
  height: string;
  margin: string;
  offset: number;
  showArrows: boolean;
}

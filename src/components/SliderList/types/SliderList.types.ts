import { Product } from "@/types/types";

export interface SlidesListProps {
  products: Product[];
  currentIndex: number;
  selectedSize: string | null;
  onAddToCart: () => void;
}

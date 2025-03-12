import { Product } from "@/types/types";

export interface SlideProps {
  product: Product;
  isActive: boolean;
  selectedSize: string | null;
  onAddToCart: () => void;
}

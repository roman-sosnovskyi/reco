import HeroSection from "@/components/HeroSection/HeroSection";
import FeedbackSection from "@/components/FeedbackSection/FeedbackSection";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";

import { ProductCard } from "@/components/ProductCard/ProductCard";
import { products } from "@/constants/products";

const MainPage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProductCard products={products} />
      <FeedbackSection />
    </>
  );
};

export default MainPage;

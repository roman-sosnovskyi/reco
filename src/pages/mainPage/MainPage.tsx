import HeroSection from "@/components/HeroSection/HeroSection";
import FeedbackSection from "@/components/FeedbackSection/FeedbackSection";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import Insta from "@/components/Insta/Insta";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { products } from "@/constants/products";

const MainPage = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ProductCard products={products} />
      <Insta />
      <FeedbackSection />
    </main>
  );
};

export default MainPage;

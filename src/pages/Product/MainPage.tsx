import { MainPageProps } from "./types/MainPage.types";
import styles from "./MainPage.module.scss";
import HeroSection from "@/components/HeroSection/HeroSection";
import FeedbackSection from "@/components/FeedbackSection/FeedbackSection";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import Insta from "@/components/Insta/Insta";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { products } from "@/constants/products";

const MainPage = ({ className }: MainPageProps) => {
  const combinedClass = className
    ? `${styles.main_page} ${className}`
    : styles.main_page;
  return (
    <div className={combinedClass}>
      <HeroSection />
      <FeaturesSection />
      <ProductCard products={products} />
      <Insta />
      <FeedbackSection />
    </div>
  );
};

export default MainPage;

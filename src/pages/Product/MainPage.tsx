import { MainPageProps } from "./types/MainPage.types";
import styles from "./MainPage.module.scss";
import HeroSection from "@/libs/components/HeroSection/HeroSection";
import Advantages from "@/libs/components/Adventages/Advantages";

const MainPage = ({ className }: MainPageProps) => {
  const combinedClass = className
    ? `${styles.main_page} ${className}`
    : styles.main_page;
  return (
    <div className={combinedClass}>
      <HeroSection />
      <Advantages />
    </div>
  );
};

export default MainPage;

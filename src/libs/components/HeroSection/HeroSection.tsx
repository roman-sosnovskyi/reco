import { HeroSectionProps } from "./types/HeroSection.types";
import styles from "./HeroSection.module.scss";

const HeroSection = ({ children, className }: HeroSectionProps) => {
  const combinedClass = className
    ? `${styles.heroSection} ${className}`
    : styles.heroSection;
  return <section className={combinedClass}>{children}</section>;
};

export default HeroSection;

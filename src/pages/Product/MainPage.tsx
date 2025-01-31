import { MainPageProps } from "./types/MainPage.types";
import styles from "./MainPage.module.scss";

const MainPage = ({ className }: MainPageProps) => {
  const combinedClass = className
    ? `${styles.main_page} ${className}`
    : styles.main_page;
  return <div className={combinedClass}></div>;
};

export default MainPage;

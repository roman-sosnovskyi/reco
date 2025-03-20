import styles from "./BackgroundCircles.module.scss";
import { BackgroundCirclesProps } from "./types/BackgroundCircles.types";

const BackgroundCircles = ({ className }: BackgroundCirclesProps) => {
  return <div className={`${styles.circles} ${className}`}></div>;
};

export default BackgroundCircles;

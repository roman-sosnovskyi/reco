import { ImageProps } from "./types/Image.types";
import styles from "./Image.module.scss";
import clsx from "clsx";

const Image = ({ src, alt, className, size = "medium" }: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={clsx(styles.image, styles[size], className)}
    />
  );
};

export default Image;

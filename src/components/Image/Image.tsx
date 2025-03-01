import { ImageProps } from "./types/Image.types";
import styles from "./Image.module.scss";
import clsx from "clsx";

const Image = ({
  src1x,
  src2x,
  alt,
  className,
  size = "small"
}: ImageProps) => {
  return (
    <picture>
      <source srcSet={`${src1x} 1x, ${src2x} 2x`} />
      <img
        src={src1x}
        alt={alt}
        className={clsx(styles.image, styles[size], className)}
      />
    </picture>
  );
};

export default Image;

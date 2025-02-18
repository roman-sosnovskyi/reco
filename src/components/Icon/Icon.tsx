import { IconProps } from "./types/Icon.types";
import styles from "./Icon.module.scss";

const Icon = ({
  name,
  size = 24,
  color = "white",
  className,
  width,
  style,
  ariaLabel
}: IconProps) => {
  const combinedClass = className
    ? `${styles.icon_container} ${className}`
    : styles.icon_container;

  return (
    <div
      className={combinedClass}
      style={{ width: width ?? size, ...style }}
      aria-label={ariaLabel || name}
    >
      <svg
        width={size}
        height="100%"
        fill={color}
        stroke={color}
        aria-hidden="true"
      >
        <use href={`/sprite.svg#${name}`} />
      </svg>
    </div>
  );
};

export default Icon;

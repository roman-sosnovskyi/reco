import React from "react";
import { IconProps } from "./types/Icon.types";

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  stroke = "currentColor",
  fill = "none",
  className
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill={fill}
      stroke={stroke}
    >
      <use href={`/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;

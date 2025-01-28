import { ButtonProps } from "./types/Button.types";
import classNames from "classnames";
import "./Button.scss";

const Button = ({
  size = "m",
  disabled = false,
  loading = false,
  variant = "primary",
  onClick,
  children
}: ButtonProps) => {
  const classes = classNames("button", {
    [`button--${size}`]: size,
    [`button--${variant}`]: variant,
    "button--disabled": disabled,
    "button--loading": loading
  });

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {children}
      {loading && <span className="spinner" />}
    </button>
  );
};

export default Button;

import React from "react";
import { ButtonProps } from "./types/Button.types";
import "./Button.scss";

export const Button: React.FC<ButtonProps> = ({
  size = "m",
  disabled = false,
  loading = false,
  variant = "primary",
  onClick,
  children
}) => {
  const classes = [
    "button",
    `button--${size}`,
    `button--${variant}`,
    disabled ? "button--disabled" : "",
    loading ? "button--loading" : ""
  ].join(" ");

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

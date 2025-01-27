import React from "react";
export type ButtonSize = "s" | "m" | "l";

export interface ButtonProps {
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "black";
  onClick?: () => void;
  children: React.ReactNode;
}

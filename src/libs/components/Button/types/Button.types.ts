import React from "react";
export type ButtonSize =
  | "s"
  | "m"
  | "l"
  | "l1"
  | "black1"
  | "black2"
  | "black3";
export type ButtonState =
  | "default"
  | "hover"
  | "focus"
  | "disabled"
  | "pressed";
export type ButtonVariant = "primary" | "secondary" | "black";
export interface ButtonProps {
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  variant?: ButtonVariant;
  state?: ButtonState;
  onClick?: () => void;
  children: React.ReactNode;
  icon?: string;
}

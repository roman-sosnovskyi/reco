import React, { ReactElement } from "react";
export type ButtonSize = "s" | "m" | "l" | "black1" | "black2" | "black3";
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
  variant?: ButtonVariant;
  state?: ButtonState;
  onClick?: () => void;
  children: React.ReactNode;
  icon?: ReactElement | string;
  className?: string;
}

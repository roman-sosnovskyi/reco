import React from "react";
export interface ButtonArrowProps {
  className?: string;
  icon: "left" | "right";
  onClick?: () => void;
  // onTouchStart?: () => void;
  onTouchEnd?: (e: React.TouchEvent) => void;
}

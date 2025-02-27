import React from "react";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
  color?: string | undefined;
  className?: string;
}

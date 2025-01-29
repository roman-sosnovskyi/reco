import React from "react";

export type SocialMediaBtnProps = {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  link?: string;
  alt?: string;
};

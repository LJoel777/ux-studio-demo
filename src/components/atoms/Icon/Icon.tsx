import { ComponentProps, FC } from "react";
import { NextArrow } from "./nextArrow";
import { PrevArrow } from "./prevArrow";
import { Logo } from "./logo";

export type IconType = "logo" | "nextArrow" | "prevArrow";

export type IconProps = {
  type: IconType;
  iconColor?: string;
  width?: number;
  height?: number;
  className?: ComponentProps<"svg">["className"];
};

export const Icon: FC<IconProps> = ({ type, iconColor = "#fff", ...props }) => {
  switch (type) {
    case "logo":
      return <Logo iconColor={iconColor} {...props} />;
    case "nextArrow":
      return <NextArrow iconColor={iconColor} {...props} />;
    case "prevArrow":
      return <PrevArrow iconColor={iconColor} {...props} />;
    default:
      return null;
  }
};

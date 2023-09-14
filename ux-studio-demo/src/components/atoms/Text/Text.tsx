import React, { ComponentProps, FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type TextProps = PropsWithChildren & {
  as?: keyof JSX.IntrinsicElements;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "h8";
  fontWeight?: "regular" | "medium" | "semiBold" | "bold";
  underlined?: boolean;
  uppercase?: boolean;
  className?: ComponentProps<"p">["className"];
};

const textType = {
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-xl",
  h5: "text-lg",
  h6: "text-base",
  h7: "text-sm",
  h8: "text-xs",
};

const textFont = {
  regular: "font-regular",
  medium: "font-medium",
  semiBold: "font-semibold",
  bold: "font-bold",
};

export const Text: FC<TextProps> = ({
  type,
  children,
  className,
  as: Component = "p",
  fontWeight = "regular",
  underlined = false,
  uppercase = false,
  ...props
}) => {
  const textDecorationClass = underlined ? "underline" : "no-underline";
  const textTransformClass = uppercase ? "uppercase" : "normal-case";
  const mergedClassName = twMerge([
    "text-black",
    textType[type],
    textFont[fontWeight],
    textDecorationClass,
    textTransformClass,
    className,
  ]);

  return (
    <Component className={mergedClassName} {...props}>
      {children}
    </Component>
  );
};

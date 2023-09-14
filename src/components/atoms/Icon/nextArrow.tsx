import { ComponentProps, FC } from "react";

type IconProps = ComponentProps<"svg"> & {
  iconColor?: string;
};

export const NextArrow: FC<IconProps> = ({
  iconColor,
  className,
  ...props
}) => (
  <svg
    width="28"
    height="28"
    fill="none"
    viewBox="0 0 28 28"
    className={className}
    {...props}
  >
    <path
      fill={iconColor}
      d="M16.551 14 8.99 21.561a1.429 1.429 0 1 0 2.02 2.02l8.572-8.57a1.429 1.429 0 0 0 0-2.021L11.01 4.418a1.429 1.429 0 0 0-2.02 2.02L16.55 14Z"
    />
  </svg>
);

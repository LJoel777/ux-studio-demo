import { ComponentProps, FC } from "react";

type IconProps = ComponentProps<"svg"> & {
  iconColor?: string;
};

export const PrevArrow: FC<IconProps> = ({
  iconColor,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="none"
    viewBox="0 0 28 28"
    className={className}
    {...props}
  >
    <path
      fill={iconColor}
      d="m11.449 14 7.561-7.561a1.429 1.429 0 0 0-2.02-2.02l-8.572 8.57a1.429 1.429 0 0 0 0 2.021l8.572 8.572a1.429 1.429 0 0 0 2.02-2.02L11.45 14Z"
    />
  </svg>
);

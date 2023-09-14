import { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

export const Slot: FC<ComponentProps<"div">> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={twMerge([
      "flex items-center justify-center p-1 w-full h-6 rounded-md",
      className,
    ])}
    {...props}
  >
    {children}
  </div>
);

export const Column: FC<ComponentProps<"div">> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={twMerge([
      "flex flex-col items-center justify-center w-full h-full gap-1.5",
      className,
    ])}
    {...props}
  >
    {children}
  </div>
);

export const Row: FC<ComponentProps<"div">> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={twMerge([
      "flex flex-row items-center justify-center w-full h-full gap-1.5",
      className,
    ])}
    {...props}
  >
    {children}
  </div>
);

export const Container: FC<ComponentProps<"div">> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={twMerge([
      "flex flex-col items-center justify-center w-full h-full",
      className,
    ])}
    {...props}
  >
    {children}
  </div>
);

export const Content: FC<ComponentProps<"div">> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={twMerge([
      "flex flex-row items-center justify-center w-full h-full gap-1.5",
      className,
    ])}
    {...props}
  >
    {children}
  </div>
);

export const Header: FC<ComponentProps<"div">> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={twMerge([
      "flex items-center justify-center w-full min-h-[35px] h-full p-0.5 rounded-md",
      className,
    ])}
    {...props}
  >
    {children}
  </div>
);

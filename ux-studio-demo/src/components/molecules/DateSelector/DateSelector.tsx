import { ComponentProps, FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { colors } from "@styles/colors";
import { Icon, Text } from "@components/atoms";

type DateSelectorProps = PropsWithChildren & {
  onNextPress: () => void;
  onPrevPress: () => void;
  nextDisabled?: boolean;
  prevDisabled?: boolean;
  text: string;
  className?: ComponentProps<"div">["className"];
};

export const DateSelector: FC<DateSelectorProps> = ({
  onNextPress,
  onPrevPress,
  nextDisabled = false,
  prevDisabled = false,
  text,
  className,
  children,
  ...props
}) => {
  const nextIconColor = nextDisabled ? colors.grey[100] : colors.black;
  const prevIconColor = prevDisabled ? colors.grey[100] : colors.black;

  return (
    <div
      className={twMerge([
        "w-full flex flex-row items-center justify-between mb-2.5",
        className,
      ])}
      {...props}
    >
      <div
        className={!prevDisabled ? "hover:cursor-pointer" : ""}
        onClick={() => !prevDisabled && onPrevPress()}
      >
        <Icon
          type="prevArrow"
          data-testid="prev-arrow"
          iconColor={prevIconColor}
          className={!prevDisabled ? "[&>path]:hover:fill-grey-300" : ""}
        />
      </div>
      <Text type="h4" fontWeight="bold">
        {text}
      </Text>
      <div
        className={!nextDisabled ? "hover:cursor-pointer" : ""}
        onClick={() => !nextDisabled && onNextPress()}
      >
        <Icon
          type="nextArrow"
          data-testid="next-arrow"
          iconColor={nextIconColor}
          className={!nextDisabled ? "[&>path]:hover:fill-grey-300" : ""}
        />
      </div>
    </div>
  );
};

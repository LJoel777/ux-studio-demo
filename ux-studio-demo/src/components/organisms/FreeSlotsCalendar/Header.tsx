import { FC } from "react";
import { format } from "date-fns";
import { hu } from "date-fns/locale";
import { twMerge } from "tailwind-merge";
import { Calendar } from "@components/molecules";
import { Text } from "@components/atoms";

type HeaderProps = {
  date: string;
  isFirstItem: boolean;
};

export const Header: FC<HeaderProps> = ({ date, isFirstItem }) => {
  const backgroundColor = isFirstItem ? "bg-black" : "bg-transparent";
  const textColor = isFirstItem ? "text-white" : "text-black";
  const formattedDate = format(new Date(date), "EEEEEE  LL.dd.", {
    locale: hu,
  });

  return (
    <Calendar.Header className={backgroundColor}>
      <Text
        type="h6"
        className={twMerge(["text-center max-w-[40px]", textColor])}
        fontWeight="semiBold"
      >
        {formattedDate}
      </Text>
    </Calendar.Header>
  );
};

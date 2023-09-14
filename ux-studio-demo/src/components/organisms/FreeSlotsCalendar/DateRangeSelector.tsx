import { FC } from "react";
import { format } from "date-fns";
import { hu } from "date-fns/locale";
import { DateSelector } from "@components/molecules";
import { capitalizeFirstLetter } from "@core/text-utils";

const getLabel = (days: string[]) => {
  const [firstDay, lastDay] = [
    new Date(days[0]),
    new Date(days[days.length - 1]),
  ];

  const firstDayMonth = capitalizeFirstLetter(
    format(firstDay, "LLL", { locale: hu })
  );
  const lastDayMonth = capitalizeFirstLetter(
    format(lastDay, "LLL", { locale: hu })
  );

  const firstDayDate = format(firstDay, "dd", { locale: hu });
  const lastDayDate = format(lastDay, "dd", { locale: hu });

  return firstDayMonth === lastDayMonth
    ? `${firstDayMonth} ${firstDayDate} - ${lastDayDate}`
    : `${firstDayMonth} ${firstDayDate} - ${lastDayMonth} ${lastDayDate}`;
};

type DateSelectorProps = {
  days: string[];
  onNextPress: () => void;
  onPrevPress: () => void;
};

export const DateRangeSelector: FC<DateSelectorProps> = ({
  onNextPress,
  onPrevPress,
  days,
}) => {
  const firstDay = days[0];
  const today = new Date().toISOString().split("T")[0];
  const prevDisabled = firstDay === today;

  return (
    <DateSelector
      className="px-1.5 pb-1.5"
      onNextPress={onNextPress}
      onPrevPress={onPrevPress}
      prevDisabled={prevDisabled}
      text={getLabel(days)}
    />
  );
};

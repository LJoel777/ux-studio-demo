import { Calendar } from "@components/molecules";
import { ComponentProps, FC, memo, useMemo } from "react";
import { DateRangeSelector } from "./DateRangeSelector";
import { Header } from "./Header";
import { CalendarSlots } from "./CalendarSlots";

type FreeSlotsCalendarProps = {
  days: string[];
  timeRange: {
    start: string;
    end: string;
  };
  freeSlots?: Record<string, { slots: { start: string; end: string }[] }>;
  onNextPress: () => void;
  onPrevPress: () => void;
  className?: ComponentProps<"div">["className"];
};

const getSlots = (timeRange: { start: string; end: string }) => {
  const [startHour, startMinute] = timeRange.start.split(":");
  const [endHour, endMinute] = timeRange.end.split(":");

  const startInMinutes = Number(startHour) * 60 + Number(startMinute);
  const endInMinutes = Number(endHour) * 60 + Number(endMinute);
  const slotsCount = (endInMinutes - startInMinutes) / 30 + 1;

  return Array.from({ length: slotsCount }, (_, index) => {
    const slotInMinutes = startInMinutes + index * 30;
    const [slotHour, slotMinute] = [
      Math.floor(slotInMinutes / 60),
      slotInMinutes % 60,
    ];

    return `${slotHour}:${slotMinute.toString().padStart(2, "0")}`;
  });
};

type ColumnsProps = {
  days: string[];
  freeSlots?: Record<string, { slots: { start: string; end: string }[] }>;
  slots: string[];
};

const Columns = memo<ColumnsProps>(({ days, freeSlots, slots }) => (
  <>
    {days.map((date, index) => (
      <Calendar.Column key={date}>
        <Header date={date} isFirstItem={index === 0} />
        <CalendarSlots date={date} freeSlots={freeSlots} slots={slots} />
      </Calendar.Column>
    ))}
  </>
));

export const FreeSlotsCalendar: FC<FreeSlotsCalendarProps> = ({
  days,
  timeRange,
  freeSlots,
  onNextPress,
  onPrevPress,
  className,
  ...props
}) => {
  const slots = useMemo(() => getSlots(timeRange), [timeRange]);

  return (
    <Calendar.Container className={className} {...props}>
      <DateRangeSelector
        days={days}
        onNextPress={onNextPress}
        onPrevPress={onPrevPress}
      />
      <Calendar.Content>
        <Columns days={days} slots={slots} freeSlots={freeSlots} />
      </Calendar.Content>
    </Calendar.Container>
  );
};

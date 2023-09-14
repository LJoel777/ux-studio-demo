import { FC, memo, useMemo } from "react";
import { Calendar } from "@components/molecules";
import { Text } from "@components/atoms";

type Slot = {
  start: string;
  end: string;
};

type CalendarSlotProps = {
  index: number;
  slot: string;
  date: string;
  providerSlots: Slot[];
};

const isInPast = (slot: string, date: string) => {
  const currentDate = new Date(date);
  const [hour, minute] = slot.split(":");
  currentDate.setHours(Number(hour), Number(minute), 0, 0);

  return currentDate <= new Date();
};

const isAvailable = (slot: string, providerSlots: Slot[]) => {
  const slotStart = slot.split(":").join("");

  return providerSlots?.some((slot) => slot.start === slotStart);
};

const CalendarSlot: FC<CalendarSlotProps> = memo(
  ({ date, slot, providerSlots }) => {
    const isSlotAvailable = useMemo(
      () => isAvailable(slot, providerSlots),
      [slot, providerSlots]
    );
    const isSlotInPast = useMemo(() => isInPast(slot, date), [slot, date]);

    const textColor = isSlotInPast ? "text-grey-300" : "text-black";
    const fontWeight = isSlotAvailable ? "bold" : "medium";
    const slotColor = isSlotInPast
      ? "bg-grey-600"
      : isSlotAvailable
      ? "bg-green-100"
      : "bg-magenta-300";

    return (
      <Calendar.Slot className={slotColor}>
        <Text type="h6" fontWeight={fontWeight} className={textColor}>
          {slot}
        </Text>
      </Calendar.Slot>
    );
  }
);

type CalendarSlotsProps = {
  date: string;
  slots: string[];
  freeSlots?: Record<string, { slots: Slot[] }>;
};

export const CalendarSlots: FC<CalendarSlotsProps> = ({
  date,
  slots,
  freeSlots,
}) => (
  <>
    {slots.map((slot, index) => (
      <CalendarSlot
        key={slot}
        index={index}
        slot={slot}
        date={date}
        providerSlots={(freeSlots && freeSlots[date]?.slots) || []}
      />
    ))}
  </>
);

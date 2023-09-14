import { useEffect, useMemo, useState } from "react";
import { NextPage } from "next";
import Error from "next/error";
import { FreeSlotsCalendar } from "@components/organisms";
import { useFreeSlots } from "@hooks/useFreeSlots";
import { Loader, Text } from "@components/atoms";

const getDateStrings = (dates: Date[]): string[] => {
  return dates?.map((date) => date.toISOString().split("T")[0]);
};

const generateDates = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);

    return date;
  });
};

const Home: NextPage = () => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const { isLoading, freeSlots, error } = useFreeSlots();

  useEffect(() => {
    const dates = generateDates(7);

    setSelectedDates(dates);
  }, []);

  const selectedDateStrings = useMemo(
    () => getDateStrings(selectedDates),
    [selectedDates]
  );

  const handleNextDatePress = () => {
    const lastDate = selectedDates[selectedDates.length - 1];
    const nextDates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(lastDate);
      date.setDate(date.getDate() + i + 1);

      return date;
    });

    setSelectedDates(nextDates);
  };

  const handlePreviousDatePress = () => {
    if (selectedDates[0].toDateString() === new Date().toDateString()) {
      return;
    }

    const firstDate = selectedDates[0];
    const prevDates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(firstDate);
      date.setDate(date.getDate() - 7 + i);

      return date;
    });

    setSelectedDates(prevDates);
  };

  if (error) {
    return (
      <Error
        statusCode={500}
        title="Valami hiba történt. Kérlek próbáld újra később."
        withDarkMode={false}
      />
    );
  }

  if (isLoading || !selectedDateStrings.length) {
    return <Loader />;
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-magenta-100">
      <FreeSlotsCalendar
        className="px-1.5 pb-1.5 mt-8"
        days={selectedDateStrings}
        freeSlots={freeSlots}
        onNextPress={handleNextDatePress}
        onPrevPress={handlePreviousDatePress}
        timeRange={{
          start: "08:00",
          end: "21:00",
        }}
      />
    </main>
  );
};

export default Home;

import { use, useEffect, useState } from "react";

type FreeSlots = Record<string, { slots: { start: string; end: string }[] }>;

const mockFreeSlots: FreeSlots = {
  [new Date().toISOString().split("T")[0]]: {
    slots: [
      {
        start: "1100",
        end: "1130",
      },
      {
        start: "1130",
        end: "1200",
      },
      {
        start: "1200",
        end: "1230",
      },
      {
        start: "1230",
        end: "1300",
      },
      {
        start: "1300",
        end: "1330",
      },
    ],
  },
  [new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0]]: {
    slots: [
      {
        start: "1100",
        end: "1130",
      },
      {
        start: "1130",
        end: "1200",
      },
      {
        start: "1200",
        end: "1230",
      },
      {
        start: "1230",
        end: "1300",
      },
      {
        start: "1300",
        end: "1330",
      },
    ],
  },
  [new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0]]: {
    slots: [
      {
        start: "2000",
        end: "2030",
      },
      {
        start: "2030",
        end: "2100",
      },
      {
        start: "2100",
        end: "2130",
      },
      {
        start: "2130",
        end: "2200",
      },
      {
        start: "2200",
        end: "2230",
      },
    ],
  },
  [new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0]]: {
    slots: [
      {
        start: "2000",
        end: "2030",
      },
      {
        start: "2030",
        end: "2100",
      },
      {
        start: "2100",
        end: "2130",
      },
      {
        start: "2130",
        end: "2200",
      },
      {
        start: "2200",
        end: "2230",
      },
    ],
  },
  [new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0]]: {
    slots: [
      {
        start: "800",
        end: "830",
      },
      {
        start: "830",
        end: "900",
      },
      {
        start: "900",
        end: "930",
      },
      {
        start: "2000",
        end: "2030",
      },
      {
        start: "2030",
        end: "2100",
      },
      {
        start: "2100",
        end: "2130",
      },
      {
        start: "2130",
        end: "2200",
      },
      {
        start: "2200",
        end: "2230",
      },
    ],
  },
};

export const useFreeSlots = () => {
  const [freeSlots, setFreeSlots] = useState<FreeSlots>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchFreeSlots = async () => {
    try {
      setIsLoading(true);

      const response = await new Promise<FreeSlots>((resolve) => {
        setTimeout(() => {
          resolve(mockFreeSlots);
        }, 2000);
      });

      setFreeSlots(response);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFreeSlots();
  }, []);

  return {
    freeSlots,
    isLoading,
    error,
    reload: fetchFreeSlots,
  };
};

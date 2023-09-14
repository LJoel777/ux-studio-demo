export type ColorRange = {
  100: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
};

export type Colors = {
  grey: ColorRange;
  magenta: ColorRange;
  blue: ColorRange;
  green: ColorRange;
  white: string;
  black: string;
  orange: string;
};

export const colors: Colors = {
  grey: {
    100: "rgba(110, 102, 126, 0.2)",
    200: "rgba(59, 52, 73, 0.2)",
    300: "#B2ADBB",
    400: "#6E667E",
    500: "#F7F7F9",
    600: "#E1DFE5",
  },
  magenta: {
    100: "#FFF4F3",
    200: "rgba(255, 149, 134, 0.2)",
    300: "#FFD5D1",
    400: "#FF9586",
    500: "#E58578",
    600: "#E23D3D",
  },
  blue: {
    100: "#F6FAFF",
    200: "rgba(133, 188, 255, 0.4)",
    300: "#85BCFF",
    400: "#2E73D8",
    500: "#2967C1",
  },
  green: {
    100: "#A3DA57",
    200: "#92C34E",
    300: "#2FAC56",
  },
  white: "#FFFFFF",
  black: "#3B3449",
  orange: "#FFAB37",
};

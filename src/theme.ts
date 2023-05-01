// my-theme.ts
export const dark = {
  primary: "#31B26E",
  second: "#3B6B7D",

  text: "white",
  background: "slate",
};

export const light = {
  primary: "#31B26E",
  second: "#3B6B7D",

  text: "slate",
  background: "white",
};

export const colorPalletes = {
  dark,
  light,
};

export const myTheme = {
  borderRadius: "5px",
  colors: dark,
  fonts: {
    family: {
      primary: "PhosphateSolid",
      secondary: "Rubik, sans-serif",
      new: "Varela Round",
    },
    weights: {
      100: 100,
      200: 200,
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      800: 800,
      900: 900,
    },
    sizes: {
      xxxxs: ".575rem",
      xxxs: ".625rem",
      xxs: ".75rem",
      xs: ".875rem",
      sm: "1rem",
      smm: "1.125rem",
      md: "1.25rem",
      lg: "1.5rem",
      xl: "2rem",
      xxl: "2.5rem",
      xxxl: "4.5rem",
      xxxxl: "5.5rem",
    },
  },
};

export type ThemeType = typeof myTheme;

const colors = {
  brand: {
    yellow: "#F2C94C",
    black: "#2B2D33",
    silver: "#F4F4F4",
    white: "#FFFFFF",
    yellowDark: "#fed500",
  },
  accent: {
    dark: "#004454",
    default: "#037080",
  },
  gray: {
    "02": "#FBFBFB",
    "04": "#F8F8F8",
    10: "#E9EAEA",
    20: "#D5D5D6",
    40: "#AAABAD",
    60: "#808185",
    70: "#404247",
  },
  interactive: {
    disabled: "#DDDEE2",
  },
};

const typography = {
  fontSize: {
    h1: "30px",
    h2: "20px",
    h3: "16px",
    h4: "14px",
    button: "14px",
    body: "14px",
    desktop: {
      h1: "60px",
      h2: "30px",
      h3: "20px",
      h4: "16px",
    },
  },
  fontFamily: {
    default: '"Work Sans", sans-serif',
  },
  fontWeight: {
    normal: "normal",
    semiBold: "600",
    bold: "700",
  },
};

const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

type Screen = keyof typeof breakpoints;

const mediaEntries = Object.entries(breakpoints).map(([key, width]) => [
  key,
  {
    up: `@media (min-width: ${width})`,
    down: `@media (max-width: calc(${width} - 0.02px))`,
  },
]);

type Media = {
  [key in Screen]: {
    up: string;
    down: string;
  };
};

const media = Object.fromEntries(mediaEntries) as Media;

type Theme = {
  colors: typeof colors;
  media: Media;
  typography: typeof typography;
};

const theme: Theme = {
  colors,
  media,
  typography,
};

export { media, colors, typography };
export type { Theme };
export default theme;

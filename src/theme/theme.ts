import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "375px",
  md: "600px",
  lg: "1112px",
  xl: "1300px",
  // '2xl': '96em',
};

export const theme = extendTheme({
  breakpoints,
  components: {
    Container: {
      baseStyle: {
        maxWidth: "1111px",
        padding: 0,
      },
      sizes: {
        lg: {
          maxWidth: "1400px",
        },
      },
    },
    FormLabel: {
      baseStyle: {
        fontWeight: "400",
        margin: 0,
      },
    },
    Text: {
      baseStyle: {
        lineHeight: "28px",
      },
    },
    Button: {
      variants: {
        primary: {
          p: "16px",
          fontSize: "18px",
          lineHeight: "24px",
          height: "56px",
          fontWeight: 700,
          bg: "#3CA318",
          color: "#FFFFFF",
          borderRadius: "8px",
          border: "none",
        },
        secondary: {
          fontSize: "18px",
          color: "#276CF8",
          bg: "none",
          p: "16px",
          lineHeight: "24px",
          height: "56px",
          fontWeight: 700,
        },
      },
    },
  },
  colors: {
    gray: {
      "900": "#181B23",
    },
    white: {
      "100": "#ffffff",
    },
    black: {
      "100": "#0C214D",
    },
    green: {
      "100": "#199017",
    },
    blue: {
      "100": "#276CF8",
    },
  },
  fonts: {
    heading: "Circular Std",
    body: "Circular Std",
  },
  styles: {
    global: {
      body: {
        bg: "#FFFFFF",
        color: "#0C214D",
      },
    },
  },
});

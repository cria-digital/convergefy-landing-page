import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    FormLabel: {
      baseStyle: {
        fontWeight: "400",
        margin: 0,
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
          color: "#0C214D",
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
        bg: "#F5F5F5",
        color: "#0C214D",
      },
    },
  },
});

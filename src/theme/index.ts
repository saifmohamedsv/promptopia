import { extendTheme } from "@chakra-ui/react";

export function createTheme() {
  return extendTheme({
    config: {
      initialColorMode: "light",
      useSystemColorMode: false,
    },
    colors: {
      brand: {
        50: "#E0F7FF",
        100: "#B8EBFF",
        200: "#8CDFFF",
        300: "#60D3FF",
        400: "#34C7FF",
        500: "#08BBFF",
        600: "#0095CC",
        700: "#007099",
        800: "#004C66",
        900: "#002733",
      },
      accent: {
        50: "#FFE0FB",
        100: "#FFB8F5",
        200: "#FF8CEF",
        300: "#FF60E9",
        400: "#FF34E3",
        500: "#FF08DD",
        600: "#CC00B1",
        700: "#990085",
        800: "#660059",
        900: "#33002C",
      },
      neutral: {
        50: "#F0F4F8",
        100: "#D9E2EC",
        200: "#BCCCDC",
        300: "#9FB3C8",
        400: "#829AB1",
        500: "#627D98",
        600: "#486581",
        700: "#334E68",
        800: "#243B53",
        900: "#102A43",
      },
    },
    fonts: {
      heading: "'Poppins', sans-serif",
      body: "'Inter', sans-serif",
    },
    styles: {
      global: {
        body: {
          bg: "linear-gradient(120deg, neutral.50 0%, white 100%)",
          color: "neutral.800",
          minHeight: "100vh",
        },
      },
    },
    components: {
      Button: {
        baseStyle: {
          borderRadius: "full",
          fontWeight: "bold",
          _hover: {
            transform: "translateY(-2px)",
            boxShadow: "lg",
          },
        },
        variants: {
          solid: {
            bg: "brand.500",
            color: "white",
            _hover: {
              bg: "brand.600",
            },
          },
          outline: {
            borderColor: "brand.500",
            color: "brand.500",
            _hover: {
              bg: "brand.50",
            },
          },
          ghost: {
            color: "brand.500",
            _hover: {
              bg: "brand.50",
            },
          },
        },
      },
      Input: {
        baseStyle: {
          field: {
            borderRadius: "full",
          },
        },
      },
      Textarea: {
        baseStyle: {
          borderRadius: "xl",
        },
      },
    },
  });
}

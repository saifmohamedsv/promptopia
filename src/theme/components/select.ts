import { defineStyleConfig } from "@chakra-ui/react";
import { spacing } from "../spacing";
import { shadow } from "../shadow";
import { borders } from "../borders";

export const Select = defineStyleConfig({
  baseStyle: {
    field: {
      fontWeight: "medium",
      fontSize: 14,
      borderRadius: borders.radii.xs,
      shadow: shadow.shadows["card-base"],
      border: borders.borders[2],
      borderColor: "transparent",
    },
  },
  variants: {
    primary: {
      field: {
        bg: "white",
        color: "gray.500",
        _focus: {
          borderColor: "primary.100",
        },
        _invalid: {
          borderColor: "red",
          _placeholder: {
            color: "red.200",
          },
        },
      },
    },
  },
  defaultProps: {
    variant: "primary",
  },
});

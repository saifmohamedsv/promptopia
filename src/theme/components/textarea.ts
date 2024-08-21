import { defineStyleConfig } from "@chakra-ui/react";
import { spacing } from "../spacing";
import { shadow } from "../shadow";
import { borders } from "../borders";

export const Textarea = defineStyleConfig({
  baseStyle: {
    fontWeight: "medium",
    fontSize: 14,
    borderRadius: borders.radii.base,
    shadow: shadow.shadows["card-base"],
    padding: spacing.space["3"],
  },
  variants: {
    primary: {
      bg: "white",
      color: "gray.500",
      _focus: {
        border: borders.borders[2],
        borderColor: "primary.100",
      },
      _invalid: {
        border: borders.borders[2],
        borderColor: "red",
        _placeholder: {
          color: "red.500",
        },
      },
    },
  },
  defaultProps: {
    variant: "primary",
  },
});

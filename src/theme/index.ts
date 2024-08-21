import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { spacing } from "./spacing";
import { components } from "./components";
import { typography } from "./typography";
import { borders } from "./borders";
import { shadow } from "./shadow";
import { breakpoints } from "./breakpoints";

export function createTheme() {
  return extendTheme({
    ...breakpoints,
    ...colors,
    ...spacing,
    ...borders,
    ...typography,
    ...shadow,
    components,
  });
}

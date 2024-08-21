import { defineStyleConfig } from '@chakra-ui/react';
import { Button } from './button';

export const Link = defineStyleConfig({
  variants: {
    'btn-primary': {
      ...Button.baseStyle,
      ...(Button.variants?.primary || {})
    },
    'btn-outline-primary': {
      ...Button.baseStyle,
      ...(Button.variants?.['outline-primary'] || {})
    },
    'btn-orange': {
      ...Button.baseStyle,
      ...(Button.variants?.orange || {})
    }
  },
  sizes: {
    ...Button.sizes
  },
  defaultProps: {}
});

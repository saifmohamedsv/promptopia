import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle({
  w: '100%',
  mx: 'auto',
  maxW: 'container.xl',
  px: {
    base: 6,
    md: 12
  }
});

export const Container = defineStyleConfig({
  baseStyle
});

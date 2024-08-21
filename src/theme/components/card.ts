import { defineStyleConfig } from '@chakra-ui/react';

export const Card = defineStyleConfig({
  baseStyle: {
    container: {
      borderRadius: 'base',
      boxShadow: 'card-base'
    },
    body: {
      px: '6',
      py: '6'
    }
  },
  sizes: {}
});

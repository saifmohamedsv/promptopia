import { defineStyleConfig } from '@chakra-ui/react';
import { spacing } from '../spacing';

export const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'medium',
    borderRadius: 'full',
    whiteSpace: 'nowrap',
    textWrap: 'nowrap',
    textAlign: 'center'
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 8,
      py: 5
    },
    md: {
      fontSize: 'md',
      px: 10,
      py: 3
    },
    lg: {
      fontSize: 'lg',
      fontWeight: 'semibold',
      px: 14,
      py: 6
    },
    xl: {
      fontSize: 'xl',
      fontWeight: 'semibold',
      px: 20,
      py: 6
    }
  },
  variants: {
    primary: {
      bg: 'primary.900',
      color: 'white',
      _hover: {
        bg: 'rgb(var(--primary-rgb) / 0.9)',
        _disabled: {
          bg: 'rgb(var(--primary-rgb) / 0.9)'
        }
      }
    },
    'outline-primary': {
      bg: 'white',
      borderColor: 'primary.900',
      borderWidth: '1px',
      borderStyle: 'solid',
      color: 'primary.900',
      _hover: {
        bg: 'white',
        color: 'rgb(var(--primary-rgb) / 0.9)',
        _disabled: {
          bg: 'rgb(var(--primary-rgb) / 0.9)'
        }
      }
    },
    orange: {
      bg: 'orange.900',
      color: 'white',
      _hover: {
        bg: 'rgb(var(--orange-rgb) / 0.9)',
        _disabled: {
          bg: 'rgb(var(--orange-rgb) / 0.9)'
        }
      }
    },
    link: {
      bg: 'transparent',
      color: 'primary.900',
      borderRadius: 'none',
      _hover: {
        color: 'rgb(var(--primary-rgb) / 0.8)',
        textUnderlineOffset: spacing.space['1']
      }
    }
  },
  defaultProps: {
    size: 'md',
    variant: 'primary'
  }
});

declare module '@splidejs/react-splide' {
  import type { ComponentType, ReactNode } from 'react';

  interface SplideProps {
    options?: Record<string, unknown>;
    'aria-label'?: string;
    className?: string;
    children?: ReactNode;
  }

  interface SplideSlideProps {
    className?: string;
    children?: ReactNode;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
}

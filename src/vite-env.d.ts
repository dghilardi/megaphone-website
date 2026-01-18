/// <reference types="vite/client" />

declare module '*.mdx' {
  import type { ComponentProps, FunctionComponent } from 'react';
  const MDXComponent: FunctionComponent<ComponentProps<'div'>>;
  export default MDXComponent;
}

import React from 'react';

export type AsProp = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};

export type HtmlPropsWithAs<T> = React.HTMLProps<T> & AsProp;

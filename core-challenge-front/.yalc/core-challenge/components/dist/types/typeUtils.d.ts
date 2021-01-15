import React from 'react';
export declare type AsProp = {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};
export declare type HtmlPropsWithAs<T> = React.HTMLProps<T> & AsProp;

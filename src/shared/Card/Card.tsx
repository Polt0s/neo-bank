import React from 'react';
import cn from 'classnames';

import styles from './Card.module.css';

interface ICard {
    width?: string;
    height?: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
    id?: string;
    className?: string;
    background?: TBackground;
}

export const Card = React.forwardRef(({
    width,
    height,
    children,
    id,
    background,
    style,
    className,
    ...rest
}: ICard, ref: React.ForwardedRef<HTMLDivElement>) => {
    const configBackground = {
        default: '',
        gray: 'Card__background-gray',
        brown: 'Card__background-brown',
        lightGray: 'Card__background-lightGray',
        ultramarine: 'Card__background-ultramarine'
    };

    return (
        <div
            id={id}
            className={cn(
                styles['Card-container'],
                background && styles[configBackground[background]],
                className,
            )}
            style={{ width: width, height: height, ...style }}
            ref={ref}
            {...rest}
        >
            {children}
        </div>
    );
});

type TBackground = 'default' | 'gray' | 'brown' | 'lightGray' | 'ultramarine';

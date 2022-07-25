import React from 'react';
import cn from 'classnames';

import styles from './Card.module.css';

interface ICard {
    width?: string;
    height?: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    background?: 'gray' | 'brown';
}

export const Card = ({
    width,
    height,
    children,
    className,
    id,
    background,
    style
}: ICard) => {
    const configBackground = {
        gray: 'Card__background-gray',
        brown: 'Card__background-brown'
    };

    return (
        <div
            id={id}
            className={cn(
                styles['Card-container'],
                background && styles[configBackground[background]],
                className
            )}
            style={{ width: width, height: height, ...style }}
        >
            {children}
        </div>
    );
};

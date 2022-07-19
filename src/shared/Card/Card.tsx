import React from 'react';
import cn from 'classnames';

import styles from './Card.module.css';

interface ICard {
    width?: string;
    height?: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export const Card = ({
    width,
    height,
    children,
    className,
    style
}: ICard) => {
    return (
        <div
            className={cn(styles['Card-container'], className)}
            style={{ width: width, height: height, ...style }}
        >
            {children}
        </div>
    );
};

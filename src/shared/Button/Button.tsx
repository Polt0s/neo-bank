import React from 'react';
import cn from 'classnames';

import type { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.css';

interface IButton extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
    colorText: 'white' | 'black' | 'blue';
    background: 'blue' | 'red' | 'grey' | 'green' | 'white' | 'red';
    isLoading: boolean;
    width: string;
    height: string;
    disabled: boolean;
}

export const Button = React.memo(({
    colorText,
    background,
    className,
    width,
    height,
    disabled,
    ...rest
}: Partial<IButton>) => {
    return (
        <button
            type="button"
            className={cn(
                styles['Button'],
                disabled ? styles['Background-disabled'] : null,
                styles[`Background-${background}`],
                styles[`Color-${colorText}`],
                className
            )}
            style={{ width: width, height: height, ...rest.style }}
            disabled={disabled}
            {...rest}
        >
            {rest.children}
        </button>
    );
});

import type { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Button.module.css';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    colorText?: 'white' | 'black' | 'blue';
    background?: 'blue' | 'red' | 'grey' | 'green' | 'white';
    isLoading?: boolean;
}

export const Button = ({ colorText, background, className, ...rest }: IButton) => {
    return (
        <button
            type="button"
            className={cn(
                styles['Button'],
                styles[`Background-${background}`],
                styles[`Color-${colorText}`],
                className
            )}
            {...rest}
        >
            {rest.children}
        </button>
    );
};

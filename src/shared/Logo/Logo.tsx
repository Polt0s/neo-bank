import React from 'react';

import styles from './Logo.module.css';

interface ILogo {
    onClick: () => void;
}

export const Logo = ({ onClick }: ILogo) => {
    return (
        <h2 className={styles['Logo']} onClick={onClick}>
            CC
        </h2>
    );
};

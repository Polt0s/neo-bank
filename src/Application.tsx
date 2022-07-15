import { Header } from 'components';
import React from 'react';
import { Router } from 'Router';

import styles from './Application.module.css';

export const Application = () => {
    return (
        <div className={styles.Application}>
            <Header />
            <Router />
            {/* footer */}
        </div>
    );
};

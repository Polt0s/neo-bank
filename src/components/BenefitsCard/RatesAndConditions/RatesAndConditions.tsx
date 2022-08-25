import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import { ThemeContext } from 'context';
import { uniqueId } from 'utils';

import styles from './RatesAndConditions.module.css';

interface IRatesAndConditions {
    items: TDataRatesAndConditions[];
}

export const RatesAndConditions = ({ items }: IRatesAndConditions) => {
    const { stateTheme } = React.useContext(ThemeContext);

    return (
        <Box padding="2rem 0">
            <table className={styles['Table']}>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={uniqueId()} className={index !== 0 ? styles['Table__tr'] : ''}>
                            <td className={styles['Table__td']}>
                                <Text color={stateTheme.color}>{item.header}</Text>
                            </td>
                            <td>
                                <Text color={stateTheme.secondaryColor} className={styles['Table__td-text']}>
                                    {item.description}
                                </Text>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Box>
    );
};

export type TDataRatesAndConditions = {
    header: string;
    description: string;
}

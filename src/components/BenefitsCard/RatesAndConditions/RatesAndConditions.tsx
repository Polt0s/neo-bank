import { Box, Text } from '@chakra-ui/react';

import styles from './RatesAndConditions.module.css';

interface IRatesAndConditions {
    items: TDataRatesAndConditions[];
}

export const RatesAndConditions = ({ items }: IRatesAndConditions) => (
    <Box padding="2rem 0">
        <table className={styles['Table']}>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index} className={index !== 0 ? styles['Table__tr'] : ''}>
                        <td style={{ padding: '24px 32px 25px 0px' }}>
                            <Text>{item.header}</Text>
                        </td>
                        <td>
                            <Text className={styles['Table__rd-text']}>{item.description}</Text>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Box>
);

export type TDataRatesAndConditions = {
    header: string;
    description: string;
}

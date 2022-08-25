import React from 'react';
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Heading
} from '@chakra-ui/react';

import { uniqueId } from 'utils';
import { ThemeContext } from 'context';

interface IFAQCard {
    items: TDataFAQCard[];
}

export const FAQCard = ({ items }: IFAQCard) => {
    const { stateTheme } = React.useContext(ThemeContext);

    return (
        <Box padding="2rem 0">
            {items.map(({ titleQuestion, list }, index) => (
                <React.Fragment key={uniqueId()}>
                    <Heading
                        size="lg"
                        margin={index !== 0 ? '2rem 0' : '0 0 2rem 0'}
                        color={stateTheme.color}
                    >
                        {titleQuestion}
                    </Heading>

                    <Accordion
                        allowToggle
                        borderLeft="0.5px solid #e2e8f0"
                        borderRight="0.5px solid #e2e8f0"
                    >
                        {list.map((item, indexList) => (
                            <AccordionItem key={indexList}>
                                <Heading size="md" color={stateTheme.secondaryColor}>
                                    <AccordionButton padding="2rem 1.5rem" border="none">
                                        <Box flex="1" textAlign="left">
                                            {item.header}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </Heading>

                                <AccordionPanel padding="1.5rem 1.5rem" color={stateTheme.secondaryColor}>
                                    {item.description}
                                </AccordionPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </React.Fragment>
            ))}
        </Box>
    );
};

export type TDataFAQCard = {
    titleQuestion: string;
    list: {
        header: string;
        description: string;
    }[]
}

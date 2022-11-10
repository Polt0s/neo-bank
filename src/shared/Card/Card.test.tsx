import {
    render,
    screen
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Card } from './Card';

describe('Card', () => {
    it('Check component card on the default props', () => {
        render(
            <Card
                data-testid="test-card"
                background="platinum"
                width="10rem"
                height="10rem"
            >
                Test card
            </Card>
        );

        const card = screen.getByTestId('test-card');

        expect(card).toHaveTextContent('Test card');
        expect(card).toHaveClass('Card__background-platinum');
        expect(card).toHaveStyle({
            height: '10rem',
            width: '10rem'
        });
    });

    it('Check hover', () => {
        render(
            <Card data-testid="test-card" hover>test hover</Card>
        );

        const card = screen.getByTestId('test-card');

        userEvent.hover(card);
        expect(card).toHaveClass('Card-container_hover');
    });
});

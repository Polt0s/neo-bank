import {
    render,
    screen,
    fireEvent
} from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
    const onClick = jest.fn();

    it('Check Button is disable', () => {
        render(
            <Button disabled={true}>Send</Button>
        );

        const button = screen.getByRole('button');

        expect(button).toBeDisabled();
    });

    it('Check color and background props', () => {
        render(
            <Button
                background="blue"
                colorText="white"
            >
                Online bank
            </Button>
        );

        const button = screen.getByRole('button');

        expect(button).toHaveClass('Background-blue');
        expect(button).toHaveClass('Color-white');
    });

    it('Check width and height props', () => {
        render(
            <Button
                width="10rem"
                height="5rem"
            >
                Continue
            </Button>
        );

        const button = screen.getByRole('button');

        expect(button).toHaveStyle('width: 10rem');
        expect(button).toHaveStyle('height: 5rem');
    });

    it('Check work onClick props', () => {
        render(<Button onClick={onClick}>click me</Button>);

        fireEvent.click(screen.getByText(/click me/i));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});

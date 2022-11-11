import {
    render,
    screen,
    fireEvent
} from '@testing-library/react';

import { FormInput } from './FormInput';

describe('FormInput', () => {
    const handleChange = jest.fn();
    it('Check default props', () => {
        render(
            <FormInput
                data-testid="test-input"
                isFocus
                conditionForShowError
                textError="Invalid value"
                placeholder="name"
            />
        );

        const input = screen.getByTestId('test-input');
        expect(input).toHaveAttribute('placeholder');

        input.focus();
        expect(screen.getByText('Invalid value')).toBeTruthy();
    });

    it('Check handleChange', () => {
        render(
            <FormInput
                data-testid="test-input"
                onChange={handleChange}
                value=""
                placeholder="surname"
            />
        );

        const input = screen.getByTestId('test-input');
        fireEvent.change(input, { target: { value: '123' } });

        expect(handleChange).toBeCalledTimes(1);
    });
});

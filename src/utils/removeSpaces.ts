import { withoutSpaces } from './regExp';

export const removeSpaces = (str: string): string => str.replace(withoutSpaces, '');

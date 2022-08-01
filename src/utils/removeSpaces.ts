import { withoutSpaces } from './regExp';

export const removeSpaces = (str: string) => str.replace(withoutSpaces, '');

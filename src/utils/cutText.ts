export const cutText = (str: string, to: number): string => {
    if (str === null) {
        return str;
    }

    return str.slice(0, to);
};

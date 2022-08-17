export const checkAnchorTag = (str: string): boolean => {
    if (str === null) {
        return str;
    }
    return str.split(' ').includes('<a');
};

export const formattedSum = (num: number): string => {
    const fixed = num.toFixed(0);
    return Number(fixed).toLocaleString('ru');
};

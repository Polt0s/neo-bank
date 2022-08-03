export const formattedSum = (num: number) => {
    const fixed = num.toFixed(0);
    return Number(fixed).toLocaleString('ru');
};

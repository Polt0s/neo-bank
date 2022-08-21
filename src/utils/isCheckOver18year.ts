export const isCheckOver18year = (dateValue: string) => {
    const date = new Date(dateValue);
    const date18YrsAgo = new Date();

    date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 18); // первое число месяц потом день - нужно сделать наоборот

    return date <= date18YrsAgo;
};

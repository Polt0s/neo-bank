import {
    CalendarIcon,
    CardIcon,
    BagShopIcon,
    CashIcon,
    ClockIcon
} from 'shared';

const tabsBenefitsCard = ['About card', 'Rates and conditions', 'Cashback', 'FAQ'];

const dataParamsCard = [
    {
        title: 'Up to 160 days',
        description: 'No percent',
        tooltip: 'When repaying the full debt up to 160 days.'
    },
    {
        title: 'Up to 600 000 ₽',
        description: 'Credit limit',
        tooltip: 'Over the limit will accrue percent'
    },
    {
        title: '0 ₽',
        description: 'Card service is free',
        tooltip: 'Promotion valid until December 31, 2022.',
    }
];

const dataAboutCredit = [
    {
        Icon: CashIcon,
        title: 'Up to 50 000 ₽',
        description: 'cash and transfers without commission and percent',
    },
    {
        Icon: CalendarIcon,
        title: 'Up to 160 days',
        description: 'Without percent on the loan',
    },
    {
        Icon: ClockIcon,
        title: 'Free delivery',
        description: 'We will deliver your card by courier at a convenient place and time for you',
    },
    {
        Icon: BagShopIcon,
        title: 'Up to 12 months',
        description: 'No percent. For equipment, clothes and other purchases in installments',
    },
    {
        Icon: CardIcon,
        title: 'Convenient deposit and withdrawal',
        description: 'At any ATM. Top up your credit card for free with cash or transfer from other cards',
    },
];

const dataRatesAndConditions = [
    {
        header: 'Card currency',
        description: 'Rubles, dollars, euro',
    },
    {
        header: 'Interest free period',
        description: '0% up to 160 days',
    },
    {
        header: 'Payment system',
        description: 'Mastercard, Visa',
    },
    {
        header: 'Maximum credit limit on the card',
        description: '600 000 ₽',
    },
    {
        header: 'Replenishment and withdrawal',
        description: 'At any ATM. Top up your credit card for free with cash or transfer from other cards',
    },
    {
        header: 'Max cashback per month',
        description: '15 000 ₽'
    },
    {
        header: 'Transaction Alert',
        description: '60 ₽ — SMS or push notifications \n 0 ₽ — card statement, information about transactions in the online bank',
    },
];

const dataCashbackCard = [
    {
        description: 'For food delivery, cafes and restaurants',
        sum: '5%',
    },
    {
        description: 'In supermarkets with our subscription',
        sum: '5%',
    },
    {
        description: 'In clothing stores and children\'s goods',
        sum: '2%',
    },
    {
        description: 'Other purchases and payment of services and fines',
        sum: '1%',
    },
    {
        description: 'Shopping in online stores',
        sum: 'up to 3%',
    },
    {
        description: 'Purchases from our partners',
        sum: '30%',
    },
];

const dataFAQCard = [
    {
        titleQuestion: 'Issuing and receiving a card',
        list: [
            {
                header: 'How to get a card?',
                description: 'We will deliver your card by courier free of charge.\
                Delivery in Moscow and St. Petersburg - 1-2 working days. For other regions of the Russian Federation - 2-5 working days.',
            },
            {
                header: 'What documents are needed and how old should one be to get a card?',
                description: 'Need a passport. You must be between 20 and 70 years old.',
            },
            {
                header: 'In what currency can I issue a card?',
                description: 'In rubles, dollars or euro',
            },
            {
                header: 'How much income do I need to get a credit card?',
                description: 'To obtain a credit card, you will need an income of at least 25,000 rubles per month after taxes.',
            },
            {
                header: 'How do I find out about the bank\'s decision on my application?',
                description: 'After registration, you will receive an e-mail with a decision on your application.'
            }
        ]
    },
    {
        titleQuestion: 'Using a credit card',
        list: [
            {
                header: 'What is an interest free credit card?',
                description: 'A credit card with a grace period is a bank card with an established credit\
                limit, designed for payment, reservation of goods and services, as well as for receiving cash, which\
                allows you to use credit funds free of charge for a certain period.'
            },
            {
                header: 'How to activate a credit card',
                description: 'You can activate your credit card and generate a PIN code immediately after receiving the\
                card at a bank branch using a PIN pad.',
            },
            {
                header: 'What is a settlement date?',
                description: 'The settlement date is the date from which you can pay off the debt for the reporting period.\
                The settlement date falls on the first calendar day following the last day of the reporting period.\
                The first settlement date is reported by the bank when transferring the issued credit card to the client,\
                and then in the monthly account statement.',
            },
            {
                header: 'What do I need to know about interest rates?',
                description: 'For each reporting period from the 7th day of the previous month to the 6th day of the current\
                month inclusive, a statement is generated for the credit card. The statement contains information on the\
                amount and timing of the minimum payment, as well as the total amount of debt as of the date of issue.',
            },
        ]
    }
];

const dataCardIconSteps = [
    {
        step: '1',
        description: 'Fill out an online application - you do not need to visit the bank',
    },
    {
        step: '2',
        description: 'Find out the bank\'s decision immediately after filling out the application',
    },
    {
        step: '3',
        description: 'The bank will deliver the card free of charge, wherever convenient, to your city',
    }
];

export {
    dataAboutCredit,
    dataParamsCard,
    tabsBenefitsCard,
    dataRatesAndConditions,
    dataCashbackCard,
    dataFAQCard,
    dataCardIconSteps
};

/* eslint-disable max-len */
import React from 'react';

import { IconHOC, iconsConfig } from './IconHOC';
import type { TColors } from './IconHOC';

export interface IIcons {
    color?: keyof TColors;
}
const Complete = ({ color }: IIcons) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 25 25" fill="none">
        <path
            d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z"
            fill="#2FAB73"
            stroke={iconsConfig.colors[color || 'default']}
        />
    </svg>
);

const Reject = ({ color }: IIcons) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd"
            clipRule="evenodd"
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 13.4142L8.70711 16.7071L7.29289 15.2929L10.5858 12L7.29289 8.70711L8.70711 7.29289L12 10.5858L15.2929 7.29289L16.7071 8.70711L13.4142 12L16.7071 15.2929L15.2929 16.7071L12 13.4142Z"
            fill={iconsConfig.colors[color || 'default']}
        />
    </svg>
);

const BagShop = ({ color }: IIcons) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <path d="M4.85795 9.84661C4.92534 8.97057 4.95903 8.53256 5.24658 8.26628C5.53413 8 5.97344 8 6.85206 8H17.1479C18.0266 8 18.4659 8 18.7534 8.26628C19.041 8.53256 19.0747 8.97057 19.142 9.84661L19.3864 13.0236C19.6495 16.4434 19.781 18.1534 18.924 19.3409C18.7336 19.6047 18.5117 19.8443 18.2632 20.0544C17.1449 21 15.43 21 12 21C8.57003 21 6.85505 21 5.73678 20.0544C5.48832 19.8443 5.26641 19.6047 5.07599 19.3409C4.21897 18.1534 4.35051 16.4434 4.61357 13.0236L4.85795 9.84661Z"
            fill="#2A4157"
            fillOpacity="0.24"
        />
        <path d="M8.5 8L8.5 6.5C8.5 4.567 10.067 3 12 3V3C13.933 3 15.5 4.567 15.5 6.5L15.5 8" stroke={iconsConfig.colors[color || 'default']} />
        <path d="M8 11.5C8 11.7761 8.22386 12 8.5 12C8.77614 12 9 11.7761 9 11.5H8ZM9 11.5V10H8V11.5H9Z" fill={iconsConfig.colors[color || 'default']} />
        <path d="M15 11.5C15 11.7761 15.2239 12 15.5 12C15.7761 12 16 11.7761 16 11.5H15ZM16 11.5V10H15V11.5H16Z" fill={iconsConfig.colors[color || 'default']} />
    </svg>
);

const Calendar = ({ color }: IIcons) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 4.43245C7 4.27684 7 4.19903 6.9491 4.15423C6.89819 4.10944 6.82244 4.11915 6.67094 4.13857C5.54965 4.28229 4.76806 4.57508 4.17157 5.17157C3 6.34315 3 8.22876 3 12C3 15.7712 3 17.6569 4.17157 18.8284C5.34315 20 7.22876 20 11 20H13C16.7712 20 18.6569 20 19.8284 18.8284C21 17.6569 21 15.7712 21 12C21 8.22876 21 6.34315 19.8284 5.17157C19.2319 4.57508 18.4504 4.28229 17.3291 4.13857C17.1776 4.11915 17.1018 4.10944 17.0509 4.15424C17 4.19903 17 4.27684 17 4.43245L17 6.5C17 7.32843 16.3284 8 15.5 8C14.6716 8 14 7.32843 14 6.5L14 4.30005C14 4.15898 14 4.08844 13.9561 4.04451C13.9123 4.00059 13.8418 4.0005 13.7009 4.00031C13.4748 4 13.2412 4 13 4H11C10.7588 4 10.5252 4 10.2991 4.00031C10.1582 4.0005 10.0877 4.00059 10.0439 4.04452C10 4.08844 10 4.15898 10 4.30005L10 6.5C10 7.32843 9.32843 8 8.50001 8C7.67158 8 7 7.32843 7 6.5L7 4.43245Z"
            fill="#2A4157"
            fillOpacity="0.24"
        />
        <path d="M8.5 2.5L8.5 6.5" stroke={iconsConfig.colors[color || 'default']} strokeLinecap="round" />
        <path d="M15.5 2.5L15.5 6.5" stroke={iconsConfig.colors[color || 'default']} strokeLinecap="round" />
        <circle cx="7.5" cy="10.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
        <circle cx="10.5" cy="10.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
        <circle cx="13.5" cy="10.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
        <circle cx="16.5" cy="10.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
        <circle cx="7.5" cy="13.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
        <circle cx="10.5" cy="13.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
        <circle cx="13.5" cy="13.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
        <circle cx="16.5" cy="13.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
        <circle cx="7.5" cy="16.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
        <circle cx="10.5" cy="16.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
        <circle cx="13.5" cy="16.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
        <circle cx="16.5" cy="16.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
    </svg>
);

const Card = ({ color }: IIcons) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <path d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10V14C21 15.8856 21 16.8284 20.4142 17.4142C19.8284 18 18.8856 18 17 18H7C5.11438 18 4.17157 18 3.58579 17.4142C3 16.8284 3 15.8856 3 14V10Z"
            fill="#2A4157"
            fillOpacity="0.24"
        />
        <circle cx="6" cy="15" r="1" fill={iconsConfig.colors[color || 'default']} />
        <rect x="3" y="9" width="18" height="2" fill={iconsConfig.colors[color || 'default']} />
    </svg>
);

const Cash = ({ color }: IIcons) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <path d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10V14C21 15.8856 21 16.8284 20.4142 17.4142C19.8284 18 18.8856 18 17 18H7C5.11438 18 4.17157 18 3.58579 17.4142C3 16.8284 3 15.8856 3 14V10Z"
            fill="#2A4157"
            fillOpacity="0.24"
        />
        <circle cx="12" cy="12" r="2" fill={iconsConfig.colors[color || 'default']} />
        <rect x="5" y="8" width="3" height="1" rx="0.5" fill={iconsConfig.colors[color || 'default']} />
        <rect x="16" y="15" width="3" height="1" rx="0.5" fill={iconsConfig.colors[color || 'default']} />
    </svg>
);

const Clock = ({ color }: IIcons) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" fill="#2A4157" fillOpacity="0.24" />
        <path d="M5 2.80385C4.08789 3.33046 3.33046 4.08788 2.80385 5" stroke={iconsConfig.colors[color || 'default']} strokeLinecap="round" />
        <path d="M19 2.80385C19.9121 3.33046 20.6695 4.08788 21.1962 5" stroke={iconsConfig.colors[color || 'default']} strokeLinecap="round" />
        <path d="M12 6.5V11.75C12 11.8881 12.1119 12 12.25 12H16.5" stroke={iconsConfig.colors[color || 'default']} strokeLinecap="round" />
    </svg>
);

const PDF = ({ color }: IIcons) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <path d="M5 5C5 3.89543 5.89543 3 7 3H11.75C11.8881 3 12 3.11193 12 3.25V8C12 9.10457 12.8954 10 14 10H18.75C18.8881 10 19 10.1119 19 10.25V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V5Z"
            fill="#2A4157"
            fillOpacity="0.24"
        />
        <path d="M13 8V3.60355C13 3.38083 13.2693 3.26929 13.4268 3.42678L18.5732 8.57322C18.7307 8.73071 18.6192 9 18.3964 9H14C13.4477 9 13 8.55228 13 8Z"
            fill={iconsConfig.colors[color || 'default']}
        />
        <path d="M8.5 13.5L14.5 13.5" stroke={iconsConfig.colors[color || 'default']} strokeLinecap="round" />
        <path d="M8.5 16.5L13.5 16.5" stroke={iconsConfig.colors[color || 'default']} strokeLinecap="round" />
    </svg>
);

const Bank = ({ color }: IIcons) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <path d="M2 22H22" stroke={iconsConfig.colors[color || 'default']} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 8L12 3L21 8" stroke={iconsConfig.colors[color || 'default']} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 11V19" stroke={iconsConfig.colors[color || 'default']} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 11V19" stroke={iconsConfig.colors[color || 'default']} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 11V19" stroke={iconsConfig.colors[color || 'default']} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 11V19" stroke={iconsConfig.colors[color || 'default']} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 11V19" stroke={iconsConfig.colors[color || 'default']} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 19H21" stroke={iconsConfig.colors[color || 'default']} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const SendLetter = ({ color }: IIcons) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 29 29" fill="none">
        <g clipPath="url(#clip0_4620_238)">
            <path
                d="M19.2408 6.80702L3.81908 14.3327C3.16937 14.6497 2.76135 15.2958 2.75416 16.0187C2.74703 16.7416 3.1422 17.3956 3.78548 17.7254L8.86596 20.3305L13.4386 15.1535C13.649 14.9152 14.0127 14.8927 14.251 15.1031C14.4892 15.3135 14.5118 15.6773 14.3013 15.9155L9.72873 21.0925L12.9413 25.8123C13.3481 26.41 14.0459 26.7214 14.7624 26.6249C15.4803 26.5283 16.07 26.0426 16.304 25.3599L21.8672 9.12674C22.1205 8.38766 21.9141 7.60725 21.3285 7.09003C20.7429 6.57282 19.943 6.46432 19.2408 6.80702Z"
                fill={iconsConfig.colors[color || 'default']}
            />
        </g>
        <defs>
            <clipPath id="clip0_4620_238">
                <rect width="19.6445" height="19.6445" fill="white" transform="translate(0.961914 15.3105) rotate(-48.5475)" />
            </clipPath>
        </defs>
    </svg>
);

const Email = ({ color }: IIcons) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <g clipPath="url(#clip0_4620_225)">
            <path d="M15.9089 12.123L23.9999 17.238V6.79199L15.9089 12.123Z" fill={iconsConfig.colors[color || 'default']} />
            <path d="M0 6.79199V17.238L8.091 12.123L0 6.79199Z" fill={iconsConfig.colors[color || 'default']} />
            <path d="M22.4999 3.75H1.49992C0.751422 3.75 0.157422 4.308 0.0449219 5.0265L11.9999 12.903L23.9549 5.0265C23.8424 4.308 23.2484 3.75 22.4999 3.75Z"
                fill={iconsConfig.colors[color || 'default']} />
            <path d="M14.5351 13.0288L12.4126 14.4268C12.2866 14.5093 12.1441 14.5498 12.0001 14.5498C11.8561 14.5498 11.7136 14.5093 11.5876 14.4268L9.4651 13.0273L0.0480957 18.9838C0.163596 19.6963 0.754596 20.2498 1.5001 20.2498H22.5001C23.2456 20.2498 23.8366 19.6963 23.9521 18.9838L14.5351 13.0288Z"
                fill={iconsConfig.colors[color || 'default']} />
        </g>
        <defs>
            <clipPath id="clip0_4620_225">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const Sun = ({ color }: IIcons) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke={iconsConfig.colors[color || 'default']} strokeWidth="2" />
        <path d="M12 5V3" stroke={iconsConfig.colors[color || 'default']} strokeWidth="2" strokeLinecap="round" />
        <path d="M12 21V19" stroke={iconsConfig.colors[color || 'default']} strokeWidth="2" strokeLinecap="round" />
        <path d="M16.9498 7.05026L18.364 5.63605" stroke={iconsConfig.colors[color || 'default']} strokeWidth="2" strokeLinecap="round" />
        <path d="M5.63608 18.364L7.05029 16.9498" stroke={iconsConfig.colors[color || 'default']} strokeWidth="2" strokeLinecap="round" />
        <path d="M19 12L21 12" stroke={iconsConfig.colors[color || 'default']} strokeWidth="2" strokeLinecap="round" />
        <path d="M3 12L5 12" stroke={iconsConfig.colors[color || 'default']} strokeWidth="2" strokeLinecap="round" />
        <path d="M16.9498 16.9497L18.364 18.364" stroke={iconsConfig.colors[color || 'default']} strokeWidth="2" strokeLinecap="round" />
        <path d="M5.63608 5.63602L7.05029 7.05023" stroke={iconsConfig.colors[color || 'default']} strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const Moon = ({ color }: IIcons) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <path d="M16.1637 18.5102L17.0356 18.0205L16.1637 18.5102ZM15.5781 19.9582L15.2918 19L15.5781 19.9582ZM15.4389 6.249L16.1341 6.9678L15.4389 6.249ZM16.1637 5.48976L17.0356 5.97952L16.1637 5.48976ZM15.5781 4.04183L15.2918 5L15.5781 4.04183ZM14 12C14 10.0246 14.817 8.24172 16.1341 6.9678L14.7437 5.5302C13.0531 7.16533 12 9.46056 12 12H14ZM16.1341 17.0322C14.817 15.7583 14 13.9754 14 12H12C12 14.5394 13.0531 16.8347 14.7437 18.4698L16.1341 17.0322ZM15 19C11.134 19 8 15.866 8 12H6C6 16.9706 10.0294 21 15 21V19ZM8 12C8 8.13401 11.134 5 15 5V3C10.0294 3 6 7.02944 6 12H8ZM14.7437 18.4698C14.9664 18.6852 15.1162 18.8303 15.2206 18.9377C15.2719 18.9905 15.3012 19.0229 15.3168 19.0415C15.3356 19.0638 15.3179 19.0463 15.2918 19L17.0356 18.0205C16.9274 17.828 16.7656 17.6578 16.6549 17.5438C16.5236 17.4088 16.3468 17.238 16.1341 17.0322L14.7437 18.4698ZM15 21C15.2361 21 15.5523 21.0095 15.8643 20.9163L15.2918 19C15.3199 18.9916 15.3307 18.994 15.2883 18.9964C15.2332 18.9996 15.1569 19 15 19V21ZM15.2918 19L15.8643 20.9163C17.0923 20.5495 17.6633 19.1379 17.0356 18.0205L15.2918 19ZM16.1341 6.9678C16.3468 6.76203 16.5236 6.59121 16.6549 6.45617C16.7656 6.34225 16.9274 6.17203 17.0356 5.97952L15.2918 5C15.3179 4.95369 15.3356 4.93623 15.3168 4.95852C15.3012 4.97707 15.2719 5.0095 15.2206 5.06226C15.1162 5.16969 14.9664 5.31477 14.7437 5.5302L16.1341 6.9678ZM15 5C15.1569 5 15.2332 5.00038 15.2883 5.00356C15.3307 5.00601 15.3199 5.00838 15.2918 5L15.8643 3.08366C15.5523 2.9905 15.2361 3 15 3V5ZM17.0356 5.97952C17.6633 4.86207 17.0923 3.45049 15.8643 3.08366L15.2918 5L17.0356 5.97952Z"
            fill={iconsConfig.colors[color || 'default']} />
    </svg>
);

const CompleteIcon = () => IconHOC({}, Complete);
const RejectIcon = () => IconHOC({ colors: 'redColor' }, Reject);
const BagShopIcon = () => IconHOC({ colors: 'grayColor', size: 40 }, BagShop);
const CalendarIcon = () => IconHOC({ colors: 'grayColor', size: 40 }, Calendar);
const CardIcon = () => IconHOC({ colors: 'grayColor', size: 40 }, Card);
const CashIcon = () => IconHOC({ colors: 'grayColor', size: 40 }, Cash);
const ClockIcon = () => IconHOC({ colors: 'grayColor', size: 40 }, Clock);
const PDFIcon = () => IconHOC({ colors: 'grayColor', size: 60 }, PDF);
const BankIcon = () => IconHOC({ colors: 'blackSecondColor', size: 120 }, Bank);
const SendLetterIcon = () => IconHOC({ colors: 'whiteColor', size: 40 }, SendLetter);
const EmailIcon = () => IconHOC({ colors: 'violetColor', size: 40 }, Email);
const SunIcon = () => IconHOC({ colors: 'blackColor' }, Sun);
const MoonIcon = () => IconHOC({ colors: 'blackColor' }, Moon);

export {
    CompleteIcon,
    RejectIcon,
    BagShopIcon,
    CalendarIcon,
    CardIcon,
    CashIcon,
    ClockIcon,
    PDFIcon,
    BankIcon,
    SendLetterIcon,
    EmailIcon,
    SunIcon,
    MoonIcon
};

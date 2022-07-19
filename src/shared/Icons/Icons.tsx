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

const CompleteIcon = () => IconHOC({}, Complete);
const RejectIcon = () => IconHOC({ colors: 'redColor' }, Reject);

export { CompleteIcon, RejectIcon };

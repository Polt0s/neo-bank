import React from 'react';
import cn from 'classnames';

import { IIcons } from './Icons';

import styles from './Icons.module.css';

interface IIconHOC {
    size: number;
    colors: keyof TColors;
    containerClassName: string;
    containerStyle: React.CSSProperties;
    cursor: boolean;
}

export const iconsConfig: TIconsConfig = {
    sizes: {
        width: 24,
        height: 24,
    },
    colors: {
        default: '',
        primaryColor: 'rgba(242, 151, 39, 1)',
        greenColor: '#2AA745',
        redColor: '#FF5631',
        blackColor: 'black',
        whiteColor: 'white',
        grayColor: '#222222',
        blackSecondColor: '#232121',
        violetColor: '#9092B0',
    }
};

export const IconHOC = ({
    size,
    colors,
    containerClassName,
    containerStyle,
    cursor,
}: Partial<IIconHOC>, Icon: ({ color }: IIcons) => JSX.Element) => {
    return (
        <div
            style={{
                width: size || iconsConfig.sizes.width,
                height: size || iconsConfig.sizes.height,
                flexShrink: 0, ...containerStyle
            }}
            className={cn(containerClassName, cursor ? styles['Icon-cursor'] : '')}
        >
            <Icon color={colors} />
        </div>
    );
};

type TIconsConfig = {
    sizes: TSizes,
    colors: TColors
}

type TSizes = {
    width: number,
    height: number
}

export type TColors = {
    default: string;
    primaryColor: string,
    greenColor: string,
    redColor: string;
    blackColor: string;
    whiteColor: string
    grayColor: string;
    blackSecondColor: string;
    violetColor: string;
}

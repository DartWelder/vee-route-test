import React from 'react';
import {
    Brightness5,
    FlashOn,
    LocalFlorist,
    Favorite
} from '@material-ui/icons';
import { ItemFlagsEnum } from '../constants';

export default function FlagIcon(props: IFlagIconProps) {
    const ComputedComponent = iconTypes[props.icon];
    return <ComputedComponent fontSize="small" />;
}

export interface IFlagIconProps {
    icon: ItemFlagsEnum
}

const iconTypes = {
    [ItemFlagsEnum.flower]: LocalFlorist,
    [ItemFlagsEnum.heart]: Favorite,
    [ItemFlagsEnum.sun]: Brightness5,
    [ItemFlagsEnum.flash]: FlashOn
}


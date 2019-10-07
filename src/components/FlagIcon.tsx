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
    return (
        <div className="icon" onClick={() => props.onClick(props.icon)} >
            <ComputedComponent color={props.disabled ? 'disabled' : 'primary'} fontSize="small" />
        </div>
    )
}

export interface IFlagIconProps {
    icon: ItemFlagsEnum,
    disabled: boolean,
    onClick: (flag: ItemFlagsEnum) => void
}

const iconTypes = {
    [ItemFlagsEnum.flower]: LocalFlorist,
    [ItemFlagsEnum.heart]: Favorite,
    [ItemFlagsEnum.sun]: Brightness5,
    [ItemFlagsEnum.flash]: FlashOn
}


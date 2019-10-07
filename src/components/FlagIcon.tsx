import React from 'react';
import {
    Brightness5,
    FlashOn,
    LocalFlorist,
    Favorite
} from '@material-ui/icons';
import { ItemFlagsEnum } from '../constants';

const iconTypes = {
    [ItemFlagsEnum.flower]: LocalFlorist,
    [ItemFlagsEnum.heart]: Favorite,
    [ItemFlagsEnum.sun]: Brightness5,
    [ItemFlagsEnum.flash]: FlashOn
}

export default function FlagIcon(props: IFlagIconProps) {
    const ComputedComponent = iconTypes[props.icon];
    const { onClick, disabled } = props;
    return (
        <div className="icon" onClick={() => onClick(props.icon)} >
            <ComputedComponent color={disabled ? 'disabled' : 'primary'} fontSize="small" />
        </div>
    )
}

export interface IFlagIconProps {
    icon: ItemFlagsEnum,
    disabled: boolean,
    onClick: (flag: ItemFlagsEnum) => void
}

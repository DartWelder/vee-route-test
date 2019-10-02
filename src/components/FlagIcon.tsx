import React, { Component } from 'react';
import {
    Brightness5,
    FlashOn,
    LocalFlorist,
    Favorite
} from '@material-ui/icons';
import { ItemFlagsEnum } from '../constants';

export default class FlagIcon extends Component<IFlagIconProps, IFlagIconState> {
    constructor(props: IFlagIconProps) {
        super(props);
        this.state = {
            icon: props.icon
        };
    }
    render() {
        let icon;
        switch (this.state.icon) {
            case 'flower':
                icon = <LocalFlorist/>;
                break;
            case 'heart':
                icon = <Favorite/>;
                break;
            case 'sun':
                icon = <Brightness5/>;
                break;
            case 'flash':
                icon = <FlashOn/>;
                break;
        }
        return icon;
    }
}

export interface IFlagIconState {
    icon: string
}

export interface IFlagIconProps {
    icon: ItemFlagsEnum
}


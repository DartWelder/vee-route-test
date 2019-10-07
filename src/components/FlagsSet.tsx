import React, { useState } from 'react'
import { ItemFlagsEnum } from '../constants'
import FlagIcon from './FlagIcon'
import { Items } from '../classes/Items.class';

function FlagsSet(props: IFlagsSetProps) {
    const [state, setState] = useState({
        filters: (() => {
            let flags = {} as any;
            Items.generateFlags(true).forEach((f) => {
                flags[f.toString()] = true;
            })
            return flags;
        })()
    });

    const onIconClick = (flag: ItemFlagsEnum) => {
        setState({
            ...state,
            filters: {
                ...state.filters,
                [flag.toString()]: !state.filters[flag] 
            }
        });
    }
    return (
        <div>
            <div className="flags">
                {props.flags.map((flag: ItemFlagsEnum) => (
                    <FlagIcon disabled={!state.filters[flag]} onClick={onIconClick} icon={flag} />
                ))}
            </div>
        </div>
    )
}

export default FlagsSet

export interface IFlagsSetProps {
    flags: ItemFlagsEnum[],
    onFlagClick: (flag: ItemFlagsEnum) => void
}
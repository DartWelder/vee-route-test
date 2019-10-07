import React from 'react'
import { ItemFlagsEnum } from '../constants'
import FlagIcon from './FlagIcon'

export default function FlagsSet(props: IFlagsSetProps) {
    const { flags, activeFlags, onFlagClick } = props;
    return (
        <div>
            <div className="flags">
                {flags.map((flag: ItemFlagsEnum) => (
                    <FlagIcon
                        key={flag}
                        disabled={!activeFlags[flag]}
                        onClick={onFlagClick}
                        icon={flag} />
                ))}
            </div>
        </div>
    )
}

export interface IFlagsSetProps {
    flags: ItemFlagsEnum[],
    onFlagClick: (flag: ItemFlagsEnum) => void,
    activeFlags: any
}
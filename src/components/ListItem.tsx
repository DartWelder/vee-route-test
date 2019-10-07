import React from 'react'
import { IListItem, ItemFlagsEnum } from '../constants';
import FlagIcon from './FlagIcon';

export default function ListItem(props: IListItemProps) {
    const { item, active } = props;    
    const { name, flags } = item;
    const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        props.onItemClick(item);
    }

    return (
        <div className={"item " + (active ? 'item-selected' : '')} onClick={onClickHandler}>
            <div className="item-name">
                {name}
            </div>
            <div className="flags">
                {flags.map((flag: ItemFlagsEnum, i: number) => (
                    <FlagIcon key={i} disabled={false} onClick={() => { }} icon={flag} />
                ))}
            </div>
        </div>
    )
}

export interface IListItemProps {
    item: IListItem,
    onItemClick: Function,
    active: boolean
}


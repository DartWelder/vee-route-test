import React from 'react';
import ListItem from './ListItem';
import { IListItem } from '../constants';

export default function List(props: IListProps) {
    const { activeItem, onItemClick } = props;
    return (
        <div>
            <div className="list">
                {
                    props.items.map((item: IListItem) => (
                        <ListItem
                            key={item.id}
                            item={item}
                            active={activeItem === item.id}
                            onItemClick={onItemClick}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export interface IListProps {
    onItemClick: Function,
    items: IListItem[],
    activeItem: string
}
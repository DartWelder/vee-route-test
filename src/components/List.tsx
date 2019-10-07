import React from 'react';
import ListItem from './ListItem';
import { IListItem } from '../constants';
const List = (props: IListProps) => {
    return (
        <div>
            <div className="list">
                {
                    props.items.map((item: IListItem) => <ListItem item={item} onItemClick={props.onItemClick} />)
                }
            </div>
        </div>
    )
}

export default List;

export interface IListProps {
    onItemClick: Function,
    items: IListItem[]
}

export interface IListState {
    items: IListItem[],
    sortChecked: boolean
}
import React, { Component } from 'react'
import { IListItem } from '../constants';
import FlagIcon from './FlagIcon';

export class ListItem extends Component<IListItemProps, IListItemState> {
    constructor(props: IListItemProps) {
        super(props);

        this.state = {
            item: props.item
        };
    }

    render() {
        return (
            <div className="item">
                {this.state.item.name} 
                {this.state.item.flags.map((flag) => (
                    <FlagIcon icon={flag} />
                ))}
            </div>
        )
    }
}

export default ListItem

export interface IListItemState {
    item: IListItem
}

export interface IListItemProps {
    item: IListItem
}


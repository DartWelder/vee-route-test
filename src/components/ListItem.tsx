import React, { Component } from 'react'
import { IListItem } from '../constants';
import FlagIcon from './FlagIcon';

export class ListItem extends Component<IListItemProps, IListItemState> {
    constructor(props: IListItemProps) {
        super(props);

        this.state = {
            item: props.item
        };
        
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    render() {
        return (
            <div className="item" onClick={this.onClickHandler}>
                <div className="item-name">
                    {this.state.item.name}
                </div>
                <div className="flags">
                    {this.state.item.flags.map((flag) => (
                        <FlagIcon icon={flag} />
                    ))}
                </div>
            </div>
        )
    }

    onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        this.props.onItemClick(this.state.item);
    }
}

export default ListItem

export interface IListItemState {
    item: IListItem
}

export interface IListItemProps {
    item: IListItem,
    onItemClick: Function
}


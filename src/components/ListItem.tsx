import React, { Component } from 'react'
import { IListItem, ItemFlagsEnum } from '../constants';
import FlagsSet from './FlagsSet';
import FlagIcon from './FlagIcon';

export class ListItem extends Component<IListItemProps, IListItemState> {

    onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        this.props.onItemClick(this.props.item);
    }

    render() {
        const { name, flags } = this.props.item
        return (
            <div className="item" onClick={this.onClickHandler}>
                <div className="item-name">
                    {name}
                </div>
                <div className="flags">
                    {flags.map((flag: ItemFlagsEnum) => (
                        <FlagIcon disabled={false} onClick={()=> {}} icon={flag} />
                    ))}
                </div>
            </div>
        )
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


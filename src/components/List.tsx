import React, { Component } from 'react';
import ListItem from './ListItem';
import { IListItem } from '../constants';
import { TextField, Checkbox } from '@material-ui/core';
import { Items } from '../Items.class';

export class List extends Component<IListProps, IListState> {
    constructor(props: IListProps) {
        super(props);
        this.state = {
            items: [
                { name: "Item100", flags: Items.generateFlags() },
                { name: "Item99", flags: Items.generateFlags() },
                { name: "Item98", flags: Items.generateFlags() },
                { name: "Item97", flags: Items.generateFlags() }],
            sortChecked: true
        }
    }

    handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        let arr = [...this.state.items]
        this.setState((prev: IListState)=>{
            console.log('>>>>>>>>>>', prev);
            return {
                ...this.state,
                sortChecked: isChecked,
                items: prev.sortChecked ? arr.sort() : arr.reverse()
            }
        });
    };

    render() {
        console.log('>>>>>>this.state.items[0]>>>>', this.state.items[0]);
        const { sortChecked, items} = this.state;
        return (
            <div>
                <div className="filter">
                    <TextField className="text-filter" placeholder="Text Filter" />
                    <span className="sorting">
                        sort
                    <Checkbox checked={sortChecked}
                            onChange={this.handleChange('sortChecked')}
                            value="sortChecked" />
                    </span>
                </div>
                <div className="list">
                    {
                        items.map((item: IListItem, i: number) => <ListItem key={i} item={item} onItemClick={this.props.onItemClick} />)
                    }
                </div>
            </div>
        )
    }
}

export default List

export interface IListProps {
    onItemClick: Function,
    items: IListItem[]
}

export interface IListState {
    items: IListItem[],
    sortChecked: boolean
}
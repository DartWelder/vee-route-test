import React, { Component } from 'react'
import ListItem from './ListItem';
import { Items } from '../Items.class';
import { IListItem } from '../constants';

export class List extends Component {
    constructor(props: IListProps) {
        super(props);
        this.state = {

        };
    }
    
    render() {        
        const items = new Items();
        return (
            <div className="list">                
                {
                    items.list.map((item: IListItem) => <ListItem item={item}/>)
                }                
            </div>
        )
    }
}

export default List

export interface IListProps {
    items: string[]
}

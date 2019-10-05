import React from 'react';
import { IListItem } from '../constants';
import { Checkbox, TextField } from '@material-ui/core/';

export default function Filter(props: IFilterProps) {
    const [state, setState] = React.useState({
        items: props.items,
        sortChecked: true,
        sortEnable: props.sortEnable,
        filterEnable: props.filterEnable
    });

    const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;   
        console.log('>>>>>isChecked>>>>>', isChecked);     
        isChecked ? props.items.sort() : props.items.reverse();
        setState({ 
            ...state, 
            [name]: isChecked
        });
        props.onChangeFilter();
    };

    return (
        <div className="filter">
            <TextField className="text-filter" placeholder="Text Filter" />
            <span className="sorting">
                sort
                    <Checkbox checked={state.sortChecked}
                    onChange={handleChange('sortChecked')}
                    value="sortChecked" />
            </span>
        </div>
    )
}

export interface IFilterProps {
    items: IListItem[],
    sortEnable?: boolean,
    filterEnable?: boolean,
    onChangeFilter: Function
}

export interface IFilterState {
    sortChecked: boolean
}

export enum filterTypes {
}

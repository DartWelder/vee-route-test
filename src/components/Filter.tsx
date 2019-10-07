import React, { ChangeEvent } from 'react';
import { IListItem, ItemFlagsEnum } from '../constants';
import { Checkbox, TextField } from '@material-ui/core/';
import FlagsSet from './FlagsSet';
import { Items } from '../classes/Items.class';

export default function Filter(props: IFilterProps) {
    const [state, setState] = React.useState({
        sortChecked: true,
        sortEnable: props.sortEnable,
        textFilterEnable: props.textFilterEnable,
        iconFilterEnable: props.iconFilterEnable,
        filterPhrase: '',
        iconFilters: (() => {
            let flags = {} as any;
            Items.generateFlags(true).forEach((f) => {
                flags[f] = false;
            })
            return flags;
        })()
    });

    const handleSortChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;

        setState({
            ...state,
            sortChecked: isChecked
        });
        props.onChangeFilter(sort([...props.items], isChecked));
    };

    const handleTextFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const filteredItems = props.pureItemList.filter((item: IListItem) => {
            return item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
        });
        setState({
            ...state,
            filterPhrase: value
        })
        props.onChangeFilter(filteredItems);
    }

    const handleFlagFilterChange = (flag: ItemFlagsEnum) => {
        let newState: any = {
            ...state,
            iconFilters: {
                ...state.iconFilters,
                [flag.toString()]: !state.iconFilters[flag]
            }
        };
        setState(newState);
        const activeFlags: string[] = Object
            .entries(newState.iconFilters)
            .filter(([_, value]: any) => value)
            .map(([_, value]: any) => _);
        const filteredItems = props.pureItemList.filter((item: IListItem) => {
            return activeFlags.every((activeFlag) => {
                return item.flags.includes(activeFlag as ItemFlagsEnum)
            });
        });
        props.onChangeFilter(filteredItems);
    };

    const sort = (arr: IListItem[], dir: boolean) => {
        return arr.sort((a: IListItem, b: IListItem) => {
            return a.name.localeCompare(
                b.name,
                undefined,
                {
                    numeric: true, sensitivity: 'base'
                }) * (dir ? 1 : -1);
        });
    }

    const {
        textFilterEnable,
        sortEnable,
        iconFilterEnable,
        filterPhrase,
        sortChecked,
        iconFilters
    } = state;
    
    return (
        <div className="filter">
            {textFilterEnable &&
                <TextField
                    className="text-filter"
                    placeholder="Text Filter"
                    onChange={handleTextFilterChange}
                    value={filterPhrase} />
            }
            {sortEnable &&
                <span className="sorting">
                    sort
                    <Checkbox checked={sortChecked}
                        onChange={handleSortChange()}
                        value="sortChecked" />
                </span>
            }
            {iconFilterEnable &&
                <div>
                    <span>Filters: </span>
                    <FlagsSet
                        onFlagClick={handleFlagFilterChange}
                        flags={Items.generateFlags(true)}
                        activeFlags={iconFilters} /></div>
            }
        </div>
    )
}

export interface IFilterProps {
    items: IListItem[],
    sortEnable?: boolean,
    textFilterEnable?: boolean,
    iconFilterEnable?: boolean,
    onChangeFilter: Function,
    pureItemList: IListItem[]
}

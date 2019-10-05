import React from 'react'
import { IListItem } from '../constants'
import FlagIcon from './FlagIcon'
import { Grid } from '@material-ui/core'

export default function ItemDetails(props: IitemDetailsProps) {
    return (
        <div className="item-details">
            
            <h1>INFO</h1>
            <Grid container spacing={3}>
                <Grid className="itemName" item xs={6}>
                    <div>NAME: </div>
                    <br />
                    <div>FLAGS: </div>
                </Grid>
                <Grid item xs={6}>
                    <div> {props.selectedItem && props.selectedItem.name}</div>
                    <div className="itemFlags">
                        {props.selectedItem && props.selectedItem.flags.map((flag) => (
                            <FlagIcon icon={flag} />
                        ))}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export interface IitemDetailsProps {
    selectedItem?: IListItem
}

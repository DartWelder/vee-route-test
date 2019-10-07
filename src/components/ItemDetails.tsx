import React from 'react'
import { IListItem } from '../constants'
import FlagIcon from './FlagIcon'
import { Grid } from '@material-ui/core'

export default function ItemDetails(props: IitemDetailsProps) {
    const { selectedItem } = props;
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
                    <div> {selectedItem && selectedItem.name}</div>
                    <br />
                    <div className="item-flags">
                        {selectedItem && selectedItem.flags.map((flag) => (
                            <FlagIcon key={flag} disabled={false} onClick={() => {}} icon={flag} />
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

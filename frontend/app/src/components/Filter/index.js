import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, FormControl, InputLabel, NativeSelect } from '@material-ui/core';
import { useQuery } from '../../hooks/useQuery';
import { createFilter } from '../../state/geoJson';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '20px'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    }
}));

const SENSOR_TYPES = ["GHGSat-D", "GHGSat-C1", "GHGSat-C2", "GHGSat-C3"]
/* TODO MAKE THESE COMPONENTS REUSABLE AND COMPOSABLE
/* filter: date range, the type of sensor and observation description. */
export const Filter = ({ current, send }) => {
    const classes = useStyles()
    const [sensor, setSensor] = useQuery('sensor', null)

    useEffect(() => {
        if (current.matches('idle') && current.context.toDisplay !== null) {
            send('FILTER', {
                payload: createFilter({ sensor })
            }) 
        }
    }, [sensor])

    return <form className={classes.container} noValidate>
        <TextField
            id="To"
            label="From"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            value=""
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}/>

        <TextField
            id="datetime-local"
            label="To"
            type="datetime-local"
            onChange=""
            value=""
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}/>

    <FormControl className={classes.margin}>
        <InputLabel htmlFor="sensor-filter">Age</InputLabel>
        <NativeSelect
          value={sensor}
          id="sensor-filter"
          onChange={(evt) => { 
              evt.preventDefault()
              setSensor(evt.target.value, 'sensor')
          }}
        >
          <option aria-label="None" value="" />
          { SENSOR_TYPES.map((type) => <option value={type}>{ type }</option>) }
        </NativeSelect>
      </FormControl>
    </form>
}
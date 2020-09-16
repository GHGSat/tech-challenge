import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, FormControl, InputLabel, NativeSelect } from '@material-ui/core';
import { useQuery } from '../../hooks/useQuery';
import { createFilter } from '../../state/geoJson';
import { useTimeFilters } from '../../hooks/useTimeFilters';


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
    const [to, setTo] = useQuery('to', null)
    const [from, setFrom] = useQuery('from', null)
    const {tString, fString} = useTimeFilters(to, from)

    useEffect(() => {
        if (current.matches('idle') && current.context.toDisplay !== null) {
            if (sensor !== null || to !== null || from !== null) {
                send('FILTER', {
                    payload: createFilter({ sensor, to, from })
                }) 
            }
        }
    }, [sensor, from, to])

    return <form className={classes.container} noValidate>
        <TextField
            id="from"
            label="From"
            type="datetime-local"
            defaultValue={fString}
            value={fString}
            className={classes.textField}
            onChange={(e) => {
                e.preventDefault()
                console.log(e.target.value)
                setFrom(Date.parse(e.target.value) / 1000)
            }}
            InputLabelProps={{
                shrink: true,
            }}/>

        <TextField
            id="datetime-local"
            label="To"
            type="datetime-local"
            value={fString}
            onChange={(e) => {
                e.preventDefault()
                setTo(Date.parse(e.target.value))
            }}
            defaultValue={tString}
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}/>

    <FormControl className={classes.margin}>
        <InputLabel htmlFor="sensor-filter">{'Sensor'}</InputLabel>
        <NativeSelect
          value={sensor}
          id="sensor-filter"
          onChange={(evt) => { 
              evt.preventDefault()
              setSensor(evt.target.value, 'sensor')
          }}
          InputLabelProps={{
            shrink: true,
         }}>
          <option aria-label="None" value="" />
          { SENSOR_TYPES.map((type) => <option value={type}>{ type }</option>) }
        </NativeSelect>
      </FormControl>
    </form>
}
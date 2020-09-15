import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TablePagination, TableFooter } from '@material-ui/core';
import { useQuery } from '../../hooks/useQuery';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

const filterByPage = (data, page, rowsPerPage, setRows) => {
  const start = page * rowsPerPage;
  const end = page * rowsPerPage + rowsPerPage
  setRows(data.slice(start, end))
}

export const ListView = ({ context: { toDisplay }, action}) => {
    const [page, setPage] = useQuery('page', 0)
    const [limit, setLimit] = useQuery('limit', 10)
    const [rows, setRows] = React.useState([])
    const classes = useStyles();

    React.useEffect(() => {
      // when page or limit changes we envoke filter by page which calls slice on the large dataset
      filterByPage(toDisplay.features, page, limit, setRows)
    }, [ page, limit, toDisplay.features ])

    return <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="observation table">
        <TableHead>
          <TableRow>
            <TableCell>{'ID'}</TableCell>
            <TableCell align="right">{'Sensor'}</TableCell>
            <TableCell align="right">{'Last Observed'}</TableCell>
            <TableCell align="right">{'Description'}</TableCell>
            <TableCell align="right">{'In Cart'}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           {/* TODO ADD LINK FOR URL PARAMATER FOR ID TO QUERY SPECIFIC ON CLICK */}
          { rows.length && rows.map(({ properties }, i) => {
            const date = new Date(properties.observed_on).toTimeString()
            return (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {properties.id + 1}
              </TableCell>
              <TableCell align="right">{properties.sensor}</TableCell>
              <TableCell align="right">{date}</TableCell>
              <TableCell align="right">{properties.description}</TableCell>
              <TableCell align="right">
                {/* <button> add to cart </button> */}
              </TableCell>
            </TableRow>
          )})}
        </TableBody>
        <TableFooter>
            <TableRow>
              <TablePagination 
                onChangePage={(evt, p) => setPage(p) }
                onChangeRowsPerPage={(evt) => setLimit(evt.target.value)}
                rowsPerPage={limit}
                count={rows.length}
                page={Number(page)}/>
            </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
}
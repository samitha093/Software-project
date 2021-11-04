import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  ticketlevel: string,
  fixedquantity: number,
  fixedamount: number,
  bidquantity: number,
  bidamount: number,
) {
  return { ticketlevel, fixedquantity, fixedamount, bidquantity, bidamount };
}

const rows = [
  createData('Level 1', 150, 1000, 100, 1000),
  createData('Level 2', 150, 2000, 100, 2000),
  createData('Level 3', 150, 3000, 50, 3000),
  createData('Level 4', 150, 4000, 0, 0),
  createData('Level 5', 150, 5000, 0, 0),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100,maxWidth: 480 }} aria-label="customized table">
        <TableHead id = "manager-pendingevents-table-head">
          <TableRow>
            <StyledTableCell align="center">Ticket Level</StyledTableCell>
            <StyledTableCell align="center">Fixed Quantity</StyledTableCell>
            <StyledTableCell align="center">Fixed Amount</StyledTableCell>
            <StyledTableCell align="center">Bid Quantity</StyledTableCell>
            <StyledTableCell align="center">Bid Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.ticketlevel}>
              <StyledTableCell component="th" scope="row">
                {row.ticketlevel}
              </StyledTableCell>
              <StyledTableCell align="center">{row.fixedquantity}</StyledTableCell>
              <StyledTableCell align="center">{row.fixedamount}</StyledTableCell>
              <StyledTableCell align="center">{row.bidquantity}</StyledTableCell>
              <StyledTableCell align="center">{row.bidamount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
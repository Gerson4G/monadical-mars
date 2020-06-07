import React, { useEffect, useState } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import CircularProgress from '@material-ui/core/CircularProgress';
import { TableBodyContainer, StyledTable } from './components';
import { tsvOrCsvToJSON } from '../../utils';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const TableData = (props) => {

  const getData = () => {
    fetch('./data/viking_lander_data.csv', {mode: 'no-cors'})
    .then(response => response.text())
    .then(data=> setRows(tsvOrCsvToJSON(data, 'csv').map(row => ({...row, id: Math.random()}))))
  }

  const [sort, changeSort] = useState(0);
  const [sortBy, changeSortBy] = useState('');
  const [rows, setRows] = useState(null);

  useEffect(() => {
    if(!rows){
      getData();
    } 
  }, [rows])

  const sortTable = (name) => {
    setRows(
      rows.concat().sort( (a,b) => {
        if((sort && a[name] < b[name]) || (!sort && a[name] > b[name])){
          return 1;
        }
        else{
          return -1;
        }
      })
    );
    changeSort(~~!sort);
  }

  const SortableHeader = ({name, label, align = 'right'}) => (
    <TableCell onClick={() => sortTable(name)} align={align}>{label}</TableCell>
  )
  
  if(!rows){
    return <CircularProgress />
  }

  return (
    <TableContainer>
      <StyledTable aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>Row</TableCell>
            {
              Object.keys(rows[0]).map( header =>
                <SortableHeader name={header} label={header} />
              )
            }
          </TableRow>
        </TableHead>
        <TableBodyContainer>
          {rows.map( (row, index) => (
            <TableRow key={row.id}>
              <TableCell align="right">{index+1}</TableCell>
              {
                Object.keys(row).map( property =>
                  <TableCell align="right">{row[property]}</TableCell>
                )
              }
            </TableRow>
          ))}
        </TableBodyContainer>
      </StyledTable>
    </TableContainer>
  );
}

export default TableData;

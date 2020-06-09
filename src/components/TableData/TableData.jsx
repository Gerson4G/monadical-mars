import React, { useEffect, useState, findDOMNode } from 'react';
import TableCell from '@material-ui/core/TableCell';
import { FixedSizeList as List } from 'react-window';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import CircularProgress from '@material-ui/core/CircularProgress';
import RootRef from '@material-ui/core/RootRef';
import { TableBodyContainer, StyledTable } from './components';
import { tsvOrCsvToJSON } from '../../utils';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const TableData = (props) => {

  const getData = () => {
    fetch('./data/viking_lander_data.csv', {mode: 'no-cors'})
    .then(response => response.text())
    .then(data=> setRows(tsvOrCsvToJSON(data, 'csv')))
  }

  const [sort, changeSort] = useState(0);
  const [sortBy, changeSortBy] = useState('');
  const [rows, setRows] = useState(null);
  const [containerNode, setContainerNode] = useState(null);

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

  const renderRow = ({style, index}) => {
  return <TableRow key={index} style={style}>
    <TableCell align="right">{index+1}</TableCell>
    {
      Object.keys(rows[index]).map( property =>
        <TableCell align="right" key={index+Math.random()}>{rows[index][property]}</TableCell>
      )
    }
  </TableRow>
} 

  if(!rows){
    return <CircularProgress />
  }

  return (
    <TableContainer ref={setContainerNode}>
      <StyledTable aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>Row</TableCell>
            {
              Object.keys(rows[0]).map( header =>
                <SortableHeader key={header} name={header} label={header} />
              )
            }
          </TableRow>
        </TableHead>
        <TableBodyContainer>
          <List
            height={350}
            itemCount={rows.length ?? 0}
            itemSize={35}
            width={containerNode?.clientWidth ?? 0}
          >
            {renderRow}
          </List>
        </TableBodyContainer>
      </StyledTable>
    </TableContainer>
  );
}

export default TableData;


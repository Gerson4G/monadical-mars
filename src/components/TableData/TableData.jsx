import React, { useEffect, useState, createRef } from 'react';
import TableCell from '@material-ui/core/TableCell';
import { FixedSizeList as List } from 'react-window';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { PATHFINDER, VIKING, TableBodyContainer, StyledTable, TableHeadGroup, Container, SearchField } from './components';
import { tsvOrCsvToJSON } from '../../utils';
import {FormattedMessage} from 'react-intl';

const pathFinderUrl = './data/pathfinder_temperatures.tsv';
const vikingUrl = './data/viking_lander_data.csv';

const TableData = (props) => {

  const getData = () => {
    let url = vikingUrl;
    if(dataSelected === PATHFINDER){
      url = pathFinderUrl;
    }
    fetch(url, {mode: 'no-cors'})
    .then(response => response.text())
    .then(data=> setRows(tsvOrCsvToJSON(data, url.slice(-3))))
  }

  const [sort, changeSort] = useState(0);
  const [sortBy, changeSortBy] = useState('');
  const [rows, setRows] = useState([]);
  const [containerNode, setContainerNode] = useState(null);
  const [dataSelected, selectData] = useState(VIKING);
  const [isLoading, loadingData] = useState(true);
  const [query, setQuery] = useState('');
  const listRef = createRef();

  useEffect(getData, [dataSelected]);

  useEffect(() => { 
    if(rows.length){
      loadingData(false)
    }   
  }, [rows.length]);

  useEffect(() => {
    if(listRef.current && query){
      listRef.current.scrollToItem(query, "center");
    }
  }, [query])

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
    <TableCell component="div" variant="head" onClick={() => sortTable(name)} align={align}>{label}</TableCell>
  )

  const renderRow = ({style, index}) => {
  return <TableRow component="div" key={index} style={style}>
    <TableCell component="div" align="right">{index+1}</TableCell>
    {
      Object.keys(rows[index]).map( property =>
        <TableCell component="div" variant="body" align="right" key={index+Math.random()}>{rows[index][property]}</TableCell>
      )
    }
  </TableRow>
} 


  const changeData = ({target}, data) => {
    if(target.type === 'text'){
      searchRow(target.value);
    }
    else if(dataSelected !== data) {
      selectData(data);
      loadingData(true);
      setQuery('');
    }
  } 

  const searchRow = (value) => {
    const [min] = value.match(/[0-9]*/) ?? '';
    setQuery(min);
  }

  return (
    <Container raised ref={setContainerNode}>
      <Tabs
        value={dataSelected}
        onChange={changeData}
        indicatorColor="primary"
        textColor="primary"
      >
          <Tab label="Pathfinder Temperature" />
          <Tab label="Viking Lander Data"/>
          <SearchField value={query} label={<FormattedMessage id='table.searchinput' default='' />} />
      </Tabs>
      {
        isLoading ? <CircularProgress /> :
        <StyledTable data={dataSelected} aria-label="simple table" component="div">
          <TableHeadGroup component="div">
            <TableRow component="div">
              <TableCell component="div" align='center'>Row</TableCell>
              {
                Object.keys(rows[0]).map( header =>
                  <SortableHeader key={header} name={header} label={header} />
                )
              }
            </TableRow>
          </TableHeadGroup>
            <List
              height={350}
              itemCount={rows.length ?? 0}
              itemSize={35}
              width={containerNode?.clientWidth ?? 0}
              ref={listRef}
            >
              {renderRow}
            </List>
        </StyledTable>
      }
    </Container>
  );
}

export default TableData;


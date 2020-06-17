import styled from 'styled-components';
import TableBody from '@material-ui/core/TableBody';
import TextField from '@material-ui/core/TextField';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import Card from '@material-ui/core/Card';
import Tabs from '@material-ui/core/Tabs';


const PATHFINDER = 0;
const VIKING = 1;

const StyledTabs = styled(Tabs)`
	padding-bottom: 0.5rem;
`;

const Container = styled(Card)`
	min-height: 20em;
	.Mui-selected {
		background: #ffe8e8;
	}
`;

const TableBodyContainer = styled(TableBody)`
 	display:block;
 	max-height:18em; 
	overflow: hidden auto;
	tr {
		display:table; 
		width:100%;
		table-layout:fixed;
	}
`;

const StyledTable = styled(Table)`
	[role="cell"] {
		padding: 0.5rem ${({data}) => data === PATHFINDER ? '2.8em' : '2em' };
	}
	[role="columnheader"] {
		font-weight: bold;
		padding: 0.5rem ${({data}) => data === PATHFINDER ? '2em' : '1.1em' };
	}
	[role="row"] {
		&:nth-of-type(even) {
      		background: lightblue;
    	}
	}
	[role="rowgroup"] [role="row"] {
		background: #84a1aa;
	}
`;

const TableHeadGroup = styled(TableHead)`
	display: block;
`;

const SearchField = styled(TextField)`
	left: 2em;
	label {
		left: 2em;
		font-size: 12px;
	}
	input {
	    margin-left: 1em;
	}
`;

export { StyledTabs, PATHFINDER, VIKING, StyledTable, TableBodyContainer, TableHeadGroup, Container, SearchField};
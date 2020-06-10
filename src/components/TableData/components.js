import styled from 'styled-components';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';

const PATHFINDER = 0;
const VIKING = 1;

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
		padding: 0.5rem ${({data}) => data === PATHFINDER ? '2em' : '1.2em' };
	}
`;

const TableHeadGroup = styled(TableHead)`
	display: block;
`;

export { StyledTable, TableBodyContainer, TableHeadGroup, PATHFINDER, VIKING };
import styled from 'styled-components';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';

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
		padding: 0.5rem 2em;;
	}
`;

const TableHeadGroup = styled(TableHead)`
	display: block;
`;

export { StyledTable, TableBodyContainer, TableHeadGroup };
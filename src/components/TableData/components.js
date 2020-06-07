import styled from 'styled-components';
import TableBody from '@material-ui/core/TableBody';
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
	thead {
		display:table;
		width:100%;
		table-layout:fixed;
	}
`;

export { StyledTable, TableBodyContainer };
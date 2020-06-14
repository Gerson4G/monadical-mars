import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const StyledCard = styled(Card)``;

const OptionsContainer = styled.div`
 	flex-grow: 1;
	display: flex;
	height: 28em;
	width: ${({width}) => width};
	.MuiTabs-scroller {
		overflow: auto!important;
	}
`;

const ChartContainer = styled.div`
	margin: 1em;
`;

const SearchInput = styled(TextField)`
	label {
		font-size: 12px;
	}
`;

export { ChartContainer, OptionsContainer, StyledCard, SearchInput };
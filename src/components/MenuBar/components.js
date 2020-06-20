import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import LanguageIcon from '@material-ui/icons/Language';


const screens = [
	{name: 'dashboard', label: 'Dashboard'},
	{name: 'chart', label: 'Pathfinder data Chart'},
	{name: 'slideshow', label: 'Images Slideshow'},
	{name: 'videofeed', label: 'Live Video'},
	{name: 'tabledata', label: 'Data tables (Viking Lander & Pathfinder)'},
	{name: 'currentdata', label: 'Lastest data from Viking Lander'},
];

const AccountIcon = styled(LanguageIcon)`
    cursor: pointer;
`;

const StyledMenuIcon = styled(MenuIcon)`
    cursor: pointer;
`;

const SpanishFlag = styled.i`
	background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NTAgNTAwIj4NCjxwYXRoIGZpbGw9IiNjNjBiMWUiIGQ9Im0wLDBoNzUwdjUwMGgtNzUweiIvPg0KPHBhdGggZmlsbD0iI2ZmYzQwMCIgZD0ibTAsMTI1aDc1MHYyNTBoLTc1MHoiLz4NCjwvc3ZnPg0K');
	width: 100%;
	height: 66.666666666667%;
	background-size: 100% auto;
	background-repeat: no-repeat;
	background-position: left top;
`;

const StyledToolbar = styled(Toolbar)`
	margin: auto;
	> svg {
		padding: 0 0.5em;
	}
`;

export { StyledToolbar, StyledMenuIcon, AccountIcon, screens, SpanishFlag };

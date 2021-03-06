import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ListSubheader from "@material-ui/core/ListSubheader";
import {FormattedMessage} from 'react-intl';
import { StyledToolbar, StyledMenuIcon, AccountIcon, screens, SpanishFlag } from './components';

const MenuBar = (props) => {
    const { setLanguage, selectScreen } = props;
    const [anchorElMenu, setAnchorElMenu] = React.useState(null);
    const [anchorElAccount, setAnchorElAccount] = React.useState(null);
  
    const handleCloseMenu = () => {
      setAnchorElMenu(null);
    };

    const handleCloseAccount = () => {
      setAnchorElAccount(null);
    }

    const changeLanguage = (lang) => {
      setLanguage(lang);
      handleCloseAccount();
    }

    const changeScreen = (screen) => {
      handleCloseMenu();
      selectScreen(screen);
    }

    return (
        <AppBar position="static">
            <StyledToolbar>
            <StyledMenuIcon
                edge="start"
                color="inherit" 
                aria-label="menu" 
                aria-controls={"menu-bar"}
                aria-haspopup="true" 
                onClick={(e) => {setAnchorElMenu(e.currentTarget)}}
            />
            
            <Menu
                id="menu-bar"
                anchorEl={anchorElMenu}
                keepMounted
                open={Boolean(anchorElMenu)}
                onClose={handleCloseMenu}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
            >
              {
                screens.map( screen =>
                <MenuItem key={screen.name} onClick={() => changeScreen(screen.name)}>
                  <FormattedMessage id={`menu.${screen.name}`} default={screen.label}/>
                </MenuItem>)
              }
            </Menu>
             
                <Typography variant="h6">
                Mars Mission Dashboard
                </Typography>
                <AccountIcon
                  edge="start"
                  color="inherit" 
                  aria-label="menu" 
                  aria-controls={"account-bar"}
                  aria-haspopup="true" 
                  onClick={(e) => {setAnchorElAccount(e.currentTarget)}}
               />
               <Menu
                  id="account-bar"
                  anchorEl={anchorElAccount}
                  keepMounted
                  open={Boolean(anchorElAccount)}
                  onClose={handleCloseAccount}
                  getContentAnchorEl={null}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <ListSubheader><FormattedMessage id='menu.select_language' default='Select a language'/></ListSubheader>
                  <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
                  <MenuItem onClick={() => changeLanguage('es')}>Espanol <SpanishFlag /></MenuItem>
              </Menu>
            </StyledToolbar>
        </AppBar>
  );
}

export default MenuBar;

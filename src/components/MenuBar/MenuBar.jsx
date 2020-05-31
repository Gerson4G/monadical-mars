import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function MenuBar() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    return (
        <AppBar position="static">
            <Toolbar>
                
                <IconButton
                    edge="start"
                    color="inherit" 
                    aria-label="menu" 
                    aria-controls="menu-bar" 
                    aria-haspopup="true" 
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                >
                <Menu
                    id="menu-bar"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                News
                </Typography>
                <AccountCircle />
            </Toolbar>
        </AppBar>
  );
}
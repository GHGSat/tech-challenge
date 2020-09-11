import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

export const Header = () => {
    const classes = useStyles();

    return <AppBar position="static" className="App-header">
    <Toolbar variant="dense">
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        {/* <MenuIcon /> */}
      </IconButton>
      <Typography variant="h6" color="inherit">
        {/* TODO PUT PAGE TITLE HERE */}
        I'm A Nasa Map
      </Typography>
      <nav>
        <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">
            Map 
            </Link>
            <Link to="/list">
            List
            </Link>
          <Link to="/cart">
            Cart
            </Link>
          <Link to="/checkout">
            Checkout
          </Link>
       </Breadcrumbs>
    </nav>
    </Toolbar>
  </AppBar>

}
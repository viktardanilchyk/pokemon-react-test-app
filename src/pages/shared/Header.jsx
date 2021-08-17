import React from 'react'
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "images/logo.png";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    },
    logo: {
      maxWidth: 160
    }
  })
);

const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="Pokemon React App" className={classes.logo} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
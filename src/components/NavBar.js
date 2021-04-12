import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  changeBgColor: {
      background: "#32174d"
  }
}));

function NavBar() {
  const classes = useStyles(); 
  const history = useHistory();

  const redirectNavLink = () => {
      history.push("/basket")
  }

  const handleClick = () => {
      history.push("/")
  }

  return (
    <div className={classes.root}>
      <AppBar className = {classes.changeBgColor} position="static">
        <Toolbar>
          <Typography style = {{cursor: "pointer"}} variant="h6" onClick= {handleClick} className={classes.title}>
            ShopNow
          </Typography>
          <Button onClick = {redirectNavLink} color="inherit">Basket</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default NavBar;
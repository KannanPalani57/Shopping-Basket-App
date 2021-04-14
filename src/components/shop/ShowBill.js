import React from 'react';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "20%",
    backgroundColor: theme.palette.background.paper,
  },
  billText: {
      marginTop: "0.5em",
      fontSize: "1.4rem",
      textAlign: "center"
  },
  totalText: {
      fontSize: "1.2rem",
      textAlign: "center"

  },
  main: {
      display: "flex",
      marginTop: "5em"
  }
}));


const ShowBill = () => {
    const classes = useStyles();
    const prices = useSelector(state => state.shoppingItems[5])

    return (    
        <div>
            {
             prices.totalPrice !== 0 && 
        <List component="nav" className={classes.root} aria-label="user bill">
            <ListItem >
            <ListItemText classes={{primary: classes.billText}} primary="Your Bill" />
            </ListItem>
            <ListItem  divider>
            <ListItemText classes={{primary: classes.totalText}} primary="Sub Total" />
            <ListItemText classes={{primary: classes.totalText}} primary= {`£ ${prices.subTotal.toFixed(1)}`} />
            </ListItem>
            <ListItem >
            <ListItemText classes={{primary: classes.totalText}} primary="Savings" />
            <ListItemText classes={{primary: classes.totalText}} primary= {`£ ${prices.savings.toFixed(1)}`} />
            </ListItem>
            <Divider light />
            <ListItem >
            <ListItemText classes={{primary: classes.totalText}} primary="Total Amount" />
            <ListItemText classes={{primary: classes.totalText}} primary= {`£ ${prices.totalPrice.toFixed(1)}`} />
            </ListItem>
        </List>
        }
        </div>
    )
}

export default ShowBill;

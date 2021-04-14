import React from "react";
import { addShoppingItemAction } from "../../actions/shopActions"
import { useDispatch, useSelector } from "react-redux"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import { capitalizeFirstLetter } from "../../helpers/makeFirstLetterCaps"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    products: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      textAlign: "center",
      margin: theme.spacing(4, 0, 2),
    },
    styleIcon: {
        color: "white",
        background: "#32174d"
    },
    styleAvatar: {
        background: "#32174d"
    },
    styleItemText: {
        fontSize: "1.25rem",
    },
    iconBtn: {
     "&:disabled": {
       color: "red"
     }
    }
  }));
  

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const foods = useSelector(state => state.shoppingItems.slice(0,5))
    const addShoppingItem = (data) => dispatch(addShoppingItemAction(data))  
    const [state, setState] = React.useState({
      open: false,
      vertical: 'bottom',
      horizontal: 'right',
    });
  
    const { vertical, horizontal, open } = state;
    
    const handleClose = () => {
      setState({ ...state, open: false });
    };

    const handleAddBtnClick = (e, id, newState) =>{
        e.preventDefault();
        addShoppingItem(id)
        setState({ open: true, ...newState });

    }                
    
    return (
        <div className = "flex justify-center ml-5 mt-5">
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Foods
          </Typography> 
          <div className={classes.products}>
          <List >
            {
                foods && foods.map(food => {
                    return (
                        <div key = {food.id}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar className = {classes.styleAvatar}>
                                         <FastfoodIcon className = {classes.styleIcon} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText classes = {{primary:classes.styleItemText}}
                                primary= {`${capitalizeFirstLetter(food.foodName)}`}
                                secondary={true ? "Item Price : £" + food.sellingRate : null}
                         
                         />
                                <ListItemSecondaryAction>
                                <IconButton 
                                classes={{root: classes.iconBtn, cldisabled: classes.iconBtnDisabled}}
                                onClick={(e) => handleAddBtnClick(e, food.id, { vertical: 'bottom', horizontal: 'right' })} edge="end" aria-label="add">
                                    <Avatar className = {classes.styleAvatar}>
                                       <AddIcon className = {classes.styleIcon} />
                                    </Avatar>
                                </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </div>
                        // <div key = {food.id}>
                        //     <div className = "flex space-x-12">
                        //         <p className = "text-xl my-5">{food.foodName}</p>
                        //         <p className = "text-xl my-5">£{food.sellingRate}</p>
                        //         <button id = {food.id} className = "bg-gray-200 px-2" onClick = {handleAddBtnClick}>Add</button>
                        //     </div>
                        // </div>    
                    )
                })
            }
            </List>
          </div>
        </Grid>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="Item added to the Basket, Please click the Basket to see the food!"
          key={vertical + horizontal}
         />
        </div>
    )
}

export default Home;
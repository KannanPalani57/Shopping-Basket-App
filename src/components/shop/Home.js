import React from "react";
import { addShoppingItemAction } from "../../actions/shopActions"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from '@material-ui/core/styles';
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


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    products: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
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
    }
  }));
  

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const foods = useSelector(state => state.shoppingItems.slice(0,5))
    console.log(foods)
    const addShoppingItem = (data) => dispatch(addShoppingItemAction(data))
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const handleAddBtnClick = (e, id) =>{
        e.preventDefault();
        addShoppingItem(id)
    }                
    
    return (
        <div className = "ml-5 mt-5">
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Foods
          </Typography>
          <div className={classes.products}>
          <List dense={dense}>
            {
                foods && foods.map(food => {
                    return (
                        <>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar className = {classes.styleAvatar}>
                                         <FastfoodIcon className = {classes.styleIcon} />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText classes = {{primary:classes.styleItemText}}
                                primary= {`${food.foodName}`}
                                secondary={true ? "Item Price : £" + food.sellingRate : null}
                                />
                                <ListItemSecondaryAction>
                                <IconButton onClick = {(e) => handleAddBtnClick(e, food.id)} edge="end" aria-label="add">
                                    <Avatar className = {classes.styleAvatar}>
                                       <AddIcon className = {classes.styleIcon} />
                                    </Avatar>
                                </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </>
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

        </div>
    )
}

export default Home;
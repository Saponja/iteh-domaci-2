import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import {
  HomeOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
// import {addMessage, removeMessage} from "../actions/messageActions";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    transform: "translateZ(0)"
  },

  searchInput: {
    opacity: "0.6",
    padding: `${theme.spacing(1)} ${theme.spacing(1)}`,
    fontSize: "0.8rem",
    "&:hover": {
      background: "#f2f2f2",
    },
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
    },
    "& .MuiInputBase-input": {
      color: "black",
    },
  },

  notificationIcons: {
    "& .MuiSvgIcon-root": {
      color: "blue",
    },
  },
}));

export const Navbar = ({searchRecepies}) => {
  const classes = useStyles();
  let history = useHistory();

  const countShop = useSelector(state => state.recepieReducer.count)
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    searchRecepies(e.target.value);
  }

  const close = () => {
    setOpen(false)
  }

  const openShop = (e) => {
    history.push("/shop");
  }

  const openHome = (e) => {
    history.push("/");
  }

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase
              placeholder="Search"
              className={classes.searchInput}
              startAdornment={<SearchOutlined fontSize="small" />}
              onChange = {handleChange}
            />
          </Grid>
          <Grid item xs></Grid>
          <Grid item>
            <div className = {classes.notificationIcons}>
            <IconButton onClick = {openHome}>
                <Badge color="secondary">
                  <HomeOutlined />
                </Badge>
              </IconButton>
              <IconButton onClick = {openShop}>
                <Badge badgeContent={countShop} color="secondary">
                  <ShoppingCartOutlined />
                </Badge>
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    
  );
};

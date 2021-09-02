import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { CloseOutlined, ExpandLess, ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecepie } from "../actions/recepieActions";
import { CustomButton } from "../controls/CustomButton";
import i1 from '../static/images/i1.jpg'
import { CustomAlert } from "./CustomAlert";

const useStyles = makeStyles((theme) => ({
  card: {
    "& .MuiAvatar-root": {
      background: "orange",
      "&:hover": {
        opacity: "0.7",
      },
    },
    "& .MuiIconButton-root": {
      color: "orange",
    },
  },
  media: {
    paddingTop: theme.spacing(2),
  },
}));

export const CardCustom = ({ cardInfo }) => {
  const [expand, setExpand] = useState(false);
  const classes = useStyles();
  const { letter, name, recepie, price } = cardInfo;
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    setExpand(!expand);
  };

  const handleShop = () => {
    setOpen(true)
    dispatch(addRecepie({ letter, name, recepie, price }));
  };


  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {letter}
            </Avatar>
          }
            
        />

        <CardMedia
          component="img"
          height="200"
          image= {i1}
        />
        <CardContent>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="h6">{price.toFixed(2)} $</Typography>
          <CustomButton text="order" onClick={handleShop} />
          <CustomAlert text={"Successfully ordered"} open={open} setOpen={setOpen} />     
        </CardContent>
        <CardActions>
          <IconButton onClick={handleClick}>
            {expand ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </CardActions>
        <Collapse in={expand} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{recepie}</Typography>
          </CardContent>
        </Collapse>
        


      </Card>
    </div>
  );
};

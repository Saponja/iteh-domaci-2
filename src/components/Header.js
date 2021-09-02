import { Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import { CardCustom } from "./CardCustom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
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

var items = [
  {
    id: 1,
    letter: "r",
    name: "rissoto",
    recepie: "adasdasdasasfas",
    price: 12.0,
  },
  { id: 2, letter: "t", name: "tofu soup", recepie: "sdasdsdasd", price: 11.0 },
  {
    id: 3,
    letter: "p",
    name: "paelle",
    recepie: "1asdasdasdasdas",
    price: 13.2,
  },
  {
    id: 4,
    letter: "s",
    name: "steak",
    recepie: "fkasfkasfkasfkask",
    price: 12.0,
  },
  {
    id: 5,
    letter: "s",
    name: "stew",
    recepie: "fkasfkasfkasfkask",
    price: 5.0,
  },
  {
    id: 6,
    letter: "p",
    name: "pecorino paste",
    recepie: "fkasfkasfkasfkask",
    price: 16.0,
  },
  {
    id: 7,
    letter: "a",
    name: "american pie",
    recepie: "fkasfkasfkasfkask",
    price: 9.0,
  },
  {
    id: 8,
    letter: "r",
    name: "rib eye",
    recepie: "fkasfkasfkasfkask",
    price: 8.0,
  },
  {
    id: 9,
    letter: "c",
    name: "carrot cake",
    recepie: "fkasfkasfkasfkask",
    price: 8.9,
  },
];

export const Header = ({ search }) => {
  const classes = useStyles();

  useEffect(() => {}, [search]);

  return (
    <Paper className={classes.root}>
      <Grid container spacing={3}>
        {items
          .filter((item) => {
            if (search === "") {
              return item;
            }

            return item.name.match(search);
          })
          .map((item, index) => {
            return (
              <Grid item xs={4} key={index}>
                <CardCustom cardInfo={item} />
              </Grid>
            );
          })}
      </Grid>
    </Paper>
  );
};

import { Grid } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAll, removeRecepie } from "../actions/recepieActions";
import { CustomButton } from "../controls/CustomButton";
import "../shopingCart.css";
import { CustomAlert } from "./CustomAlert";

function ShopingCart() {
  const { total, recepies } = useSelector((state) => state.recepieReducer);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false)

  const handleRemove = (index) => {
    dispatch(removeRecepie(index));
  };

  const handleShop = () => {
    setOpen(true)
    dispatch(removeAll());
  };

  return (
    <Grid container>
      <div className="header">
        <p className="shop">Total: {total.toFixed(2)}$</p>
        <CustomButton
          text="shop now"
          size="medium"
          style={{ margin: "2rem 1rem", flex: 3 }}
          onClick={handleShop}
        />
      <CustomAlert text={"Your order was successfully sent"} open={open} setOpen={setOpen}/>

      </div>
      {recepies.map((item, index) => {
        return (
          <Grid item xs={12} key={index}>
            <div className="list-item">
              <h1 className="name">{item.name}</h1>
              <CustomButton
                color="secondary"
                text="remove"
                size="medium"
                style={{ margin: "1rem" }}
                onClick={() => handleRemove(index)}
              />
              <h1 className="price">{item.price}$</h1>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ShopingCart;

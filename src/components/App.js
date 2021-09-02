
import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import ShopingCart from "./ShopingCart";

export const App = (params) => {

  const [search, setSerach] = useState("");

  const searchRecepies = (str) => {
    setSerach(str);
  }


  return (
    <div>
      <BrowserRouter>
        <Navbar searchRecepies = {searchRecepies}/>
        <Switch>
          <Route exact path="/">
            <Header search = {search}/>
          </Route>
          <Route>
            <ShopingCart path="shop"/>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
};

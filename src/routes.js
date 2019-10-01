import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom"

import App from "./components/App";
import Repos from "./components/Repos/Repos"

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/repos" component={Repos}/>
    </Switch>
    </BrowserRouter>
)

export default Routes;
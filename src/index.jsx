import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {HomeComponent} from "./pages/home"
import {NotFoundComponent} from "./pages/not_found";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/global.css";


const Application = () => (
    <BrowserRouter>
       <Switch>
           <Route exact path="/" component={HomeComponent} />
           <Route component={NotFoundComponent} />
       </Switch>
    </BrowserRouter>
)

ReactDOM.render(<Application />, document.getElementById("root"));

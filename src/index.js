import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
//import Admin from "layouts/Admin.js";
//import Auth from "layouts/Auth.js";

// views without layouts
import Dataset from "features/dataset";
import Pln from "features/pln";

//import Landing from "features/landing";
//import Profile from "views/Profile.js";
//import Index from "views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/dataset" component={Dataset} />
      <Route path="/pln" component={Pln} />
      {/* <Route path="/auth" component={Auth} /> */}
      {/* add routes without layouts */}
      {/* <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} /> */}
      <Route path="/" component={Dataset} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/dataset/docs" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

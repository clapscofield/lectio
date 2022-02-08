import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import PlnNavbar from "./PlnNavbar";
import PlnHeader from "./PlnHeader";
import Sidebar from "components/Sidebar/Sidebar.js";
import PlnDocs from "./PlnDocs";
import PlnSentiment from "./PlnSentiment";
import PlnMetadados from "./PlnMetadados"
import PlnSucesso from "./PlnSucesso";
import PlnBreve from "./PlnBreve";
import FooterPln from "./FooterPln";
// views

//import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";

export default function Dataset() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <PlnNavbar />
        {/* Header */}
        <PlnHeader />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/pln/docs" exact component={PlnDocs} />
            <Route path="/pln/sentiment" exact component={PlnSentiment} />     
            <Route path="/pln/metadados" exact component={PlnMetadados} />
            <Route path="/pln/sucesso" exact component={PlnSucesso} />   
            <Route path="/pln/breve" exact component={PlnBreve} />                    
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Redirect from="/pln" to="/pln/docs" />
          </Switch>
          <FooterPln />
        </div>
      </div>
    </>
  );
}

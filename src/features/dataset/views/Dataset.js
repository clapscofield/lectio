import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import DatasetNavbar from "./DatasetNavbar";
import DatasetHeader from "./DatasetHeader";
import Sidebar from "components/Sidebar/Sidebar.js";
//import FooterAdmin from "components/Footers/FooterAdmin.js";
import FooterDataset from "./FooterDataset";
// views

//import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import DatasetDocs from "./DatasetDocs";
import Download from "./DatasetDownload";
import DatasetTable from "./DatasetTable";
import DatasetGraph from "./DatasetGraph";

export default function Dataset() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <DatasetNavbar />
        {/* Header */}
        <DatasetHeader />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/dataset/docs" exact component={DatasetDocs} />            
            <Route path="/dataset/download" exact component={Download} />
            <Route path="/dataset/table" exact component={DatasetTable} />
            <Route path="/dataset/graph" exact component={DatasetGraph} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Redirect from="/dataset" to="/dataset/docs" />
          </Switch>
          <FooterDataset />
        </div>
      </div>
    </>
  );
}

import React from "react";
import AddNew from "./AddNew";
import "./Content.css";
import Patient from "./Patient/Patient";
import { Route, Switch } from "react-router-dom";
import Service from "./Service/Service";
import Category from "./Category/Category";

function Content() {
  return (
    <div className="Content">
      <AddNew />

      <Switch>
        <Route path="/patient" exact>
          {" "}
          <Patient />
        </Route>
        <Route path="/services" exact>
          {" "}
          <Service />
        </Route>
        <Route path="/category" exact>
          {" "}
          <Category />
        </Route>
      </Switch>
    </div>
  );
}

export default Content;

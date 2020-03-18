import React from "react";
import { BrowserRouter as BR, Route, Switch } from "react-router-dom";

//Styles
import "./styles/main.scss";
// Pages
import NewVendor from "./components/NewVendor";
import EditVendor from "./components/EditVendor";
import listAllVendors from "./components/listAllVendors";
import ListAllSpecific from "./components/body_components/list_all_components/list-all-specific";
import ListAllCookie from "./components/listAllCookie";
function App() {
  return (
    <div className="App">
      <BR>
        <Switch>
          <Route exact path="/" component={NewVendor} />
          <Route path="/edit-vendor" component={EditVendor} />
          <Route path="/list-all" component={listAllVendors} />
          <Route path="/list-all-specific" component={ListAllSpecific} />
          <Route path="/list-all-cookies-urls" component={ListAllCookie} />
        </Switch>
      </BR>
    </div>
  );
}

export default App;

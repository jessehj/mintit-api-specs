import "swagger-ui-react/swagger-ui.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Redirect, Route, Switch } from "react-router";
import SwaggerUI from "swagger-ui-react";
import mintitSpec from "./pages/mintit/specs";
import kbcardSpec from "./pages/kbcard/specs";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={"/"}
          exact
          render={() => <SwaggerUI spec={mintitSpec} />}
        />
        <Route
          path={"/kbcard"}
          render={() => <SwaggerUI spec={kbcardSpec} />}
        />
        <Redirect to={"/"} path={"*"} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

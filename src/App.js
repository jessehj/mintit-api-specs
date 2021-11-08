import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Redirect, Route, Switch } from "react-router";
import mintitSpec from "./pages/mintit/specs";
import kbcardSpec from "./pages/kbcard/specs";
import kakaoPaySpec from "./pages/kakao-pay/specs";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={"/"}
          exact
          render={() => <SwaggerUI spec={mintitSpec} />}
        />
        <Route path={"/kb"} render={() => <SwaggerUI spec={kbcardSpec} />} />
        <Route path={"/kakao-pay"} render={() => <SwaggerUI spec={kakaoPaySpec} />} />
        <Redirect to={"/"} path={"*"} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

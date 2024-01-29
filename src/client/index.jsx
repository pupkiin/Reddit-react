import * as React from "react";
import * as ReactDom from "react-dom";
import { App } from "../shared/App.tsx";

// const renderMethod = !!module.hot ? ReactDom.render : ReactDom.hydrate;

window.addEventListener("load", () => {
  ReactDom.hydrate(<App />, document.getElementById("react_root"));
});

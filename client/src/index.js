import React from "react";
import { render } from "react-dom";
import { register } from "./service-worker";
import App from "./components/App";

const $root = document.getElementById("root");

render(<App />, $root);

register();
  
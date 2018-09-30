import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./style.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope);
library.add(faKey);
 
ReactDOM.render(
  <Main/>, 
  document.getElementById("root")
);
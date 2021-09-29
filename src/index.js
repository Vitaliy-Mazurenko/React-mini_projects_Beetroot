import React from "react";
import { render } from "react-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import {AppProvider} from "./context/AppContext";

render(  <AppProvider ><App /></AppProvider>, document.getElementById("root"));

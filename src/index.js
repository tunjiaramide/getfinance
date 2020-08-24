import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ReactGA from "react-ga";

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import App from "./App";

ReactGA.initialize("UA-176136067-1");
ReactGA.pageview(window.location.pathname);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

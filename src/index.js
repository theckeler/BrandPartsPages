import React from "react";
import ReactDOM from "react-dom";

import Head from "./templates/Head";

import Header from "./templates/Header";
import Footer from "./templates/Footer";

ReactDOM.render(<Head />, document.getElementById("head"));
ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<Footer />, document.getElementById("footer"));

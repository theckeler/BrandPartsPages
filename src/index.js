import React from "react";
import ReactDOM from "react-dom";

import Head from "./templates/Head";
ReactDOM.render(<Head />, document.getElementById("head"));

import Header from "./templates/Header";
import Footer from "./templates/Footer";
ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<Footer />, document.getElementById("footer"));

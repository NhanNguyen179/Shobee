import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./context/scrollToTop";
import App from "./App";

ReactDOM.render(
  <HashRouter>
    <ScrollToTop />
    <App />
  </HashRouter>,
  document.getElementById("root")
);

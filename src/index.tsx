import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./view/SignIn";
import Register from "./view/Register";
import Home from "./view/Home";
import ViewProduct from "./view/ViewProduct";
import DetailProduct from "./view/DetailProduct";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<ViewProduct />}></Route>
        <Route path="detail" element={<DetailProduct />}></Route>
      </Route>
      <Route path="/signIn" element={<SignIn />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

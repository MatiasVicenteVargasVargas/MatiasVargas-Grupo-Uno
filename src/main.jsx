import React from "react";
import ReactDOM from "react-dom/client";
import ProductList from "./components/ItemList/ItemList";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
